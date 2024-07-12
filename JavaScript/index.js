// switch

let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Some other day");
}

// Loops

// 1) while Loop
let count = 0;
while (count > 3) {
  //   console.log("Count is " + count);
  console.log(`Count is ${count}`);
  count = count + 1;
}

// 2) do -while Loop
do {
  console.log(`Count is : ${count}`);
  count++;
} while (count > 3);

// 3) for loop
for (let i = 0; i < 3; i++) {
  document.write(`Count is ${i}`);
}

let arr = [
  "Sunday",
  1,
  45,
  67,
  "monday",
  { name: "Anushka", sirName: "Gautam" },
];
// console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log(arr[5].name); // Anushka

//Functions
// function functionName(parameters){
//     //code
// }

function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Rohit"); // function call  ===> functionName(Argument)

function sum(a, b) {
  return a + b;
  console.log("hello");
}

console.log(sum(2, 3));

//Arrow Function (ES6)

const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(92, 56));
console.log(`This is the output ${subtract(36, 16)}`);

if (10 > 5) {
  console.log("10 is greater");
} else {
  console.log("5 is lesser");
}

//Ternary Operator

console.log(10 > 5 ? "10 is Greater" : "5 is Lesser");
