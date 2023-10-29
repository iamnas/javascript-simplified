                                            //| variable    |   value   | address | value
let a = 10                                  //       a            10 
let b = "hi"                                //       b            "hi"                   
let c = [1,2]                               //       c            <0x01>    <0x01>  [1,2]
let d = c                                   //       d            <0x01>    <0x01>  [1,2]       

console.log(a, b, c,d);                     //                          



let e = {name:"aaaa"}

console.log(JSON.stringify(e));