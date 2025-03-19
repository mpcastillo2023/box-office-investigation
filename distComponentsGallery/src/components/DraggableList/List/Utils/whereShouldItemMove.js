export const whereShouldItemMove = (listRefCurrent, mousePosition, listItemIndex, movingToIndex, itemPositionPreview) => {
    const listItemRect = listRefCurrent.getBoundingClientRect();
    const topPositionOfListItem = Math.round(listItemRect.top);
    const halfOfElement = Math.round(listItemRect.height / 2);
    const shouldMoveUp = topPositionOfListItem + halfOfElement < mousePosition.clientY;
    const shouldMoveDown = topPositionOfListItem + halfOfElement > mousePosition.clientY;
    const elementAlreadyMoved = listItemIndex === movingToIndex && itemPositionPreview !== null;
    return {
        shouldMoveUp,
        shouldMoveDown,
        elementAlreadyMoved
    };
};
