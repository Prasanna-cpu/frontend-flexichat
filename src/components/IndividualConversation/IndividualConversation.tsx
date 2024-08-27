import React from 'react';
import {Conversation} from "../../utils/ConversationType.ts";
import useConversation from "../../zustand/useConversation.ts";
import {useSocketContext} from "../../context/SocketContext.tsx";

interface IndividualConversationProps {
    conversation: Conversation
    lastIdx:boolean
}

const IndividualConversation: React.FunctionComponent<IndividualConversationProps> = ({conversation,lastIdx}) => {


    const {selectedConversation,setSelectedConversation}=useConversation()

    const isSelected =selectedConversation?._id === conversation?._id;

    const {onlineUsers}=useSocketContext()

    const isOnline=onlineUsers.includes(conversation?._id)


    return (
        <div>
            <div
                className={`flex gap-2 items-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-700" : ""}`}
                onClick={()=>setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline?"online":""}`}>
                    <div className={"w-12 rounded-full "}>
                        <img src={conversation?.profilePic || ""} alt={"avatar"}/>

                    </div>
                </div>
                <div className={"flex flex-col flex-1"}>
                    <div className={"flex gap-3 justify-between"}>
                        <p className={"font-bold text-gray-300"}>
                            {conversation?.fullName}
                        </p>

                    </div>
                </div>
            </div>

            {
                !lastIdx && <div className={"divider my-0 py-0 h-1"}>

                </div>
            }


        </div>
    );
};

export default IndividualConversation;