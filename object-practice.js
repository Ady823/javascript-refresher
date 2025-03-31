student1 = {fName: "Ady", lName: "Duval", gpa: 5.0, playsVolleyball: true};

console.log("I know", student1.fName, student1.lName)

student2 = {fName: "Samantha", lName: "Pietersz", gpa: 3.9, playsVolleyball: false}

console.log("I know", student2.fName, student2.lName)

// if (student1.playsVolleyball){
//     console.log(student1.fName, "does play volleyball.") 
// } else {
//     console.log(student1.fName, "does not play volleyball")
// } 

let students = [student1]
students.push(student2)
students.push({fName: "John", lName: "Smith", gpa: 0.2, playsVolleyball: false})
students[0].fName = "Stew" 
student2.fname = "hugiap"

students[students.length - 1].gpa += 0.5
console.table(students)

         