import {useState} from "react";
import useConversation from "../zustand/useConversation.ts";

const useSendMessage=()=>{

    const [loading,setLoading]=useState<boolean>(false);

    const {messages,setMessages,selectedConversation}=useConversation()

    const sendMessage=async()=>{

    }

}

export default useSendMessage