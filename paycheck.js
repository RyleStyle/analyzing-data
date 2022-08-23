/*
How much do you make per second? Want to track that for every second you work?
Look no further. Please follow the instructions below.
*/


let hourlyRate = 18;
// FILL YOUR OWN HOURLY RATE IN ABOVE. (only the number)
// Example: let hourlyRate = 15;


// ------DO NOT CHANGE ANYTHING PAST THIS POINT------

let money = 0;
let time = 0;

let moneyPerSec = hourlyRate/60/60
setInterval(() => {
    
    // $0.005 is how much you make per second if you make $18 an hour.
    money = money + moneyPerSec
    console.log(money)


    time++
    if (time % 60 === 0) {
        console.log(`${time/60} minutes have passed.`)

    }
}, 1000);