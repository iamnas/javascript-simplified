const btn = document.querySelector('[data-btn]')

function printClick() {
    console.log("clocked");
}

btn.addEventListener('click',printClick)

btn.addEventListener('click',()=>{
    console.log("clocked2");

})

btn.removeEventListener('click',printClick)