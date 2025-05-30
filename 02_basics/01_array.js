const myArr =[1,2,4,5,6]// elements can be of different types
// Array is an object and is resizable
//shallow copy -> creates same reference
const Arr2 =new Array(1,2,4,56)
console.log(Arr2.length);

Arr2.push(79)
console.log(Arr2.length)
console.log(Arr2)
Arr2.unshift(6)

Arr2.shift()
console.log(Arr2)

console.log(Arr2.includes(2));
console.log(Arr2.indexOf(56));

const arrayinStr = Arr2.join()
console.log(arrayinStr)
console.log( typeof arrayinStr)

// Slice splice
const my_Arr=new Array(1,2,34,5,6,7,7)
const sliced=my_Arr.slice(0,5)
console.log(sliced);

console.log(my_Arr);
const spliced = my_Arr.splice(0,5)
console.log(spliced);

console.log(my_Arr);





