// for each loop 

const arr=["js","cpp","py","swift"]
arr.forEach( function (i){
//    console.log(i)

})
arr.forEach((i)=>{
   // console.log(i)

})
function print(i){
   // console.log(i)
}
arr.forEach(print)
arr.forEach((i,index,arr)=>{
    console.log(i,index,arr)
})
const mycoding=[
    {
        Language:"java",
        languagefilename:"file.java"
    },
     {
        Language:"javascript",
        languagefilename:"file.js"
    },
     {
        Language:"cpp",
        languagefilename:"file.cpp"
    }
] 
mycoding.forEach((item)=>{
    console.log(item.Language)
})