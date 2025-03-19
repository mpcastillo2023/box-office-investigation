import { patch } from "./patch";
export async function patchQuery({ endpoint, data }) {
    return patch(`${import.meta.env.VITE_API_BASE_URL}/${endpoint}`, data);
}
