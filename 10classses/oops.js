const user={
    username:"riddhi",
    logincount:8,
    signedin:true,
    getuserdetails:function(){
        // console.log("got user details")
        console.log(`username:${this.username}`)
    }
}
user.getuserdetails();

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);
console.log(User instanceof Object)