declare function isInViewport(element: HTMLElement): {
    isInView: boolean;
    isNeartoTop: boolean;
} | undefined;
export default isInViewport;
