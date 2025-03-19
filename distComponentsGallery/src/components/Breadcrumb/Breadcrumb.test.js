/* eslint-disable react/jsx-no-literals */
import React from "react";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import { expect, test } from "vitest";
test("Should display links with default config", () => {
    render(React.createElement(MemoryRouter, { initialEntries: ["/dashboard/datos/basicos"] },
        React.createElement(Breadcrumb, { dividers: React.createElement("span", null, "/") })));
    const firstLink = screen.getByRole("link", { name: "dashboard" });
    const secondLink = screen.getByRole("link", { name: "datos" });
    const thirdLink = screen.getByRole("link", { name: "basicos" });
    expect(firstLink).toHaveAttribute("href", "/dashboard");
    expect(secondLink).toHaveAttribute("href", "/dashboard/datos");
    expect(thirdLink).toHaveAttribute("href", "/dashboard/datos/basicos");
});
test("Should remove paths", () => {
    render(React.createElement(MemoryRouter, { initialEntries: ["/dashboard/datos/basicos"] },
        React.createElement(Breadcrumb, { numberOfRemovedPaths: 1, dividers: React.createElement("span", null, "/") })));
    const firstLink = screen.getByRole("link", { name: "datos" });
    const secondLink = screen.getByRole("link", { name: "basicos" });
    const dashboardLink = screen.queryByRole("link", { name: "dashboard" });
    expect(dashboardLink).not.toBeInTheDocument();
    expect(firstLink).toHaveAttribute("href", "/dashboard/datos");
    expect(secondLink).toHaveAttribute("href", "/dashboard/datos/basicos");
});
test("Should display dividers", () => {
    render(React.createElement(MemoryRouter, { initialEntries: ["/dashboard/datos"] },
        React.createElement(Breadcrumb, { dividers: React.createElement("span", null, "/") })));
    screen.getByRole("link", { name: "datos" });
    screen.getByRole("link", { name: "dashboard" });
    screen.getByText("/");
});
test("Should display translations", () => {
    render(React.createElement(MemoryRouter, { initialEntries: ["/dashboard/datos/basicos"] },
        React.createElement(Breadcrumb, { dividers: React.createElement("span", null, "/"), textTranslation: {
                dashboard: "Admin",
                ["dashboard/datos"]: "Data",
                ["dashboard/datos/basicos"]: "Basic"
            } })));
    const firstLink = screen.getByRole("link", { name: "Admin" });
    const secondLink = screen.getByRole("link", { name: "Data" });
    const thirdLink = screen.getByRole("link", { name: "Basic" });
    expect(firstLink).toHaveAttribute("href", "/dashboard");
    expect(secondLink).toHaveAttribute("href", "/dashboard/datos");
    expect(thirdLink).toHaveAttribute("href", "/dashboard/datos/basicos");
    const dividers = screen.getAllByText("/");
    expect(dividers.length).toBe(2);
});
