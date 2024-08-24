import React from 'react';
import {IoSearchSharp} from "react-icons/io5";
import LogOutButton from "../LogoutButton/LogoutButton.tsx";

const SearchInput : React.FunctionComponent= () => {
    return (
        <form className={"flex items-center gap-2"}>
            <input
                type={"text"}
                placeholder={"Search"}
                className={"input input-bordered rounded-full"}
            />

            <button type={"submit"} className={"btn btn-circle bg-sky-700 text-white border-none hover:bg-amber-700"}>
                <IoSearchSharp className={"text-lg"}/>
            </button>

            <LogOutButton/>
        </form>
    );
};

export default SearchInput;