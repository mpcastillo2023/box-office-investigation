import { useLocation } from "react-router-dom";
export default function UseUrlPathArray(numberOfRemovedPaths = 0) {
    const { pathname } = useLocation();
    const urlParts = pathname.split("/").filter((urlPart) => urlPart !== "");
    const removedParts = [];
    for (let i = 0; i < numberOfRemovedPaths; i++) {
        removedParts.push(urlParts.shift());
    }
    return {
        urlParts,
        removedParts
    };
}
