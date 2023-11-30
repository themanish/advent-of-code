const {readFileSync} = require('fs')

const solution = (input) => {

    // rock = a, x
    // paper = b, y
    // scissors = c, z

    const scoreTable = {
        A: {X: 3, Y: 6, Z: 0},
        B: {X: 0, Y: 3, Z: 6},
        C: {X: 6, Y: 0, Z: 3}
    }

    const movePoints = {X:1, Y:2, Z:3}

    const getScore = (game) => {
        const [opponent, me] = game.split(' '); 
        return scoreTable[opponent][me]+movePoints[me];
    }
    
    return input.split('\n').map(game => getScore(game)).reduce((a,b)=>a+b);
}

module.exports = { solution }

const input = readFileSync('input-real.txt').toString()
console.log('answer 1: ', solution(input));