import { useEffect, useRef, useState } from "react";
import createEditorModules from "../Utils/createEditorModules";
import editorSizeList from "../Utils/editorSizeList";
import editorCustomLinkFormat from "../Utils/LinkFormats/editorCustomLinkFormat";
import { objectHasProperty } from "@cg-utils";
import { isInViewport } from "@cg-utils";
export default function UseEditorWYSIWG({ onChange, disabled = false, withLinkModal = false, customFormatsHandler }) {
    const [editorValue, setEditorValue] = useState("");
    const [modules, setModules] = useState(null);
    const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
    const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
    const [rawValue, setRawValue] = useState("");
    const editorRef = useRef(null);
    const handleChange = (html, _, __, editor) => {
        if (!disabled) {
            if (onChange) {
                if (editor.getLength() > 1) {
                    onChange(html);
                }
                else {
                    onChange("");
                }
            }
            else {
                setEditorValue(html);
            }
        }
    };
    useEffect(() => {
        if (isCodeModalOpen) {
            setRawValue(editorValue);
        }
    }, [isCodeModalOpen]);
    const createHandlers = () => {
        const handlers = {
            rawEditor: () => {
                setIsCodeModalOpen(true);
            }
        };
        if (withLinkModal) {
            handlers.link = () => {
                setIsLinkModalOpen(true);
            };
        }
        if (customFormatsHandler) {
            for (const format in customFormatsHandler) {
                if (objectHasProperty(customFormatsHandler, format)) {
                    const callback = customFormatsHandler[format];
                    handlers[format] = () => {
                        const quill = editorRef?.current?.getEditor();
                        callback(quill);
                    };
                }
            }
        }
        return handlers;
    };
    useEffect(() => {
        editorSizeList();
        editorCustomLinkFormat();
        const handlers = createHandlers();
        const modules = createEditorModules(handlers);
        setModules(modules);
    }, []);
    const rawOnChangeHandler = (e) => {
        if (!disabled) {
            setRawValue(e.target.value);
        }
    };
    const isInView = isInViewport(document.querySelector(".editor"));
    return {
        handleChange,
        modules,
        rawValue,
        setRawValue,
        editorValue,
        setEditorValue,
        setIsCodeModalOpen,
        isCodeModalOpen,
        rawOnChangeHandler,
        editorRef,
        isLinkModalOpen,
        setIsLinkModalOpen,
        isInView
    };
}
