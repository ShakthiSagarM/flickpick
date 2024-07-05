import React, { useState } from "react";
import styles from './CollapsedMovieCard.module.scss';
import {getImageUrl} from "@/api/utils";
import {MovieEntryDetails} from "@/api/types";

interface CollapsedMovieCardProps extends MovieEntryDetails {
    toggleExpand: () => void;
}

const CollapsedMovieCard: React.FC<CollapsedMovieCardProps> = (props) => {
    const {title, release_date, overview, genre_ids, vote_average, toggleExpand, poster_path} = props;
    return (
        <div className={`${styles['movie-card']}`}
                 onClick={toggleExpand}>
            <div className={styles['movie-card-poster']}>
                <img src={getImageUrl(poster_path)} alt={title}/>
            </div>
            <div className={styles['movie-card-info']}>
                <div className={styles['movie-card-info-row']}>
                    <span className={styles['movie-card-title']}>{title}</span>
                    <span className={styles['movie-card-release-date']}>{release_date}</span>
                </div>
                <div className={styles['movie-card-description']}>{overview}</div>
                <div className={styles['movie-card-info-row']}>
                    <div className={styles['movie-card-rating']}>
                        <div className={styles['movie-card-rating-icon']}></div>
                        <div className={styles['movie-card-rating-info']}>{vote_average}</div>
                    </div>
                    <span className={styles['movie-card-genres']}>{genre_ids}</span>
                </div>
            </div>
        </div>
    );
};

export default CollapsedMovieCard;
