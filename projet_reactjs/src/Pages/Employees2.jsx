import { Link } from 'react-router-dom';
import React, { useMemo, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import {mockedList} from '../Data/mockedEmployees';
import { useSelector } from 'react-redux';
// import * as employeesSlice from '../Feature/employeesSlice';
import { employeesState } from '../Feature/employeesSlice';
import "../App.css";

export default function Employees2(){

    const updatedEmployeesList = JSON.parse(localStorage.getItem('employees'));
    console.log(updatedEmployeesList);

    // useEffect(() => {
    //     const updatedEmployeesList = JSON.parse(localStorage.getItem('employees'));
    //     console.log(updatedEmployeesList);
    // }, [])

    const employees = mockedList;
    // const employeesList = useSelector((state) => state);
    // const employeesList = useSelector(employeesState);
    // console.log(employeesList);

    const columns = useMemo(
        () => [
        {
            accessorKey: 'firstName',
            header: 'Firstname',
        },
        {
            accessorKey: 'lastName',
            header: 'Lastname',
        },
        {
            accessorKey: 'birthDate',
            header: 'Birthdate',
        },
        {
            accessorKey: 'startDate',
            header: 'Start Date',
        },
        {
            accessorKey: 'street',
            header: 'Street',
        },
        {
            accessorKey: 'city',
            header: 'City',
        },
        {
            accessorKey: 'state',
            header: 'State',
        },
        {
            accessorKey: 'zipcode',
            header: 'Zipcode',
        },
        {
            accessorKey: 'department',
            header: 'Department',
        }
        ],
        [],
    );

    return(
        <div className="list">
            <h1>Current Employees</h1>
            <MaterialReactTable columns={columns} data={updatedEmployeesList} enableColumnResizing columnResizeMode="onChange"/>;
            <Link className="listContainer-link" to="/">Home</Link>
        </div>
    );
}