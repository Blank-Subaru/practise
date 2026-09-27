const { use } = require("react");

const promiseOne = new Promise(function(resolve ,reject){

    setTimeout(() => {
        console.log("Task is completed");
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise Completed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Task is completed again?");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise is also completed");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Blank", email: "blanksubaru@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Sunny", password: "12345"})
        } else{
            reject('ERROR. Something went wrong.')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username    
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);  
})
.finally(() => console.log("The promise is resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "Hindi", password: "12345"})
        } else{
            reject('ERROR. JS went wrong.')
        }
    }, 1000)
})

async function ConsumepromiseFive() {
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

// async function getAllUsers() {
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("E: ", error)
//    }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then(function(data){
    console.log(data);
    
})
.catch((error) => console.log(error))