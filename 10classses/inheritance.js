class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log("logged in")
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }
    addcourse(){
        console.log("course successfully added")
    }
}

const u=new user("riddhi")
const t=new teacher("riddhi","riddhi.com","pass")
t.logme()
