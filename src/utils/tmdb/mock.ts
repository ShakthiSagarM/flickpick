import {useRoom} from "@/contexts/RoomProvider";


export const createRoom = async (username: string) => {
    //return a random room id
    return Math.random().toString(36).substring(7);
}

export const isRoomIdValid = async (roomId: string) => {
    if (roomId === '123') {
        return true;
    }
    //check if room id is valid
    return false;
}