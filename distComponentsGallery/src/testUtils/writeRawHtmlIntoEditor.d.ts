import { RenderResult } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event";
declare const writeRawHtmlIntoEditor: (html: string, user: UserEvent, screen: RenderResult) => Promise<void>;
export default writeRawHtmlIntoEditor;
