for (let i = 0; i < 4; i++) {
    if (i == 1) {
        suit = "Hearts"
    }
    if (i == 2) {
        suit = "Spades"
    }
    if (i == 3) {
       suit = "Diamonds";
    }
    if (i == 0) {
       suit = "Clubs";
    }
    printCards(suit)
    console.log(" ")
}

function printCards(suit) {
    for (let j = 0; j < 14; j++) {
        if (j < 11 && j > 1) {
            console.log(j, "of", suit);
        } else if (j == 1) {
            console.log("Ace of", suit)
        } else if (j == 11) {
            console.log("Jack of", suit)
        } else if (j == 12) {
            console.log("Queen of", suit)
        } else if (j == 13)
            console.log("King of", suit)
    }
}
