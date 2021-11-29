import { request } from "http";
import { promises } from "dns";

interface IHttpResponse<T> extends Response {
    responseBody?: T;
}

export module MovieService {

    export const getMovies = async<T>(request: RequestInfo): Promise<T | undefined> => {

        const response: IHttpResponse<T> = await fetch(request);
        try {
            response.responseBody = await response.json();
        } catch (ex) {
            throw new Error("Fetch fail!");
        }

        if (!response.ok) {
            throw new Error("Fetch fail!");
        }
        return response.responseBody;
    }
} 