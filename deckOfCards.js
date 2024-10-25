function deckOfCards(arr) {
    let cardList = arr.shift().split(", ");
    let numberOfCommands = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(", ");
        let info = command[0];

        if (info === "Add") {
            let card = command[1];
            if (!cardList.includes(card)) {
                cardList.push(card);
                console.log("Card successfully added");

            } else {
                console.log("Card is already in the deck");
            }
        }   else if(info === "Remove"){
            let card = command[1];

            if(cardList.includes(card)){
                let cardindex = cardList.indexOf(card);
                cardList.splice(cardindex,1);
                console.log("Card successfully removed");
            } else{
                console.log("Card not found");
            }

        } else if(info === "Remove At"){
            let index = +command[1];
            if(index >= 0 && index < cardList.length){
                cardList.splice(index,1);
                console.log("Card successfully removed");
            } else{
                console.log("Index out of range");
            }

        } else if(info === "Insert"){
            let index = +command[1];
            let card = command[2];
            if(index >= 0 && index < cardList.length){
                if(cardList.includes(card)){
                    console.log("Card is already added");

                } else{
                    cardList.splice(index,0, card)
                        console.log( "Card successfully added");
                }

            } else{
                console.log("Index out of range");
            }
        }
    } 
    console.log(cardList.join(", "))

}
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"]
)

