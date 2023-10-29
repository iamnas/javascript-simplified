const childOne = document.querySelector('#child-one');
const parentOne = childOne.parentElement
// const grandParent = parentOne.parentElement
const parentTwo = parentOne.nextElementSibling

childOne.style.color = 'red';
childOne.nextElementSibling.style.color = 'red';

parentOne.style.color = 'green';

parentTwo.style.color = 'green';

// grandParent.style.color = 'orange';


// direct grandparent 

const grandParent = childOne.closest('#grand-parent')

grandParent.style.color = 'orange';
