import React, { useState } from 'react'


function Chat(props) {

    console.log(props)
    const [newMessage, setNewMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const messageData = {
            message: newMessage,
            user: props.name,
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()

        }
        if (newMessage !== "") {
            props.socket.emit("send-message", messageData);
            setNewMessage("");
        } else {
            alert("Message can't be empty");

        }
    }
    return (
        <>

            <div className=" rounded-md w-full md:w-[80vw] lg:w-[40vw] p-2">
                <h1 className="text-center font-bold text-xl my-2 uppercase">111 Group Chat Room</h1>
                <div className="overflow-y-scroll h-[80vh] lg:h-[60vh]">
                    {props.messages.map((mes, ind) => {
                        return (
                            <div key={ind} className={` flex rounded-md my-5 shadow-md w-fit ${props.name === mes.user && "ml-auto"}`}>
                                <div className="bg-green-400 rounded-l-md flex justify-center items-center">
                                    <h3 className=" font-bold text-lg px-2 py-2 ">{mes.user.charAt(0).toUpperCase()} </h3>
                                </div>
                                <div className=" px-2 bg-white rounded-md">
                                    <span className=" text-sm">{mes.user} </span>
                                    <h3 className=" font-bold">{mes.message} </h3>
                                    <h3 className="text-xs text-right">{mes.time} </h3>
                                </div>
                            </div>
                        );

                    })}
                </div>
                <form className="flex gap-2 md:gap-4 justify-between" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={newMessage}
                        className="w-full rounded-md outline-none px-3 py-2 border-2"
                        onChange={(e) => { setNewMessage(e.target.value) }}
                    ></input>
                    <button
                        type="submit"
                        className="rounded-md font-bold bg-green-500 text-white px-3 py-2"
                    >Send</button>
                </form>
            </div>
        </>
    )
}

export default Chat