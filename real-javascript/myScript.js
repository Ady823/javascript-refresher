console.log("Hello World"); 
//window.alert("I am an alert")
//document.getElementById("mine").innerHTML = "no" 

function transferWords() {
    let msg = document.getElementById('loremIpsum').value
    console.log(msg)
    let myH = document.getElementById('myH')
    myH.innerHTML = msg;
}
