import { post } from "./post";
export async function postQuery({ endpoint, data }) {
    return post(`${import.meta.env.VITE_API_BASE_URL}/${endpoint}`, data);
}
