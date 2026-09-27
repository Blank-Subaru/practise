// const user = {
//  username: "Blank",
//  password: "1234",
//  isLoggedIn: true,

//   getuserDetails: function(){
//     // console.log("Got the details of User");
//     // console.log(`${this.username} just logged in`);
//     console.log(this);
    
    
//   }
// }

// console.log(user.isLoggedIn);
// console.log(user.getuserDetails());



function User(usename, loginCount, isLoggedIn){
    this.usename = usename
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Blank", 111, true)
const userTwo = new User("Subaru", 100000000, false)
console.log(userOne);
console.log(userTwo);

