const writeRawHtmlIntoEditor = async (html, user, screen) => {
    const codeModalButton = screen.container.querySelector(".ql-rawEditor");
    await user.click(codeModalButton);
    const rawEditor = await screen.findByRole("textbox", { name: "raw-editor" });
    await user.clear(rawEditor);
    await user.type(rawEditor, html);
    const confirmButton = screen.getByRole("button", { name: "Save" });
    await user.click(confirmButton);
};
export default writeRawHtmlIntoEditor;
