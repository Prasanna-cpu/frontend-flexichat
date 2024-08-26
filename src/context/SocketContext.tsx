import {createContext, useEffect, useState, ReactNode, useContext} from "react";
import { useAuthContext } from "./AuthContext";
import { io, Socket } from "socket.io-client";

// Define the context type
interface SocketContextType {
    socket: Socket | null;
    onlineUsers: string[]; // Array of online user identifiers
}

// Provide a default value with the correct type
export const SocketContext = createContext<SocketContextType | undefined>(undefined);

interface SocketContextProviderProps {
    children: ReactNode;
}


export const useSocketContext=()=>{
    const context = useContext(SocketContext);
    if (!context) {
        throw new Error("useSocketContext must be used within an AuthContextProvider");
    }
    return context;
}

export const SocketContextProvider = ({ children }: SocketContextProviderProps) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [onlineUsers, setOnlineUsers] = useState<string[]>([]); // Online users as an array of strings

    const { authUser } = useAuthContext();



    useEffect(() => {
        if (authUser) {
            const socketInstance = io("http://localhost:5000",{
                query:{
                    userId:authUser._id
                }
            });

            setSocket(socketInstance);

            socket?.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users);
            })

            return () => {
                socketInstance.close();
            };
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};
