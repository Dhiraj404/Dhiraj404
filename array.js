// Arrays - variables that hold multiple values


// const numbers = new Array(1,2,3,4,5);
// console.log(numbers)


const fruits = ['apples', 'oranges', 'pears'];

fruits[3]= 'grapes';

fruits.push('mangos');  //last one

fruits.unshift('carrot');   //frist one

fruits.pop(); //to delete last one

console.log(Array.isArray(fruits));  //to check is it is in array
console.log(fruits.indexOf('pears'));
console.log(fruits[1]);
console.log(fruits);