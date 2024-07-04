import {AxiosResponse} from "axios";

export interface MovieListQueryParams {
    include_adult?: boolean;
    include_video?: boolean;
    language?: string;
    page?: number;
    'release_date.gte'?: string;
    'release_date.lte'?: string;
    sort_by?: string;
    watch_region?: string;
    with_cast?: string;
    with_genres?: string;
    with_keywords?: string;
    with_original_language?: string;
    'with_runtime.gte'?: number;
    'with_runtime.lte'?: number;
    with_watch_providers?: string;
    year?: number;
}

export type MovieEntryDetails = { 
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type MovieListAxiosResponse = AxiosResponse<MovieListResponse>;

export type MovieListResponse = {
    page: number;
    results: MovieEntryDetails[];
    total_pages: number;
    total_results: number;
}

export type MovieDetailsQueryParams = {
    append_to_response: string;
}

export type MovieDetailsAxiosResponse = AxiosResponse<MovieDetailsResponse>;

export type MovieDetailsResponse =  {
    adult: boolean;
    backdrop_path: string;
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
    credits: {
        cast: {
            adult: boolean;
            gender: number;
            id: number;
            known_for_department: string;
            name: string;
            original_name: string;
            popularity: number;
            profile_path: string;
            cast_id: number;
            character: string;
            credit_id: string;
            order: number;
        }[];
    };
    videos: {
        results: {
            id: string;
            iso_639_1: string;
            iso_3166_1: string;
            key: string;
            name: string;
            site: string;
            size: number;
            type: string;
        }[];
    };
}
