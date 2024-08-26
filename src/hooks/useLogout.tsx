import {useState} from "react";

import {useAuthContext} from "../context/AuthContext.tsx";
import toast from "react-hot-toast";


const useLogout = () => {

    const [loading,setLoading] = useState<boolean>(false);

    const {setAuthUser}=useAuthContext()

    const handleLogout = async () => {
        setLoading(true);

        try{
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.removeItem("chat-user")
            setAuthUser(null)
        }


        catch(error){
            toast.error((error as Error).message)
            console.log((error as Error).message)
        }

        finally {
            setLoading(false)
        }
    }


    return {loading,handleLogout}
};

export default useLogout;