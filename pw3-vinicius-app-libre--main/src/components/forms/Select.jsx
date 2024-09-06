import style from './Select.module.css'

function Select( {name, text}){
    return(
        <>
        <div className={style.form_control}>
                <label htmlFor={name}> {text}</label>
                <select name={name} id={name}>
                    <option selected>Selecione uma categoria</option>
                    <option>Ficção científica</option>
                    <option>Fantasia heroica</option>
                    <option>Suspense</option>
                    <option>Terror</option>

                </select>
        </div>
        </>
    )
}

export default Select;