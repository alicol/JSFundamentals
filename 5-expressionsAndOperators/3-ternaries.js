/* TERNARIES
*/

let x = 6;

x > 0 ? console.log('x is positive') : console.log('x is negative');
//syntax:
// condition ? Run this if true : Run this if false

//the same thing is below, but ternary is much shorter and elegant than this
if (x > 0){
    console.log("x is positive");
} else {
    console.log("x is negative");
}

let greeting = "salutations!";

if(greeting.length > 10){
    console.log("that is a long greeting!");
} else if (greeting.length == 10) {
    console.log("your greeting ie exactly 10 characters");
} else {
    console.log("what a normal greeting");
}
//now turned into a ternary
let greeting = "salutations";
greeting.length > 10 ? console.log("That is a long greeting!") : 
greeting.length == 10 ? console.log("Your greeting is exactly 10 characters") : 
console.log("What a normal greeting");