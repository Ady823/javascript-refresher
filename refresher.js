/* console.log("Hello World."); 

let x = "How goes it?"; 
console.log(x);

let greeting = "Hello"; */
//let fName = "ob";
//console.log(greeting + " " + fName + "!"); 

/* let age = 18;
console.log("You are", age);
console.log("In ten years you will be", (age + 10)); 

if(fName == "Bob") {
    console.log("I knew it was you, Bob!")
} else {
    console.log("Hey", fName + ",", "You're not Bob!");
}

let iAmWearingABelt = false;
let iAmWearingGlasses = false;

if(iAmWearingABelt && iAmWearingGlasses) {
    console.log("Probably not Mr. Gorton")
} else if (iAmWearingABelt && !iAmWearingGlasses){
    console.log("Probably is Mr. Gorton")
} else {
    console.log("Probably just some dude")
}

for(let i = 0; i <= 10; i++) {
    console.log(i)
} */

//Start of part 3

for(let i = 0; i < 6; i++) {
    console.log("comp sci is awesome")
}

let age = 13;
tellMeMyAge(age)
function tellMeMyAge(years){
console.log("You are ", age, "years old.");
}

makePizza("pepperoni", "large")
makePizza("buffalo chicken", "medium")
function makePizza(type, size) {
    console.log("One", size, type, "pizza coming up!")
}

function pricePizza(size){
    if(size == ("small")) {
        return 13;
    } else if(size == ("large")){
        return 17;
    }
}

let howMuchForAPizza = pricePizza("small");
console.log(howMuchForAPizza)

let y = "hi"

lastFunction()
function lastFunction(){
    let x = "bye" 
    console.log(x)
    console.log(y)
}

//console.log(x)
console.log(y)