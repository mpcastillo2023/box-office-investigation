import { screen, within } from "@testing-library/react";
const checkTableBoolIcons = async (iconColumns = [], expectedData) => {
    for (let i = 0; i < expectedData.length; i++) {
        for (let j = 0; j < iconColumns.length; j++) {
            const iconColumn = iconColumns[j];
            const expectedBool = expectedData[i][iconColumn.key];
            const cell = await screen.findByTestId(`table-body-cell-${iconColumn.columnIndex}-${i}`);
            const { activeIconTestid, inactiveIconTestid } = iconColumn;
            if (expectedBool) {
                if (activeIconTestid)
                    within(cell).getByTestId(activeIconTestid);
            }
            else {
                if (inactiveIconTestid)
                    within(cell).getByTestId(inactiveIconTestid);
            }
        }
    }
};
export default checkTableBoolIcons;
