const {readFileSync} = require('fs')

const rule = {
    red: 12, green: 13, blue: 14
}

const getGameNumber = (line) => {
    regex = /Game (\d+):/;
    return Number(regex.exec(line)[1])
}

const isPossible = (input) => {
    regex = /Game (\d+):/;
    sets = input.replace(regex, '').split(';').map(set => set.trim());

    let isPossible = true;
    
    sets.map(set => set.split(',').forEach(cubes => {

        const [number, color] = cubes.trim().split(' ');
        
        if(number > rule[color]) {
            isPossible = false;
            return;
        }

    }));

    return isPossible;
}

const solution = (input) => {
    return input.split('\n').filter(line => isPossible(line))
    .map(line => getGameNumber(line)).reduce((a,b)=> a+b);
}

module.exports = {solution}

const input = readFileSync('input-test.txt').toString()
console.log('expected: 8, answer: ', solution(input))

const input_real = readFileSync('input-real.txt').toString()
console.log('part 1 answer: ', solution(input_real))