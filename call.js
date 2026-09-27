function setUsername(username){
    this.username = username
}

function createUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const user = new createUser("Blank", "blank@gmail.com", "12345")

console.log(user);
