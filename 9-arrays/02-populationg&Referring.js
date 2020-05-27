//what is an array
// has []
//can hold multiple data types
// arrays can list datatypes in an ordered, numbered way
//arrays are a specialized type of object... the keys are hidden number paired with it
let students = ["Tony", "Marshall", "Rhys", "Ray", 23, true, ["Ryan", "Iesha"]];

console.log(typeof students); //doesn't tell me that my variable is an array, it returns object
console.log(students instanceof Array); // instanceof tells me my array is an array

console.log(students[2]);
console.log(students[1]);
console.log(students[6]);

let name = [students[6][1]];
console.log(name);

console.log(`Hello ${name}, you look nice today`);

//recall for-of loop --> gives the values of the array
let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheesecake", "Hotdog"];

for (f of food){
    console.log(f+' is amazing!');
}

//array methods
food.push("Pizza"); //push lets us add elements to array
console.log(food);

food.splice(1, 1, "Bananas"); //splice asks for an insertion point, how many things to remove, then the item to add
console.log(food);

food.splice(2, 0, "Sweet Potato Pie");
console.log(food);

food.pop();         //pop removes the last element of an array
console.log(food);

food = food.slice(2,4); //the first number is the first element to slice from the array, second number is the stop position (not included)
console.log(food);

//forEach allows us to iterate with loops specifically. We can directly
//grab both the elements and their index numbers

let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheesecake", "Hotdog"];

food.forEach((f) => console.log(f));

food.forEach((food, index) => {
    console.log(food);
    console.log(index);
})

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at position ${index}`);
});


let movies = ["300", "Snow White", "The Phantom Menace", "The Watchmen", "The Sound of Music"];

movies.push("The Force Awakens");
console.log(movies);
movies.splice(3, "The League of Extraordinary Gentlement");
console.log(movies);

movies.forEach(movie => console.log(movie));

console.log(movies.length); //tells us how many items are in the array

//let's do the following with an array:
//we will check if we are working with an array
//flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc)
//using a method only, let's print the values on the newly arranged array

let arr = new Array(1, 2, 3, 4, 5);
if 