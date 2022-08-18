
/*
Find the median, mean, and standard deviation of a set of numbers. The code also sorts the numbers!
To start, add the numbers to the "numbers" variable below (inbetween the [] with commas between each number.)
Example: [1, 7, 9, 10, 23, 51, 100]
(does not need to be in order)
*/



let numbers = [42, 53, 68, 74, 84, 87, 89, 89, 94, 100]
// ENTER NUMBERS ABOVE


// ------DO NOT CHANGE ANYTHING PAST THIS POINT------


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

// If the length is even... there's a special way to get the median.
if (total % 2 === 0) {

    let medianOne = sorted[medianNum]
    let medianTwo = sorted[medianNum - 1]
    // The medianOne is the number above half way. (if there's 10 values, it's the 6th)
    // This is because arrays start on 0. So instead of
    // the medianTwo being the number above, it's the number below.

    let medianEven = (medianOne + medianTwo)/2

    console.log(`Median: ${medianEven}`)
}

// If the number is odd getting the median is much easier.
if (total % 2 !== 0) {

    let medianOdd = sorted[Math.floor(medianNum)]
    // If the number is odd, the median is always
    // the number in the middle. For example if there are
    // 9 values, 9/2 = 4.5. But the median is the 5th value...
    // (because there are 4 above and 4 below...)
    // So you use Math.floor to round it up to 5 and it gives you
    // the median. This works for all odd number lengths.

    console.log(`Median: ${medianOdd}`)
}





// Mode

// Too complicated and easy to break so not included... the mode is so easy just count the numbers lol

/*
let modeObj = {};

sorted.forEach(num => {
    // for each number in the array

    if (!modeObj[num]) {
        // If a key hasn't been made for the value yet...
        // Make one!

        modeObj[num] = 1;
        // Make the value and the current amount is 1.
    } else {
        // The key exists! Add one to the amount.

        modeObj[num]++
        // value++ adds one to value
    }
})

let mode = Object.keys(modeObj)[0]
let highestValue = modeObj[sorted[0]]

console.log(mode, highestValue)
// Negative infinity baby nothing can be lower than that.

for (let key in modeObj) {
    // For each key in the object...

    let amount = modeObj[key]

    let currentValue = Number(amount)
    // Makes it easier to read later.

    if (currentValue > highestValue) {
    
        mode = key
        // Mode is the key but the highestValue is the amount under that key.
        highestValue = amount
    }
    
}

    console.log(`Mode: ${mode}`)
*/





// Standard Deviation (and variance)
let standardDeviation = 0;

sorted.forEach(num => {

    // Adding all of the (x - m)^2
    // (once for each value)
    standardDeviation = standardDeviation + (Math.pow(num - mean, 2))
})

    let variance = Math.round(standardDeviation/total*100)/100
    let sd = Math.round(Math.sqrt(standardDeviation/total)*100)/100
    // Multiply the Standard Deviation by 100 so it rounds to the nearest integer, then undo that
    // by dividing by 100 so it goes back to it's initial form... but rounded!
    // We also divide and square root the standard deviation to get the value of it.
    

console.log(`Standard Deviation: ${sd}`)
console.log(`Variance: ${variance}`)