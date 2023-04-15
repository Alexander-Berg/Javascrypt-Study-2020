window.onload = function(){ 
    // your code 



console.log("I like pizza!");
console.log("It's really good!");
window.alert("I REALLY LOVE PIZZA!");

//This is a comment
/*
    This
    is
    a
    multiline
    comment
*/

// VARIABLES
// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment  (= assignment operator)

let firstName = "Berg"; //strings
let age = 29; //number
let student = true; //booleans

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

/* 
   arithmetic expression is a combination of...
   operands (values, variables, etc.)
   operators (+ - * / %)
   that can be evaluated to a value
   ex. y = x + 5;
*/

let students = 20;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//let extraStudents = students % 2;
//students = students ** 2;

console.log(students);

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

//let result = (1 + 2) * (3 + 4);

//console.log(result);



// HOW TO ACCEPT USER INPUT

// EASY WAY with a window prompt

// let username = window.prompt("What's your name?");
// console.log(username);

// DIFFICULT WAY HTML textbox

    

  let username;

 document.getElementById("myButton").onclick = function(input){
    let username = window.prompt("What's your name?");
 console.log(username);
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
 }



// TYPE CONVERSION = change the datatype of a value to another
//                                   (strings, numbers, booleans)

let age2 = window.prompt("How old are you?");

//console.log(typeof age);
age = Number(age);
age += 1;

console.log("Happy Birthday! You are", age, "years old");

/*
let x;
let y;
let z;

x = Number("pizza");
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

//CONSTANTS
// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

//PI = 420.69;

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);

// Math =  an intrinsic object that provides basic mathematics functionality and constants

let x1 = 3.14;
let y1 = 5;
let z1 = 9;
let maximum;
let minimum;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
//maximum = Math.max(x, y, z);
//minimum = Math.min(x, y, z);
//x = Math.PI;

console.log(x1);

window.onload = function(){ 
   

let a;
let b;
let c;

document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
} 
};

 
let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;

}

window.onload = function(){ 
let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}
};
// useful string properties & methods

let userName = "Berg Code";
let phoneNumber = "123-456-7890";

//console.log(userName.length);
//console.log(userName.charAt(0));
//console.log(userName.indexOf("o"));
//console.log(userName.lastIndexOf("o"));
userName = userName.trim();
userName = userName.toUpperCase();
//userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);
console.log(userName);

// slice() extracts a section of a string 
//         and returns it as a new string, 
//         without modifying the original string

let fullName2 = "Snoop Dogg";
let firstName2;
let lastName2;

//firstName = fullName.slice(0, 3);
//lastName = fullName.slice(4);

firstName2 = fullName2.slice(0, fullName2.indexOf(" "));
lastName2 = fullName2.slice(fullName2.indexOf(" ") + 1);

console.log(firstName2);
console.log(lastName2);

// method chaining = calling one method after another
//                                   in one continuous line of code

let userName3 = "berg";

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter);

// if statement = a basic form of decision making
//                           if a condition is true, then do something
//                           if not, then don't do it!

let age3 = 21;

if(age3 >= 65){
    console.log("You are a senior citizen!");
}
else if(age3 >= 18){
    console.log("You are an adult!");
}
else if(age3 < 0){
    console.log("YOU HAVEN'T BEEN BORN YET!");
}
else{
    console.log("You are a child!");
}

/*
let online = false;

if(online){
    console.log("You are online!");
}
else{
    console.log("You are offline!");
}
*/
document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");
  
    if(myCheckBox.checked){
      console.log("You are subscribed!");
    }
    else{
      console.log("You are NOT subscribed!");
    }
  
    if(visaBtn.checked){
      console.log("You are paying with a Visa!");
    }
    else if(mastercardBtn.checked){
      console.log("You are paying with a Mastercard!");
    }
    else if(paypalBtn.checked){
      console.log("You are paying with PayPal!");
    }
    else{
      console.log("You must select a payment type!");
    }
  }
  // switch = statement that examines a value 
//                 for a match against many case clauses.
//                 More efficient that many "else if" statements

let grade = "A";

switch(grade){
 
    case "A":
      console.log("You did great!");
      break;
   
    case "B":
      console.log("You did good!");
      break;
 
    case "C":
      console.log("You did okay!");
      break;
 
    case "D":
      console.log("You passed ... barely");
      break;
 
    case "F":
      console.log("YOU FAILED!");
      break;
 
    default:
      console.log(grade, "is not a letter grade");
}


let grade2 = 95;

