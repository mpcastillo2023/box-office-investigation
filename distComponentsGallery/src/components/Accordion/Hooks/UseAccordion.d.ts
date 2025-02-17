export default function UseAccordion(expanded: boolean): {
    accordionId: string;
    isOpen: boolean;
    accordionRef: import("react").RefObject<HTMLDivElement>;
    bodyRef: import("react").RefObject<HTMLDivElement>;
    heightForElement: string | number;
    handleisOpenAccordion: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
