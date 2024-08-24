import React from 'react';

const Message : React.FunctionComponent= () => {
    return (
        <div className={"chat chat-end"}>
            <div className={"chat-image avatar"}>
                <div className={"w-10 rounded-full"}>
                    <img
                        src={""}
                        alt={"profile avatar"}
                    />
                </div>
            </div>

            <div className={"chat-bubble text-white bg-blue-500"}>
                What's up
            </div>

            <div className={"chat-footer opacity-50 text-xs flex gap-1 items-center"}>
                11:30
            </div>

        </div>
    );
};

export default Message;