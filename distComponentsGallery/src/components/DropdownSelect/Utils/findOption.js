const findOption = (optionList, optionValueToFind) => {
    const optionFound = optionList.find((option) => {
        if (typeof optionValueToFind === "string" &&
            typeof option.optionValue !== "string") {
            return JSON.stringify(option.optionValue) === optionValueToFind;
        }
        else {
            return option.optionValue === optionValueToFind;
        }
    });
    return optionFound;
};
export default findOption;
