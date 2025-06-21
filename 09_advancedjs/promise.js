const promiseone=new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async 1 start")
        resolve()
    }, 1000)});
promiseone.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async 2  start")
        resolve()
    }, 1000)}).then(function(){
    console.log("promise 2 consumed")
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async 3  start")
        resolve({name: "riddhi","Age":24})
    }, 1000)}).then(function(pbj){
    console.log(pbj)
}) 

const promise4=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true
        if(!error){
            resolve({name: "riddhi","Age":24})
        }
        else{
            reject("something went wrong")
        }
    }, 1000)}).then(function(pbj){
    console.log(pbj.name)
}).catch(function(error){
        console.log(error)
    })


    const promise5=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error= true
        if(!error){
            resolve({name: "javascript","password":24})
        }
        else{
            reject("js went wrong")
        }
    }, 1000)})

    async function promisee5() {
        try {
                const response=await promise5
        console.log(response)
            
        } catch (error) {
            console.log(error)
            
        }
    
        
    }
    promisee5()

    // async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})