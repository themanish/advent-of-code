const {readFileSync} = require('fs')
const {solution} = require('./index')

const input = readFileSync('./input-test.txt').toString()


test('part 1', ()=>{
    expect(solution(input)).toBe(15);
})

test('part 2', ()=>{
    expect(solution(input, true)).toBe(12);
})