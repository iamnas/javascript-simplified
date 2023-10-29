const grandParent = document.querySelector('#grand-parent');


grandParent.style.color = 'red';
const parentOne = grandParent.children[0]
const parentTwo = parentOne.nextElementSibling //grandParent.children[1]

parentOne.style.color = 'green'
parentTwo.style.color = 'blue'


parentOne.children[0].style.color = 'purple'


