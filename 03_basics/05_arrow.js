const chai=()=> {
    console.log(this) //inside arrow functions this is reffered as empty object
    console.log("hey")
}
chai();
// explicit 
const addtwoex= (num1,num2)=> {
    return num1+num2 
}
console.log(addtwoex(76,88))

// Implicit return 
const addtwo= (num1,num2)=> (num1+num2)  //directly returns whithout need of return keyword
console.log(addtwo(86,56));

// Immediately invoked Function Expression(IIFE)
// used when we have to save some functions from global pollution
(function chai(){
    console.log(`IIFE invoked`)
})(); //use semiccolon compulsory

(function chai2(name){
    console.log(name)
})("Robjgk");
