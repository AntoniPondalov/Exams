function musicPlaylist(arr) {
    let listOfSongs = arr.shift().split(` `);
    let commandsNum = +arr.shift();

    for (let i = 0; i < commandsNum; i++) {
        let command = arr[i].split(` * `)[0];

        if (command === "Add Song") {
            let songName = arr[i].split(` * `)[1];
            if (!listOfSongs.includes(songName)) {
                listOfSongs.push(songName);
                console.log(`${songName} successfully added`);
            }
        } else if (command === "Delete Song") {
            let songToRemove = +arr[i].split(` * `)[1];
            if (listOfSongs.length >= songToRemove) {
                let removedSongs = listOfSongs.splice(0, songToRemove);
                console.log(`${removedSongs.join(`, `)} deleted`);
            }

        } else if (command === "Shuffle Songs") {
            let index1 = arr[i].split(` * `)[1];
            let index2 = arr[i].split(` * `)[2];
            
            if (index1 < listOfSongs.length && index1 >= 0 && index2 < listOfSongs.length && index2 >= 0) {
                let song1 = listOfSongs[index1];
                let song2 = listOfSongs[index2];
    
                listOfSongs[index2] = song1;
                listOfSongs[index1] = song2;
                console.log(`${song2} is swapped with ${song1}`)
            } 
 
        } else if (command === "Insert") {
            let index = +arr[i].split(` * `)[2];
            let song = arr[i].split(` * `)[1];

            if (index < listOfSongs.length && index >= 0) {
                
                if (listOfSongs.includes(song)) {
                console.log(`Song is already in the playlist`)
                } else {
                    listOfSongs.splice(index, 0, song);
                    console.log(`${song} successfully inserted`);
                }

            } else {
                console.log("Index out of range");
            }
        
        } else if (command === "Sort") {
            listOfSongs.sort((a, b) => b.localeCompare(a));
        
        } else if (command === "Play") {
            console.log(`Songs to Play: \n${listOfSongs.join(`\n`)}`)
        }
    }
}
musicPlaylist(["BlindingLights RollingInTheDeep ShapeOfYou",
    "7",
    "Add Song * LetItBe",
    "Delete Song * 1",
    "Shuffle Songs * 1 * 2",
    "Insert * BohemianRhapsody * 0",
    "Add Song * BohemianRhapsody",
    "Sort",
    "Play"])
    
