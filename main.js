//Week 1 - Project 1


// Log all answers to the console and write them to document
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// =======================================================

//1. Log your name to the console (as a string).

console.log('Question 1');
console.log('Mary');

//2. Declare a variable called 'name', and then log it to the console.

console.log('Question 2');
var name = 'Mary';
console.log(name);

//3. Declare two variables with number values. 
//   Add, subtract, multiply and divide them.

console.log('Question 3');
var x = 3;
var y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

//4. Declare two variables with string values. 
//   Create a third variable that concatenates them.

console.log('Question 4');
var subject = 'Prince';
var reaction = 'NOOOOOOOO';
console.log(subject  +  reaction);

//5. Add, subract, multiply and divide the strings '5' and '3'. 
//   Observe the results and know how to explain the results if asked.

console.log('Question 5');
var five = '5';
var three = '3';
console.log(five + three);
console.log(five - three);
console.log(five * three);
console.log(five / three);

//6. Create a prompt that asks a user to pick a number. 
//   Then double the answer.

console.log('Question 6');
var number = prompt("Pick a number");
console.log(number * 2);

//7. Create a custom alert.

console.log('Question 7');
alert("I'M A COMPUTER");

//8. Declare three variables called length, width and height. 
//   Calculate area and volume.

console.log('Question 8');
var length = 7;
var width = 2;
var height = 3;
var area = length * width;
var volume = area * height;
console.log(area);
console.log(volume);

//9. Ask for a user's name, age and city. 
//   In a single command display/log the sentence:
//   "My name is...I'm....years old, and I live in....."

console.log('Question 9');
var nameQuestion9 = prompt("Name");
var age = prompt("Age");
var city = prompt("City");
console.log("My name is " + nameQuestion9  + ". I'm " + age  + " years old, and I live in " + city + ".");

//10. Create an alert that uses the response from a prompt.

console.log('Question 10');
alert("Never change, " + nameQuestion9);
