import React, { useEffect, useState } from 'react';
import io from "socket.io-client";
import Login from './components/login';
import Chat from './components/chat';



const socket = io("http://localhost:5000");

export default function App() {



  const [chatActive, setChatActive] = useState(false);
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("received-message", (mes) => {
      setMessages([...messages, mes]);
      console.log(mes)

    })
  })
  return (
    <>
      <div className='w-screen h-screen bg-gray-300 flex justify-center items-center gap-2'>
        {chatActive ? <Chat messages={messages} socket={socket} name={username} setname={setUsername} /> : <Login chat={setChatActive} name={username} setname={setUsername} />}
      </div>

    </>
  )
}
