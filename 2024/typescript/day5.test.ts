import {part1, part2} from "./day5"
import {readFileSync} from "fs";

const testData = readFileSync('../input/day5-test.txt', 'utf-8')

describe('test', () => {
    it('should test part 1', () => {
        expect(part1(testData)).toBe(143)
    });
    it('should test part 2', () => {
        expect(part2(testData)).toBe(123)
    });
});
