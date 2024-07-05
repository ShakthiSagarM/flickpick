import React from "react";
import styles from './ExpandedMovieCard.module.scss';
import {MovieDetailsAxiosResponse, MovieDetailsQueryParams, MovieDetailsResponse, MovieEntryDetails} from "@/api/types";
import { getHeaders, getImageUrl, urlWIthParams } from "@/api/utils";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { ENDPOINT, QUERY_KEYS } from "@/api/constants";

interface ExpandedMovieCardProps extends MovieEntryDetails {
    toggleExpand: () => void;
}

const ExpandedMovieCard: React.FC<ExpandedMovieCardProps> = (props) => {
    const [movieDetails, setMovieDetails] = React.useState<MovieDetailsResponse>();
    const { id, toggleExpand } = props;

    const params: MovieDetailsQueryParams = {
        append_to_response: 'credits,image,videos',
    };

    const { data, isLoading, isError, error, refetch } = useQuery<MovieDetailsAxiosResponse, AxiosError>(
        QUERY_KEYS.GET_MOVIE_DETAILS,
        () => axios.get(urlWIthParams(`${ENDPOINT.MOVIE_DETAILS_API}/${id}`, params), { headers: getHeaders() }),
        {
            refetchOnWindowFocus: false,
            enabled: !!id
        }
    );

    React.useEffect(() => {
        if (data && data.data) {
            setMovieDetails(data.data);
        }
    }, [data]);

    React.useEffect(() => {
        refetch();
    }, [id]);



    const topCrew = movieDetails?.credits?.cast
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 7);

    const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);

    const renderVideos = () => {

        if (!movieDetails?.videos || movieDetails.videos.results.length === 0) {
            return null;
        }

        const videos = movieDetails.videos.results;

        const nextVideo = () => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        };

        const prevVideo = () => {
            setCurrentVideoIndex((prevIndex) => (prevIndex - 1) % videos.length);
        };

        return (
            <div className={styles['movie-card-videos']}>
                <div className={styles['video-container']}>
                    <iframe
                        className={styles['video-iframe']}
                        src={`https://www.youtube.com/embed/${videos[currentVideoIndex].key}`}
                        title={videos[currentVideoIndex].name}
                        allowFullScreen
                    ></iframe>
                    <button className={styles['prev-button']} onClick={prevVideo} disabled={currentVideoIndex === 0}>{'<'}</button>
                    <button className={styles['next-button']} onClick={nextVideo} disabled={currentVideoIndex === videos.length-1}>{'>'}</button>
                </div>
                <div className={styles['video-list']}>
                </div>
            </div>
        );
    };

    return (
        <div className={styles['movie-card']} >
            <div className={styles['movie-card-poster']}>
                <img src={getImageUrl(movieDetails?.poster_path || "")} alt={movieDetails?.title || "Movie Poster"} />
            </div>
            <div className={styles['movie-card-info']}>
                <div className={styles['movie-card-movie-info']}>
                    <div className={styles['movie-card-info-row']}>
                        <span className={styles['movie-card-title']}>{movieDetails?.title}</span>
                        <div className={styles['movie-card-close']} onClick={toggleExpand}>X</div>
                    </div>
                    {movieDetails?.tagline && (
                        <span className={styles['movie-card-tagline']}>{movieDetails.tagline}</span>
                    )}
                    <span className={styles['movie-card-description']}>{movieDetails?.overview}</span>
                    <div className={styles['movie-card-info-row']}>
                    <span className={styles['movie-card-genres']}>
                        {movieDetails?.genres.map(genre => genre.name).join(", ")}
                    </span>
                        <div className={styles['movie-card-rating']}>
                            <div className={styles['movie-card-rating-icon']}></div>
                            <div className={styles['movie-card-rating-info']}>{movieDetails?.vote_average}</div>
                        </div>
                    </div>
                    <div className={styles['movie-card-info-row']}>
                        <span className={styles['movie-card-release-date']}>{movieDetails?.release_date}</span>
                        <span className={styles['movie-card-runtime']}>{movieDetails?.runtime} mins</span>
                    </div>
                </div>
                {topCrew && topCrew.length > 0 && (
                    <div className={styles['movie-card-crew']}>
                        <span className={styles['movie-card-crew-title']}>Top Cast</span>
                        <div className={styles['movie-card-crew-list']}>
                            {topCrew.map(crew => (
                                <div key={crew.id} className={styles['movie-card-crew-item']}>
                                    <img src={getImageUrl(crew.profile_path)} alt={crew.name}
                                         className={styles['crew-image']}/>
                                    <div>
                                        <span>{crew.name}</span>
                                        <span>as {crew.character}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {renderVideos()}
            </div>
        </div>
    );
};

export default ExpandedMovieCard;
