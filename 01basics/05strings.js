const name="riddhi-dhingra"
const log=50
// console.log(name+log)       basic concept
// string interpolation
console.log(`my name is ${name} and my log is ${log}`)
console.log("hello")
const getname=new String('riddhidhingra')
console.log(getname[0])
console.log(getname.__proto__)
console.log(getname.toUpperCase())
console.log(getname.charAt(3))
console.log(getname.indexOf('l'))
console.log(getname.substring(0,2))
console.log(getname.slice(-8,8)) //8th character from end till index 8

const newstring="   ridhi  "
console.log(newstring)
console.log(newstring.trim())
const url="https://riddhi.com/riddhi%20dhingra"

console.log(url.replace("%20","-"))
console.log(url.includes("riddhi"))

//string comvert to array based on dash
console.log(name.split('-'))




