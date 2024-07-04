
export const API_BASE_URL = 'https://api.themoviedb.org/3';


export const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmJkNWY2YjJkOGVmOWMwYzg5MThkNDFmZTI4NzkyNyIsIm5iZiI6MTcxOTk1MDYzMy44MzExOTcsInN1YiI6IjY2ODQ1OTRiZGRlZmMxNDY2MDliMmE5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kk4A2dVZwMH7KuR00lTmpDPDsloBSSAvfoQa1j-X9fo'

export const QUERY_KEYS = {
    GET_MOVIE_LIST: 'GET_MOVIE_LIST',
    GET_MOVIE_DETAILS: 'GET_MOVIE_DETAILS',
}

export const ENDPOINT = {
    MOVIE_LIST_API: `${API_BASE_URL}/discover/movie`,
    MOVIE_DETAILS_API: `${API_BASE_URL}/movie`,
}