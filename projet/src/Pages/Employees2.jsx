import { Link } from 'react-router-dom';
import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import {mockedList} from '../Data/mockedEmployees';
import "../App.css";

export default function Employees2(){
    const employees = mockedList;

    const columns = useMemo(
        () => [
        {
            accessorKey: 'FirstName',
            header: 'Firstname',
        },
        {
            accessorKey: 'LastName',
            header: 'Lastname',
        },
        {
            accessorKey: 'BirthDate',
            header: 'Birthdate',
        },
        {
            accessorKey: 'StartDate',
            header: 'Start Date',
        },
        {
            accessorKey: 'Street',
            header: 'Street',
        },
        {
            accessorKey: 'City',
            header: 'City',
        },
        {
            accessorKey: 'State',
            header: 'State',
        },
        {
            accessorKey: 'Zipcode',
            header: 'Zipcode',
        },
        {
            accessorKey: 'Department',
            header: 'Department',
        }
        ],
        [],
    );

    return(
        <div className="list">
            <h1>Current Employees</h1>
            <MaterialReactTable columns={columns} data={employees} enableColumnResizing columnResizeMode="onChange"/>;
            <Link className="listContainer-link" to="/">Home</Link>
        </div>
    );
}