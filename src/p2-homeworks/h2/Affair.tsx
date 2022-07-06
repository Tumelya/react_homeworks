import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    return (
        <div>
            {/*<button onClick={deleteCallback}>X</button>
            {props.affair.name} -
            {props.affair.priority}*/}
            <table>
                <tr>
                    <td><button className={s.deleteButton} onClick={deleteCallback}>X</button></td>
                    <td className={s.nameTd}>{props.affair.name}</td>
                    <td className={s.priority}>{props.affair.priority}</td>
                </tr>
            </table>

        </div>
    )
}

export default Affair
