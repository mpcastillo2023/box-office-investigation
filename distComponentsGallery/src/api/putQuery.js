import { putRequestNoJson } from "./put";
export async function putQuery({ endpoint, data }) {
    return putRequestNoJson(`${import.meta.env.VITE_API_BASE_URL}/${endpoint}`, data);
}
