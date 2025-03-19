const checkEditorText = (textToCheck, screen) => {
    const editor = screen.container.querySelector(".ql-editor");
    if (editor === null)
        throw new Error("No editor found");
    expect(editor).toHaveTextContent(textToCheck);
};
export default checkEditorText;
