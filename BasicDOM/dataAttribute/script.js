const test  = document.querySelector('[data-test]')

console.log(test.dataset);

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        console.log(parseInt(button.dataset.clicks)+1);
       const  currentClick = parseInt(button.dataset.clicks);
        button.dataset.clicks = currentClick+1
    })
})