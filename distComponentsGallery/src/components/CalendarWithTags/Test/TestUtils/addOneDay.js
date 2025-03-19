export function addOneDay(date) {
    const dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() + 1);
    return dateCopy;
}
