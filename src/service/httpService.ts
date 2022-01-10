import { baseStarWarsURL } from "./baseURL";
import { ICharachter, ICharachterData } from "../model/charachter";
import { IMovie } from "../model/movie";

interface HttpResponse<T> extends Response {
    responseBody?: T;
}

export const HTTP = async<T>(request: RequestInfo): Promise<T | undefined> => {
    const response: HttpResponse<T> = await fetch(request);
    try {
        response.responseBody = await response.json();
    } catch (ex) {
        throw new Error("Fetch fail");
    }
    if (!response.ok) {
        throw new Error("Fetch fail");
    }
    return response.responseBody;
}

export module CharacterService {

    export const page = async (page: number): Promise<ICharachterData[]> => {
        const url: string = `${baseStarWarsURL}people?page=${page.toString()}`;

        const data: ICharachter | undefined = await HTTP<ICharachter>(url);
        if (data) {
            return data.results;
        }
        return [];
    }

    export const byId = async (name: string): Promise<ICharachterData | undefined> => {
        const url: string = `${baseStarWarsURL}people/${name}`;

        const data: ICharachterData | undefined = await HTTP<ICharachterData>(url);
        if (data) {
            return data;
        }
        return undefined;
    }

}

export module MovieService {

    export const getAll = async (urls: string[]): Promise<IMovie[]> => {
        const movies: IMovie[] = await Promise.all(
            urls.map(
                //minden url címen egyesével végigmegy és összegyűjti
                async (url: string) => {
                    const movie: IMovie | undefined = await HTTP<IMovie>(url);
                    return movie!; //biztos hogy létezik
                }
            )
        );

        return movies;
    }

}