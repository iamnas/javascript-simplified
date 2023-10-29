

const buttons = document.querySelectorAll('button');


document.addEventListener('click', () =>{
    console.log("Clicked document");
})

document.body.addEventListener('click', () =>{
    console.log("Clicked body ");
},{capture: true});

buttons.forEach(button => {
    button.addEventListener('click',(e)=>{

        // it will stop the bubble up 
        e.stopPropagation()
        console.log("clicked");
    })
})