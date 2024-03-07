let coinFlip = '';

do {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
        break
    }
}   while (coinFlip = 1);
        