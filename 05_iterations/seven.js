const mynums=[1,2,3,34,5,6,6,7 ,8,10]
const newnums=mynums.map((num)=>num+10)
//console.log(newnums)
//chaining
const newnum=mynums.map((num)=>num*10).map((num)=>num+10).filter((num)=>num>40)
console.log(newnum)

const arr=[1,2,3,4,5,6]
