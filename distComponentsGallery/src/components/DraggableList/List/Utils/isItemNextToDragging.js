export const isItemNextToDragging = (movingToIndex, listItemIndex) => {
    return (movingToIndex !== null &&
        (movingToIndex + 1 === listItemIndex ||
            movingToIndex === listItemIndex ||
            movingToIndex - 1 === listItemIndex));
};
