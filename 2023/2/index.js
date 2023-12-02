const {readFileSync} = require('fs')

const regex = /Game (\d+):/;

const rule = {
    red: 12, green: 13, blue: 14
}

const getGameNumber = (line) => {
    
    return Number(regex.exec(line)[1])
}

const isPossible = (input) => {
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

const getPower = (line) => {
    maxCount = {
        red: 0,
        green: 0,
        blue: 0
    }

    line
        .split(': ')[1]
        .split('; ')
        .map(set => {
            const cubes = set.split(', ');;
            return cubes.forEach(cube => {
                const [count, color] = cube.split(' ');
                if(maxCount[color] < Number(count)){
                    maxCount[color] = Number(count)
                }
            })
        })
    
    return maxCount.red * maxCount.green * maxCount.blue;
}

const part2 = (input) => {
    return input.split('\n').map(line => getPower(line)).reduce((s, v) => s+v);
}

module.exports = {solution}

const input = readFileSync('input-test.txt').toString()
console.log('expected: 8, answer: ', solution(input))
console.log('expected: 2286, answer: ', part2(input))

const input_real = readFileSync('input-real.txt').toString()
console.log('part 1 answer: ', solution(input_real))
console.log('part 2 answer: ', part2(input_real));