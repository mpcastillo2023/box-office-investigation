import { matchPath, useLocation } from "react-router";
const UseIsNestedLinkActive = () => {
    const { pathname } = useLocation();
    const isNestedLinkActive = (url) => {
        const isLinkActive = matchPath({ path: url, end: false }, `${pathname}`);
        return isLinkActive;
    };
    return isNestedLinkActive;
};
export default UseIsNestedLinkActive;
