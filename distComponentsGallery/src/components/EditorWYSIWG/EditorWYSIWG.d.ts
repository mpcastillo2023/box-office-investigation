import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Styles/styles.scss";
export type QuillEditor = ReactQuill["editor"];
type Props = {
    /**
     * Callback function to be called after any change occurs in the editor.
     * It receives the HTML content of the editor as an argument.
     * @param {(html: string) => void}
     */
    onChange?: (html: string) => void;
    /**
     * Default value to be used as an initial value in the editor.
     * It can be any HTML content represented as a string. Defaults to an empty string.
     * @param {string}
     */
    value?: string;
    /**
     * A boolean to define whether the editor is disabled. Defaults to false.
     * If true, the editor's opacity is reduced, and all editing functions are disabled.
     * @param {boolean}
     */
    disabled?: boolean;
    /**
     * A boolean to define whether the link modal should open. Defaults to false.
     * @param {boolean}
     */
    withLinkModal?: boolean;
    /**
     * A boolean to define whether link target is _blank. Defaults to false.
     * @param {boolean}
     */
    isNoTargetLink?: boolean;
    /**
     * Links default href. All links will default to the string, only use in edge cases.
     * @param {boolean}
     */
    customFormatsHandler?: Record<string, (quill: QuillEditor) => void>;
};
/**
 * EditorWYSIWG is a rich-text editor component built on top of ReactQuill.
 * It provides a What You See Is What You Get (WYSIWYG) interface for editing HTML content.
 * The component includes standard text formatting options along with custom modal features for editing code and links.
 * It allows integration with custom onChange handlers, and can be enabled or disabled according to need.
 *
 * @param {Props} props - Props for the EditorWYSIWG component.
 * @returns {JSX.Element | null}
 */
declare const EditorWYSIWG: (props: Props) => React.JSX.Element | null;
export default EditorWYSIWG;
