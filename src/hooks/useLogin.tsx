import {useState} from "react";

import toast from "react-hot-toast";
import {useAuthContext} from "../context/AuthContext.tsx";


interface SignInInputs {
    username: string;
    password: string;
}

function handleInputErrors(
    inputs: SignInInputs,
):boolean{
    const { username, password} = inputs;

    if(!username || !password ){
        toast.error("Please fill all fields")
        return false
    }



    return true
}


const useLogin=()=>{
    const [loading,setLoading]=useState<boolean>(false)


    const {setAuthUser}=useAuthContext()


    const handleLogin=async(username:string,password:string)=>{


        const success=handleInputErrors({username,password});
        if(!success){
            return
        }

        setLoading(true)
        try{

            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }


            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data)
        }
        catch(error){
            toast.error((error as Error).message)
            console.log((error as Error).message)
        }
        finally {
            setLoading(false)
        }
    }

    return {loading,handleLogin}


}

export default useLogin