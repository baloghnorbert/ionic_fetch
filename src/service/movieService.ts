import { IMovie } from "../model/movie";
import { baseURL } from "./baseURL";
import api from './abstractHttpService';

export module MovieService {

    export const getMovies = () => {
        return api.get<IMovie[]>(baseURL);
    }

    export const getMovieById = (id: String) => {
        const filmURL = baseURL + `/${id}`;
        return api.get<IMovie>(filmURL);
    }
}