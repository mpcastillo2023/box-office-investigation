import { patchQuery } from "../patchQuery";
import { test } from "vitest";
const saleGroupData = {
    status: false,
    ticketGroupingType: "Individual"
};
test("Should patch data", async () => {
    await patchQuery({ endpoint: "salesGroups/1", data: saleGroupData });
});
