

export interface Conversation{
    _id: string;
    fullName: string;
    gender: string;
    profilePic: string;
    username: string;
    createdAt: string; // Use `Date` if you need to work with Date objects
    updatedAt: string; // Use `Date` if you need to work with Date objects
    __v: number;
}