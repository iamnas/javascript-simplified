function createUser(name, age) {
    return { name: name, age: age ,human: true };
}

// constructor
// function User(name, age) {
//     this.name = name
//     this.age = age
//     this.human = true

// }

//class
class User {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.human = true
    }

    printName(){
        return this.name 
    }
}
const userFunc = createUser('name', 11)
// const user = new User('name', 10)
const userClass = new User('name', 10)



console.log(userFunc);
// console.log(user);
console.log(userClass.printName());


// const date = new Date()

// console.log(date);