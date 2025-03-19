import { Breadcrumb } from "../components";
import React from "react";
import { MemoryRouter } from "react-router-dom";
const meta = {
    title: "Breadcrumb",
    component: Breadcrumb,
    tags: ["autodocs"],
    decorators: [
        (Story) => (React.createElement(MemoryRouter, { initialEntries: ["/dashboard/datos/basicos"] },
            React.createElement(Story, null)))
    ],
    args: {
        numberOfRemovedPaths: 0,
        textTranslation: {
            dashboard: "Admin",
            ["dashboard/datos"]: "Data",
            ["dashboard/datos/basicos"]: "Basic"
        }
    }
};
export default meta;
export const Primary = {
    args: { numberOfRemovedPaths: 0 }
};
