for(let i = 0; i < 4; i++) {
   let card;
   if(i == 1){
        card = "Hearts"
        let number;
        cards(card);
        }
    if(i == 2) {
        card = "Spades"
        cards(card);
    }
    if(i == 3) {
        card = "Diamonds";
        cards(card);
    }
    if(i == 0) {
        card = "Clubs";
        cards(card);
    }
    console.log(" ")
   } 

   function cards(card) {
    for(let j = 0; j < 14; j++) {
        if(j < 11 && j > 1) {
            console.log(j, "of", card);
        } 
        else if (j == 1){
            console.log ("Ace of", card)
        } else if(j == 11) {
            console.log("Jack of", card)
        } else if(j == 12) {
            console.log("Queen of", card)
        } else if(j == 13)
            console.log("King of", card)
        }
    }
