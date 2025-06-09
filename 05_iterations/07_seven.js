const mynums=[1,2,4,5,6,78,9]
const newnums=mynums.map((each_num)=> each_num=each_num+10)

console.log(newnums);
console.log(mynums);
const chain=mynums.map((num)=>num+13).map((num)=> num*2).filter((num)=>num>35)
console.log(chain);
