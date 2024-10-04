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

export default function Hotels() {
    const history = useHistory();
    const [userList, setUserList] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [lastElement, setLastElement] = useState(undefined);
    const [userType, setUserType] = useState();
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        getUserdata()
    }, []);

    async function getUserdata() {
        const activityData = [];

        //console.log("listData", listData);

        listData.hotels.forEach((item) => {
            //console.log("item", item)
            activityData.push(item);
        });
        console.log(activityData)
        setJsonData(activityData);

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

                <DataTable value={jsonData} removableSort emptyMessage={<div className="flex justify-center">No results</div>}>
                    <Column field="name" header="Name" sortable style={{ width: '20%' }}></Column>
                    <Column field="city" header="City" sortable style={{ width: '20%' }}></Column>
                    <Column field="owner" header="Owner" style={{ width: '20%' }}></Column>
                    <Column field="phone" header="Phone" style={{ width: '20%' }}></Column>
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
