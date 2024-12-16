import {readFileSync} from "fs";

const extractData = (data: string) => {
    const [rulesString, updatesString] = data.split('\n\n')

    return {
        rules: rulesString.split('\n').map(item => item.split('|').map(Number)),
        updates: updatesString.split('\n').map(item => item.split(',').map(Number))
    }
};
const findMiddle = (update: number[]) => {
    const midIndex = Math.floor(update.length/2);
    return update[midIndex]
};
const isInRightOrder = (update: number[], rules: number[][]) => {

    const indexMap = new Map<number, number>();

    update.forEach((pageNo, index) => {
        indexMap.set(pageNo, index);
    })

    for (const [x, y] of rules) {
        if(indexMap.has(x) && indexMap.has(y)){
            if(indexMap.get(x)! > indexMap.get(y)!) {
                return false
            }
        }
    }

    return true;
};

const part1 = (data: string) => {

    const {rules, updates} = extractData(data)
    let sum = 0

    for (let update of updates) {
        if(isInRightOrder(update, rules)){
            sum += findMiddle(update)
        }
    }

    return sum;

}

const sortUpdate = (update: number[], rules: number[][]): number[] => {

    let sortedUpdate: number[]



    return sortedUpdate

}

const part2 = (data: string) => {

    const {rules, updates} = extractData(data)
    let sum = 0

    for (let update of updates) {
        if(!isInRightOrder(update, rules)){
            const sortedUpdate = sortUpdate(update, rules)
            sum += findMiddle(sortedUpdate)
        }
    }

    return sum;

}

if (require.main === module) {
    const data = readFileSync('../input/day5.txt', 'utf-8')
    // const data = readFileSync('../input/day5-test.txt', 'utf-8')
    console.log('Day 5: Print Queue')
    console.log('part1', part1(data))
    console.log('part2', part2(data))
}

export { part1, part2 }