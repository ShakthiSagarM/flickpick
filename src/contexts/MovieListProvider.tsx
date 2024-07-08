import React, {ReactNode} from "react";
import {MovieEntryDetails, MovieListAxiosResponse} from "@/utils/tmdb/types";
import {useQuery} from "react-query";
import axios, {AxiosError} from "axios";
import {ENDPOINT, QUERY_KEYS} from "@/utils/tmdb/constants";
import {getHeaders, urlWIthParams} from "@/utils/tmdb/utils";
import {useRoom} from "@/contexts/RoomProvider";
import {useUser} from "@/contexts/UserProvider";

interface MovieListProviderProps {
   movieList: MovieEntryDetails[];
   getNextPage: () => void;
}

const MovieListContext = React.createContext<MovieListProviderProps | undefined>(undefined);

export const useMovieList = () => {
    const context = React.useContext(MovieListContext);
    if (!context) {
        throw new Error('useRoom must be used within a MovieListProvider');
    }
    return context;
};

export const MovieListProvider: React.FC<{ children: ReactNode }> = ({children}) => {

    const [movieList, setMovieList] = React.useState<MovieEntryDetails[]>([]);

    const [page, setPage] = React.useState<number>(1);

    const { params, updateParams} = useRoom();

    const { data, isLoading, isError, error,refetch } = useQuery<MovieListAxiosResponse, AxiosError>(
        QUERY_KEYS.GET_MOVIE_LIST,
        () => axios.get(urlWIthParams(ENDPOINT.MOVIE_LIST_API, params), { headers: getHeaders() }),
        {
            refetchOnWindowFocus: false,
            enabled: true}
    );

    const {leftSwipedMovies,rightSwipedMovies} = useUser();

    const addUniqueMovies = (newMovies: MovieEntryDetails[]) => {
        const uniqueNewMovies = newMovies.filter((newMovie) => !movieList.some((movie) => movie.id === newMovie.id));

        const swipedMovies = [...rightSwipedMovies,...rightSwipedMovies];

        const nonSwipedUniqueMovies = uniqueNewMovies.filter((newMovie) => !swipedMovies.includes(newMovie.id));

        setMovieList((prevMovies) => [...nonSwipedUniqueMovies]);
    };

    React.useEffect(() => {
        if(data && data.data.results.length > 0){
            addUniqueMovies(data.data.results);
        }
    }, [data]);

    React.useEffect(() => {
            refetch();
    }, [params]);

    const getNextPage = () => {
        setPage(page + 1);
    }

    React.useEffect(() => {
        updateParams({page : page});
    }, [page]);

    return (
        <MovieListContext.Provider value={{movieList , getNextPage}}>
            {children}
        </MovieListContext.Provider>
    );
};
