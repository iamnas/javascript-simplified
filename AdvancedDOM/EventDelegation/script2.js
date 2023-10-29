

const buttons = document.querySelectorAll('button');


document.addEventListener('click', (e) => {
    // console.log(e.target.matches('button'));
    if (e.target.matches('button')) {
        e.target.addEventListener('click', e => {
            console.log("Button clicked");
        })
    }

})


// buttons.forEach(button => {
//     button.addEventListener('click',()=>{
//         console.log("clicked");
//     })
// })

const button = document.createElement('button');

button.innerHTML = 'Button 5'

document.body.append(button)