// reduce 
const mynums=[1,2,3,4];
// const total=mynums.reduce((acc,curr)=>acc+curr,0)
// console.log(total)
const shop=[{
    itemname:"jscourse",
    price:200
},
{
    itemname:"cpp",
    price:67
},
{
    itemname:"python",
    price:89
}]
// const bill=shop.reduce((acc,item)=>acc+item.itemname,"")
const bill=shop.reduce((acc,item)=>acc+item.price,0)
console.log(bill)