//For of Loops

//of requires that your "thing" you're looping through be iterable
//--that means it needs to be numbered

let student = {name: "Peter", isAwesome: true, degree: "javascript", week: 1}

for (item of student){
    console.log(item);
} //this doesn't work

//this code works, note that "for of" grabs the value of the array rather than the number/key
let catArray = ["tabby", "british shorthair", "burmese", "main coon", "rag doll"];

for (cat of catArray){
    console.log(cat, "says meow");
}