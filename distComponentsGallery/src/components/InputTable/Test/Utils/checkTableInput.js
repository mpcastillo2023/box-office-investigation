import { screen } from "@testing-library/react";
const checkTableInput = async (columns, expectedData, ignoredColumnsKeys = []) => {
    const firstRow = await screen.findByTestId("table-body-row-0");
    const numberOfRows = firstRow.parentElement?.childElementCount;
    expect(numberOfRows).toEqual(expectedData.length);
    for (let rowIndex = 0; rowIndex < expectedData.length; rowIndex++) {
        for (let colIndex = 0; colIndex < columns.length; colIndex++) {
            const column = columns[colIndex];
            const expectedDataProperty = expectedData[rowIndex][column.name];
            if (!ignoredColumnsKeys.includes(column.name)) {
                const cell = await screen.findByTestId(`table-input-cell-${colIndex}-${rowIndex}`);
                expect(cell).toHaveValue(expectedDataProperty);
            }
        }
    }
};
export default checkTableInput;
