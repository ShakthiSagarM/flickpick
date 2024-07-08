import React, {ReactNode} from "react";
import {MovieListQueryParams} from "@/utils/tmdb/types";

interface RoomProviderProps {
    roomId: string;
    joinRoom: (roomId: string) => void;
    params: Partial<MovieListQueryParams>;
    updateParams: (newParams: Partial<MovieListQueryParams>) => void;
    roomHost: string;
    setRoomHost: React.Dispatch<React.SetStateAction<string>>;
}

const RoomContext = React.createContext<RoomProviderProps | undefined>(undefined);

export const useRoom = () => {
    const context = React.useContext(RoomContext);
    if (!context) {
        throw new Error('useRoom must be used within a RoomProvider');
    }
    return context;
};

export const RoomProvider: React.FC<{ children: ReactNode }> = ({children}) => {

    const [roomId, setRoomId] = React.useState<string>('');

    const [params, setParams] = React.useState<Partial<MovieListQueryParams>>({});

    const [roomHost, setRoomHost] = React.useState<string>('');

    const joinRoom = (roomId: string) => {
        setRoomId(roomId);
    }

    const updateParams = (newParams: Partial<MovieListQueryParams>) => {
        setParams((prevParams) => ({ ...prevParams, ...newParams }));
    }

    console.log({roomId, joinRoom, params, updateParams, roomHost, setRoomHost});

    return (
        <RoomContext.Provider value={{roomId, joinRoom, params, updateParams, roomHost, setRoomHost}}>
            {children}
        </RoomContext.Provider>
    );
};

