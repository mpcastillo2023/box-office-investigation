export const createTranslate = (position) => {
    if (position !== null) {
        return `translate(
            ${position?.clientX}px , ${position?.clientY}px
          )`;
    }
    else {
        return "";
    }
};
