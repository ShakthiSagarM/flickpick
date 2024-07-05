import React from "react";
import {ROUTES} from "@/routes";

interface JoinRoomProps {}

const JoinRoom: React.FC<JoinRoomProps> = () => {




    return (
    <div>
        JoinRoom Bro!!!!
        <button onClick={()=>{{window.location.href = ROUTES.JOIN_ROOM_ID("123123")}}}>Join Room</button>
    </div>
  );
};

export default JoinRoom;