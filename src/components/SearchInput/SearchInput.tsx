import React, {useState} from 'react';
import {IoSearchSharp} from "react-icons/io5";
import LogOutButton from "../LogoutButton/LogoutButton.tsx";
import useConversation from "../../zustand/useConversation.ts";
import useGetConversations from "../../hooks/useGetConversations.tsx";
import toast from "react-hot-toast";
import {Conversation} from "../../utils/ConversationType.ts";

const SearchInput : React.FunctionComponent= () => {

    const [search,setSearch]=useState<string>("")

    const {setSelectedConversation}=useConversation()

    const {conversations}=useGetConversations()

    function handleSubmit(e:React.FormEvent) {
        e.preventDefault()

        if(!search){
            return
        }
        if(search.trim().length<3){
            return toast.error('Search characters must be at least 3 characters long')
        }

        const conversation = conversations.find((c: Conversation) =>
            c.fullName.toLowerCase().includes(search.toLowerCase())
        );

        if(conversation){
            setSelectedConversation(conversation)
            setSearch("")
        }
        else{
            toast.error("No such user found")
        }


    }

    return (
        <form className={"flex items-center gap-2"} onSubmit={handleSubmit}>
            <input
                type={"text"}
                placeholder={"Search"}
                className={"input input-bordered rounded-full"}
                value={search}
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)}
            />

            <button type={"submit"} className={"btn btn-circle bg-sky-700 text-white border-none hover:bg-amber-700 clicked:bg-sky-700"}>
                <IoSearchSharp className={"text-lg"}/>
            </button>

            <LogOutButton/>
        </form>
    );
};

export default SearchInput;