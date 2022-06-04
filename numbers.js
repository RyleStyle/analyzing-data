let numbers = [2, 5, 5, 7, 7, 9, 9, 9, 12, 15]

let sorted = numbers.sort((a, b) => a - b)
console.log(sorted)

let total = sorted.length;
console.log(`Length: ${total}`)

let firstQuartile = sorted[1]
let lastQuartile = sorted[sorted.length - 1]

let added = 0;
for (let i = 0; i < sorted.length; i++) {

    added = added + sorted[i];
}

let mean = added/total;
console.log(`Mean: ${mean}`)

let medianNum = total/2

if (total % 2 === 0) {

    let medianOne = sorted[medianNum]
    let medianTwo = sorted[medianNum - 1]

    let medianEven = (medianOne + medianTwo)/2

    console.log(`Median: ${medianEven}`)
}


if (total % 2 !== 0) {

    let medianOdd = sorted[Math.floor(medianNum)]

    console.log(`Median: ${medianOdd}`)
}


let standardDeviation = 0;

for (let i = 0; i < numbers.length; i++) {

    standardDeviation = standardDeviation + (Math.pow(numbers[i] - mean, 2))
}

    let variance = standardDeviation/total
    let sd = Math.sqrt(standardDeviation/total)

console.log(`Variance: ${variance}`)
console.log(`Standard Deviation: ${sd}`)