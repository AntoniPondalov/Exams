function friendList(input){
    let friends = input[0].split(', ');
    let blacklistedCounter = 0;
    let lostCounter = 0;
    for(let i = 1; i<input.length; i++){
        let command = input[i].split(' ')[0];
        //console.log(command);
        switch(command){
            case 'Blacklist':
                let name = input[i].split(' ')[1];
                if(friends.includes(name)){
                    friends[friends.indexOf(name)] = 'Blacklisted';
                    console.log(`${name} was blacklisted.`);
                    blacklistedCounter++;
                }
                else{
                    console.log(`${name} was not found.`);
                }
                break;
            case 'Error':
                let index = input[i].split(' ')[1];
                let errorOldName = '';
                if(index>=0 && index < friends.length && friends[index]!=='Lost' && friends[index]!=='Blacklisted'){
                    errorOldName = friends[index];
                    friends[index] = 'Lost';
                    console.log(`${errorOldName} was lost due to an error.`);
                    lostCounter++;
                }
                break;
            case 'Change':
                let changeIndex = input[i].split(' ')[1];
                let newName = input[i].split(' ')[2];
                let oldName = '';
                if(changeIndex>=0 && changeIndex < friends.length){
                    oldName = friends[changeIndex];
                    friends[changeIndex] = newName;
                }
                console.log(`${oldName} changed his username to ${newName}.`)
                break;
            case 'Report':
                console.log(`Blacklisted names: ${blacklistedCounter}`);
                console.log(`Lost names: ${lostCounter}`);
                console.log(friends.join(' '));
                break;           
        }
    }
}

// let input = ["Mike, John, Eddie",
//     "Blacklist Mike",
//     "Error 0",
//     "Report"];
let input = ["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report"];
    
    
friendList(input);