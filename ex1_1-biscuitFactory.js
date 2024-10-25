function biscuitFactory(input){
    let workersCount = Number(input[1]);
    let competeBiscuitsPer30days = Number(input[2]);
    
    let totalBiscuitsPerMonth = 0;
        
    for(let days = 1; days <= 30; days++) {
        let biscuitPerDay = Number(input[0]);
        
        if (days % 3 === 0) {
            biscuitPerDay *= 0.75;
        }
        totalBiscuitsPerMonth += workersCount * biscuitPerDay;
    }
    console.log(`You have produced ${totalBiscuitsPerMonth} biscuits for the past month.`);
    let factoryDifference = totalBiscuitsPerMonth - competeBiscuitsPer30days;
    let percentDifference = Math.abs(factoryDifference / competeBiscuitsPer30days) * 100;
    if(totalBiscuitsPerMonth > competeBiscuitsPer30days) {
        
        console.log(`You produce ${percentDifference.toFixed(2)} percent more biscuits.`)
    } else {
        console.log(`You produce ${(percentDifference.toFixed(2))} percent less biscuits.`)
    }

}
biscuitFactory(["78",
    "8",
    "16000"])
    
    
    
    
    
    
    