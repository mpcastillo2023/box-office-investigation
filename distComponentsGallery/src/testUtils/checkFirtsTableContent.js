import { screen } from "@testing-library/react";
const checkFirstTableContent = async (columns, expectedData, ignoredColumnsKeys = []) => {
    const firstRow = await screen.findAllByTestId("table-body-row-0");
    const element = firstRow[0];
    const numberOfRows = element.parentElement?.childElementCount;
    expect(numberOfRows).toEqual(expectedData.length);
    for (let rowIndex = 0; rowIndex < expectedData.length; rowIndex++) {
        for (let colIndex = 0; colIndex < columns.length; colIndex++) {
            const column = columns[colIndex];
            const expectedDataProperty = expectedData[rowIndex][column.name];
            if (!ignoredColumnsKeys.includes(column.name)) {
                const cell = await screen.findAllByTestId(`table-body-cell-${colIndex}-${rowIndex}`);
                expect(cell[0]).toHaveTextContent(`${expectedDataProperty}`);
            }
        }
    }
};
export default checkFirstTableContent;
