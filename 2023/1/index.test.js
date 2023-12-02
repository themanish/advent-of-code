const {readFileSync} = require('fs')
const {solution} = require('./index')
const input = readFileSync('input-test.txt').toString()
const input2 = readFileSync('input-test-2.txt').toString()

test('part 1', ()=>{
    expect(solution(input)).toBe(142);
})

test('part 2', ()=>{
    expect(solution(input2, true)).toBe(281);
})