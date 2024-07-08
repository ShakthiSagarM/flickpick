import React from "react";
import {useRoom} from "@/contexts/RoomProvider";
import {useUser} from "@/contexts/UserProvider";
import {createRoom} from "@/utils/tmdb/mock";
import {ROUTES} from "@/routes";
import { useRouter } from "next/router";

interface CreateRoomProps {}

const CreateRoom: React.FC<CreateRoomProps> = () => {

    const {setUserName} = useUser();

    const {roomId, joinRoom} = useRoom();

    const router = useRouter();

    const [draftUsername, setDraftUsername] = React.useState<string>('');


    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDraftUsername(e.target.value);
    }

    const handleOnClickCreateRoom = () => {
        setUserName(draftUsername);
        createRoom(draftUsername).then((roomId) => {
            joinRoom(roomId);
        });
    }

    React.useEffect(() => {
        if (roomId) {
            router.push(ROUTES.ROOM_ID(roomId));
        }
    }, [roomId]);

    return (
        <div>
            <input type="text" placeholder="Enter your username" onChange={handleUsernameChange}/>
            <button onClick={handleOnClickCreateRoom}>Create Room</button>
        </div>
    );
};

export default CreateRoom;