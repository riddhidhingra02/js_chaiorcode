//object literals
const mysym=Symbol("key1")
const jsuser={
    name: "ridhi",
    age:22,
    "location of" : "chandigarh",
    [mysym]: "mykey1",
    isloged: false,
    email: "ridhidhingra1.com",
    lastlogin: ["sunday","monday"]
}
// takes keys  as string 
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["location"])
// console.log(jsuser.location of)//not accsible
// console.log(jsuser[mysym])
// console.log(typeof jsuser[mysym])
// // jsuser.email="chatgtp.com"
// // //Object.freeze(jsuser)
// // jsuser.email="chatgpt.com"
// // console.log(jsuser.email)
console.log(jsuser)
jsuser.greeting=function(){
    console.log("hey my name is riddhi")
}
console.log(jsuser.greeting)

console.log(jsuser.greeting())

//object.create //constructor