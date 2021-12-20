interface HttpResponse<T> extends Response {
    responseBody?: T;
}

export const get = async<T>(request: RequestInfo): Promise<T | undefined> => {
    return await fetch(request)
        .then(response => response.json())
        .catch(ex => new Error("Fetch fail!"));
};
export default { get }
