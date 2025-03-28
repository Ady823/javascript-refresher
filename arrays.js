let names = ["Micah", "Tyler", "Olivia", "Lily", "Ady"];
console.log(names)
names.push("Mr. Gorton")
console.log(names)
console.log("My second value is", names[1] + ".")

console.log()
printAllNames(false)

function printAllNames(sort) {
    if(sort) {
        names.sort()
    }
    for (let i = 0; i < names.length; i++) {
        console.log(names[i])
    } 
}
