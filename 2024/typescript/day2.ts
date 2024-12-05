import {readFileSync} from "fs";

const isSafe = (report: number[]): boolean => {

    let allIncreasing = true;
    let allDecreasing = true;

    for (let i= 1; i < report.length; i++)  {
        const diff = Math.abs(report[i] - report[i-1])

        if(diff < 1 || diff > 3){
            return false
        }

        if(report[i] > report[i-1]){
            allIncreasing = false
        } else {
            allDecreasing = false
        }

    }

    return allDecreasing || allIncreasing
}

const canRemoveOne = (report: number[]): boolean => {
    for (let i = 0; i < report.length; i++) {
        const modifiedReport = [...report.slice(0, i), ...report.slice(i + 1)];

        if (isSafe(modifiedReport)) {
            return true;
        }
    }
    return false;
};


const part1 = (data: any) => {

    const reports: [[]] = data.split('\n').map((line: string) => line.split(' ').map(Number))

    let safeCount = 0;

    for (const report of reports) {
        if(isSafe(report)){
            safeCount++;
        }
    }

    return safeCount
}

const part2 = (data: any) => {

    const reports: [[]] = data.split('\n').map((line: string) => line.split(' ').map(Number))

    let safeCount = 0;

    for (const report of reports) {
        if(isSafe(report) || canRemoveOne(report)){
            safeCount++;
        }
    }

    return safeCount
}

if (require.main === module) {
    const data = readFileSync('../input/day2.txt', 'utf-8')
    console.log('part1', part1(data))
    console.log('part2', part2(data))
}

export { part1, part2 }