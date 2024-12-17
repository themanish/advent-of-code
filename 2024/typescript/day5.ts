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

    for(let [x, y] of rules) {

        if(update.includes(x) && update.includes(y)){

            const indexX = update.indexOf(x);
            const indexY = update.indexOf(y);

            if(indexX > indexY) {
                update.splice(indexY, 1)
                update.splice(indexX, 0, y)
            }

        }
    }

    return update

}

const part2 = (data: string) => {

    const {rules, updates} = extractData(data)
    let sum = 0

    for (let update of updates) {

        if(!isInRightOrder(update, rules)){
            const sortedUpdate = sortUpdateChatGpt(update, rules)
            sum += findMiddle(sortedUpdate)
        }
    }

    return sum;
}

function sortUpdateChatGpt(update: number[], rules: number[][]): number[] {
    const graph = new Map<number, number[]>();
    const inDegree = new Map<number, number>();

    // Initialize the graph and in-degree map for the update's pages
    for (const page of update) {
        graph.set(page, []);
        inDegree.set(page, 0);
    }

    // Build the graph based on the rules
    for (const [x, y] of rules) {
        if (graph.has(x) && graph.has(y)) {
            graph.get(x)!.push(y);
            inDegree.set(y, inDegree.get(y)! + 1);
        }
    }

    // Topological sorting using Kahn's Algorithm
    const queue: number[] = [];
    inDegree.forEach((degree, page) => {
        if (degree === 0) {
            queue.push(page);
        }
    });

    const sorted: number[] = [];
    while (queue.length > 0) {
        const current = queue.shift()!;
        sorted.push(current);

        for (const neighbor of graph.get(current)!) {
            inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
            if (inDegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }

    return sorted;
}


if (require.main === module) {
    // const data = readFileSync('../input/day5.txt', 'utf-8')
    const data = readFileSync('../input/day5-test.txt', 'utf-8')
    console.log('Day 5: Print Queue')
    console.log('part1', part1(data))
    console.log('part2', part2(data))
}

export { part1, part2 }