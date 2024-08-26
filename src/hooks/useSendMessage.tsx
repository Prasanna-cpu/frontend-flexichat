import {useState} from "react";
import useConversation from "../zustand/useConversation.ts";
import toast from "react-hot-toast";

const useSendMessage=()=>{

    const [loading,setLoading]=useState<boolean>(false);

    const {messages,setMessages,selectedConversation}=useConversation()

    const sendMessage=async(message:string)=>{

        setLoading(true)

        try {

            const res=await fetch(`/api/message/send/${selectedConversation?._id}`,{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                credentials:"include",
                body:JSON.stringify({message})
            })

            const data=await res.json()

            if(data.error){
                console.log(data.error)
                throw new Error(data.error);
            }
            setMessages([...messages,data])

        }
        catch(error){
            console.log((error as Error).message)
            toast.error((error as Error).message)
        }
        finally {
            setLoading(false)
        }






    }
    return {loading,sendMessage}

}

export default useSendMessage