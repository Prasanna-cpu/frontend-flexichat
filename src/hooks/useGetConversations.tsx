import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {Conversation} from "../utils/ConversationType.ts";

const useGetConversations = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [conversations, setConversations] = useState<Conversation[]>([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/user",{
                    method:"GET",
                    credentials:"include"
                });
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error) {
                toast.error((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        getConversations();

        return () => {
            setLoading(false);
        };
    }, []);

    return { loading, conversations };
};

export default useGetConversations;
