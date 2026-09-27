function User(username, password){
  this._username = username
  this._password = password

  Object.defineProperty(this, 'username', {
    get: function(){
        return this._username.toUpperCase()
    },
    set: function(value){
        this._username = value
    }
  })

   Object.defineProperty(this, 'password', {
    get: function(){
        return this._password.toUpperCase()
    },
    set: function(value){
        this._password = value
    }
  })
}

const Blank = new User("Blank_Subaru", "hella")

console.log(Blank.password);
