export default function UseGetElementDimension(): {
    elementRef: (node: Element | null) => void;
    rect: DOMRect | undefined;
    node: Element | null;
};
