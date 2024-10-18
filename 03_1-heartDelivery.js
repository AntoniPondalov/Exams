function solve(arr) {
    let heartsNeeded = arr.shift().split('@').map(Number);
    let commands = arr.shift();

    let currentIndex = 0;

    while (commands !== 'Love!') {
        let tokens = commands.split(' ');
        let jumpLength = +tokens[1];

        currentIndex += jumpLength;

        if (currentIndex >= heartsNeeded.length) {
            currentIndex = 0;
        }

        if (heartsNeeded[currentIndex] === 0) {
            console.log(`Place ${currentIndex} already had Valentine's day.`);
        } else {
            heartsNeeded[currentIndex] -= 2;
            if (heartsNeeded[currentIndex] === 0) {
                console.log(`Place ${currentIndex} has Valentine's day.`);
            }
        }

        commands = arr.shift();
    }
    console.log(`Cupid's last position was ${currentIndex}.`);

    let unfinishedHouses = heartsNeeded.filter(house => house !== 0);
    if (unfinishedHouses.length === 0) {
        console.log("Mission was successful.")
    } else {
        console.log(`Cupid has failed ${unfinishedHouses.length} places.`)
    }
}

solve(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
