const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"apple"
}
for (const key in myobj) {
    // console.log(myobj[key]);
}
const programm=["js","cpp","swift","java","python"]
for(const key in programm){
    // console.log(key)//index

}

const map=new Map()
map.set('IN',"INDIA")
map.set('US',"USA")
map.set('FR',"FRANCE")
for (const key in map) {
    // console.log(key) map is not iteratable therefore nothing prints
    
}

