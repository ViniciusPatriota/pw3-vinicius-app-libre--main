import style from './Input.module.css'
function Input({type, text, name, placeHolder, handlerChangeBook}){
    return(
        <>
            <div className={style.form_control}>
                <label htmlFor={name}>{text}</label>
                <input 
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeHolder}
                    onChange={handlerChangeBook}
                />
            </div>
        </>
    )
}

export default Input