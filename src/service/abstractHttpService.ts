interface IHttpResponse<T> extends Response {
    responseBody?: T;
}

export module AbstractService {
    export const get = async<T>(request: RequestInfo): Promise<T | undefined> => {
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