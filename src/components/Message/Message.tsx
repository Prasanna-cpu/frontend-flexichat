import React from 'react';
import {MessageType} from "../../utils/MessageType.ts";
import {useAuthContext} from "../../context/AuthContext.tsx";
import useConversation from "../../zustand/useConversation.ts";
import {extractTime} from "../../utils/extractTime.ts";


interface MessageProps {
    message: MessageType
}

const Message: React.FunctionComponent<MessageProps> = ({message}) => {

    const {authUser}=useAuthContext()
    const {selectedConversation}=useConversation()
    const fromMe=message?.senderId===authUser?._id
    const chatClassName=fromMe?'chat-end':'chat-start'
    const profilePic=fromMe ? authUser.profilePic:selectedConversation?.profilePic
    const bubbleBackgroundColor=fromMe?"bg-blue-500":""
    const formatedTime=extractTime(message.createdAt)


    return (
        <div className={`chat ${chatClassName}`}>
            <div className={"chat-image avatar"}>
                <div className={"w-10 rounded-full"}>
                    <img
                        src={profilePic}
                        alt={"profile avatar"}
                    />
                </div>
            </div>

            <div className={`chat-bubble text-white ${bubbleBackgroundColor} pb-2`}>
                {message.message}
            </div>

            <div className={"chat-footer opacity-50 text-xs flex gap-1 items-center text-green-200"}>
                {formatedTime}
            </div>

        </div>
    );
};

export default Message;