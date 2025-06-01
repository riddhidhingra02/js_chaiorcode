// singleton
const tinderuser=new Object()
// non singleton
// const tind={}
tinderuser.id="1234ad"
tinderuser.name="rixdhdi"
tinderuser.islog=false

// console.log(tinderuser)
const reg={
    email: "riddhi1.com",
    fullname:{
        username:{
            firstname:"riddhi",
        lastname:"dhingra"        }
    }
}
//console.log(reg.fullname.username.lastname)
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    1:"a",
    4:"b"
}
const obj4={
    6:"a",
    7:"b"
}
// const obj3={obj1,obj2}  copies in unwanted way
//const obj3=Object.assign({},obj1,obj2,obj4) //{} is given so that we are referring to an empty object as target other wise everything would get obj1 as a target


//spread operator 
const obj3={...obj1,...obj2,...obj4}
//console.log(obj3)


//array can also contains object
const obj=[
    {
   id:"123",
   name: "ridhi"
    },
    {
        email:"riddhi1@gmail.com"

    },
    {

    }
]
// console.log(obj[0])
// console.log(obj[0].name)
// console.log(tinderuser)
// console.log(Object.keys(tinderuser))//datatype is array 
// console.log(Object.values(tinderuser))//datatype is array 
// console.log(Object.entries(tinderuser))//make every key value as array

// console.log(tinderuser.hasOwnProperty("islogged"))

// object destructure and json API 

const course={
    coursename:"jschaiorcode"
    ,price:"999",
    courseinstructor:"hitesh"


}
// console.log(course.courseinstructor)
const {courseinstructor:instructor}=course
// console.log(courseinstructor)
console.log(instructor)