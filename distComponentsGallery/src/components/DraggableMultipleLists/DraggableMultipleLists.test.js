import { render, screen } from "@testing-library/react";
import DraggableMultipleLists from "./DraggableMultipleLists";
import React from "react";
import { expect, test, vi } from "vitest";
const mockFn = vi.fn();
test("Render columns properly", () => {
    render(React.createElement(DraggableMultipleLists, { onChange: mockFn, value: [
            {
                title: "Inactivos",
                items: [
                    { id: 1, itemText: "Primer  item" },
                    { id: 2, itemText: "Segundo  item" }
                ]
            },
            {
                title: "Activos",
                items: [
                    { id: 3, itemText: "Tercer  item" },
                    { id: 4, itemText: "Cuarto  item" }
                ]
            },
            {
                title: "Seleccionados",
                items: [
                    { id: 5, itemText: "Quinto  item" },
                    { id: 6, itemText: "Sexto  item" }
                ]
            },
            {
                title: "Deshabilitados",
                hidden: true,
                items: [
                    { id: 7, itemText: "Septimo  item" },
                    { id: 8, itemText: "Octavo item" }
                ]
            }
        ] }));
    screen.getByRole("heading", { level: 6, name: "Inactivos" });
    screen.getByRole("heading", { level: 6, name: "Activos" });
    screen.getByRole("heading", { level: 6, name: "Seleccionados" });
    const hiddenTitle = screen.queryByRole("heading", {
        level: 6,
        name: "Deshabilitados"
    });
    expect(hiddenTitle).not.toBeInTheDocument();
});
