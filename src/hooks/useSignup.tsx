import {useState} from 'react';
import toast from "react-hot-toast";
import {useAuthContext} from "../context/AuthContext.tsx";


interface SignupInputs {
    fullName: string;
    username: string;
    password: string;
    confirmPassword: string;
    gender: string;
}

function handleInputErrors(
    inputs: SignupInputs,
):boolean{
   const {fullName, username, password, confirmPassword,gender} = inputs;
   
   if(!fullName || !username || !password || !confirmPassword || !gender){
       toast.error("Please fill all fields")
       return false
   }
   
   if(password !== confirmPassword){
       toast.error("Passwords do not match")
       return false
   }
   
   if(password.length<6){
       toast.error("Password length must be atleast 6 characters")
       return false
   }
   
   return true
}

const useSignup = () => {


    const [loading,setLoading]=useState<boolean>(false)

    const {setAuthUser}=useAuthContext()



    async function handleSignup(
        inputs:SignupInputs
    ){
        const success:boolean=handleInputErrors(inputs)
        
        if(!success){
            return
        }
        
        setLoading(true)


        const {fullName, username, password, confirmPassword,gender} = inputs;

        try{

            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
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
        }
        finally {
            setLoading(false)
        }
        
        
        
    }

    return {loading,handleSignup}
};

export default useSignup;