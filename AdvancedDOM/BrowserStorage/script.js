
// Local Storage    | Cookies             | Session Storage
// 10 MB            | 4 KB                | 5 MB
//Never expire      | Manual Expiration   | Expires when tab close
// Client           | Client/Server       | Client
// Easy             | Hard                | Easy


localStorage.setItem('Name', 'Kaka')
sessionStorage.setItem('age', '25')

// Get
localStorage.getItem('Name')
sessionStorage.getItem('age')

// console.log(
//     localStorage.getItem('Name'),
//     sessionStorage.getItem('age')
// );

//Update local storage
localStorage.setItem('Name', 'Kaka')
// Update session storage
sessionStorage.setItem('age', '25')


// remove old session storage
localStorage.removeItem('Name')
sessionStorage.removeItem('age')

const date = new Date(9999,0,1).toUTCString();
const pastDate = new Date(1999,0,1).toUTCString();
document.cookie = `name=Kaka; expires=${date}`

document.cookie = `age=25; expires=${date}`
console.log(document.cookie);

// remove cookie
document.cookie = `age=; expires=${pastDate}`
console.log(document.cookie);