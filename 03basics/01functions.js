
function saymyname(){
    console.log("R")
    console.log("i")
    console.log("d")
    console.log("d")

}
// saymyname()
// saymyname// returns nothing as it tells there is a refrence with this function     
// function addtwo(number1,number2){
//     console.log(number1+number2)
// }
// const add=addtwo(5,6)
// console.log(add)//undefined   as return is not there

function addtwo(number1,number2){
    return(number1+number2)
}
const add=addtwo(5,6)
 //console.log(add)
// addtwo("12",13)
// addtwo(12,null)

// function loginuser(username="sam"){
//     if(username===undefined){
//         console.log("please enter the username")
//         return

//     }
//     return `${username} logged in`
// }
// console.log(loginuser("riddhi"))
// // console.log(loginuser(""))
// console.log(loginuser())


function calculatecardprice(val1,val2 ,...num1){ //function with multiple values
return num1
}
console.log(calculatecardprice(100,200,300,400,600))//returns array of numbers rest operator helps in doing this


const obj={
    username:"riddhi",
    age:34
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username}  and age is ${anyobject.age}`)

}
// handleobject(obj)
handleobject({
    username:"riddhi",
    age:19
})

arr=[100,2030,404,0,30]
function getarray(arr){
    return arr[1]
}
 console.log(getarray(arr))

