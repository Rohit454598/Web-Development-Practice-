const obj={
    js:"javascript",
    java:"java",
    c:"CPP"
}
// Iterating objects using for in loop and nor forof is used
// for in keys
// for of values for array  not for objects
for (const key in obj) {
    console.log(obj[key])
    
}