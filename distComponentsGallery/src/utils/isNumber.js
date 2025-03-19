function isNumber(value) {
    return value !== "" && !isNaN(Number(value));
}
export default isNumber;
