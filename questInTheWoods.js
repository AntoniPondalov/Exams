function quest(input){
    let daysOfAdventure = Number(input[0]);
    let numberOfAdventurers = Number(input[1]);
    let initialEnergy = Number(input[2]);
    let waterPD = Number(input[3]);
    let foodPD = Number(input[4]);
    //let dailyEnergyLoss = Number(input[5]);

    let totalWater = daysOfAdventure*numberOfAdventurers*waterPD;
    let totalFood = daysOfAdventure*numberOfAdventurers*foodPD;
    let availableEnergy = initialEnergy;
    let availableWater = totalWater;
    let availableFood = totalFood;

    for(let i =1; i<=daysOfAdventure; i++){
        //everyDay Calculations
        availableFood -=numberOfAdventurers*foodPD;
        availableWater-= numberOfAdventurers*waterPD; 
        availableEnergy-=input[i+4];
        console.log(availableEnergy);
        if(availableEnergy<=0){
            console.log(`You will run out of energy. You will be left with ${availableFood} food and ${availableWater} water.`);
            return;
        }

        if(i%2===0&& i!==0 ){ // every second day
            availableEnergy*=1.05;
            availableWater*=0.7;
        }
        if(i%3===0&&i!==0){// every third day
            availableEnergy*=1.1;
            availableFood-=availableFood/numberOfAdventurers;
        }
        console.log(`Day ${i}, energy ${availableEnergy}`);
    }
    console.log(`You are ready for the quest. You will be left with ${availableEnergy} energy!`);
}

let input = ["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"];

    quest(input);
    