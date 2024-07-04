import React, { useState } from "react";
import { MovieEntryDetails } from "@/api/types";
import ExpandedMovieCard from "@/components/Movie/MovieCard/ExpandedMovieCard";
import CollapsedMovieCard from "@/components/Movie/MovieCard/CollapsedMovieCard";

interface MovieCardProps extends MovieEntryDetails {}

const MovieCard: React.FC<MovieCardProps> = (props) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            {isExpanded? <ExpandedMovieCard {...props} toggleExpand={toggleExpand}/> : <CollapsedMovieCard {...props} toggleExpand={toggleExpand}/> }
        </>
    );
};

export default MovieCard;
