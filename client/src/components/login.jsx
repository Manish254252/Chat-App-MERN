import React from 'react'


function Login(props) {

    return (
        <div className=" h-screen w-screen flex justify-center items-center gap-2">
            <input
                type='text'
                className="outline-none text-center px-3 py-2 rounded-md border-2"
                name=""
                value={props.name}
                onChange={(e) => { props.setname(e.target.value) }}
            />

            <button
                type='submit'
                className="bg-green-500 text-white px-3 py-2 rounded-md"
                onClick={() => { props.name !== " " && props.chat(true) }}
            >Start Chat</button></div>
    )
}

export default Login