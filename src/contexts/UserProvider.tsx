import React from "react";

interface UserContextProps {
    userName: string;
    setUserName: (userName: string) => void;
    rightSwipedMovies: string[];
    setRightSwipedMovies: (rightSwiped: string[]) => void;
    leftSwipedMovies: string[];
    setLeftSwipedMovies: (leftSwiped: string[]) => void;
}

const userContext = React.createContext<UserContextProps | undefined>(undefined);

export const useUser = () => {
    const context = React.useContext(userContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [userName, setUserName] = React.useState<string>('');

    const [rightSwipedMovies, setRightSwipedMovies] = React.useState<string[]>([]);

    const [leftSwipedMovies, setLeftSwipedMovies] = React.useState<string[]>([]);

    return (
        <userContext.Provider value={{userName,setUserName,rightSwipedMovies,setRightSwipedMovies,leftSwipedMovies,setLeftSwipedMovies}}>
            {children}
        </userContext.Provider>
    );
};