import React, {useState} from "react";
import {useQuery} from "react-query";
import {MovieEntryDetails, MovieListAxiosResponse, MovieListQueryParams, MovieListResponse} from "@/api/types";
import axios, {AxiosError} from "axios";
import {ENDPOINT, QUERY_KEYS} from "@/api/constants";
import {getHeaders, urlWIthParams} from "@/api/utils";
import MovieCarousel from "@/components/Movie/MovieCarousel/MovieCarousel";

interface RoomProps {}

const Room: React.FC<RoomProps> = () => {

    const [movies, setMovies] = React.useState<MovieEntryDetails[]>([]);

    const [page, setPage] = React.useState<number>(1);

    const params : MovieListQueryParams ={
        include_adult: false,
        include_video: false,
        page : page
    }

    const { data, isLoading, isError, error,refetch } = useQuery<MovieListAxiosResponse, AxiosError>(
        QUERY_KEYS.GET_MOVIE_LIST,
        () => axios.get(urlWIthParams(ENDPOINT.MOVIE_LIST_API, params), { headers: getHeaders() }),
        {
            refetchOnWindowFocus: false,
            enabled: true}
    );

    const addUniqueMovies = (newMovies: MovieEntryDetails[]) => {
        const uniqueNewMovies = newMovies.filter((newMovie) => !movies.some((movie) => movie.id === newMovie.id));
        setMovies((prevMovies) => [...prevMovies, ...uniqueNewMovies]);
    };

    React.useEffect(() => {
        if(data && data.data.results.length > 0){
            addUniqueMovies(data.data.results);
        }
    }, [data]);


    React.useEffect(() => {
        if(page > 1){
            refetch();
        }
    }, [page]);

    const getNextPage = () => {
        setPage(page + 1);
    }

  return (
      <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
      }}>
          {movies && movies.length !==0 && (<MovieCarousel movies={movies} getNextPage={getNextPage}/>)}
      </div>
  );
};

export default Room;