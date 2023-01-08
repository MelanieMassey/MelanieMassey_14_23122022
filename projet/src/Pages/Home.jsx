import "../App.css";

import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";
import Input from "../Components/Input/Input";
import Input2 from "../Components/Input2/Input2";
import {Modal} from "melaniem-react-modal-component";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { Link } from 'react-router-dom';

import { Calendar } from 'react-date-range';
import format from 'date-fns/format';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

// import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import Select from "react-select";


import { useDispatch } from 'react-redux';
import { addEmployee } from '../Feature/employeesSlice';

export default function Home(){
    const dispatch = useDispatch();

    //**  Gestion de la modale **//
    const [modalOpened, setModal] = useState(false);
    function openModal() {
        setModal(true);
    }
    function closeModal() {
        setModal(false);
    }

    /** Calendrier date de naissance **/
    // const [calendar, setCalendar] = useState(""); // => Plus besoin avec "state" et "setState"
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({});
    const ref = useRef(null); // get the target element to toggle 

    useEffect(() => {
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    const hideOnEscape = (e) => {
        // console.log(e.key)
        if( e.key === "Escape" ) {
            setOpen(false)
            setCalendarStartOpen(false)
        }
    }

    const hideOnClickOutside = (e) => {
        // console.log(ref.current)
        // console.log(e.target)
        if( ref.current && !ref.current.contains(e.target) ) {
            setOpen(false)
            setCalendarStartOpen(false)
        }
    }

    // récupération de la date sélectionnée dans le state
    const handleSelectBirthDate = (date) => {
        const formattedDate = format(date, 'dd/MM/yyyy');
        // setCalendar(formattedDate); // => Plus besoin avec "state" et "setState"
        setOpen(open => !open);
        setState({
            ...state,
            birthDate: formattedDate
        })
    }

    /** Calendrier date de début **/
    // const [calendarStart, setCalendarStart] = useState(""); // => Plus besoin avec "state" et "setState"
    const [calendarStartOpen, setCalendarStartOpen] = useState(false);

    // récupération de la date sélectionnée dans le state
    const handleSelectCalendarStart = (date) => {
        const formattedDate = format(date, 'dd/MM/yyyy');
        // setCalendarStart(formattedDate); // => Plus besoin avec "state" et "setState"
        setCalendarStartOpen(open => !open);
        setState({
            ...state,
            startDate: formattedDate
        })
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setState({
            ...state,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        console.log(state);
        dispatch(addEmployee(state));
        openModal(true);
    }

    return(
        <div>
            <Header/>
            <Link to="/employees2">View Current Employees</Link>
            <h2>Create employee</h2>
            <form onSubmit={onSubmit}>

                {/* <label >First Name</label>
                <input 
                    type="text"
                    id="firstName"
                    label="First Name"
                    onChange={(e)=>setState({...state,firstName: e.target.value})}
                ></input> */}
                <Input2 type="text" name="firstName" label="First Name handleChange" onChange={handleChange}/>
                
                {/* <label>Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    label="last Name"
                    onChange={(e)=>setState({...state,lastName: e.target.value})}
                ></input> */}
                <Input2 type="text" name="lastName" label="Last Name handleChange" onChange={handleChange}/>
                
                
                {/* <Input 
                    id="date-of-birth" 
                    label="Date of Birth" 
                    value={calendar} 
                    // className="inputBox"
                    onClick={()=> setOpen(open => !open)}
                /> */}
                <Input2 
                    type="text"
                    name="date-of-birth" 
                    label="Date of Birth" 
                    value={state.birthDate} 
                    // className="inputBox"
                    onClick={() => setOpen(open => !open)}
                />
                <div ref={ref}>
                    {open &&
                        <Calendar
                            date={ new Date()}
                            onChange={handleSelectBirthDate}
                            className="calendarElement"
                        />
                    }
                </div>

                {/* <Input 
                    id="start-date" 
                    label="Start Date"
                    value={calendarStart} 
                    // className="inputBox"
                    onClick={()=> setCalendarStartOpen(calendarStartOpen => !calendarStartOpen)}
                /> */}
                <Input2 
                    type="text"
                    name="start-date" 
                    label="Start Date" 
                    value={state.startDate} 
                    // className="inputBox"
                    onClick={()=> setCalendarStartOpen(calendarStartOpen => !calendarStartOpen)}
                />
                <div ref={ref}>
                    {calendarStartOpen &&
                        <Calendar
                            date={ new Date()}
                            onChange={handleSelectCalendarStart}
                            className="calendarElement"
                        />
                    }
                </div>

                <fieldset>
                    <legend>Address</legend>
                    {/* <Input id="street" label="Street"/> */}
                    <Input2 type="text" name="street" label="Street handleChange" onChange={handleChange}/>

                    {/* <Input id="city" label="City"/> */}
                    <Input2 type="text" name="city" label="City handleChange" onChange={handleChange}/>

                    <label>State</label>
                    <Select
                        onChange={(selectedOptionState)=>setState({...state,state: selectedOptionState.value})}
                        options={[
                            {value: "Alabama", label: "Alabama"},
                            {value: "Alaska", label: "Alaska"},
                            {value: "American Samoa", label: "American Samoa"},
                            {value: "Arizona", label: "Arizona"},
                            {value: "Arkansas", label: "Arkansas"},
                            {value: "California", label: "California"},
                            {value: "Colorado", label: "Colorado"},
                            {value: "Connecticut", label: "Connecticut"},
                            {value: "Delaware", label: "Delaware"},
                            {value: "District Of Columbia", label: "District Of Columbia"},
                        ]}
                    />
                        
                    {/* <Input id="zip-code" label="Zip Code"/> */}
                    <Input2 type="text" name="zip-code" label="Zip Code handleChange" onChange={handleChange}/>

                </fieldset>
                <label>Department</label>
                <Select
                    onChange={(selectedOptionDpt)=>setState({...state,department: selectedOptionDpt.value})}
                    options={[
                        {value: "Sales", label: "Sales"},
                        {value: "Marketing", label: "Marketing"},
                        {value: "Engineering", label: "Engineering"},
                        {value: "Human Resources", label: "Human Resources"},
                        {value: "Legal", label: "Legal"}
                    ]}
                />
                
                <input type="submit"/>
            </form>
            {/* <input type="submit" onClick={openModal} input="Save"/> */}
            {modalOpened ? (<Modal closeModal={closeModal} message="Employee created! "/>):(null)}
            
        </div>
    )
}