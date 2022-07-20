import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: any
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
export const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}) => {

    return (
        <div>
            <div className={s.block}>
                <input className={error ? s.error : s.someClass} value={name} onChange={setNameCallback}/>
                <button onClick={addUser} disabled={!name}>add</button>
                <span>{totalUsers}</span>
            </div>
            <span className={error ? s.errorMessage : s.someClass}>{error}</span>
        </div>
    )
}
