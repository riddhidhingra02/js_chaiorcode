//immediately invoked function expressions
// function definition()functions cll()

function chai(){
    console.log("hey riddhi");
};
chai();

(function chaiii(){
    console.log("hey siddhi");
})();
(()=>{
    console.log("hey siddhi");
})();

((name)=>{
    console.log(`hey ${name}`);
})("ridh")