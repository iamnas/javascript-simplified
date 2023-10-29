

// function printNumber(number) {
//     if(number> 2) return

//     console.log(number);

//     printNumber(number + 1)

//     console.log("EXIT",number );
// }

// printNumber(1)


// function sum(number) {
//     if (number <= 0)
//         return 0
//     return number + sum(number - 1)

// }

// console.log(sum(5));


const person = {
    name: 'Kyle',
    friend: {
        name: 'Joe',
        friend: {
            name: 'Sally',
        }
    }
}



function printName(currentperson) {

    if (!currentperson) return

    console.log(currentperson.name);
    printName(currentperson.friend)
}

printName(person)