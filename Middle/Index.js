
window.onload = function(){ 
    // your code 

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

document.getElementById("submitButton").onclick = function(){

    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C";
    }
    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}

function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32;
}


// array = think of it as a variable 
//              that can store multiple values

let fruits = ["apple", "orange", "banana"];

//fruits[2] = "coconut";

//fruits.push("lemon");      //add an element
//fruits.pop();                     //removes last element
//fruits.unshift("mango"); //add element to beginning
//fruits.shift();                   //removes element from beginning

//let length = fruits.length;
//let index = fruits.indexOf("kiwi");

console.log(fruits);

let prices = [5, 10, 15, 20, 25];

/*
for(let i = 0; i < prices.length; i+=1){
    console.log(prices[i]);
}
*/

for(let price of prices){
    console.log(price);
}


let fruits2 = ["banana", "apple", "orange", "mango"];

fruits2 = fruits2.sort();
//fruits = fruits.sort().reverse();

for(let fruit2 of fruits2){
    console.log(fruit2);
}

// 2D array = An array of arrays

let fruits3 =           ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats =         ["eggs", "chicken", "fish"];

let groceryList = [fruits3, vegetables, meats];

groceryList[2][2] = "steak";

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}

// spread operator = allows an iterable such as an 
// ...                             array or string to be expanded 
//                                 in places where zero or more 
//                                 arguments are expected
//                                (unpacks the elements)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers);
console.log(maximum);

/*
let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
class1.push(...class2);
console.log(...class1);
*/

// rest parameters = represents an indefinite number
// ...                             of parameters
//                                (packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}


// callback = a function passed as an argument
//                    to another function.
 
//    Ensures that a function is not going
//    to run before a task is completed.
//    Helps us develop asynchronous code.
//    (When one function has to wait for another function)
//    that helps us avoid errors and potential problems
//    Ex. Wait for a file to load
window.onload = function(){ 
sum(2, 3, displayConsole);

function sum(x, y, callBack){
  let result2 = x + y;
  callBack(result2);
}

function displayConsole(output){
  console.log(output);
}

function displayDOM(output){
  document.getElementById("myLabel2").innerHTML = output;
}

//array.forEach() = executes a provided callback function
//                              once for each array element

let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}
}
//array.map() = executes a provided callback function
//                         once for each array element
//                         AND creates a new array

let numbers4 = [1, 2, 3, 4, 5];
let squares = numbers4.map(square);
let cubes = numbers4.map(cube);

numbers.forEach(print);
squares.forEach(print);
cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}
function print(element){
    console.log(element);
}
//array.reduce() = reduces an array to a single value            

let prices2 = [5, 10, 15, 20, 25, 30];
let total = prices2.reduce(checkOut);

console.log(`The total is: $${total}`);

function checkOut(total, element){
    return total + element;
}
let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);

grades.forEach(print);

function descendingSort(x, y){
    return y - x;
}
function ascendingSort(x, y){
    return x - y;
}
function print(element){
    console.log(element);
}
// function expression = function without a name (anonymous function)
//                                        avoid polluting the global scope with names
//                                        write it, then forget about it
// ------------ Example 1 ------------
window.onload = function(){ 
const greeting = function(){
    console.log("hello");
}
greeting();
// ------------ Example 2 ------------
let count = 0;

document.getElementById("increaseButton").onclick = function(){
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("decreaseButton").onclick = function(){
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}
}
// arrow function expression = compact alternative to a traditional function expression
//      =>

const grades5 = [100, 50, 90, 60, 80, 70];

grades5.sort((x, y) => y - x);
grades5.forEach((element) => console.log(element));

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);

console.log(cards);
//console.log(cards[0]);
//cards.forEach(card => console.log(card));

function shuffle(array){
  let currentIndex = array.length;

  while(currentIndex != 0){
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex-=1;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  
  return array;
}
// nested functions = Functions inside other functions.
//                                   Outer functions have access to inner functions.
//                                   Inner functions are "hidden" from outside.
//                                   used in closures (future video topic)
 
let userName = "Berg";
let userInbox = 0;

login();

function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}



