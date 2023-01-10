import { useEffect } from 'react';
import {mockedList, columns} from '../Data/mockedEmployees';
import DataTable from 'table-react-component-library';
import { Link } from 'react-router-dom';
// import './../../node_modules/table-react-component-library/dist/style.css';
import '../Style/Employees.css';

export default function Employees(){
    const employees = mockedList;

    return(
        <div className="list">
            <DataTable
                data={[...employees]}
                columns={columns}
                title="Current Employees"
                theme="light"
                unableSelection={false}
            />
            <Link className="listContainer-link" to="/">Home</Link>
        </div>
    );
}