function print(){
    console.log("rohit");
    
}
// print-> reference only
print()

function addTwo(num1,num2){
  console.log(num1+num2);
  
}
addTwo(8,64);
// empty is treated as undefined 
function greet(name="sam"){// sam is default value
    if(!name){
        console.log("PLease enter your name");
        return
        }
    return `${name}  just logged in`;
    
}
console.log(greet("fjdj"));

