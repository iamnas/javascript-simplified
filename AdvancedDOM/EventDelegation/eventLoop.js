
function test(){
    console.log("1");
    console.log("2");
    setTimeout(()=>console.log("3"),10)
    setTimeout(()=>console.log("4"),0)
    console.log("5");
}

test()
