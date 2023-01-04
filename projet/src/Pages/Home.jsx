import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";
import Input from "../Components/Input/Input";
import {Modal} from "melaniem-react-modal-component";
import { useEffect, useState, useRef } from "react";
import React from "react";

// import { format } from 'date-fns';
// import { DayPicker } from 'react-day-picker';
// import 'react-day-picker/dist/style.css';
import { Calendar } from 'react-date-range';
import format from 'date-fns/format';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


export default function Home(){
    //**  Gestion de la modale **//
    const [modalOpened, setModal] = useState(false);
    function openModal() {
        setModal(true);
    }
    function closeModal() {
        setModal(false);
    }

    /** Calendrier date de naissance **/
    const [calendar, setCalendar] = useState("");
    const [open, setOpen] = useState(false);

    // get the target element to toggle 
    const refOne = useRef(null)

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
        // console.log(refOne.current)
        // console.log(e.target)
        if( refOne.current && !refOne.current.contains(e.target) ) {
            setOpen(false)
            setCalendarStartOpen(false)
        }
    }

    // récupération de la date sélectionnée dans le state
    const handleSelect = (date) => {
        setCalendar(format(date, 'dd/MM/yyyy'));
        setOpen(open => !open);
    }

    /** Calendrier date de début **/
    const [calendarStart, setCalendarStart] = useState("");
    const [calendarStartOpen, setCalendarStartOpen] = useState(false);

    // récupération de la date sélectionnée dans le state
    const handleSelectCalendarStart = (date) => {
        setCalendarStart(format(date, 'dd/MM/yyyy'));
        setCalendarStartOpen(open => !open);
    }

    return(
        <div>
            <Header/>
            <p>View Current Employees</p>
            <h2>Create employee</h2>
            <form onSubmit={openModal}>
                <Input id="first-name" label="First Name"/>
                <Input id="last-name" label="Last Name"/>
                <Input 
                    id="date-of-birth" 
                    label="Date of Birth" 
                    value={calendar} 
                    className="inputBox"
                    onClick={()=> setOpen(open => !open)}
                />
                <div ref={refOne}>
                    {open &&
                        <Calendar
                            date={ new Date()}
                            onChange={handleSelect}
                            className="calendarElement"
                        />
                    }
                </div>                
                <Input 
                    id="start-date" 
                    label="Start Date"
                    value={calendarStart} 
                    className="inputBox"
                    onClick={()=> setCalendarStartOpen(calendarStartOpen => !calendarStartOpen)}
                />
                <div ref={refOne}>
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
                    <Input id="street" label="Street"/>
                    <Input id="city" label="City"/>
                    <Input id="street" label="Street"/>
                    <label>State</label>
                    {/* <select></select> */}
                    <Input id="zip-code" label="Zip Code"/>
                </fieldset>
                <label>Department</label>
                {/* <select></select> */}
                
            </form>
            <input type="submit" onClick={openModal} input="Save"/>
            {modalOpened ? (<Modal closeModal={closeModal} message="Employee created! "/>):(null)}
            
        </div>
    )
}