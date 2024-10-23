import { useState, useEffect } from "react";
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
import { listUsers } from "@/graphql/queries";
import helper, { logedInUser } from '@/services/helper';
import { get } from 'aws-amplify/api';
import axios from "axios";

export default function Users() {
    const history = useHistory();
    const [usersList, setUsersList] = useState([]);

    const [loading, setLoading] = useState(false);

    const [hasMore, setHasMore] = useState(true);
    const [nextToken, setNextToken] = useState(true);

    useEffect(() => {
        getUserdata()
    }, []);

    async function getUserdata() {

        setLoading(true);

        let items = [];
        let token = ""
        const client = helper.amplifyClient();

        const variables = {
            filter: {
                isActive: { eq: true },
                isDeleted: { eq: false },
                userType: { eq: 2 },
                or: [
                    { isAccountActivated: { attributeExists: false } },
                    { isAccountActivated: { eq: false } }
                ]
            }
        }

        const userData = logedInUser();

        do {
            if (token) {
                variables.nextToken = token;
            }

            const response = await client.graphql({ query: listUsers, variables });

            console.log(response);

            if (response.data.listUsers.nextToken) {
                token = response.data.listUsers.nextToken;
                setHasMore(true);
                setNextToken(response.data.listUsers.nextToken)
            } else {
                token = "";
                setHasMore(false);
                setNextToken("")
            }

            items = [...items, ...response.data.listUsers.items]

        } while (token && items.length < 10);

        items = items.map(item => ({ ...item, isAccountActivated: item.isAccountActivated ? item.isAccountActivated : false }))

        setUsersList(items)
        setLoading(false)
    }


    const next = async () => {
        if (nextToken) {
            const client = helper.amplifyClient();

            const variables = {
                filter: {
                    isActive: { eq: true },
                    isDeleted: { eq: false },
                    userType: { eq: 2 },
                    or: [
                        { isAccountActivated: { attributeExists: false } },
                        { isAccountActivated: { eq: false } }
                    ]
                },
                nextToken
            }

            const userData = logedInUser();

            if (userData.userType != 1) {
                variables.filter.or = [{ id: { eq: "3813561c-187e-4f08-8f80-e43a86adf31c" } }];
            }

            console.log(variables);
            const response = await client.graphql({ query: listUsers, variables });
            console.log(response);

            if (response.data.listUsers.nextToken) {
                setHasMore(true);
                setNextToken(response.data.listUsers.nextToken)
            } else {
                setHasMore(false);
                setNextToken("")
            }

            const items = response.data.listUsers.items.map(item => ({ ...item, isAccountActivated: item.isAccountActivated ? item.isAccountActivated : false }))

            const newList = [...usersList, ...items]
            console.log(newList.length);
            setUsersList(newList)
        }
    }

    const activateUser = async (userData) => {
        console.log(userData);

        let config = {
            method: 'post',
            url: 'https://dca1hl4r89.execute-api.us-east-1.amazonaws.com/default/test-lambda',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "id": userData.id
            })
        };

        try {
            const response = await axios.request(config);
            console.log(JSON.stringify(response.data));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="t-4 mx-auto max-w-full">

            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Users</h1>
            </div>

            <div className="mt-4">
                <InfiniteScroll className="mt-4"
                    style={{ overflow: 'hidden' }}
                    dataLength={usersList.length}
                    next={next}
                    hasMore={hasMore}
                    loader={
                        <div className="flex justify-center"><LoaderCircle className="mt-5 h-6 w-6 animate-spin" /></div>
                    }
                    scrollThreshold="100px"
                    endMessage={usersList && usersList.length > 0 ?
                        ((usersList.length > 10) && <p className="text-center">
                            <b>Yay! You have seen it all</b>
                        </p>) :
                        (<div className="p-5 flex justify-center">
                            <span>No results</span>
                        </div>)
                    }
                >

                    <DataTable
                        value={usersList}
                        //loading={loading}
                        //loadingIcon={<div className="mt-28"><LoaderCircle className="h-6 w-6 animate-spin" /></div>}
                        removableSort
                        emptyMessage={!hasMore ? <div className="flex justify-center">No results</div> : <div></div>}
                    >
                        <Column field="fullName" header="Full Name" sortable style={{ width: '20%' }}></Column>
                        <Column field="isAccountActivated" header="Account Activated" sortable style={{ width: '20%' }}></Column>
                        <Column field="phoneNumber" header="Phone Number" style={{ width: '20%' }}></Column>
                        {/*<Column field="phone" header="Phone" style={{ width: '20%' }}></Column>*/}
                        <Column
                            body={(rowData, column) => (<DropdownMenu modal={false}>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                        <DotsVerticalIcon className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={(e) => { e.stopPropagation(); activateUser(rowData) }}>Activate</DropdownMenuItem>
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