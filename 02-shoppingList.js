function shoppingList(arr){
    let groceries = arr[0]
                    .split("!");
   
   for(let i = 1; i < arr.length; i++ )   {
    let currentCommand = arr[i];
   
    
 
    if(currentCommand === "Go Shopping!" ){
        break;
 
    }
    let commandInfo = currentCommand.split(' ');
    let commandType = commandInfo[0].toLowerCase();
 
        let itemName = commandInfo[1];
 
        let itemExists = groceries.includes(itemName);
 
        if(commandType === "urgent"){
            if(!itemExists){
                groceries.unshift(itemName);
            }
        } else if (commandType === "unnecessary"){
            if(itemExists){
                let indexOfitem = groceries.indexOf(itemName);
                groceries.splice(indexOfitem, 1);
            }
 
        } else if(commandType === "correct"){
            if(itemExists){
                
                let indexOfitem = groceries.indexOf(itemName);
                let newItem = commandInfo[2];
                groceries[indexOfitem] = newItem;
            }
        } else if (commandType === "rearrange"){
            if(itemExists){
            let indexOfitem = groceries.indexOf(itemName);
            groceries.splice(indexOfitem, 1);
            groceries.push(itemName);
            }

        }
   } 
   
   console.log(groceries.join(", "))
}
shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
    