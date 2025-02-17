import { setupWorker } from "msw/browser";
import { handlers } from "./apiHandlers/apiHandlers";

export const worker = setupWorker(...handlers);
