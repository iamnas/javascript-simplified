// const promise = new Promise((resolve, reject) => {
//     const sum = 10 + 10 + 22

//     if(sum === 20){
//         resolve("success")
//     }else{
//         reject("Error")
//     }
// })


// promise.then((result) => {
//     console.log(result);
// } ).catch((err) => {
//     console.error(err);
// });


// callBack Hell

// setTimeout(() => {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//         setTimeout(() => {
//             console.log("3");
//         }, 250);
//     }, 250);
// }, 250);

setTimeoutPromise(250)
    .then(() => {
        console.log("1");
        return setTimeoutPromise(250)
    })
    .then(() => {
        console.log("2");
        return setTimeoutPromise(250)
    })
    .then(() => {
        console.log("3");

    })


function setTimeoutPromise(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

Promise.all([
    Promise.resolve("1"),
    Promise.resolve("2"),
    Promise.resolve("3")
]).then(messages => {
    console.log(messages);
})

Promise.any([
    Promise.resolve("1"),
    Promise.reject("2"),
    Promise.resolve("3")
]).then(messages => {
    console.log(messages);
})


Promise.race([
    Promise.resolve("3"),
    Promise.reject("1"),
    Promise.reject("2"),
]).then(messages => {
    console.log(messages);
})


Promise.allSettled([
    Promise.reject("1"),
    Promise.reject("2"),
    Promise.resolve("3")
]).then(messages => {
    console.log(messages);
})


const promise = Promise.resolve("hello world")

promise.then((messages) => {
    console.log(messages);
}).catch((err) => {
    console.error(err);
}).finally(() => {
    console.log("finally");
})