//{}->scope
//Global scope
let a =100
if(true){   //BLock scope
   console.log(a)//prints global value 
   var b=20
   const c= 30
}
console.log(a);// prints global value
console.log(b);//prints value as var doesnot follow scoping

//console.log(c);// not defined
// golbal variables can be accessed in block scope

const add=function (value){ //  functions as expression
    return value +1
}
console.log(add(20))

