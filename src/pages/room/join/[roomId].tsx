import React from "react";
import {useRouter} from "next/router";

interface JoinRoomProps {}

const JoinRoom: React.FC<CreateRoomProps> = () => {
    const router = useRouter();
    const {roomId} = router.query;
    return (
        <div>
            CreateRoom Bro!!!!{roomId}
        </div>
    );
};

export default JoinRoom;