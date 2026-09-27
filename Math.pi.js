const Descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(Descriptor);

const Blank = {
    Name: "Subaru",
    price: 0,
    isavailable: true,

    RBD: function(){
    console.log("He is more than worthy!");    
    }
}

console.log(Object.getOwnPropertyDescriptor(Blank, "Name"))

Object.defineProperty(Blank, "Name", {
    // writable: false,
    // enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(Blank, "Name"))



for (let [key, value] of Object.entries(Blank)) {

    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
}
