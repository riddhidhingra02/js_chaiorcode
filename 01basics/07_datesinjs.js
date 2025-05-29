let mydate=new Date();
// console.log(mydate.toString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toDateString())
// console.log(typeof(mydate))

// let createmydate=new Date(2024,0,23)
// console.log(createmydate.toDateString())
// let createmydate1=new Date(2024,0,23,5,8)
// console.log(createmydate1.toLocaleString())

let createdate=new Date("02-10-2003")
console.log(createdate.toLocaleString())
let mytimestamp =Date.now()
console.log(mytimestamp.toDateString())
console.log(createdate.getDay())
console.log(createdate.getMonth())