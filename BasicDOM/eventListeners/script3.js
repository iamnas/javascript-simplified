const button = document.querySelector('button');

button.addEventListener('click', function(e){
    console.log("Function this");
    console.log(this);
})


button.addEventListener('click', (e)=>{
    console.log("arrow this");
    console.log(this);
})

console.log(this === window);