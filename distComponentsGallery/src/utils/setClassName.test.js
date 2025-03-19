import { setClassName } from "./setClassName";
import { expect, test, describe } from "vitest";
describe("Testing setClasseName", () => {
    test("Should return a single class", () => {
        expect(setClassName("solid")).toMatch("solid");
    });
    test("Should transform an array of classes in a classList", () => {
        const list = ["button", "solid", "warning"];
        expect(setClassName(list)).toMatch("button solid warning");
    });
    test("Should return the class name button", () => {
        const list = ["button", "solid", "warning"];
        expect(setClassName(list)).toContain("button");
    });
});
