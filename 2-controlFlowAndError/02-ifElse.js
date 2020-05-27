//IF ELSE

let weather = 75;

if (weather < 70){
    console.log('wear a jacket');
} else {
    console.log("No jacket necessary");
}

//you can blend complex conditionals and if-else statements based upon your need:
if (weather > 70 && typeof weather === 'number'){
    console.log("This weather is amazing!");
} else {
    console.log("Either the temp is cool, the variable is not a string, or both");
}

//ELSE IF
//if elseif statements can be chained

let age = 30;

if (age >= 25){
    console.log("yay! you can rent a car");
} else if (age >= 21){
    console.log("Yay you can drink!");
} else {
    console.log("Sorry you're too young to do anythin fun");
}
