import { Quill } from "react-quill";
const Link = Quill.import("formats/link");
class LinkFormat extends Link {
    static create(arg) {
        if (typeof arg === "object") {
            const { href = "", isBlank = true, title } = arg || {};
            const node = super.create(href);
            const hrefValue = this.sanitize(href);
            node.setAttribute("href", hrefValue);
            if (!isBlank) {
                node.removeAttribute("target");
            }
            if (title) {
                node.setAttribute("title", title);
            }
            return node;
        }
        else if (typeof arg === "string") {
            const node = Link.create(arg);
            const href = Link.sanitize(arg);
            node.setAttribute("href", href);
            // node.removeAttribute("target");
            return node;
        }
    }
    format(name, value) {
        super.format(name, value);
    }
}
const editorCustomLinkFormat = () => {
    Quill.register(LinkFormat, true);
};
export default editorCustomLinkFormat;
