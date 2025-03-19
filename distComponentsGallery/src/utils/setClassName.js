export const setClassName = (className) => className
    ? Array.isArray(className)
        ? className.join(" ").trim()
        : className
    : className;
