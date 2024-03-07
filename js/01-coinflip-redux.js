// let coinFlip = (Math.random() >= 0.5) ? "heads" : "tails";

let coinFlip;

flipTimes = parseInt(prompt('How many times do you want to flip the coin? '));

for (let i = 0; i < flipTimes; i++) {
    
    coinFlip = Math.round(Math.random());
    if (coinFlip < 0.5) {
        document("Heads");
    } else {
        console.log("Tails");
    }
}