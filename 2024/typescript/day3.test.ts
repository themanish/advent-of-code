import {part1, part2} from "./day3"
import {readFileSync} from "fs";

const testData = readFileSync('../input/day3-test.txt', 'utf-8')

describe('test', () => {
    it('should test', () => {
        expect(part1(testData)).toBe(161)
        // expect(part2(testData)).toBe(48)
    });
});
