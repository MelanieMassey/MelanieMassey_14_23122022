import Button from "../Components/Button/Button";
import Header from "../Components/Header/Header";
import Input from "../Components/Input/Input";
import {Modal} from "melaniem-react-modal-component";
import { useState } from "react";

export default function Home(){

    const [modalOpened, setModal] = useState(false);
  
    function openModal() {
        setModal(true);
    }

    function closeModal() {
        setModal(false);
    }

    return(
        <div>
            <Header/>
            <p>View Current Employees</p>
            <h2>Create employee</h2>
            <form onSubmit={openModal}>
                <Input id="first-name" label="First Name"/>
                <Input id="last-name" label="Last Name"/>
                <Input id="date-of-birth" label="Date of Birth"/>
                <Input id="start-date" label="Start Date"/>
                <fieldset>
                    <legend>Address</legend>
                    <Input id="street" label="Street"/>
                    <Input id="city" label="City"/>
                    <Input id="street" label="Street"/>
                    <label for="state-button">State</label>
                    {/* <select></select> */}
                    <Input id="zip-code" label="Zip Code"/>
                </fieldset>
                <label for="department-button">Department</label>
                {/* <select></select> */}
                
            </form>
            <input type="submit" onClick={openModal} input="Save"/>
            {modalOpened ? (<Modal closeModal={closeModal} message="Employee created! "/>):(null)}
            
        </div>
    )
}