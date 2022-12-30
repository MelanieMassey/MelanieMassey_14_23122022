import "./Button.css";

export default function Button({type, texte}){
    return(
        <button type={type}>{texte}</button>
    )
}