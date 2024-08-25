import React, {createContext, ReactNode, useContext, useState} from 'react';


interface AuthContextProviderProps{
    children: ReactNode;
}


interface AuthContextType{
    authUser:any,
    setAuthUser:React.Dispatch<React.SetStateAction<any>>
}

export const AuthContext=createContext<AuthContextType|undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext=()=>{
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthContextProvider");
    }
    return context;
}


export const AuthContextProvider : React.FunctionComponent<AuthContextProviderProps>=({children})=>{

    const storedUser=localStorage.getItem("chat-user")

    const [authUser,setAuthUser]=useState(storedUser ? JSON.parse(storedUser) : null)

    return (
        <AuthContext.Provider value={{authUser,setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )

}