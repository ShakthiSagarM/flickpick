import React from "react";
import { ROUTES } from "@/routes";
import { useRouter } from 'next/router'; // Use the correct router import

interface SelectRoomOptionsProps {}

const SelectRoomOptions: React.FC<SelectRoomOptionsProps> = () => {
    const {asPath,push} = useRouter();

    return (
        <div>
            <button onClick={() => {window.location.href = ROUTES.JOIN_ROOM()}}>Join Room</button>
            <button onClick={() => {window.location.href = ROUTES.CREATE_ROOM()}}>Create Room</button>
        </div>
    );
};

export default SelectRoomOptions;
