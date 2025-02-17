import { setupServer } from "msw/node";
import { handlers } from "./apiHandlers/apiHandlers";

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);
