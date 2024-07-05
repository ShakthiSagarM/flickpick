import React, {ReactNode} from "react";
import {MovieListQueryParams} from "@/api/types";

interface RoomProviderProps {
    roomId: string;
    joinRoom: (roomId: string) => void;
    params: MovieListQueryParams;
    updateParams: (newParams: Partial<MovieListQueryParams>) => void;
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

    const [params, setParams] = React.useState<MovieListQueryParams>({});

    const joinRoom = (roomId: string) => {
        setRoomId(roomId);
    }

    const updateParams = (newParams: Partial<MovieListQueryParams>) => {
        setParams((prevParams) => ({ ...prevParams, ...newParams }));
    }

    return (
        <RoomContext.Provider value={{roomId, joinRoom, params, updateParams}}>
            {children}
        </RoomContext.Provider>
    );
};

