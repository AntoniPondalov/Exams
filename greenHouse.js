function greenHouse(arr) {
    let garden = arr.shift().split(" & ");
    for (i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");
        let info = command[0];
     

        if (info === "Plant") {
            let plant = command[1];
            if (!garden.includes(plant)) {
                garden.unshift(plant);

            }
        } else if (info === "Transplant") {
            let plant = command[1];
            if (garden.includes(plant)) {
                let index = garden.indexOf(plant);
                garden.splice(index, 1);
                garden.push(plant);
            }

        } else if (info === "Replace") {
            let index1 = command[1];
            let index2 = command[2];
            if (index1 >= 0 && index1 < garden.length && index2 >= 0 && index2 < garden.length) {
                let plant1 = garden[index1];
                let plant2 = garden[index2];
                garden[index1] = plant2;
                garden[index2] = plant1;
                
            }
        
        } else if (info === "Uproot") {
            let plant = command[1];
            let index = garden.indexOf(plant)
            if (garden.includes(plant)) {
                garden.splice(index, 1);
            }
        }
    }
    console.log(garden.join(` | `))
    
}
greenHouse(['tomato & bean & pea', 'Uproot tomato', 'Uproot bean', 'Collect!'])