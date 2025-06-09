// foreach returns undefined(nothing)
const nums=[1,2,45,6,67,89,23]
const newnum=nums.filter((num)=>{
    if(num>4)
    return num
})// returns num according to condition
console.log(newnum)