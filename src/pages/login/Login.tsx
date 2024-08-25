import React, {useState} from 'react';
import {Link} from "react-router-dom";
import useLogin from "../../hooks/useLogin.tsx";


const Login :React.FunctionComponent= () => {

    const {loading,handleLogin}=useLogin()

    const [username,setUsername]=useState<string>("")
    const [password,setPassword]=useState<string>("")


    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault()
        await handleLogin(username,password)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div
                className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-blue-500'> FlexiChat</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className={"label p-2"}>
                            <span className={"text-base label-text text-white"}>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder={"Enter your username"}
                            className={"w-full input input-bordered h-10"}
                            value={username}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUsername(e.target.value)}
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
                            value={password}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
                        />
                    </div>

                    <Link to={"/signup"} className={"text-sm text-white hover:underline hover:text-blue-500 mt-2 inline-block"}>
                        {"Don't"} have an account
                    </Link>

                    <div>
                        <button
                            className={"btn btn-block btn-sm mt-2 bg-green-700 hover:bg-blue-700 text-white border-none"}
                            disabled={loading}
                        >
                            {
                                loading ? <span className={"loading loading-spinner"}></span>:(
                                    "Login"
                                )
                            }
                        </button>
                    </div>




                </form>


            </div>
        </div>
    );
};

export default Login;