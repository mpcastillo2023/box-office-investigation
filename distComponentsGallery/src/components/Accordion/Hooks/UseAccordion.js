import { useEffect, useId, useRef, useState } from "react";
export default function UseAccordion(expanded) {
    const [isOpen, setOpen] = useState(!expanded);
    const [height, setHeight] = useState();
    const bodyRef = useRef(null);
    const [observer, setObserver] = useState(null);
    const accordionRef = useRef(null);
    const accordionId = useId();
    const handleisOpenAccordion = (event) => {
        event.preventDefault();
        setOpen((prevState) => !prevState);
    };
    const handleHeight = () => {
        setTimeout(() => {
            if (bodyRef.current && accordionRef.current) {
                const ariaExpanded = JSON.parse(accordionRef.current.getAttribute("aria-expanded") || "");
                if (ariaExpanded) {
                    setHeight(bodyRef.current.scrollHeight);
                }
                else {
                    setHeight(0);
                }
            }
        }, 20);
    };
    useEffect(() => {
        if (bodyRef.current && accordionRef.current && observer === null) {
            const newObserver = new MutationObserver(handleHeight);
            newObserver.observe(accordionRef.current, {
                attributes: true,
                subtree: true,
                childList: true
            });
            setObserver(newObserver);
            return () => newObserver.disconnect();
        }
    }, []);
    useEffect(() => {
        if (expanded)
            setOpen(!expanded);
    }, [expanded]);
    const defaultHeight = isOpen ? 0 : "auto";
    const heightForElement = typeof height === "undefined" ? defaultHeight : height;
    return {
        accordionId,
        isOpen,
        accordionRef,
        bodyRef,
        heightForElement,
        handleisOpenAccordion
    };
}
