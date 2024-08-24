import React from 'react';

const IndividualConversation : React.FunctionComponent = () => {
    return (
        <div>
            <div className={"flex gap-2 items-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer"}>
                <div className={"avatar online"}>
                    <div className={"w-12 rounded-full "}>
                        <img src={""} alt={"avatar"}/>

                    </div>
                </div>
                <div className={"flex flex-col flex-1"}>
                    <div className={"flex gap-3 justify-between"}>
                        <p className={"font-bold text-gray-300"}>
                            John
                        </p>

                    </div>
                </div>
            </div>

            <div className={"divider my-0 py-0 h-1"}>

            </div>
        </div>
    );
};

export default IndividualConversation;