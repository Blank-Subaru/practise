// class user {
//     constructor(Username, Email, Password){
//         this.Username = Username
//         this.Email = Email
//         this.Password = Password
//     }

//     encryptPassword(){
//         return `${this.Password}abc`
//     }

//     changeUsernameL(){
//         return `${this.Username.toUpperCase()}`
//     }

//     changeUsernameS(){
//         return `${this.Username.toLowerCase()}`
//     }
// }

// const blank = new user("Blank","blank@gmail.com", "123")

// console.log(blank.encryptPassword());
// console.log(blank.changeUsernameS());


///////////////////////////////////////////////////////////

function user(Username, Email, Password){
    this.Username = Username
    this.Email = Email
    this.Password = Password
}

user.prototype.encryptPassword = function(){
    return `${this.Password}abc`
}

user.prototype.changeUsernameL = function(){
    return `${this.Username.toUpperCase()}`
}

user.prototype.changeUsernameS = function(){
    return `${this.Username.toLowerCase()}`
}

const subaru = new user("Subaru","subaru@gmail.com", "456")

console.log(subaru.encryptPassword());
console.log(subaru.changeUsernameS());