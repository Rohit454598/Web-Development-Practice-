//if objects are declared as literals then singleton is not made but if declared using constructor then singleton is made

//object literals

//using symbol in objects(using square brackets)
const mysym=Symbol("this is symbol")
console.log(mysym);

const jsuser={
    name:"rohit",
    age:21,
    [mysym]:"symbol changed",
    location:"mumbai",
    isloggedin:true,
    lastlogin:["monday","tuesdays"] 
}
console.log(jsuser.name)
console.log(jsuser["name"])
console.log(jsuser[mysym]);

//adding function


