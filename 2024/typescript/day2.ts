import {readFileSync} from "fs";

const part1 = (data: any) => {
    console.log(data)
}

const data = readFileSync('../input/day2.txt', 'utf-8')
part1(data)