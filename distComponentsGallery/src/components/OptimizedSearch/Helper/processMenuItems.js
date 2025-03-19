import { removeAccents } from "./removeAccents";
export const processMenuItems = (item, value) => {
    let children = [];
    if (!item.children || item.children.length === 0) {
        children = [item];
    }
    else {
        children = item.children
            .map((child) => {
            if (child.children) {
                return [child, ...child.children];
            }
            else {
                return [child];
            }
        })
            .flat(2);
    }
    const uniqueChildren = Array.from(new Set(children.map((child) => child.text)))
        .map((text) => {
        return children.find((child) => child.text === text);
    })
        .filter((child) => child !== undefined);
    const matchingChildren = uniqueChildren.filter((child) => {
        return removeAccents(child.text).includes(removeAccents(value));
    });
    return matchingChildren;
};
