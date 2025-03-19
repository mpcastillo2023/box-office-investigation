export const blockInvalidChar = (e, type) => {
    if (type === "number") {
        return ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
    }
};
