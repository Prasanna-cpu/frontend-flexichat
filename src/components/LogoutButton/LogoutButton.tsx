import React from 'react';
import {BiLogOut} from "react-icons/bi";

const LogOutButton :React.FunctionComponent= () => {
    return (
        <div className={"mt-auto"}>
            <BiLogOut className={"text-white text-lg w-12 h-12 cursor-pointer hover:text-blue-600"} />
        </div>
    );
};

export default LogOutButton;