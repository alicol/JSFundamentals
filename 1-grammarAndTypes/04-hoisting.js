/*
HOISTING
*/

//example 1
console.log(scissors);
var scissor = 'blue';

//example 1 breakdown
var scissors; //gets hoisted to the top 
console.log(scissors); //this gets read
scissors = 'blue'; //scissors is defined

//example 2
function hoistTest(){
    console.log(testVar);   //undefined
    var testVar = 10;
    console.log(testVar);  //10
}
hoistTest();

//example 2 breakdown
function hoistTest() {
    var testVar;   //hoisted to top
    console.log(testVar);  //runs an undefined variable
    testVar = 10;   //variable is defined
    console.log(testVar);   //defined variable is logged (10)
}

