/*let flipped = 0;
let coinFlipInterval = setInterval(() => {
    flipped++

    let array = ['heads', 'tails']
    let headCount = 0;
    let tailCount = 0;
    let total = 0;

    for (let i = 0; i < 1000000; i++) {
        let randomNum = Math.floor(Math.random() * array.length)
        let outcome = array[randomNum]

        total++

        if (outcome === 'heads') {
            headCount++
        }
        if (outcome === 'tails') {
            tailCount++
        }
    }
    if (headCount === tailCount) {
        clearInterval(coinFlipInterval)
        console.log(`\n\n\n\n\n\n\n\n\n\nTrial Recorded ${flipped} times.`)
    }

    console.log(`Coin flipped ${total} times.\n\nHeads: ${headCount} times. (${Math.floor(headCount/total  * 100)}%).\nTails: ${tailCount} times. (${Math.floor(tailCount/total  * 100)}%)`)
}, 1);*/

let penisInterval = setInterval(() => {


    let weinerLength = [-6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

    let randomNum = Math.floor(Math.random() * weinerLength.length)
    let longWeiner = weinerLength[randomNum]
    let yourWeiner
    let vajayjay = false;

    if (longWeiner > -1) {
        yourWeiner = "8"
    }
    if (longWeiner < 0) {
        yourWeiner = "{()}"
        vajayjay = true;
    }

    for (let i = 0; i < longWeiner; i++) {
        yourWeiner = yourWeiner + "="
    }
    if (vajayjay) {
        console.log(yourWeiner)
        console.log(`${longWeiner} inches. You have a vagina bro kinda gay`)

        clearInterval(penisInterval)
    }

    if (!vajayjay) {
        yourWeiner = yourWeiner + "D"

        console.log(`${yourWeiner}\n${longWeiner} inches :O`)
    }
}, 1)