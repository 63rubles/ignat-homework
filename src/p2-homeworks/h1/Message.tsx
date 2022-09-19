import React from 'react'
import style from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string;
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.container}>
            <img className={style.avatar} src="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"
                 alt="avatar"/>
            <div className={style.messagebox}>
                <span className={style.time}>{props.time}</span>
                <h3 className={style.name}>{props.name}</h3>
                <p className={style.message}>{props.message}</p>
            </div>
        </div>
    )
}

export default Message
