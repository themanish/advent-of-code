const {readFileSync} = require('fs');

const solution = (file, topCount=1) => {
    
  const input = readFileSync(file, { encoding: 'utf8' });

  let elfsWithCalories = input.toString().split('\n\n');
  let elfsWithTotals = [];

  elfsWithCalories.forEach(elf => {
    const caloryTotal = elf.split('\n').map(calory => Number(calory)).reduce((a, b) => a+b);
    elfsWithTotals.push(caloryTotal);
  });

  elfsWithTotals.sort((a,b)=>b-a);

  return elfsWithTotals.slice(0, topCount).reduce((a,b) => a+b);

}

console.log('answer1: ', solution('input-real.txt'));
console.log('answer2: ', solution('input-real.txt', 3));

module.exports = { solution }
