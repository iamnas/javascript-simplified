// to select Attribute Elements

const dataAttributeElement = document.querySelector("[data-test]")
console.log("dataAttributeElement",dataAttributeElement);


// to select class elements
const divsWithClasses = document.querySelectorAll(".div-class")

divsWithClasses.forEach(div => div.style.color = 'red')

console.log(divsWithClasses);

// to select tags

const input = document.querySelector('input')

console.log(input);