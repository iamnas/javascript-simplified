
// let i = 0
// while (i<5) {
//     console.log(i);
//     i++;
// }

const person = {
    name: 'John',
    friend:{
        name: 'Kallus',
        friend: {
            name: 'Johnadad',
        }
    }
}

let currentperson = person

while (currentperson) {
    console.log(currentperson.name);
    currentperson = currentperson.friend
}