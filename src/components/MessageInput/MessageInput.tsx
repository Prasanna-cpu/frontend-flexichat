import React, {useState} from 'react';
import {BsSend} from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage.tsx";

const MessageInput : React.FunctionComponent= () => {

    const [message,setMessage]=useState<string>("")

    const {loading,sendMessage}=useSendMessage()

    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault()
        if(!message){
            return
        }
        await sendMessage(message)
        setMessage("")
    }

    return (
       <form className={"px-4 my-3"} onSubmit={handleSubmit}>

           <div className={"w-full relative"}>

               <input
                   type={"text"}
                   className={"border-none  bg-white text-sm rounded-3xl block w-full p-2.5 border-gray-600 text-black"}
                   placeholder={"Send a message"}
                   value={message}
                   onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMessage(e.target.value)}
               />

               <button
                   type={"submit"}
                   className={"absolute inset-y-0 end-0 flex items-center pe-3"}
               >
                   {
                       loading ? (
                           <div className={"loading loading-spinner"}></div>
                       ):(
                           <BsSend className={"text-gray-700 cursor-pointer hover:text-sky-700"}/>
                       )
                   }
               </button>

           </div>

       </form>
    );
};

export default MessageInput;