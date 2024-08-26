import {create} from "zustand"
import {Conversation} from "../utils/ConversationType.ts";
import Conversations from "../components/Conversations/Conversations.tsx";

interface ConversationState{
    selectedConversation: Conversation | null;
    setSelectedConversation: (conversation: Conversation | null) => void;
    messages: string[]; // Adjust this type if your messages are objects or a different type
    setMessages: (messages: string[]) => void;
}

const useConversation=create<ConversationState>((set)=>({
    selectedConversation:null,
    setSelectedConversation:(selectedConversation)=>set({selectedConversation}),
    messages:[],
    setMessages:(messages)=>set({messages}),
}))

export default useConversation