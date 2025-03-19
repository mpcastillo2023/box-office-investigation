import React from "react";
import { render, within } from "@testing-library/react";
import EditorWYSIWG from "../EditorWYSIWG"; // Replace with your component's path
import userEvent from "@testing-library/user-event";
import { writeRawHtmlIntoEditor } from "../../../testUtils/";
import { expect, test, vi } from "vitest";
// @vitest-environment jsdom
test("Updates react quill content", async () => {
    const mockFn = vi.fn();
    const screen = render(React.createElement(EditorWYSIWG, { onChange: mockFn }));
    const user = userEvent.setup();
    const editor = screen.container.querySelector(".ql-editor");
    if (editor === null)
        throw new Error("No editor found");
    await user.type(editor, "New content");
    within(editor).getByText("New content");
    expect(mockFn).toHaveBeenCalledTimes(11);
});
test("Code modal", async () => {
    const screen = render(React.createElement(EditorWYSIWG, null));
    const user = userEvent.setup();
    const editor = screen.container.querySelector(".ql-editor");
    if (editor === null)
        throw new Error("No editor found");
    await user.type(editor, "New content modal test");
    const codeModalButton = screen.container.querySelector(".ql-rawEditor");
    if (codeModalButton === null)
        throw new Error("No code modal found");
    await user.click(codeModalButton);
    screen.getByText("New content modal test");
});
test("Code modal change test", async () => {
    const screen = render(React.createElement(EditorWYSIWG, null));
    const user = userEvent.setup();
    await writeRawHtmlIntoEditor("<p>Raw editor change</p>", user, screen);
    const editor = screen.container.querySelector(".ql-editor");
    if (editor === null)
        throw new Error("No editor found");
    within(editor).getByText("Raw editor change");
});
