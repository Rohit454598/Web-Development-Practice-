// for of 
[{},{},{}]
const arr=[1,23,45,6]

for (const element of arr) {
    console.log(element);
    
    
}

const greeting="welcome"
for (const element of greeting) {
    console.log(element);
    
    
}
//Map(unique)
const map=new Map();

map.set("IN","iNDIA")
map.set("USA","UNITED")
map.set("FR","France")

console.log(map);

for (const [key,value] of map) {// destructuring key and values
    console.log(key);
    
    
}

