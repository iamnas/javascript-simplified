// console.log('Functions/Scoping');


// function sayHi(name) {

//     return `hello ${name}`;
//     // console.log('hello'+' '+ name );
// }

// console.log(sayHi('naresh'));

// callback function
// function printVariable(variable){
//     console.log(variable);
// }

// // // printVariable('hi')


// function func(callBack,value){
//     callBack('hello '+value)
// }

// func(printVariable,"Naresh")



// anonymous function

function printName(params,callBack) {
    // console.log(params);
    callBack('hello '+params)
}


// printName('jai',(variable)=>{
//     console.log(variable);
// })

printName('jai',function (variable){
    console.log(variable);
})