switch(true){

    case grade2>= 90:
        console.log("You did great!");
        break;

    case grade2 >= 80:
        console.log("You did good!");
        break;

    case grade2 >= 70:
        console.log("You did okay!");
        break;

    case grade2 >= 60:
        console.log("You passed ... barely");
        break;

    case grade2 > 60:
        console.log("You FAILED!");
        break;

    default:
        console.log(grade2, "is not a letter grade!");
}

// = assignment operator
// == comparison operator
// === strict equality operator

let x = "3.14";

if(x === 3.14){
    console.log("That is pi");
}
else{
    console.log("That is NOT pi");
}

// Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)

let temp = 15;
let sunny = false;

if(temp > 0 && temp < 30 && sunny){
    console.log('The weather is good!');
}
else{
    console.log('The weather is bad!');
}

// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false  false -> true

let temp2 = 15;
let sunny2 = false;

if(!(temp2 > 0)){
    console.log("It's cold outside");
}
else{
    console.log("It's warm outside");
}

if(!sunny){
    console.log("It's cloudy outside");
}
else{
    console.log("It's sunny outside");
}

// while loop = repeat some code 
//                       while some condition is true
//                       potentially infinite

let userName4 = "";

while(userName4 == "" || userName == null){
    userName4 = window.prompt("Enter your name");
}

console.log("Hello", userName4);

// do while loop = do something,
//                             then check the condition,
//                             repeat if condition is true

let userName5;

do{
    userName5 = window.prompt("Enter your name");
}while(userName5 == "")

console.log("Hello", userName5);

// for loop = repeat some code a 
//            certain amount of times
/*
for(let i = 1; i <= 10; i+=1){
    console.log(i);
}
*/
for(let i = 10; i > 0; i-=1){
    console.log(i);
}

console.log("HAPPY NEW YEAR!");

// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

for(let i = 1; i <= 20; i+=1){
    if(i == 13){
        //break;
        //continue;
    }
    console.log(i);
}

// nested loop = a loop inside of another loop
window.onload = function(){ 
let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt('Enter # of rows');
let columns = window.prompt('Enter # of columns');

for(let i = 1; i <= rows; i+=1){
    for(let j = 1; j <= columns; j+=1){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}
}

//function = Define code once, and use it many times.
//                   To perform some code, call the function name.

startProgram();

function startProgram(){
    let userName7 = "Berg";
    let age7 = 29;
    
    happyBirthday(userName7, age7);
}

function happyBirthday(userName7, age7){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName7);
    console.log("Happy birthday to you!");
    console.log("You are", age7,"years old!");

// return = returns a value back to the place 
//               where you invoked a function

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log("The area is:", area);

function getArea(width, height){
    return width * height;
}
}

// ternary operator = Shortcut for an 'if/else statement'
//                                  Takes 3 operands
 
//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False
 
// condition ? exprIfTrue : exprIfFalse
 
let adult = checkAge(12);
console.log(adult);
 
function checkAge(age9){
 
    return age9 >= 18? true : false;
}
/*
checkWinner(false);
 
function checkWinner(win){
 
    win ? console.log("You win!") : console.log("You lose!");
}
*/

// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

for(let i = 1; i <= 3; i+=1){
    //console.log(i);
}
for(var i = 1; i <= 3; i+=1){
    //console.log(i);
}

console.log(i);


// Template literals = delimited with (`)
//                                   instead of double or single quotes
//                                   allows embedded variables and expressions

let userName10 = "Berg";
let items = 3;
let total = 75;

//console.log("Hello", userName);
//console.log("You have", items, "items in your cart");
//console.log("Your total is $", total);

//console.log(`Hello ${userName}`);
//console.log(`You have ${items} items in your cart`);
//console.log(`Your total is $${total}`);

let text = 
`Hello ${userName10}<br>
You have ${items} items in your cart<br>
Your total is $${total}<br>`;

//console.log(text);
document.getElementById("myLabel").innerHTML = text;



//toLocaleString() = returns a string with a language 
//                                sensitive representation of this number

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options

let myNum = 123456.789;

//myNum = myNum.toLocaleString("en-US"); // US English
//myNum = myNum.toLocaleString("hi-IN"); // Hindi
//myNum = myNum.toLocaleString("de-DE"); // standard German

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

//myNum = myNum.toLocaleString(undefined, {style: "percent"});
//myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum);

const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function (){

  let guess = document.getElementById("guessField").value
  guesses+=1;
  
  if(guess == answer){
    alert(`${answer} is the #. It took you ${guesses} guesses`);
  }
  else if(guess < answer){
    alert("Too small!");
  }
  else{
    alert("Too large!");
  }
}
};