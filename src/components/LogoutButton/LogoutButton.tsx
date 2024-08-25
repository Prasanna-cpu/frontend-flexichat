import React from 'react';
import {BiLogOut} from "react-icons/bi";
import useLogout from "../../hooks/useLogout.tsx";

const LogOutButton :React.FunctionComponent= () => {

    const {handleLogout,loading}=useLogout()

    return (
        <div className={"mt-auto"}>


            {
                !loading ? (
                    <BiLogOut
                        className={"text-white text-lg w-12 h-12 cursor-pointer hover:text-blue-600"}
                        onClick={handleLogout}
                    />
                ):(
                    <span className={"loading loading-spinner"}></span>
                )
            }




        </div>
    );
};

export default LogOutButton;