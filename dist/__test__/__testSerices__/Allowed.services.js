"use strict";
function sum(a, b) {
    return a + b;
}
describe("sum function", () => {
    it("should return the correct sum", () => {
        expect(sum(1, 2)).toBe(3);
    });
    it("should return the correct sum for negative numbers", () => {
        expect(sum(-1, -2)).toBe(-3);
    });
    it("should return the correct sum for zero", () => {
        expect(sum(0, 0)).toBe(0);
    });
});
