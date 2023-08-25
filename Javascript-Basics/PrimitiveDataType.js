// Primitive DataType
//String, Number, Boolean, Null, Undefined

// Sring and Number
document.write("<br/>" + "-------------Sring and Number-----------" + "<br/>");
let x = 22;
let y = 22.14;
let z = -23;
let str = "Hi";
document.write(x + "<br/>");
document.write(y + "<br/>");
document.write(z + "<br/>");
document.write(str + "<br/>");

//Converting string to a number
document.write(
  "<br/>" + "-------------Converting string to a number-----------" + "<br/>"
);
let str1 = "234";
document.write("str1 : " + str1 + "<br/>"); //234
document.write("type of str1 : " + typeof str1 + "<br/>"); //string
//string to a number
let str2 = Number.parseInt(str1);
document.write("str2 : " + str2 + "<br/>"); // 234
document.write("type of str2 : " + typeof str2 + "<br/>"); // Number

//NaN
document.write("<br/>" + "-------------NaN------------" + "<br/>");
document.write("String divided by a number: " + "hi" / 5);
document.write("<br/>");
document.write("Number divided by a number: " + 25 / 5);

//null
document.write("<br><br/>" + "-------------Null------------" + "<br/>");
let num = null;
document.write(
  "num= " +
    num +
    "(Value that represents the intentional absence of any value.)"
);
document.write("<br/>");
document.write("typeof num: " + typeof num);

//Undefined
document.write("<br><br/>" + "-------------Undefined------------" + "<br/>");
let num1;
document.write(
  "num1= " + num1 + " ( A variable without a value is undefined.)" + "<br/>"
);
document.write("typeof num1: " + typeof num1);
