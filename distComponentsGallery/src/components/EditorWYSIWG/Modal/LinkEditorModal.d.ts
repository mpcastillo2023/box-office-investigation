import { Modal } from "@cg-components/index";
import React from "react";
import ReactQuill from "react-quill";
type Props = {
    editorRef: React.MutableRefObject<ReactQuill | null>;
} & Omit<React.ComponentProps<typeof Modal>, "onConfirmHandler" | "onCancelHandler" | "children">;
export default function LinkEditorModal({ editorRef, setIsModalOpen, isModalOpen }: Props): React.JSX.Element | null;
export {};
