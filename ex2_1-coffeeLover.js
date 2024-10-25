function coffeeLover(arr) {
    let coffeeList = arr.shift().split(` `);
    let commandCounts = arr.shift();

    for (const command of arr) {
        let tokens = command.split(` `);
        let action = tokens.shift();

        if (action === "Include") {
            let coffeeToAdd = tokens.shift();
            coffeeList.push(coffeeToAdd);
        } else if (action === "Remove") {
            let position = tokens.shift();
            let index = Number(tokens.shift());

            if (position === "first") {
                coffeeList.splice(0, index)
            } else if (position === "last") {
                coffeeList.splice(- index);
            }
        } 
        if (action === "Prefer") {
            let index1 = Number(tokens.shift());
            let index2 = Number(tokens.shift());

            let num1 = coffeeList[index1];
            let num2 = coffeeList[index2];

            coffeeList[index2] = num1;
            coffeeList[index1] = num2;

        }
        if (action === "Reverse") {
            coffeeList.reverse()
        }
    }
    console.log(`Coffees: \n${coffeeList.join(` `)}`)

}
coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"])
    