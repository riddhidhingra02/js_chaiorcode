// for of 
// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5,6]
for (const i of arr) {
   // console.log(i)
    
}
const greeting="riddhi dhingra"
for(const greet of greeting){
   // console.log(greet)
}
// maps 
const map=new Map()
map.set('IN',"INDIA")
map.set('US',"USA")
map.set('FR',"FRANCE")
console.log(map)
for (const i of map) {
    //console.log(i)
    
}
for (const [key,value] of map) {
   // console.log(key,value)
    
}
const myobj={
    'game1':'nfs',
    'game2':'rid'
}
for(const [key,val] of myobj){
   // console.log(key+":"+val) not iteratable
}


