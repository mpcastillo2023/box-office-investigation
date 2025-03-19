import { render, screen, within } from "@testing-library/react";
import checkTableInput from "./Utils/checkTableInput";
import InputTable from "../InputTable";
import React from "react";
import userEvent from "@testing-library/user-event";
import checkTableContent from "../../../testUtils/checkTableContent";
const columns = [
    {
        name: "taxId",
        label: "Identificador",
        cellType: "number"
    },
    {
        name: "name",
        label: "Nombre",
        cellType: "string"
    }
];
const taxes = [
    {
        taxId: "1",
        name: "10%"
    },
    {
        taxId: "2",
        name: "5%"
    },
    {
        taxId: "3",
        name: "12%"
    },
    {
        taxId: "4",
        name: "20%"
    },
    {
        taxId: "5",
        name: "17%"
    },
    {
        taxId: "6",
        name: "12%"
    },
    {
        taxId: "7",
        name: "3%"
    }
];
describe("Testing basic input table", () => {
    beforeEach(() => {
        render(React.createElement(InputTable, { columns: columns, data: taxes }));
    });
    test("Render Titles properly", async () => {
        for (let index = 0; index < columns.length; index++) {
            const titleElement = screen.getByTestId(`headcol-${index}`);
            expect(titleElement).toHaveTextContent(columns[index].label);
        }
    });
    test("Render Rows", async () => {
        await checkTableInput(columns, taxes);
    });
    test("On change", async () => {
        const firstCellInput = screen.getByTestId("table-input-cell-1-0");
        const user = userEvent.setup();
        await user.clear(firstCellInput);
        await user.type(firstCellInput, "20%");
        const newTaxes = [...taxes];
        newTaxes[0].name = "20%";
        await checkTableInput(columns, taxes);
    });
});
describe("Testing basic input table", () => {
    beforeEach(() => {
        render(React.createElement(InputTable, { columns: columns, data: taxes, withActionColumn: true, actionColumnText: "Acciones" }));
    });
    test("Render Titles properly", async () => {
        const columnsWithActons = [
            ...columns,
            {
                name: "actions",
                label: "Acciones"
            }
        ];
        for (let index = 0; index < columnsWithActons.length; index++) {
            const titleElement = screen.getByTestId(`headcol-${index}`);
            expect(titleElement).toHaveTextContent(columnsWithActons[index].label);
        }
    });
    test("Render Rows", async () => {
        await checkTableContent(columns, taxes, ["actions"]);
    });
    test("Test delete Row", async () => {
        const firstRow = screen.getByTestId("table-body-row-0");
        const user = userEvent.setup();
        const deleteRow = within(firstRow).getByRole("button", {
            name: "delete-row"
        });
        await user.click(deleteRow);
        const newTaxes = [...taxes];
        newTaxes.splice(0, 1);
        await checkTableContent(columns, newTaxes, ["actions"]);
    });
    test("Test edit and save Row", async () => {
        const firstRow = screen.getByTestId("table-body-row-0");
        const user = userEvent.setup();
        const editRow = within(firstRow).getByRole("button", {
            name: "edit-row"
        });
        await user.click(editRow);
        const firstCellInput = screen.getByTestId("table-input-cell-1-0");
        await user.clear(firstCellInput);
        await user.type(firstCellInput, "20%");
        const newTaxes = [...taxes];
        newTaxes[0].name = "20%";
        const saveRow = within(firstRow).getByRole("button", {
            name: "save-change"
        });
        await user.click(saveRow);
        await checkTableContent(columns, newTaxes, ["actions"]);
    });
    test("Test edit and cancel Row", async () => {
        const firstRow = screen.getByTestId("table-body-row-0");
        const user = userEvent.setup();
        const editRow = within(firstRow).getByRole("button", {
            name: "edit-row"
        });
        await user.click(editRow);
        const firstCellInput = screen.getByTestId("table-input-cell-1-0");
        await user.clear(firstCellInput);
        await user.type(firstCellInput, "20%");
        const cancelRow = within(firstRow).getByRole("button", {
            name: "cancel-change"
        });
        await user.click(cancelRow);
        await checkTableContent(columns, taxes, ["actions"]);
    });
    test("Cancel change when other row is selected", async () => {
        const firstRow = screen.getByTestId("table-body-row-0");
        const secondRow = screen.getByTestId("table-body-row-1");
        const user = userEvent.setup();
        const editRow = within(firstRow).getByRole("button", {
            name: "edit-row"
        });
        await user.click(editRow);
        const firstCellInput = screen.getByTestId("table-input-cell-1-0");
        await user.clear(firstCellInput);
        await user.type(firstCellInput, "20%");
        const editAnotherRow = within(secondRow).getByRole("button", {
            name: "edit-row"
        });
        await user.click(editAnotherRow);
        const cancelRow = within(secondRow).getByRole("button", {
            name: "cancel-change"
        });
        await user.click(cancelRow);
        await checkTableContent(columns, taxes, ["actions"]);
    });
});
describe("Testing basic input table with verification", () => {
    beforeEach(() => {
        render(React.createElement(InputTable, { columns: columns, data: taxes, withActionColumn: true, actionColumnText: "Acciones", isValidSaveCallback: () => false }));
    });
    test("Save should not work if callback returns false", async () => {
        const firstRow = screen.getByTestId("table-body-row-0");
        const user = userEvent.setup();
        const editRow = within(firstRow).getByRole("button", {
            name: "edit-row"
        });
        await user.click(editRow);
        const firstCellInput = screen.getByTestId("table-input-cell-1-0");
        await user.clear(firstCellInput);
        await user.type(firstCellInput, "20%");
        const saveRow = within(firstRow).getByRole("button", {
            name: "save-change"
        });
        await user.click(saveRow);
        screen.getByTestId("table-input-cell-1-0");
    });
});
