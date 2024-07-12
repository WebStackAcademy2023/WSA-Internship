// Strings;
let name1 = "Mentor";
document.write(name1);

// Boolean (True or False)
let isStudent = false;
document.write("<br>" + isStudent);

//
let x = "navya";
let y = 45;
document.write("<br>", x - y);

//Arrays : []
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "orange", "grapes"];

//Mixed-type array
let mixedArray = [10, "apple", true, [1, 2, 3, 4]];

document.write("<br>", numbers[4]); // Output is 5
document.write("<br>", fruits[5]); // Output is undefined
document.write("<br>", mixedArray[3][1]); //Output is 2

//Objects

let person = {
  firstname: "John",
  lastname: "Andrew",
  age: 30,
};

document.write("<br>", person.firstname);

// Conditional statement

// if
let age = 8;
if (age >= 18) {
  document.write("<br>" + "You are an adult");
}

// if else
let age1 = +prompt("Please enter age");
if (age1 >= 18) {
  document.write("<br>", "You are an adult");
} else {
  document.write("<br>", "You are a minor");
}

// if else if
let grade = +prompt("Please enter marks");
if (grade >= 90) {
  document.write("<br>", "Grade A");
} else if (grade >= 80) {
  document.write("<br>", "Grade B");
} else if (grade >= 70) {
  document.write("<br>", "Grade C");
} else {
  document.write("<br>", "Grade D");
}
