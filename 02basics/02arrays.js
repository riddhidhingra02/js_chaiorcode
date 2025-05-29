const arr=["rid","helo","sidd","gaur"]
const arr1=["tah","sahil","vil","efr"]
// arr.push(arr1)
// console.log(arr)

// const all =arr.concat(arr1)
// console.log(all)//new array create

// const newarr=[...arr , ...arr1]
// console.log(newarr)


const arr2=[1,2,3,[1,2,3,[4,5]],[1,3]]

const realarray=arr2.flat(Infinity)
console.log(realarray)
console.log(Array.isArray("HELLO"))
console.log(Array.from("HELLO"))