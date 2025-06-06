const user={
    username: "riddhi",
    price: 899,
    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }

}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()
//  console.log(this)//{}

// function chai(){
//    let username="riddhi"
//     console.log(this.username)//undefined
// }

// const chai=function(){
//    let username="riddhi"
//     console.log(this.username)//undefined
// }

//arrow function
// const chai=()=>{
//    let username="riddhi"
//     console.log(this.username)//undefined
//     console.log(this)
// }
// chai()


// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(5,9))
// {} uses return 
const addtwo=(num1,num2)=>num1+num2    //implicit return
const objreturn=(num1,num2)=>({username:"ridhi"})
console.log(objreturn(5,9))
