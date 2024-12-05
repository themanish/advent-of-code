import {readFileSync} from "fs";

const part1 = () => {

    const data = readFileSync('../input/day1.txt', 'utf8');

    const leftNums: number[] = []
    const rightNums: number[] = []

    data.split('\n').forEach(line => {
        const [left, right] = line.split("   ").map(Number)
        leftNums.push(left)
        rightNums.push(right)
    })

    leftNums.sort((a, b) => a - b);
    rightNums.sort((a, b) => a - b);

    let totalDistance = 0;
    leftNums.map((left, index) => {
        totalDistance += Math.abs(left - rightNums[index])
    })

    console.log('part1', totalDistance)
}

const part2 = () => {

    const data = readFileSync('../input/day1.txt', 'utf8');

    const leftNums: number[] = []
    const rightNums: number[] = []

    data.split('\n').forEach(line => {
        const [left, right] = line.split("   ").map(Number)
        leftNums.push(left)
        rightNums.push(right)
    })

    leftNums.sort((a, b) => a - b);
    rightNums.sort((a, b) => a - b);

    let totalDistance = 0;
    leftNums.map((left, index) => {

        const similarityCount = rightNums.filter(num => num === left).length

        totalDistance += left * similarityCount
    })

    console.log('part2', totalDistance)
}

part1()
part2()