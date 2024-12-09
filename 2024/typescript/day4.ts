import {readFileSync} from "fs";

const hasWordMatch = (grid: string[][], row: number, col: number, dx: number, dy: number, word: string) => {

    const rows: number = grid.length
    const cols = grid[0].length

    let hasMatch = true;

    for(let i=0; i<word.length; i++) {

        const lookupRow = row + i * dx
        const lookupCol = col + i * dy

        if(lookupRow < 0 || lookupRow >= rows || lookupCol < 0 || lookupCol >= cols || grid[lookupRow][lookupCol] !== word[i]){
            hasMatch = false
        }
    }

    return hasMatch;
}

const part1 = (data: string) => {
    const grid: string[][] = data.split('\n').map(line => line.split(''))
    const rows: number = grid.length
    const cols = grid[0].length

    const word: string = "XMAS"
    const directions = [[0,1], [0,-1], [1,0], [-1,0], [1,1], [1,-1], [-1,1], [-1,-1]]

    let count = 0
    for (let row = 0; row < rows; row++){
        for (let col=0; col < cols; col++){
            for (const [dx, dy] of directions) {
                if(hasWordMatch(grid, row, col, dx, dy, word)){
                    count++
                }
            }
        }
    }

    return count
}

const hasXmas = (grid: string[][], row: number, col: number) => {

    const rows: number = grid.length
    const cols = grid[0].length

    if (!(row >= 1 && row < rows - 1 && col >= 1 && col < cols-1)) {
        return false
    }

    if (grid[row][col] != "A"){
        return false
    }

    const diag1 = `${grid[row-1][col-1]}${grid[row+1][col+1]}` // top-left and bottom-right
    const diag2 = `${grid[row-1][col+1]}${grid[row+1][col-1]}` // top-right and bottom-left

    if (["MS", "SM"].includes(diag1) && ["MS", "SM"].includes(diag2)) {
        return true
    }

    return false

}

const part2 = (data: string) => {
    const grid: string[][] = data.split('\n').map(line => line.split(''))
    const rows: number = grid.length
    const cols = grid[0].length

    let count = 0
    for (let row = 0; row < rows; row++){
        for (let col=0; col < cols; col++){
            if(hasXmas(grid, row, col)){
                count++
            }
        }
    }

    return count
}

if (require.main === module) {
    const data = readFileSync('../input/day4.txt', 'utf-8')
    console.log('part1', part1(data))
    console.log('part2', part2(data))
}

export { part1, part2 }