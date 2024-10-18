function movingTarget(arr){
    function isIndexValid(targets, index){
        return (index >= 0) && (index < targets.length);
    }
    
    let targets = arr[0]
    .split(" ")
    .map(el => Number(el));
    
    for( i = 1; i < arr.length; i++){
        let currCmd = arr[i];
        if(currCmd.toLowerCase() === "end"){
            break;
        }
 
        let cmdInfo = currCmd.split(" ");
        let commandType = cmdInfo[0].toLowerCase();
        let cmdIndex = +cmdInfo[1];
        let cmdArgument = +cmdInfo[2];
 
        let isIndexValid = (cmdIndex >= 0) && (cmdIndex < targets.length);
 
        if(commandType === "shoot"){
            if(isIndexValid){
                targets[cmdIndex] -= cmdArgument;
 
                if(targets[cmdIndex] <= 0){
                    targets.splice(cmdIndex, 1);
                }
 
            }
        } else if(commandType === "add"){
            if(!isIndexValid){
                console.log("Invalid placement!");
                continue;
            }
            targets.splice(cmdIndex, 0, cmdArgument);
        } else if(commandType === "strike"){
            let leftindex = cmdIndex - cmdArgument;
            let rightindex = cmdIndex + cmdArgument;
 
            let isLeftIndexValid = leftindex >= 0 ;
            let isRightIndexValid = rightindex < targets.length; 
            if(!isLeftIndexValid || !isIndexValid || !isRightIndexValid){
                console.log("Strike missed!");
                continue;

            } 
                let targetsToRemove = rightindex - leftindex + 1;
                targets.splice(leftindex, targetsToRemove);
 
        }
    }

    console.log(targets.join("|"));
 
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
    