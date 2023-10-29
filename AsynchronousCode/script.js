// setTimeout(()=>{
//     console.log("hello");
// },3000)

// setInterval(()=>{
//     console.log("hello");
// },1000)

// passing function as argument is called callback
// A callback is a function passed as an argument to another function.
// nested callback is called callback hell


const button = document.querySelector('button')

function addEventListenerPromise(element,method){
    return new Promise((resolve,reject) =>{
        element.addEventListener(method,resolve)
    })
}


addEventListenerPromise(button,'click').then(e=>{
    console.log("hello");
    console.log(e);
})

Promise.all([
    Promise.resolve("1"),
    Promise.resolve("2"),
    Promise.resolve("3")
]).then(messages =>{
    console.log(messages);
})

Promise.any([
    Promise.resolve("1"),
    Promise.reject("2"),
    Promise.resolve("3")
]).then(messages =>{
    console.log(messages);
})


Promise.race([
    Promise.resolve("3"),
    Promise.reject("1"),
    Promise.reject("2"),
]).then(messages =>{
    console.log(messages);
})


Promise.allSettled([
    Promise.reject("1"),
    Promise.reject("2"),
    Promise.resolve("3")
]).then(messages =>{
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