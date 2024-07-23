const InputError = ({styleClass, children}) => {
    return (
        <p className={`text-2xl text-error ${styleClass}`}>{children}</p>
    )
}

export default InputError;