let fizz = 0;
let buzz = 0;
let fizzBuzz = 0; 
let i = 0;
while(fizz <= 1000) {
i++;
    if(i % 15 == 0) {
        console.log(i, "fizz buzz")
        fizzBuzz++;
    } else if(i % 3 == 0){
        console.log(i, "fizz")
        fizz++;
    } else if(i % 5 == 0){
        console.log(i, "buzz")
        buzz++;
    } else {
        console.log(i)
    }
}
console.log("fizzes:", fizz);
console.log("buzzes:", buzz);
console.log("fizz buzzes:", fizzBuzz); 