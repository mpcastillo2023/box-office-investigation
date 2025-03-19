import { mockApiLanguages } from "../../../__mocks__/apiHandlers";
import { getRequest } from "../get";
import { expect, test } from "vitest";
test("Should get data", async () => {
    const data = await getRequest(`${import.meta.env.VITE_API_BASE_URL}/languages`);
    expect(data).toEqual(mockApiLanguages);
});
