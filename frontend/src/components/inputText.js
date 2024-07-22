const InputText = ({type, placeholder, styleClass}) => {
    return (
        <input type={type} placeholder={placeholder} className={`input input-bordered input-primary ${styleClass}`}/>
    )
}

export default InputText;