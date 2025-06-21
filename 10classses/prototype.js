const name="riddhi   "
//trulength property needs to be made
let myheros=["thor","spider"]
let hero={
    thor:"hammer",
    spider:"sling",

    getspiderpower:function(){
        console.log(`this is the power of spiderman ${this.spider}`)
    }
}
Object.prototype.hitesh=function(){
    // console.log("hey");
}
 hero.hitesh();
 let arr=[1,3,4,5,6]
//  arr.hitesh()
// inheritance 
const teacher={
    makevideo:true
}
const teaching ={
    isavail: false
}
const tasupport={
    makeassign:"js",
    fulltime:true,
    // __proto__:teaching
}
// tasupport.isavail=true;
// console.log(teaching)
// console.log(tasupport)//prototypal inheritance

// modern Syntax 
// Object.setPrototypeOf(tasupport,teaching)
// console.log(tasupport.isavail)  

String.prototype.truelength=function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`the true length is ${this.trim().length}`)
}
name.truelength()