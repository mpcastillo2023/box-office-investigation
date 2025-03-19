import { getQuery } from "@cg-api/getQuery";
import { mockApiLanguages } from "../../../__mocks__/apiHandlers";
import { expect, test } from "vitest";
test("Should get data", async () => {
    const data = await getQuery({ queryKey: ["languages"] });
    expect(data).toEqual(mockApiLanguages);
});
