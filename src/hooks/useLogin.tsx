import {useState} from "react";
import apiClient from "../utils/api.ts";
import toast from "react-hot-toast";


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


    const handleLogin=async(username:string,password:string)=>{


        const success=handleInputErrors({username,password});
        if(!success){
            return
        }

        setLoading(true)
        try{
            const res=await apiClient.post("/api/auth/login",{
                username,
                password
            })

            const data=res.data

            if(data.error){
                toast.error(data.error)
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user",JSON.stringify(data))
            setLoading(false)
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