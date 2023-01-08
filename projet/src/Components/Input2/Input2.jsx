import './Input2.css';

export default function Input2({ type, name, label, value,onChange, onClick}){

    return(
        <div>
            <label>{label}</label>
            <input 
                // type={type} 
                name={name} 
                label={label} 
                value={value}
                onChange={onChange}
                onClick={onClick}
            />
        </div>
    )
}