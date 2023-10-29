console.log("hi");

// console.log(window);

// window.console.log("hi");

// alert("dangerously")
// window.alert("hi")


// window.addEventListener("resize",
//     console.log(l)
// )

// // both are same 
// addEventListener("resize",
//     console.log(l)
// )

// console.log(document.body);
// console.log(document.documentElement);

// creating element 

// const element = document.createElement("span")

// element.innerText = "Hello, world!"
// document.body.appendChild(element)


// console.log(document.getElementById('div-id') ); //<div></div>

const divWithId = document.getElementById('div-id')
divWithId.style.color = 'red';

const divsWithClass = document.getElementsByClassName('div-class')
console.log(divsWithClass);