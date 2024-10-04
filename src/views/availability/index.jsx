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
import helper, { logedInUser } from '../../services/helper'
import InfiniteScroll from "react-infinite-scroll-component";
import { LoaderCircle } from 'lucide-react';
import { useHistory } from 'react-router-dom';
import listData from "../../data/listData";
import { DataTable } from 'primereact/datatable';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Checkbox } from 'primereact/checkbox';


export default function Availability() {
    const history = useHistory();
    const [userList, setUserList] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [lastElement, setLastElement] = useState(undefined);
    const [userType, setUserType] = useState();
    const [jsonData, setJsonData] = useState([]);
    const [column, setColumn] = useState([]);

    useEffect(() => {
        getUserdata()
    }, []);

    async function getUserdata() {
        console.log(listData.availability);
        setJsonData(listData.availability);
    }

    function handleCheckoxChange(checked, data, key) {
        const updateJsonData = jsonData.map(roomData => (roomData.id === data.id ? {...roomData, key: checked} : roomData))
        console.log({data, jsonData, updateJsonData})
        setJsonData(updateJsonData)
    }

    return (
        <div className="t-4 mx-auto max-w-full">

            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Availability</h1>
            </div>

            <div className="mt-4">
                <DataTable value={jsonData} removableSort emptyMessage={<div className="flex justify-center">No results</div>}>
                    <Column field="room" header="Room" ></Column>
                    <Column field="03/10/2024" header="03/10/2024" body={(data) => (<Checkbox onChange={e => handleCheckoxChange(e.checked, data, "03/10/2024")} checked={data["03/10/2024"]}></Checkbox>)}></Column>
                    <Column field="04/10/2024" header="04/10/2024" body={(data) => (<Checkbox onChange={e => setJsonData({ ...jsonData, "04/10/2024": e.checked })} checked={data["04/10/2024"]}></Checkbox>)}></Column>
                    <Column field="05/10/2024" header="05/10/2024" body={(data) => (<Checkbox onChange={e => setJsonData({ ...jsonData, "05/10/2024": e.checked })} checked={data["05/10/2024"]}></Checkbox>)}></Column>
                    <Column field="06/10/2024" header="06/10/2024" body={(data) => (<Checkbox onChange={e => setJsonData({ ...jsonData, "06/10/2024": e.checked })} checked={data["06/10/2024"]}></Checkbox>)}></Column>
                    <Column field="07/10/2024" header="07/10/2024" body={(data) => (<Checkbox onChange={e => setJsonData({ ...jsonData, "07/10/2024": e.checked })} checked={data["07/10/2024"]}></Checkbox>)}></Column>
                    <Column field="08/10/2024" header="08/10/2024" body={(data) => (<Checkbox onChange={e => setJsonData({ ...jsonData, "08/10/2024": e.checked })} checked={data["08/10/2024"]}></Checkbox>)}></Column>
                    <Column field="09/10/2024" header="09/10/2024" body={(data) => (<Checkbox onChange={e => setJsonData({ ...jsonData, "09/10/2024": e.checked })} checked={data["09/10/2024"]}></Checkbox>)}></Column>
                    <Column field="10/10/2024" header="10/10/2024" body={(data) => (<Checkbox onChange={e => setJsonData({ ...jsonData, "10/10/2024": e.checked })} checked={data["10/10/2024"]}></Checkbox>)}></Column>
                    <Column field="11/10/2024" header="11/10/2024" body={(data) => (<Checkbox onChange={e => setJsonData({ ...jsonData, "11/10/2024": e.checked })} checked={data["11/10/2024"]}></Checkbox>)}></Column>
                </DataTable>
            </div>
        </div>
    );
}
