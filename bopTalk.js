let vowels = "a, e, i, o, u";
let input = ("Hi my name is Ady").toLowerCase();
let bopTalk = "";
for(let i = 0; i < input.length; i++) {
    if(vowels.indexOf(input.substring(i, i + 1)) == -1) {
        bopTalk += input.substring(i, i + 1) + "op";
    } else {
        bopTalk += (input.substring(i, i + 1))
    }
}
console.log(bopTalk)
