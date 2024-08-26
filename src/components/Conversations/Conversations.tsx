import React from 'react';
import IndividualConversation from "../IndividualConversation/IndividualConversation.tsx";
import useGetConversations from "../../hooks/useGetConversations.tsx";

const Conversations :React.FunctionComponent= () => {


    const {loading,conversations}=useGetConversations()
    console.log(conversations)

    let idx: number;
    return (
        <div className={"py-2 flex flex-col overflow-auto"}>

            {
                conversations.map((conversation)=>(
                    <IndividualConversation
                        key={conversation._id}
                        conversation={conversation}
                        lastIdx={idx===conversations.length - 1}

                    />
                ))
            }

            {
                loading ? <span className={"loading loading-spinner mx-auto"}></span> :null
            }

        </div>
    );
};

export default Conversations;