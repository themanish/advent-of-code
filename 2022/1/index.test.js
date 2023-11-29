const {solution} = require('./index')

test('part1', async()=>{
    expect(solution('input-test.txt')).toBe(24000)
})

test('part2', async()=>{
  expect(solution('input-test.txt', 3)).toBe(45000);
})