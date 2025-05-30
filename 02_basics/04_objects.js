// objects using constructor
const tinder=new Object()
console.log(tinder) 
tinder.id=1
tinder.name="SAM"
tinder.islogged=true

//object inside bject
const user={
    email:"rohit@gmail.com",
    name:{
        firstName:"Rohit",
        lastName:"Bhomkar"
    }

}
console.log(user.name.firstName);

//combining objects
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3={obj1,obj2}// joins obj2 directly as one element

const obj4=Object.assign({},obj1,obj2) // first argument passed is target and all other are source 
console.log(obj4);

const obj5={...obj1,...obj2}// using spread operator and used mainly
console.log(tinder);
console.log(Object.keys(tinder));// return all keys( array)
console.log(Object.values(tinder))
console.log(tinder.hasOwnProperty("id122"))


