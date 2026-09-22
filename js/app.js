var school = "VCU"; 
let course = "INFO 202"; 
const professor = "Hunter"; 

console.log(school, course, professor);

course = "INFO 202 - Web Development";
console.log(course);

// Data Types 
let name = "Hunter"; 
let points = 95.5; 
let isEnrolled = true; 
let grade; 

console.log(typeof name);
console.log(typeof points);
console.log(typeof isEnrolled);
console.log(typeof grade);


// Object 
let student = {
    name: "Hunter",
    major: "Information Systems",
    gpa: 3.5,
    graduated: false
}; 

console.log(student);
console.log(student.name);

if (student.graduated){
    console.log("Congratulations!");
}

// Array 
let courses = ["INFO 202", "INFO 300", "INFO 365"]; 
console.log(courses);
console.log(courses[2]);

// Function 
function sayHi(){
    console.log("Hi from this functions"); 
}
sayHi();
console.log(typeof sayHi);


// Alerts and Console 
//alert("Hello World!");

console.log("This is for developers");

console.warn("This is a warning");
console.error("This is an error");

// Basic Operators 
let a = 10; 
let b = 5; 

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Assignment Operators
let score = 100; 
score += 5;
console.log(score);
score -= 10;
console.log(score);

// Comparisons 
console.log(10 > 5);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 !== 5);

// Logical Operators 
let hasHomework = true;
let isTired = false;

if (hasHomework && isTired){
    console.log("You have homework and you are tired.");
} else {

}

if (hasHomework || isTired){
    console.log("You either don't have homework or you are not tired.");
}

console.log(hasHomework && isTired);
console.log(hasHomework || isTired);
console.log(!hasHomework);

// Functions 
function greet(name){
    console.log("Hello " + name);
}
greet("Hunter");
greet("John");

// Returning Value
function add(x, y){
    return x + y;
}
let total = add(5, 10);
console.log(total);

// Function expression
const multiply = function(x, y){
    return x * y;
}
console.log(multiply(5, 10));

const divide = (x, y) => x / y;
console.log(divide(10, 2));

// Callback Function 
const names = ["Jay", "Ivana", "Mohamed", "Tamzeed"]; 

names.forEach(function(name){
    console.log("Hello, " + name);
});

// String Concatentation
let firstName = "Jay";
let lastName = "Hunter";

let fullName = firstName + " " + lastName;
console.log(fullName);
console.log(5 + 5); 
console.log("5" + "5");
console.log("Score: " + 5 + 5)
console.log("Score: " + (5 + 5));

let student2 = "Frazer"; 
let points2 = 95; 

console.log(`Student: ${student2}, Points: ${points2}`);