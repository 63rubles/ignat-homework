import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={error ? inputClass : ''}/>
            {/*{error && <div className={s.errorMessage}>{error}</div>}*/}
            {/*{error && <span className={s.errorMessage}>{error}</span>}*/}
            {/*<span>{error}</span>*/}
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div>
                {error && <span className={s.errorMessage}>{error}</span>}
            </div>

        </div>
    )
}

export default Greeting
