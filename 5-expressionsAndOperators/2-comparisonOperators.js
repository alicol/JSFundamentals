/* COMPARISON OPERATORS */

//equality comparison operator
console.log('3' == 3); //true, type coercion
console.log(4 == 4); //true;
console.log(3 == '4'); //false

//strict equality comparison operator
console.log(3 === 3); //true, same value and same data type
console.log('3' === 3); 

//not equal comparison operator
console.log('3' != 4); 
console.log('3' != 3);

//strict not equal comparison operator
console.log('3' !== 3); //true
console.log(3 !== 3);

//greater than
console.log(3 > 2);

//less than
console.log(2 < 3);

//greather than or equal to
console.log(3 >= 2);

//less than or equal to 
console.log(2 <= 3);

//And (both expressions on either side of the operator must be true for 'And' to return true);
console.log(1<2 && 3>0);
console.log(2<1 && 3>0);

//Or (either expression on one side of the operator must be true for 'Or' to return true)
console.log(1<2 || 3<2);

let obj = {key: 'test'};
console.log(obj == {key: 'test'});

console.log(obj == obj);

