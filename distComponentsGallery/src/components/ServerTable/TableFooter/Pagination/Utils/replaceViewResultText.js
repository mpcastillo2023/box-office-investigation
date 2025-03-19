export const replacedViewResultText = (text, startIndex, endIndex, totalItems) => {
    const startIndexRegex = /{startIndex}/g;
    const endIndexRegex = /{endIndex}/g;
    const totalItemsRegex = /{totalItems}/g;
    const replacedViewResultText = text
        .replace(startIndexRegex, startIndex?.toString())
        .replace(endIndexRegex, endIndex?.toString())
        .replace(totalItemsRegex, totalItems?.toString());
    return replacedViewResultText;
};
