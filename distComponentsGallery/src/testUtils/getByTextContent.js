import { screen } from "@testing-library/react";
const getByTextContent = (text) => {
    // Use when text is broken in multiple children
    return screen.getByText((content, element) => {
        const hasText = (element) => element?.textContent === text;
        const elementHasText = hasText(element);
        const childrenDontHaveText = Array.from(element?.children || []).every((child) => !hasText(child));
        return elementHasText && childrenDontHaveText;
    });
};
export default getByTextContent;
