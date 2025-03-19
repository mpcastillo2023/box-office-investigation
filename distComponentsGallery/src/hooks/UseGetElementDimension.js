import { useCallback, useEffect, useState } from "react";
export default function UseGetElementDimension() {
    const [rect, setRect] = useState();
    const [node, setNode] = useState(null);
    const elementRef = useCallback((node) => {
        if (node !== null) {
            setRect(node.getBoundingClientRect());
            setNode(node);
        }
    }, []);
    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            if (node !== null) {
                setRect(node.getBoundingClientRect());
            }
        });
        const mutationObserver = new MutationObserver(() => {
            if (node !== null) {
                setRect(node.getBoundingClientRect());
            }
        });
        if (node !== null) {
            resizeObserver.observe(node);
            mutationObserver.observe(node, { attributes: true, childList: true });
            node.addEventListener("click", () => {
                setRect(node.getBoundingClientRect());
            });
        }
        return () => {
            resizeObserver.disconnect();
            mutationObserver.disconnect();
        };
    }, [node]);
    return {
        elementRef,
        rect,
        node
    };
}
