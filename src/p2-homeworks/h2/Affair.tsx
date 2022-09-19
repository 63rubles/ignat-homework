import React from 'react'
import affairs from "./Affairs";
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affair}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={s.priorityClass}>[{props.affair.priority}]</div>

            <button onClick={deleteCallback} className={s.button}>X</button>
        </div>
    )
}

export default Affair
