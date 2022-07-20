import React from 'react'
import Message from "./Message";

const messageData = {
    //avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    avatar: "https://wallpapers.com/images/featured/Cute%20Anime-uptxxcxl4h2zoe9r.jpg",
    name: 'Maria',
    message: 'yarn start нажимал?',
    time: '22:00'
}

function HW1() {
    return (
        <div>
            <hr/>
            <h3>HomeWork 1</h3>
            <hr/>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
