import './Input.css';

export default function Input({id, label}){

    return(
        <div>
            <label for={id}>{label}</label>
            <input type="text" id={id}></input>
        </div>
    )
}