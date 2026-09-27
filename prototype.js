let myHeros = ["Ironman", "Spiderman"]

let heroPowers ={
    Ironman: "Money",
    Spiderman: "Cobweb",

    getSpideyPowers: function(){
        console.log(`Spidey power is ${this.Spiderman}`);
    }
}

Object.prototype.Blank = function(){
    console.log(`Blank is watching everything and can RBD`);
}

Array.prototype.yoBlank = function(){
    console.log(`Blank just spawned`);
}
// heroPowers.Blank()
// myHeros.Blank()
// myHeros.yoBlank()
// heroPowers.yoBlank()


let anotherUser = "Blank           "

Object.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUser.trueLength()
"Subaru      ".trueLength()
"Natsuki         ".trueLength()
