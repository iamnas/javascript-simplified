// console.log(false || "hello");

// printFalse() || printTrue() || printFalse()

// printFalse() && printTrue() && printFalse()


// function printTrue() {
//     console.log("true");
//     return true;
// }

// function printFalse() {
//     console.log("false");
//     return false;
// }



// function printName(name) {

//     // if(name == null){
//     //     name = "default";
//     // }

//     // name = name || "default";

//     // console.log(name);
//     console.log(name || "default");
    
// }

// printName("harr")



const person ={
    name : "John",
    // address :{
    //     street:"main st"
    // }
}

console.log(person && person.address && person.address.street);

// console.log(person?.address?.street);