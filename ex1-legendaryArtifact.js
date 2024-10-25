function legendaryArtifact(input){
    let charEnergy = Number(input[0]);
    let index = 1
    let command = input[index];
    let artifacts = 0;
    let mountainCount = 0

    while(command !== "Journey ends here!") {
        
        if (command === "mountain") {
            charEnergy -= 10;
            mountainCount++;
        } else if (command === "desert") {
            charEnergy -= 15;
        } else if (command === "forest") {
            charEnergy += 7;
        }
        if (command === "mountain" && mountainCount % 3 === 0) {
            artifacts++;
        }
        if (artifacts >= 3) {
            console.log(`The character reached the legendary artifact with ${charEnergy.toFixed(2)} energy left.`);
            break;
        }
        if (charEnergy <= 0 && artifacts < 3) {
            console.log("The character is too exhausted to carry on with the journey.");
            break;
        }

                
        index++
        command = input[index];
        
    }
    if (artifacts < 3 && charEnergy > 0){
        console.log(`The character could not find all the pieces and needs ${3 - artifacts} more to complete the legendary artifact.`);
        
    }
}
legendaryArtifact(["130.0",
    "mountain",
    "desert",
    "mountain",
    "forest",
    "mountain",
    "desert",
    "desert",
    "mountain",
    "mountain",
    "desert",
    "mountain",
    "forest",
    "mountain",
    "mountain",
    "forest",
    "mountain",
    "Journey ends here!"])
    
    
    
    
    
    