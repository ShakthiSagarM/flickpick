import React, { useState, useRef } from "react";
import styles from "./MovieCarousel.module.scss";
import MovieCard from "@/components/Movie/MovieCard/MovieCard";
import {MovieEntryDetails} from "@/utils/tmdb/types";
import {useMovieList} from "@/contexts/MovieListProvider";
import {useUser} from "@/contexts/UserProvider";


interface MovieCarouselProps {
}

const MovieCarousel: React.FC<MovieCarouselProps> = (props) => {

    const { movieList, getNextPage } = useMovieList();

    const [currentMovieList, setCurrentMovieList] = useState<MovieEntryDetails[]>(movieList);

    const [currentIndex, setCurrentIndex] = useState(0);

    const {updateRightSwipedMovies, updateLeftSwipedMovies} = useUser();

    const [disableSwipe, setDisableSwipe] = useState(false);

    React.useEffect(() => {
        if (currentIndex === currentMovieList.length - 1) {
            setDisableSwipe(true);
            getNextPage();
            setCurrentIndex(0);
        }
    }, [currentIndex]);

    React.useEffect(() => {
        setCurrentMovieList(movieList)
    }, [movieList]);

    React.useEffect(() => {
        if (currentMovieList.length > 0) {
            setDisableSwipe(false);
        }
    }, [currentMovieList]);

    const onLeftSwipe = () => {
        updateLeftSwipedMovies(currentMovieList[currentIndex].id);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }

    const onRightSwipe = () => {
        updateRightSwipedMovies(currentMovieList[currentIndex].id);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }


    return (
        <div className={styles['movie-carousel']}>
            <button className={styles['movie-carousel-left-arrow']} onClick={onLeftSwipe} disabled={disableSwipe} >{'<'}</button>
            <MovieCard {...movieList[currentIndex]} />
            <button className={styles['movie-carousel-right-arrow']} onClick={onRightSwipe} disabled={disableSwipe}>{'>'}</button>
        </div>
    );
}

export default MovieCarousel;
