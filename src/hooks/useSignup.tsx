import React, {useState} from 'react';
import toast from "react-hot-toast";

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

const UseSignup :React.FunctionComponent= () => {


    const [loading,setLoading]=useState<boolean>(false)



    async function handleSignup(
        inputs:SignupInputs
    ){
        const success:boolean=handleInputErrors(inputs)
        
        if(!success){
            return
        }
        

        try{
            
        }
        catch(error){
            toast.error(error.message)
        }
        
        
        
    }

    return (
        <div>

        </div>
    );
};

export default UseSignup;