import React, {ChangeEvent, useState} from 'react'
import {Greeting} from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

export const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {

    const [name, setName] = useState<string>("")
    let [error, setError] = useState<string>("")

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.trim()) {
            setName(e.currentTarget.value.trim());
            setError("");
        } else {
            setName("");
            setError("Title is required");

        }
    }
    const addUser = () => {
        addUserCallback(name);
        alert(`Hello ${name}!`);
        setName("");
    }

    const totalUsers = users.length;


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}
