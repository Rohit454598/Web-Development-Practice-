//rest operator packs in a bundle
function calculatePrice(...num){
    return num

}

console.log(calculatePrice(10,44,3,44,5))

//objects passed in functions

const obj1={
    username:"rohit"
}
function handleObject(anyobj){
  console.log(`username is ${anyobj.username}`);
    

}
handleObject(obj1)