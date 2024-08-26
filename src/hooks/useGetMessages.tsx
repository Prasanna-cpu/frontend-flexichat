import toast from "react-hot-toast";
import {useEffect, useState} from "react";
import useConversation from "../zustand/useConversation.ts";

const useGetMessages = () => {

    const [loading,setLoading]=useState(false);

    const {messages,setMessages,selectedConversation}=useConversation()

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            try{
                const res=await fetch(`/api/message/${selectedConversation?._id}`,{
                    method:"GET",
                    credentials:"include"
                })

                const data=await res.json()
                if(data.error){
                    toast.error(data.error);
                    throw new Error(data.error);
                }
                setMessages(data)
            }
            catch(error){
                console.log((error as Error).message)
                toast.error((error as Error).message)
            }
            finally {
                setLoading(false)
            }
        }

        if(selectedConversation?._id){
            getMessages()
        }
    }, [selectedConversation?._id,setMessages]);

    return {messages,loading}

}

export default useGetMessages