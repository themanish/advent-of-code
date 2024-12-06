import {readFileSync} from "fs";

const part1 = (data: string) => {
    return data
        ?.match(/mul\([0-9]+,[0-9]+\)/g)
        ?.map(row => {
            const numbers = row.match(/[0-9]+/g);
            return numbers ? numbers.map(Number) : [];
        })
        .reduce((acc, row) => acc + row[0]*row[1],0)

}

const part2 = (data: string) => {
    let include = true;
    return data
        ?.match(/mul\([0-9]+,[0-9]+\)|do\(\)|don't\(\)/g)
        ?.map(row => {

            if(row === "do()"){
                include = true;
                return [0, 0]
            }

            if(row === "don't()"){
                include = false;
                return [0, 0]
            }

            const numbers = row.match(/[0-9]+/g);
            if(numbers && include){
                return numbers ? numbers.map(Number) : [];
            } else {
                return [0, 0];
            }
        })
        .reduce((acc, row) => acc + row[0]*row[1],0)
}

if (require.main === module) {
    const data = readFileSync('../input/day3.txt', 'utf-8')
    console.log('part1', part1(data))
    console.log('part2', part2(data))
}

export { part1, part2 }