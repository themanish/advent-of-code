import {part1, part2} from "./day4"
import {readFileSync} from "fs";

const testData = readFileSync('../input/day4-test.txt', 'utf-8')

describe('test', () => {
    it('should test part 1', () => {
        expect(part1(testData)).toBe(18)
    });
    it('should test part 2', () => {
        expect(part2(testData)).toBe(9)
    });
});
