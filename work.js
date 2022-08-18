let money = 0;
let time = 0;
setInterval(() => {
    
    // $0.005 is how much you make per second if you make $18 an hour.
    money = money + 0.005
    console.log(money)


    time++
    if (time % 60 === 0) {
        console.log(`${time/60} minutes have passed.`)

    }
}, 1000);