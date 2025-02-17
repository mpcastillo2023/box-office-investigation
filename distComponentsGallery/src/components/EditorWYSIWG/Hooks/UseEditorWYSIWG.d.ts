import React from "react";
import ReactQuill from "react-quill";
import EditorWYSIWG from "../EditorWYSIWG";
export default function UseEditorWYSIWG({ onChange, disabled, withLinkModal, customFormatsHandler }: React.ComponentProps<typeof EditorWYSIWG>): {
    handleChange: (html: string, _: unknown, __: unknown, editor: ReactQuill.UnprivilegedEditor) => void;
    modules: Record<string, unknown> | null;
    rawValue: string;
    setRawValue: React.Dispatch<React.SetStateAction<string>>;
    editorValue: string;
    setEditorValue: React.Dispatch<React.SetStateAction<string>>;
    setIsCodeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isCodeModalOpen: boolean;
    rawOnChangeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    editorRef: React.MutableRefObject<ReactQuill | null>;
    isLinkModalOpen: boolean;
    setIsLinkModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isInView: {
        isInView: boolean;
        isNeartoTop: boolean;
    } | undefined;
};
