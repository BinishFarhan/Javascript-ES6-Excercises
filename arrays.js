//=======QUESTION 1 ======
// Given an array of firstname and an array of last name.
// First check both array size is equal or not,
// if equal then make third array which is two dimensional array like
// [['maryam khan'], ['hira khan']......]

// const firstName = ['Maryam', 'Binish'];
// const lastName = ['khan', 'Farhan', 'alkdsjf'];
// const fullName = [];
// for (let i = 0; i < firstName.length; i++) {
//     console.log(firstName[i] +" " + lastName[i])
// }
// if (firstName.length === lastName.length) {
// }

// console.log("🚀 ~ file: arrays.js:9 ~ fullName:", fullName)


// ## Make a TODO
// ### Create an empty array with the name is courses.example: 
/* var courses=[]; 
// ### Get the 5-course name from the user, example: 
var course1 = prompt("course 1", "computer")
var course2 = prompt("course 2", "computer")
var course3 = prompt("course 3", "computer")
var course4 = prompt("course 4", "computer")
var course5 = prompt("course 5", "computer")
// ###  and save all 5 value in "courses" array. example:
 courses.push(course1,course2,course3,course4,course5)  
// ### print courses array in alertexample:
 alert(courses)
//    print all full 5-course name one by one in prompt. example: 
course1ValueEdit = prompt('edit yur course')
course1 = course1ValueEdit
courses.splice(0,1,course1ValueEdit)
// ### If the user edit any value (through prompt),
// then that value is edit in the array.  example: 
// course1=prompt(course1, course1ValueEdit)
// ### use Array.splice() to replace and edit index
// in array  print courses array in alert example:
 alert(courses)*/

//  ## Create a function that take array input and
//   make each element double and then
//    return an array (use for loop)

var arr= [2,3,4,5,6,7];
var arr2= [];
for(let i = 0; i < arr.length; i++){
    var abc = arr[i]*arr[i]
    arr2.push(abc)

}

console.log(arr2)
