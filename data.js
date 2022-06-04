
/*
Find the median, mean, and standard deviation of a set of numbers. The code also sorts the numbers!
To start, add the numbers to the "numbers" variable below (inbetween the [] with commas between each number.)
Example: [1, 7, 9, 10, 23, 51, 100]
*/



let numbers = [1, 2, 3]


// Sorted/Total
let sorted = numbers.sort((a, b) => a - b)
console.log(sorted)

let total = sorted.length;
console.log(`Length: ${total}`)

let added = 0;
for (let i = 0; i < sorted.length; i++) {

    added = added + sorted[i];
}



// Mean
let mean = added/total;
console.log(`Mean: ${mean}`)




// Median
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





// Standard Deviation (and variance)
let standardDeviation = 0;

for (let i = 0; i < numbers.length; i++) {

    standardDeviation = standardDeviation + (Math.pow(numbers[i] - mean, 2))
}

    let variance = standardDeviation/total
    let sd = Math.sqrt(standardDeviation/total)

//console.log(`Variance: ${variance}`)
console.log(`Standard Deviation: ${sd}`)