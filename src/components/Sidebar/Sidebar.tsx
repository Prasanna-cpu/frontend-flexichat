import React from 'react';
import SearchInput from "../SearchInput/SearchInput.tsx";
import Conversations from "../Conversations/Conversations.tsx";



const Sidebar : React.FunctionComponent = () => {
    return (
        <div className={"border-r border-slate-500 p-4 flex flex-col"}>
            <SearchInput/>
            <div className={"divider px-3"}>
            </div>
            <Conversations/>

        </div>
    );
};

export default Sidebar;