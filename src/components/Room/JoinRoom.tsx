import React from "react";
import {ROUTES} from "@/routes";
import {useUser} from "@/contexts/UserProvider";
import {useRoom} from "@/contexts/RoomProvider";
import {useRouter} from "next/router";
import {createRoom, isRoomIdValid} from "@/utils/tmdb/mock";

interface JoinRoomProps {
}

const JoinRoom: React.FC<JoinRoomProps> = (props) => {

    const {roomId,joinRoom} = useRoom();

    const {userName,setUserName} = useUser();

    const router = useRouter();

    const [draftRoomId, setDraftRoomId] = React.useState<string>('');

    const handleRoomIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDraftRoomId(e.target.value);
    }

    const [draftUsername, setDraftUsername] = React.useState<string>('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDraftUsername(e.target.value);
    }

    const handleOnClickJoinRoom = () => {
        setUserName(draftUsername);
        isRoomIdValid(draftRoomId).then((isValid) => {
            if (isValid) {
                joinRoom(draftRoomId);
            } else {
                alert('Invalid Room ID');
            }
        });
    }

    React.useEffect(() => {
        if (roomId && userName) {
            router.push(ROUTES.ROOM_ID(roomId));
        }
    }, [roomId]);

    return (
        <div>
            <input type="text" placeholder="Enter your username" onChange={handleUsernameChange}/>
            <input type="text" placeholder="Enter Room ID" onChange={handleRoomIdChange}/>
            <button onClick={() => {
                handleOnClickJoinRoom()
            }}>Join Room
            </button>
        </div>
    );
};

export default JoinRoom;