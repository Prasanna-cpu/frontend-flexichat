import React from 'react';
import {BsSend} from "react-icons/bs";

const MessageInput : React.FunctionComponent= () => {
    return (
       <form className={"px-4 my-3"}>

           <div className={"w-full relative"}>

               <input
                   type={"text"}
                   className={"border-none  bg-white text-sm rounded-3xl block w-full p-2.5 border-gray-600 text-white"}
                   placeholder={"Send a message"}
               />

               <button
                   type={"submit"}
                   className={"absolute inset-y-0 end-0 flex items-center pe-3"}
               >
                   <BsSend className={"text-gray-700 cursor-pointer hover:text-sky-700"}/>
               </button>

           </div>

       </form>
    );
};

export default MessageInput;