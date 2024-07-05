import React, { useState, useRef } from "react";
import styles from "./MovieCarousel.module.scss";
import MovieCard from "@/components/Movie/MovieCard/MovieCard";
import {MovieEntryDetails} from "@/api/types";
import {useMovieList} from "@/contexts/MovieListProvider";


interface MovieCarouselProps {
}

const MovieCarousel: React.FC<MovieCarouselProps> = (props) => {

    const { movieList, getNextPage } = useMovieList();
    const [currentIndex, setCurrentIndex] = useState(0);

    console.log(movieList);
    React.useEffect(() => {
        if (currentIndex === movieList.length - 1) {
            getNextPage();
        }
    }, [currentIndex]);

    const disableNext = currentIndex === movieList.length - 1;
    const disablePrev = currentIndex === 0;

    const getNextIndex = () => {
        setCurrentIndex((currentIndex) => currentIndex + 1);
    }

    const getPrevIndex = () => {
        setCurrentIndex((currentIndex) => currentIndex - 1);
    }


    return (
        <div className={styles['movie-carousel']}>
            <button className={styles['movie-carousel-left-arrow']} onClick={getPrevIndex} disabled={disablePrev}>{'<'}</button>
            <MovieCard {...movieList[currentIndex]} />
            <button className={styles['movie-carousel-right-arrow']} onClick={getNextIndex} disabled={disableNext}>{'>'}</button>
        </div>
    );
}

export default MovieCarousel;
