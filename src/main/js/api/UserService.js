import httpClient from "./HttpClient.js";

export const getAll = async (page, search) => {
    //console.log(page)
    const url = `/users?_limit=5&_page=` 
        + (page ?? 1) 
        + (search && search !== '' ? `&firstName_like=${search}`:'') 
    console.log(url)
    const response = await httpClient.get(url);
    //console.log(response.data)
    // console.log(response.headers['x-total-count'])
    const total = response.headers['x-total-count']
    const pages = total / 10;
    //console.log(pages)
    return {users: response.data, total: pages};
}

export const getOne = async (id) => {
    const response = await httpClient.get(`/users?id=${id}`);
    return response.data;
}

export const updateUser = async (id, userData) => {
    const response = await httpClient.patch(`/users/${id}`, userData);
    return response.data;
}