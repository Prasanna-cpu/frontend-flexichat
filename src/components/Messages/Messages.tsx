import React, {useEffect, useRef} from 'react';
import Message from "../Message/Message.tsx";
import useGetMessages from "../../hooks/useGetMessages.tsx";
import MessageSkeleton from "../skeletons/MessageSkeleton.tsx";
import {MessageType} from "../../utils/MessageType.ts"
import useListenMessages from "../../hooks/useListenMessages.tsx";

const Messages :React.FunctionComponent= () => {

    const {messages,loading}=useGetMessages()

    useListenMessages()

    const lastMessageRef=useRef<HTMLDivElement|null>(null);

    useEffect(()=>{
        setTimeout(()=>{
            lastMessageRef?.current?.scrollIntoView({behavior: "smooth"});
        },100)
    },[messages])

    console.log("Messages: ",messages)

    return (
        <div className={"p-4 flex-1 overflow-auto"}>

            {!loading && messages.length>0 && messages.map((message:MessageType)=>(
                <div key={message?._id} ref={lastMessageRef}>
                    <Message message={message!}/>
                </div>
            ))}


            {loading && [...Array(3)].map((_,idx)=><MessageSkeleton key={idx}/>)}

            {!loading && messages.length===0 && (
                <p className={"text-center text-white"}>Send a message to start conversation</p>
            )}
        </div>
    );
};

export default Messages;