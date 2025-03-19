import { buildUrlFromQueryKey } from "../buildUrlFromQueryKey";
import { expect, test } from "vitest";
test("Should build url from query key", () => {
    const { endpoint, queryParams } = buildUrlFromQueryKey([
        "test",
        1,
        { active: true, sort: "ASC" }
    ]);
    expect(endpoint).toBe("test/1");
    expect(queryParams).toBe("?active=true&sort=ASC");
});
test("Should build url from query key", () => {
    const { endpoint, queryParams } = buildUrlFromQueryKey([
        "test",
        1,
        "product",
        "5"
    ]);
    expect(endpoint).toBe("test/1/product/5");
    expect(queryParams).toBe("");
});
test("Should build url from query key", () => {
    const { endpoint, queryParams } = buildUrlFromQueryKey([
        "test",
        { active: true, sort: "ASC", q: "text", page: 1, limit: 5 }
    ]);
    expect(endpoint).toBe("test");
    expect(queryParams).toBe("?active=true&sort=ASC&q=text&page=1&limit=5");
});
