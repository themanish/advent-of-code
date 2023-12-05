const { readFileSync } = require('fs')

const isSymbol = (item) => {
    return item !== '.' && /^[^0-9\w]$/.test(item);
}

const isNumeric = (text) => {
    return !isNaN(text);
}

const isAdjacentToSymbol = (row, col, schematic) => {
    sides = [
        [-1,-1], [-1,0], [-1,1],
        [0,-1], [0,1],
        [1,-1], [1,0], [1,1]
    ]

    adjacent = false;

    sides.forEach(side => {
        if(isSymbol(schematic?.[row+side[0]]?.[col+side[1]])){
            adjacent = true;
            return;
        }
    });

    return adjacent;
}

const findPartNumbers = (schematic) => {
    let numbers = []

    schematic.forEach((line, rowIndex)=>{
        let number = ''
        let isAdjacent = false;

        line.forEach((item, colIndex) => {
            if(isNumeric(item)){
                number += item;
            }

            if(!isNumeric(item) || colIndex === line.length-1){
                if(isAdjacent && number !== '') numbers.push(Number(number))
                number = ''
                isAdjacent = false;
            } else {
                if(isAdjacentToSymbol(rowIndex, colIndex, schematic)){
                    isAdjacent = true;
                }
            }
        })

    })
    
    return numbers;
}

const part1 = (input) => {
    schematic = input.map(line => line.split(''));
    return findPartNumbers(schematic).reduce((s,v)=>s+v);
}

const part2 = (input) => {
    
}

const input_test = readFileSync('input-test.txt', { encoding: 'utf8' }).split('\n')
console.log('part1 expected: 4361,', ' result: ', part1(input_test))
// console.log('part2 expected: ', ' result: ', part2(input_test))

const input_real = readFileSync('input-real.txt', { encoding: 'utf8' }).split('\n')
console.log('part1 answer: ', part1(input_real))
// console.log('part2: ', part2(input_real))