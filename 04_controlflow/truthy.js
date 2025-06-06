const useremail=[]
if(useremail){
    console.log("got email")
}
else{
    console.log("dont have user email")
}

// falsy values
// false,0,-0,bigint 0n ,"",undefined,NaN

//truthy values "0" , 'false' ,"  ",[],{},function(){}

// if(useremail.length===0){
//     console.log("array empty")
// }

// const emptyobj={}
// if(Object.keys(emptyobj).length===0){
//     console.log("object empty")
// }


//nullish coalescing operator(??):null undefined
let val1;
// val1=5??10
// val1=null??10
// val1=undefined??10
// val1=null??10??30
// console.log(val1)

//ternary
// condition? true:false
const iceteaprice=100
iceteaprice<=80?console.log("less thn 80"):console.log("more thsn 80")