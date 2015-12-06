// Function Statement
function greet(name){
    console.log('Hello... ' + name);
}

greet('JhonCena');

//using a function Expression
var greetingFunction = function(name){
    console.log('Hello ' + name);
};

greetingFunction('Peter Parker');


// Immediately Invoked Function Expression
var greetinIIFEs = function(name){
    return 'Hello '  + name;
}('The Rock');

console.log(greetinIIFEs);
// you cant write greetinIIFEs() because it's string variable not string function.
// console.log(greetinIIFEs()); // Error

/*function(name){
    console.log(name);
}*/ // Not valid function expression.

// Wrap in () so it'll be valid syntax.

(function(name){
    console.log(name);
}); 

// Function is in memory doing nothing. It's just sitting there. Like You!

var firstNameIIFE = 'Steve Austin';

/*
(function(name){
    console.log('Spear from  ' + name);
}(firstNameIIFE));
*/

// You can invoke IIFE like this also, choose only one for long run.

(function(name){
    console.log('Spear from  ' + name);
})(firstNameIIFE);
