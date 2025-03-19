import { patch } from "../patch";
import { test } from "vitest";
const saleGroupData = {
    status: false,
    ticketGroupingType: "Individual"
};
test("Should patch data", async () => {
    await patch(`${import.meta.env.VITE_API_BASE_URL}/salesGroups/1`, saleGroupData);
});
