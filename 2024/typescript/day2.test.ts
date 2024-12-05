import {part1, part2} from "./day2"
import {readFileSync} from "fs";

describe('day2', () => {
    it('should pass', () => {
        const testData = readFileSync('../input/day2-test.txt', 'utf-8')
        expect(part1(testData)).toBe(2)
    });

    fit('should tolerate', () => {
        const testData = readFileSync('../input/day2-test.txt', 'utf-8')
        expect(part2(testData)).toBe(4)
    });
});