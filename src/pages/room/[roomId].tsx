import React from "react";
import {useRouter} from "next/router";
import Room from "@/components/Room/Room";
import {useUser} from "@/contexts/UserProvider";
import {ROUTES} from "@/routes";

interface RoomIdProps {}

const RoomId: React.FC<RoomIdProps> = () => {
    const router = useRouter();
    const {roomId} = router.query;

    const {userName, setUserName} = useUser();

    const [isUsernameSet, setIsUsernameSet] = React.useState<boolean>(userName !== "");

    React.useEffect(() => {
        if (!isUsernameSet) {
            router.push(ROUTES.JOIN_ROOM());
        }
    }, [isUsernameSet]);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        }}>
            <Room/>
        </div>

    );
};

export default RoomId;