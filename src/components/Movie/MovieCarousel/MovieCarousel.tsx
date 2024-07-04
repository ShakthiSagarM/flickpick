import React, { useState, useRef } from "react";
import styles from "./MovieCarousel.module.scss";
import MovieCard from "@/components/Movie/MovieCard/MovieCard";
import {MovieEntryDetails} from "@/api/types";


interface MovieCarouselProps {
    movies: MovieEntryDetails[];
    getNextPage: () => void;
}

const MovieCarousel: React.FC<MovieCarouselProps> = (props) => {
    const { movies } = props;
    const [currentIndex, setCurrentIndex] = useState(0);

    React.useEffect(() => {
        if (currentIndex === movies.length - 1) {
            props.getNextPage();
        }
    }, [currentIndex]);


    return (
        <div className={styles['movie-carousel']}>
            <button className={styles['movie-carousel-left-arrow']} onClick={() => setCurrentIndex(currentIndex - 1)} disabled={currentIndex === 0}>Previous</button>
            <MovieCard {...movies[currentIndex]} />
            <button className={styles['movie-carousel-right-arrow']} onClick={() => setCurrentIndex(currentIndex + 1)} disabled={currentIndex === movies.length - 1}>Next</button>
        </div>
    );
}

export default MovieCarousel;
