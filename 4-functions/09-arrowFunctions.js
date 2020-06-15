//ARROW FUNCTIONS

//normal function declaration
function coffee(){
    return 'coffee is good';
}

//normal function expression
let tea = function(){   //this is an "anonymous" function
    return "tea is healthy";
};

console.log(coffee());
console.log(tea());

//arrow functions are always anonymous
//arrow function expression
let hotChocolate = () => {
    return "hot chocolate is King";
}
console.log(hotChocolate());

let animals = (kittens, puppies) => {return `I have ${kittens} cats and ${puppies} dogs`};

console.log(animals(3, 2));

//concise vs block body
//concise body
let apples = x => `There are ${x} apples`; //when you have a single argument you can exclude paranthesis and curly braces
console.log(apples(10));

//block body
let bananas = (x) => {
    return `There are ${x} bananas`;
}
console.log(bananas(5));

//return must be explicitly written in a block-body arrow function

let func = () => 'hi'; //arrow needs to follow directly after paranthesis
console.log(func());

