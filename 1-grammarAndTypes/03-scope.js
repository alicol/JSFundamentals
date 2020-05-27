/*  
SCOPE
*/

//What is scope
//JavaScript has both LOCAL and GLOBAL scope

var x = 12;   //this is GLOBAL scope - exists anywhere within file

function scope() {
    var x = 33;         //this variable is only inside the function
    console.log(x);   //everything within this function is a lOCAL scope..only exists within the tool
}
scope();                //returns variable inside the function
console.log(x);         // returns to the x outside of the function



//example2

var x = 12;

function scope(){
    x = 33;
    console.log(x);
}

scope();        //33
console.log(x);  //33

//exmaple 3

var x = 1;

function scope(){
    var x = 2;
    function scopeInner(){
        var x = 3;
        console.log(x); //3
    }
    scopeInner();
    console.log(x); //2
}
scope();
console.log(x); //1

//example 4 

var x = 12;

function scope(){
    var x = 33;
    if (true){
        let x = 45;
        console.log(x);  //45
    }
    console.log(x);   //33
}
scope();
console.log(x);  //12

//example 5 contrast with example 4
var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x); //45
    }
    console.log(x);   //45 --> var doesn't obey block scope
}

scope();
console.log(x);  //12