import React from "react";
import {useRouter} from "next/router";
import {ROUTES} from "@/routes";

const RoomIndex: React.FC = () => {

    const router = useRouter();

    React.useEffect(() => {
        router.push(ROUTES.HOME());
    },[]);

    return (
        <div>
            Redirecting...
        </div>
    );
}

export default RoomIndex;