﻿import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import InfiniteScroll from "react-infinite-scroll-component";
import { LoaderCircle } from 'lucide-react';
import { useHistory } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { listHotels } from "@/graphql/queries";
import { list_Hotels } from "@/services/customQueries";
import { get } from 'aws-amplify/api';
import axios from "axios";
import helper, { logedInUser } from '@/services/helper';

export default function Hotels() {
    const history = useHistory();
    const [hotelsList, setHotelsList] = useState([]);

    const [loading, setLoading] = useState(false);

    const [hasMore, setHasMore] = useState(true);
    const [nextToken, setNextToken] = useState(true);

    useEffect(() => {
        getUserdata()
    }, []);

    async function getUserdata() {

        setLoading(true);

        // rest api call from axios
        /*let config = {
            method: 'get',
            url: 'https://dca1hl4r89.execute-api.us-east-1.amazonaws.com/default/test-lambda',
            headers: {
                'Content-Type': 'application/json'
            },
            crossDomain: true
        };

        try {
            const response = await axios.request(config);
            console.log(JSON.stringify(response.data));
        }
        catch (error) {
            console.log(error);
        }*/
        let items = [];
        let token = ""
        const client = helper.amplifyClient();

        const variables = {
            filter: {
                isActive: {
                    eq: true
                },
                isDeleted: {
                    eq: false
                },
            }
        }

        const userData = logedInUser();

        do {
            if (userData.userType != 1) {
                variables.filter.or = [{ id: { eq: "3813561c-187e-4f08-8f80-e43a86adf31c" } }];
            }

            if (token) {
                variables.nextToken = token;
            }

            const response = await client.graphql({ query: list_Hotels, variables });

            if (response.data.listHotels.nextToken) {
                token = response.data.listHotels.nextToken;
                setHasMore(true);
                setNextToken(response.data.listHotels.nextToken)
            } else {
                token = "";
                setHasMore(false);
                setNextToken("")
            }

            items = [...items, ...response.data.listHotels.items]

        } while (token && items.length < 10);

        setHotelsList(items)
        setLoading(false)
    }


    const next = async () => {
        if (nextToken) {
            const client = helper.amplifyClient();

            const variables = {
                filter: {
                    isActive: {
                        eq: true
                    },
                    isDeleted: {
                        eq: false
                    },
                },
                nextToken
            }

            const userData = logedInUser();

            if (userData.userType != 1) {
                variables.filter.or = [{ id: { eq: "3813561c-187e-4f08-8f80-e43a86adf31c" } }];
            }

            console.log(variables);
            const response = await client.graphql({ query: list_Hotels, variables });  
            console.log(response);

            if (response.data.listHotels.nextToken) {
                setHasMore(true);
                setNextToken(response.data.listHotels.nextToken)
            } else {
                setHasMore(false);
                setNextToken("")
            }

            const items = response.data.listHotels.items

            const newList = [...hotelsList, ...items]
            console.log(newList.length);
            setHotelsList(newList)
        }
    }

    return (
        <div className="t-4 mx-auto max-w-full">

            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Hotels</h1>
                <Button
                    type="submit"
                    onClick={() => history.push("/hotels/add-hotel")}
                >
                    Add Hotel
                </Button>
            </div>

            <div className="mt-4">
                <InfiniteScroll className="mt-4"
                style={{ overflow: 'hidden' }}
                    dataLength={hotelsList.length}
                next={next}
                hasMore={hasMore}
                loader={
                    <div className="flex justify-center"><LoaderCircle className="mt-5 h-6 w-6 animate-spin" /></div>
                }
                scrollThreshold="100px"
                    endMessage={hotelsList && hotelsList.length > 0 ?
                        ((hotelsList.length > 10) && <p className="text-center">
                        <b>Yay! You have seen it all</b>
                    </p>) :
                    (<div className="p-5 flex justify-center">
                        <span>No results</span>
                        </div>)
                        }
            >

                <DataTable
                    value={hotelsList}
                    //loading={loading}
                    //loadingIcon={<div className="mt-28"><LoaderCircle className="h-6 w-6 animate-spin" /></div>}
                    onRowClick={(row) => { history.push(`/hotels/hotel-details/${row.data.id}`) }}
                    removableSort
                    emptyMessage={!hasMore ? <div className="flex justify-center">No results</div> : <div></div>}
                >
                    <Column field="hotelName" header="Hotel Name" sortable style={{ width: '20%', cursor: "pointer" }}></Column>
                    <Column field="hotelCode" header="Hotel Code" sortable style={{ width: '20%', cursor: "pointer" }}></Column>
                    <Column field="brandCode" header="Brand Code" style={{ width: '20%', cursor: "pointer" }}></Column>
                    <Column field="city" header="City" style={{ width: '20%', cursor: "pointer" }}></Column>
                    {/*<Column field="phone" header="Phone" style={{ width: '20%' }}></Column>*/}
                    <Column
                        body={(rowData, column) => (<DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <DotsVerticalIcon className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={(e) => { e.stopPropagation(); history.push(`/hotels/hotel-details/${rowData.id}`) }}>Details</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>)}
                        header="Actions"
                        style={{ width: '20%' }}></Column>
                </DataTable>
                </InfiniteScroll>
            </div>
        </div>
    );
}