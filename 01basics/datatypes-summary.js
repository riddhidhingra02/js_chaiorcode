//primitive datatypes call by value 
// 7 types string number boolean undefined null symbol bigint

const score =100
const scorenum =20.3
const islog= false
const outsidetemp = null
let usermail; //undefined

const id= Symbol(123)
const idnum=Symbol(123)
console.log(id===idnum)

const bignum=324578739894893480589840835n

//nonprimitive reference types
// array functions objects
const names=["riddhi","siddhi","gauri","bhavya"]
let myobj={
    name: "ridhi",
    age: 89,
}

const myfun= function(){
    console.log("hello");
}
console.log(typeof myfun)
console.log(typeof bignum)

//...................................
//memory
// ......................1. stack (primitive datatypes call by value) 2. heap (nonprimitive by reference)
