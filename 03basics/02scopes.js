function add(num1,num2){
    return num1+num2
}

// {

// }              known as scope
// let a=300
// if(true){
//     let a=89
// const b=23
// var c=12//only this would be printed as it has global scope
// }
// console.log(a)
// // console.log(b) these both would not be printed
// console.log(c)



//...............................................
function one(){
    const username= "ridhi"

    function two(){
  const website="youtube"
  console.log(username)
    }
   //would not work console.log(website)

    two()
}
one()

//..........................................

// console.log(addone(5))      would run even if it is above the function
function addone(value){
    return value+1
}
// console.log(addtwo(5))      would not run
const addtwo=function(value){
    return value+2
}
console.log(addtwo(6))