// closure =  A function with preserved and private data.
//                   Gives you access to an outer function’s scope,
//                   from an inner function.
window.onload = function(){
document.getElementById("loginButton").onclick = login();

//userInbox = 420.69;

function login(){
    let userName = "Berg";
    let userInbox = 1;

    function alertUser(){
        alert(`${userName} you have ${userInbox} new messages!`);
        userInbox = 0;
    }

    return alertUser;
}
}
// Map = object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
  ]);
  
  //store.get("t-shirt");
  //store.set("hat", 40);
  //store.delete("hat");
  //console.log(store.has("underwear"));
  //console.log(store.size);
  
  store.forEach((value, key) => console.log(`${key} $${value}`));

// object = A group of properties and methods
//                properties = what an object has
//                methods = what an object can do
//                use . to access properties/methods

const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}
const car2 = {
    model:"Corvette",
    color:"blue",
    year:2024,

    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.drive();
car1.brake();

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);
car2.drive();
car2.brake();


// this = reference to a particular object
//           the object depends on the immediate context

const car5 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}
const car6 = {
    model:"Corvette",
    color:"blue",
    year:2024,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}

car5.drive();
car6.drive();

// class = a blueprint for creating objects
//              define what properties and methods they have
//              use a constructor for unique properties

class Player{

    score = 0;

    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();

// constructor = a special method of a class,
//                          accepts arguments and assigns properties

class Student{

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);
const student3 = new Student("Sandy", 27, 4.0);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();

// static = belongs to the class, not the objects
//               properties: useful for caches, fixed-configuration
//               methods:    useful for utility functions

class Car{

    static numberOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car7 = new Car("Mustang");
const car8 = new Car("Corvette");
const car9 = new Car("BMW");

console.log(Car.numberOfCars);
Car.startRace();

// inheritance = a child class can inherit all the 
//                        methods and properties from another class

class Animal{

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{

    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{

    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{

    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

// super = Refers to the parent class. 
//               Commonly used to invoke constructor of a parent class

class Animal2{
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Rabbit2 extends Animal2{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish2 extends Animal2{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk2 extends Animal2{

    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit2 = new Rabbit2("rabbit", 1, 40);
const fish2 = new Fish2("fish", 2, 80);
const hawk2 = new Hawk2("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

// get = binds an object property to a function 
//          when that property is accessed
// set = binds an object property to a function
//          when that property is assigned a value

class Car10{
    constructor(power){
        this._gas = 25;
        this._power = power;
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    set gas(value){
        if(value > 50){
            value = 50;
        }
        else if(value < 0){
            value = 0;
        }
        this._gas = value;
    }
}

let car10 = new Car10(400);

car10.gas = 100;

console.log(car10.power);
console.log(car10.gas);

// objects as arguments
class Car11{

    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car11= new Car11("Mustang", 2023, "red",);
const car12 = new Car11("Corvette", 2024, "blue");
const car13 = new Car11("Lambo", 2022, "yellow",);

changeColor(car13, "gold");
displayInfo(car13);

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}
function changeColor(car, color){
    car.color = color;
}
// array of objects
class Car20{

    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive(){
        console.log(`You drive the ${this.model}`);
    }
}

const car21 = new Car20("Mustang", 2023, "red");
const car22 = new Car20("Corvette", 2024, "blue");
const car23 = new Car20("Lambo", 2022, "yellow");
const car24 = new Car20("Ferrari", 2025, "white");

const cars20 = [car21, car22, car23, car24];

console.log(cars20[0].model);
console.log(cars20[1].model);
console.log(cars20[2].model);

startRace(cars20);

function startRace(cars){
    for(const car20 of cars20){
        car20.drive();
    }
}
//anonymous objects
class Card2{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

let cards2 = [new Card2("A", "Hearts"), 
             new Card2("A", "Spades"), 
             new Card2("A", "Diamonds"), 
             new Card2("A", "Clubs"), 
             new Card2("2", "Hearts"), 
             new Card2("2", "Spades"), 
             new Card2("2", "Diamonds"), 
             new Card2("2", "Clubs")];

cards2.forEach(card2 => console.log(`${card2.value} ${card2.suit}`));
};