export default function transformStringToDate(dateString) {
    if (dateString !== "" && dateString.includes("/")) {
        const month = dateString.split("/")[1];
        const day = dateString.split("/")[0];
        const year = dateString.split("/")[2];
        const openingDateDefaultValue = new Date(`${month}/${day}/${year}`);
        return openingDateDefaultValue;
    }
    else if (dateString !== "" && dateString.includes("-")) {
        const dateArray = dateString.split("-");
        const month = dateArray[1];
        const day = dateArray[2];
        const year = dateArray[0];
        const openingDateDefaultValue = new Date(`${month}/${day}/${year}`);
        return openingDateDefaultValue;
    }
    else {
        return new Date();
    }
}
