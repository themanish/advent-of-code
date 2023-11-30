const {readFileSync} = require('fs')

const solution = (input, cheat=false) => {

    // rock = a, x
    // paper = b, y
    // scissors = c, z
    const scoreTable = {
        A: {X: 3, Y: 6, Z: 0},
        B: {X: 0, Y: 3, Z: 6},
        C: {X: 6, Y: 0, Z: 3}
    }
    const movePoints = {X:1, Y:2, Z:3}

    // X: lose
    // Y: draw
    // Z: win
    const scoreTableCheat = {
        A: {X: 'Z', Y: 'X', Z: 'Y'},
        B: {X: 'X', Y: 'Y', Z: 'Z'},
        C: {X: 'Y', Y: 'Z', Z: 'X'}
    };
    const gameScoreCheat = {X:0, Y:3, Z:6};

    const getScore = (game) => {
        const [opponent, me] = game.split(' ');
        let gameScore=0;
        let movePoint=0;

        if(cheat){
             gameScore = gameScoreCheat[me];
             movePoint = movePoints[scoreTableCheat[opponent][me]];
        } else {
             gameScore = scoreTable[opponent][me];
             movePoint = movePoints[me]
        }

        return gameScore+movePoint;
    }

    
    return input.split('\n').map(game => getScore(game)).reduce((a,b)=>a+b);
}

module.exports = { solution }

const input = readFileSync('input-real.txt').toString()
console.log('answer 1: ', solution(input));
console.log('answer 2: ', solution(input, true));