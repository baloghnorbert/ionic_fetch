import { request } from "http";
import { promises } from "dns";
import { AbstractService } from "./abstractHttpService";
import { IMovie } from "../model/movie";

interface IHttpResponse<T> extends Response {
    responseBody?: T;
}

export module MovieService {

    export const getMovies = async (request: RequestInfo): Promise<IMovie[] | undefined> => {
        return AbstractService.get<IMovie[]>(request);
    }

    export const getMovie = async (request: RequestInfo): Promise<IMovie | undefined> => {
        return AbstractService.get<IMovie>(request);
    }
} 