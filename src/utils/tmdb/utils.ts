import {ACCESS_TOKEN} from "@/utils/tmdb/constants";

export const getHeaders = () => ({
        accept: 'application/json',
        Authorization : 'Bearer ' + ACCESS_TOKEN
    }
);

export const urlWIthParams = (url: string, params: any) => {
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach(key => searchParams.append(key, params[key]));
    return `${url}?${searchParams.toString()}`;
}

export const getImageUrl = (path: string) => `https://image.tmdb.org/t/p/w500${path}`;