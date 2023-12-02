const {readFileSync} = require('fs')

const processLine = (line) => {
    numberMap = {
        'one':1, 'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9
    }
    
    let start = 0
    let processedLine = line

    return line
        .replace('one', 'one1one')
        .replace('two', 'two2two')
        .replace('three', 'three3three')
        .replace('four', 'four4four')
        .replace('five', 'five5five')
        .replace('six', 'six6six')
        .replace('seven', 'seven7seven')
        .replace('eight', 'eight8eight')
        .replace('nine', 'nine9nine');
}

const getSum=(line, asText=false)=>{

    const processedLine = asText ? processLine(line) : line;
    const numbers = processedLine.split('').filter(char => !isNaN(char)).map(char => char);
        
    const sum = numbers.length > 0 ? numbers[0]+numbers[numbers.length-1] : numbers[0]+numbers[0];
    // console.log(line, processedLine, numbers);
    return sum;
}

const solution = (input, asText=false) => {
    return input.split('\n').map(line => getSum(line, asText)).reduce((a,b)=>Number(a)+Number(b));
}

module.exports = {solution}

// const input = readFileSync('input-real.txt').toString()
// console.log('answer 1: ', solution(input))

const input2 = readFileSync('input-real.txt').toString()
console.log('answer 2: ', solution(input2, true))
