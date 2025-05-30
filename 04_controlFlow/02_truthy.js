const email=""

if(email){
    console.log("email recieved")

}
else{
    console.log("email not recieved")
}
//falsy values 
//0,-0,null, undefined,""(empty string),Big_Int 0n,false,NaN(not a number)
// these are only falsy values rest all are truthy

// Nulish Coalescing Operator (??) null undefiend

// a??b returns a if a != (null or undefeined) else b

let val1=null??undefined??10
console.log(val1)
// ternary ?: