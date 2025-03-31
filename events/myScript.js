function createMessage() {
    let name = document.getElementById('name').value
    let animal = document.getElementById('animal').value
    let header = document.getElementById('msg')
    let greeting = "Hi, my name is " + name + " and I have a pet " + animal
    console.log(greeting)
    header.innerHTML = greeting;
} 

function changeColor() {
    document.getElementById('name').style.backgroundColor = 'red'

}