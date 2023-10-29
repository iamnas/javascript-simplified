
const input = document.querySelector('[data-input-text]')
const form = document.querySelector('[data-form]')
const ancor = document.querySelector('[data-link ]')


input.addEventListener('input',(e)=>{
    console.log(e.target.value);
})

// btn.addEventListener('click',e=>{
//     console.log(e);
// })


form.addEventListener('submit',e=>{
    e.preventDefault()
    console.log(e);
})

ancor.addEventListener('click',e=>{
    e.preventDefault()
    console.log(e);
});

ancor.addEventListener('focus',e=>{
    e.preventDefault()
    console.log(e);
});



