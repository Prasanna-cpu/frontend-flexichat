import React, {FormEvent, useState} from 'react';
import GenderCheckbox from "./GenderCheckbox.tsx";
import {Link} from "react-router-dom";
import useSignup from "../../hooks/useSignup.tsx";

const SignUp :React.FunctionComponent = () => {


    const {loading,handleSignup}=useSignup()


    const [inputs,setInputs]=useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:""
    })
    
    function handleCheckBoxChange(gender: string){
        setInputs({
            ...inputs,
            gender
        })
    }


    async function handleSubmit(e:FormEvent) {
        e.preventDefault()
        console.log(inputs)
        await handleSignup(inputs)
    }

    return (
        <div className={"flex flex-col items-center justify-center min-w-96 mx-auto"}>

            <div className={"w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"}>
                <h1 className={"text-3xl font-semibold text-center text-gray-300"}>

                    Sign Up <span className={"text-blue-500"}>FlexiChat</span>

                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className={"label p-2 "}>
                            <span className={"text-base label-text text-white"}>Full Name</span>
                        </label>
                        <input
                            type='text'
                            placeholder={"Enter your full name"}
                            className={"w-full input input-bordered h-10"}
                            value={inputs.fullName}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInputs({...inputs,fullName:e.target.value})}
                        />

                    </div>

                    <div>
                        <label className={"label p-2"}>
                            <span className={"text-base label-text text-white"}>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder={"Enter your username"}
                            className={"w-full input input-bordered h-10"}
                            value={inputs.username}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInputs({...inputs,username:e.target.value})}
                        />
                    </div>


                    <div>
                        <label className={"label p-2"}>
                            <span className={"text-base label-text text-white"}>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder={"Enter your password"}
                            className={"w-full input input-bordered h-10"}
                            value={inputs.password}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInputs({...inputs,password:e.target.value})}
                        />
                    </div>

                    <div>
                        <label className={"label p-2"}>
                            <span className={"text-base label-text text-white"}>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder={"Confirm password"}
                            className={"w-full input input-bordered h-10"}
                            value={inputs.confirmPassword}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInputs({...inputs,confirmPassword:e.target.value})}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>

                    <Link to={"/login"}
                       className={"text-sm text-white hover:underline hover:text-blue-500 mt-2 inline-block"}>
                        Already have an account?
                    </Link>

                    <div>
                        <button
                            className={"btn btn-block btn-sm mt-2 bg-green-700 hover:bg-blue-700 text-white border-none"}
                            disabled={loading}
                        >
                            {
                                loading ? <span className={"loading loading-spinner"}></span>:(
                                    "Sign up"
                                )
                            }
                        </button>
                    </div>


                </form>

            </div>

        </div>
    );
};

export default SignUp;