const marvel_heroes=["thor","vision","thanos"]
const dc_heroes=["superman","venom","spiderman"]

marvel_heroes.push(dc_heroes)// pushed element is array not every element is added as single element of dc_heroes
console.log(marvel_heroes)
//concat doesnt modify array but same as push but returns a new array

const combine_heroes=[...dc_heroes,...marvel_heroes]//...-> spread operator spreds things
console.log(combine_heroes);

const array=[1,2,[3,45,6,7],8,9]
const usable_array=array.flat(2)// same as rest adds elements individually 
console.log(usable_array);
console.log(Array.from("hiteshffdd"))// converts to array

const score1=20
const score2=45
console.log(Array.of(score1,score2))//returns array from provided set
