//array

const arr = [1,45,67,8]
console.log(arr[1])
const arr1=new Array(1,2,3,4)

//array methods
arr1.push(2)
arr1.pop()
arr1.unshift(10)//adds at start
arr1.shift() //remove from start
console.log(arr1.includes(3))
console.log(arr1.indexOf(3))
const newarr=arr1.join()
console.log(arr1)
console.log(newarr)  //string separated by commas


//splice slice

console.log("a",arr1)
const myn1=arr1.slice(1,3)
console.log(myn1)

const myn2=arr1.splice(1,3)
console.log(myn2)
// splice make chnge in the original array 
// slice does not