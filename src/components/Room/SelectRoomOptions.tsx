import React from "react";
import { ROUTES } from "@/routes";
import {useRouter} from "next/router";

interface SelectRoomOptionsProps {}

const SelectRoomOptions: React.FC<SelectRoomOptionsProps> = () => {

    const router = useRouter();

    return (
        <div>
            <button onClick={() => {router.push(ROUTES.JOIN_ROOM())}}>Join Room</button>
            <button onClick={() => {router.push(ROUTES.CREATE_ROOM())}}>Create Room</button>
        </div>
    );
};

export default SelectRoomOptions;
