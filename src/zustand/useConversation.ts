import {create} from "zustand"
import {Conversation} from "../utils/ConversationType.ts";
import {MessageType} from "../utils/MessageType.ts";

interface ConversationState{
    selectedConversation: Conversation | null;
    setSelectedConversation: (conversation: Conversation | null) => void;
    messages: MessageType[]; // Adjust this type if your messages are objects or a different type
    setMessages: (messages: MessageType[]) => void;
}

const useConversation=create<ConversationState>((set)=>({
    selectedConversation:null,
    setSelectedConversation:(selectedConversation)=>set({selectedConversation}),
    messages:[],
    setMessages:(messages)=>set({messages}),
}))

export default useConversation