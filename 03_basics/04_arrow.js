const user={
    name:"rohit",
    welcome: function(){
        console.log(`welcome${this.name}`)
        console.log(this)
    }
}
user.welcome()
console.log(this) // object this refers empty object in node environment whereas in browser it is window object 
