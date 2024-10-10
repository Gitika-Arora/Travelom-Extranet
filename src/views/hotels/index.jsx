import { useState, useEffect } from "react";
import ReactTable from "@/components/reactTable";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
//import { createorUpdateDocument, getFirstBatch, getNextBatch } from '../../services/helperFirebase';
import helper, { logedInUser } from '../../services/helper'
import InfiniteScroll from "react-infinite-scroll-component";
import { LoaderCircle } from 'lucide-react';
import { useHistory } from 'react-router-dom';
import listData from "@/data/listData";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getHotels, listHotels } from "@/graphql/queries";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

import { generateClient } from 'aws-amplify/data';
import { get } from 'aws-amplify/api';
import axios from "axios";

export default function Hotels() {
    const history = useHistory();
    const [hotelsList, setHotelsList] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUserdata()
    }, []);

    async function getUserdata() {

        setLoading(true);

        /*const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({
            region: "us-east-1",
        }));


        const queryParams = {
            TableName: "Hotels-yurgf6c35fhvjaigpmzlhhjosa-staging",
            ExclusiveStartKey: null
        };

        try {
            const response = await docClient.send(new GetCommand(queryParams));
            console.log(response);
        } catch (error) {
            console.error("Error querying DynamoDB:", error);
        }*/

        // rest api call from amplify package
        /*try {
            const restOperation = get({
                apiName: 'listHotels',
                path: '/listHotels'
            });

            const response = await restOperation.response;
            console.log('GET call succeeded: ', response);
        } catch (e) {
            console.log('GET call failed: ', JSON.parse(e));
        }*/

        // rest api call from axios
        let config = {
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
        }

        const client = generateClient();

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

        const response = await client.graphql({ query: listHotels, variables });

        const items = response.data.listHotels.items
        console.log(items);

        const hotels = items.map(item => ({ ...item, hotelDescriptiveContents: JSON.parse(item.hotelDescriptiveContents)}))

        //const hotelsData = await client.graphql({ query: getHotels, variables: { id: "d4df6639-dc18-46a1-b79d-670b5f014405"} });

        console.log({
            hotels, 
            //hotelsData
        });

        setHotelsList(hotels)
        setLoading(false)
    }


    const next = async () => {

    }

    return (
        <div className="t-4 mx-auto max-w-full">

            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Hotels</h1>
            </div>

            <div className="mt-4">
                {/*<InfiniteScroll className="mt-4"
                style={{ overflow: 'hidden' }}
                dataLength={jsonData.length}
                next={next}
                hasMore={hasMore}
                loader={
                    <div className="flex justify-center"><LoaderCircle className="mt-5 h-6 w-6 animate-spin" /></div>
                }
                scrollThreshold="100px"
                endMessage={jsonData && jsonData.length > 0 ?
                    ((jsonData.length > 10) && <p className="text-center">
                        <b>Yay! You have seen it all</b>
                    </p>) :
                    (<div className="flex justify-center p-5">
                        <span>No results</span>
                        </div>)
                        }
            >*/}

                <DataTable value={hotelsList} loading={loading} loadingIcon={<div className="mt-28"><LoaderCircle className="h-6 w-6 animate-spin" /></div>} removableSort emptyMessage={<div className="flex justify-center">No results</div>}>
                    <Column field="hotelName" header="Hotel Name" sortable style={{ width: '20%' }}></Column>
                    <Column field="hotelCode" header="Hotel Code" sortable style={{ width: '20%' }}></Column>
                    <Column field="brandCode" header="Brand Code" style={{ width: '20%' }}></Column>
                    <Column field="city" header="City" style={{ width: '20%' }}></Column>
                    {/*<Column field="phone" header="Phone" style={{ width: '20%' }}></Column>*/}
                    <Column
                        body={(rowData, column) => (<DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <DotsVerticalIcon className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => {console.log(rowData); history.push(`/hotels/${rowData.id}`)}}>Details</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>)}
                        header="Actions"
                        style={{ width: '20%' }}></Column>
                </DataTable>

                {/* <ReactTable
                    data={jsonData}
                    columns={[
                        {
                            accessor: "date",
                            Header: "REGISTER ON",
                        },
                        {
                            accessor: "firstName",
                            Header: "FIRST NAME",
                        },
                        {
                            accessor: "lastName",
                            Header: "LAST NAME",
                        },
                        {
                            accessor: "email",
                            Header: "EMAIL",
                        },
                        {
                            id: "actions",
                            enableHiding: false,
                            Header: "ACTION",
                            Cell: ({ row }) => {
                                const data = row.original;
                                return (
                                    <DropdownMenu modal={false}>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <DotsVerticalIcon className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>Remove</DropdownMenuItem>

                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                );
                            },
                        },
                    ]} /> */}
                {/*</InfiniteScroll>*/}
            </div>
        </div>
    );
}
