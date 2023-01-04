import './Input.css';

export default function Input({id, label, value, onClick}){

    return(
        <div>
            <label for={id}>{label}</label>
            <input type="text" id={id} value={value} onClick={onClick}></input>
        </div>
    )
}