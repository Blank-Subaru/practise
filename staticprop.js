const { use } = require("react");

class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const blank = new User("Blank")
// console.log(blank.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const subaru = new User("subaru", "subaru@gmail.com")

subaru.logMe()