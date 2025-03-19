function isInViewport(element) {
    if (element) {
        const rect = element.getBoundingClientRect();
        const isNeartoTop = rect.height >= rect.top;
        const isInView = rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        return { isInView, isNeartoTop };
    }
}
export default isInViewport;
