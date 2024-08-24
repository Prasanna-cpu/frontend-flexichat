import React from 'react';
import Message from "../Message/Message.tsx";

const Messages :React.FunctionComponent= () => {
    return (
        <div className={"p-4 flex-1 overflow-auto"}>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
        </div>
    );
};

export default Messages;