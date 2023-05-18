import expect from "expect";
import "../sum.js"
import sum from "../sum.js";

describe('sum', () => {
    it('should return the sum of two numbers', () => {
        const result = sum(2, 3);
        expect(result).toBe(5);
    });

    it('should handle negative numbers correctly', () => {
        const result = sum(-5, 10);
        expect(result).toBe(5);
    });

    it('should return zero when both numbers are zero', () => {
        const result = sum(0, 0);
        expect(result).toBe(0);
    });
});
