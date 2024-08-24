import React from 'react';
import IndividualConversation from "../IndividualConversation/IndividualConversation.tsx";

const Conversations :React.FunctionComponent= () => {
    return (
        <div className={"py-2 flex flex-col overflow-auto"}>
            <IndividualConversation/>
            <IndividualConversation/>

        </div>
    );
};

export default Conversations;