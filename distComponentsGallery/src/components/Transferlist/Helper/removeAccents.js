export const removeAccents = (text) => {
    if (text) {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }
    return "";
};
