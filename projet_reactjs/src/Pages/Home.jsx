import "../App.css";

import Header from "../Components/Header/Header";
// import Input from "../Components/Input/Input";
import Input2 from "../Components/Input2/Input2";
import {Modal} from "melaniem-react-modal-component";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { Link } from 'react-router-dom';
import {mockedList} from '../Data/mockedEmployees';
import {states, departments} from '../Data/mockedForm';

import { Calendar } from 'react-date-range';
import format from 'date-fns/format';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import Select from "react-select";


export default function Home(){

    useEffect(() => {
        // localStorage.removeItem('employees');
        const employeesLocalStorage = JSON.parse(localStorage.getItem('employees'));
        if (employeesLocalStorage){
            setState(employeesLocalStorage)
        } else {
            localStorage.setItem('employees', JSON.stringify(mockedList));
        }

        // Fermeture calendriers
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    // State global
    const [state, setState] = useState({});
    
    // Récupération données formulaire "onChange"
    const [formData, setFormData] = useState({});

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
    const ref = useRef(null); // get the target element to toggle 

    const ref2= useRef(null); // get the target element to toggle 
    

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
        setFormData({
            ...formData,
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
        setFormData({
            ...formData,
            startDate: formattedDate
        })
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // states
    // const formattedStates = states.map(item => ({value: item,label: item}));       
    // console.log(formattedStates)

    const onSubmit = (e) => {
        e.preventDefault();
        if(!formData.state || !formData.department){
            console.log("Sélectionnez un état et un département.")
        } else {
            const newEmployeesList = [
                ...state,
                formData
            ]
            localStorage.setItem('employees', JSON.stringify(newEmployeesList));
            openModal();
        }
    }

    return(
        <div>
            <Header/>
            <Link to="/employees2">View Current Employees</Link>
            <h2>Create employee</h2>
            <form onSubmit={onSubmit}>

                <Input2 type="text" name="firstName" label="First Name handleChange" onChange={handleChange}/>
                
                <Input2 type="text" name="lastName" label="Last Name handleChange" onChange={handleChange}/>
                <Input2 
                    type="text"
                    name="date-of-birth" 
                    label="Date of Birth" 
                    value={formData.birthDate} 
                    className="inputBox"
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
                <Input2 
                    type="text"
                    name="start-date" 
                    label="Start Date" 
                    value={formData.startDate} 
                    className="inputBox"
                    onClick={()=> setCalendarStartOpen(calendarStartOpen => !calendarStartOpen)}
                />
                <div ref={ref2}>
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
                    <Input2 type="text" name="street" label="Street handleChange" onChange={handleChange}/>
                    <Input2 type="text" name="city" label="City handleChange" onChange={handleChange}/>
                    <label>State</label>
                    <Select
                        onChange={(selectedOptionState)=>setFormData({...formData,state: selectedOptionState.value})}
                        options={states.map(item => ({value: item,label: item}))}
                    />
                    <Input2 type="text" name="zipcode" label="Zip Code handleChange" onChange={handleChange}/>
                </fieldset>
                <label>Department</label>
                <Select
                    onChange={(selectedOptionDpt)=>setFormData({...formData,department: selectedOptionDpt.value})}
                    options={departments.map(item => ({value: item, label: item}))}
                />
                <input type="submit"/>
            </form>
            {modalOpened ? (<Modal closeModal={closeModal} message="Employee created! "/>):(null)}
        </div>
    )
}