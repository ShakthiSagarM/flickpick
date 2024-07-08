import React from "react";

interface UserContextProps {
    userName: string;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    rightSwipedMovies: number[];
    updateRightSwipedMovies: (movieId: number) => void;
    leftSwipedMovies: number[];
    updateLeftSwipedMovies: (movieId: number) => void;
}

const UserContext = React.createContext<UserContextProps | undefined>(undefined);

export const useUser = () => {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [userName, setUserName] = React.useState<string>('');

    const [rightSwipedMovies, setRightSwipedMovies] = React.useState<number[]>([]);

    const [leftSwipedMovies, setLeftSwipedMovies] = React.useState<number[]>([]);


    const updateRightSwipedMovies = (movieId: number) => {
        setRightSwipedMovies((prevRightSwipedMovies) => [...prevRightSwipedMovies, movieId]);
    }

    const updateLeftSwipedMovies = (movieId: number) => {
        setLeftSwipedMovies((prevLeftSwipedMovies) => [...prevLeftSwipedMovies, movieId]);
    }


    return (
        <UserContext.Provider value={{userName,setUserName,rightSwipedMovies,updateRightSwipedMovies,leftSwipedMovies,updateLeftSwipedMovies}}>
            {children}
        </UserContext.Provider>
    );
};