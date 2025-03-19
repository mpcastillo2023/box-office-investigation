import React from "react";
import { createPortal } from "react-dom";
/**
 * Portal component provides a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
 * It can create an HTML element and append or prepend it to the target selector with optional class names and roles.
 *
 * @param {Props} props - Props for the Portal component.
 * @returns {React.ReactPortal}
 */
export const Portal = ({ children, className = "root-portal", element = "div", role, append = true, target = "body" }) => {
    const [container] = React.useState(() => {
        const el = document.createElement(element);
        const classNamesArray = className.split(" ");
        classNamesArray.forEach((className) => {
            if (className.trim().length > 0) {
                el.classList.add(className);
            }
        });
        if (role) {
            el.setAttribute("role", role);
        }
        el.setAttribute("tabIndex", "1");
        return el;
    });
    React.useEffect(() => {
        if (append) {
            document.querySelector(target)?.appendChild(container);
        }
        else {
            document.querySelector(target)?.prepend(container);
        }
        return () => {
            document.querySelector(target)?.removeChild(container);
        };
    }, []);
    return createPortal(children, container);
};
