const mynums=[1,2,4,5,6,78,9]
const initial=4
const innum=mynums.reduce((accumulator,current)=>accumulator+current,initial)///at first initial value is passed to accumulator and finally returns accumulator

console.log(innum);
