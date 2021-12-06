import { request } from "http";
import { promises } from "dns";
import { AbstractService } from "./abstractHttpService";
import { IMovie } from "../model/movie";
import { baseURL } from "./baseURL";

interface IHttpResponse<T> extends Response {
    responseBody?: T;
}

export module MovieService {

    export const getMovies = async (): Promise<IMovie[] | undefined> => {
        return AbstractService.get<IMovie[]>(baseURL);
    }

    export const getMovieById = async (id: String): Promise<IMovie | undefined> => {
        const filmURL = baseURL + `/${id}`;
        return AbstractService.get<IMovie>(filmURL);
    }
} 