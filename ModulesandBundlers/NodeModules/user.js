const test = {
    name: "test",
    age: 55
}

const sally = {
    name: "Sally",
    age: 23
}

function printUser(user) {
    console.log(`Name: ${user.name}, age: ${user.age}`);
}

module.exports = {
    test,
    sally,
    printUser
}