const {readFileSync} = require('fs')
const {solution} = require('./index')

const input = readFileSync('./input-test.txt').toString()


test('part 1', ()=>{

    expect(solution(input)).toBe(15);
})