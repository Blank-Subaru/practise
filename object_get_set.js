const User = {
    _username: "Blank",
    _password: "Blanky",

    get username(){
        return this._username.toUpperCase()
    },

    set username(value){
        this._password = value
    }
}

const blank = Object.create(User)
console.log(blank.username);
