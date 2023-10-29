// function called when its a indivisual function
// method is called when its a objest in a function 

// A function doesn't need any object and is independent, while the method is a function, which is linked with any object.

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// it's just loop every element it doesn't return anythings
a.forEach((element, index) => {
    console.log(element + " " + index);
});

// it will return new array
let map = a.map((element) => {
    return element * 2
});

console.log("map", map);
// it will return values with filtered values it will return only element that we want 
const filter = a.filter(number => {
    return number > 5
})

console.log("filter", filter);

// find in this it will return first element when it satisfied its condition value
const find = a.find(number => {
    return number > 6
})

console.log("find", find);

// atleast one element is found it will rerun true 
const some = a.some(number => {
    return number > 2
})

console.log("some", some);

// for every single element satisfy the condition  return true 
const every = a.every(number => {
    return number > 9
})

console.log("every", every);

// for every single element it will take two arguments aggregate value which is now 0 and it will return that value
const reduce = a.reduce((sum, number) => {
    return sum + number
}, 0)

console.log("reduce", reduce);


const items = [
    { price: 10 },
    { price: 20 },
    { price: 30 },
    { price: 40 },
    { price: 50 },
]

const sum = items.reduce((sum, element) => {

    return sum + element.price
}, 0)

console.log("sum", sum);


// include 

const include = a.includes(5)

console.log("include", include);