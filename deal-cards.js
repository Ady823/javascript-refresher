let card1 = {rank:"Ace", suit:"Hearts"};
let card2 = {rank:"7", suit:"Diamonds"};
console.log("You are holding the", card1.rank, "of", card1.suit, "and the", card2.rank, "of", card2.suit)

let card3 = {rank:"King", suit:"Spades"}

let deck = [card1, card2, card3];

/* for (let i = 0; i < deck.length; i++) {
    console.log(i.rank, "of", i.suit)
} */

for (let i of deck) {
    console.log(i.rank, "of", i.suit)
}

let cards = [];
let suits = [];
suits.push("Hearts")
suits.push("Clubs")
suits.push("Spades")
suits.push("Diamonds")

//creating cards
for (let i = 1; i < 14; i++){
    if(i > 1 && i < 11) {
    cards.push(i)
    } else if (i == 1){
        cards.push("Ace")
    } else if (i == 11) {
        cards.push("Jack")
    } else if (i == 12) {
        cards.push("Queen")
    } else {
        cards.push("King")
    }
}

//printing a deck 
let allCards = [];
for (let suit of suits) {
    for (let card of cards) {
        console.log(card, "of", suit)
        allCards.push(card, "of", suit)
    }
}
firstCard = Math.random() * cards.length + 1;
console.log(cards.splice(firstCard, 1));
secondCard = Math.random() * cards.length + 1;
console.log(cards.splice(secondCard, 1));

for (let suit of suits) {
    for (let card of cards) {
        console.log(card, "of", suit)
    }
}