import React from 'react'
import style from './Message.module.css';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.common}>
            <img alt={"avatar"} src={props.avatar}/>
            <div className={style.triangle}></div>
            <div className={style.messageForm}>
                <div className={style.left}>
                    <p className={style.name}>{props.name}</p>
                    <p className={style.mess}>{props.message}</p>
                </div>
                <div className={style.right}>
                    <p className={style.time}>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
