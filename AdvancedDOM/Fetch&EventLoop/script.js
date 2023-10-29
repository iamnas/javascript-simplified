// fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     // console.log(response);
//     return response.json()
// }).then(data => {
//     // console.log(data);
//     const name = data.map(e => e.name)
//     // data.forEach(e => {
//     //     console.log(e.name);
//     // });
//     console.log(name);
// })



// async function getUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         if (response.ok) {
//             const data = await response.json()
//             console.log(data);
//         } else {
//             console.log("Failed to get user");
//         }

//     } catch (error) {
//         console.error(error);
//     }
// }

// getUser()


// async function postUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 "userId": 1,
//                 "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//                 "body": "quia et suscipit\nsuscipit recusandae consequuntur "
//             })

//         })

//         if (response.ok) {
//             const data = await response.json()
//             console.log(data);
//         } else {
//             console.log("Failed to get user");
//         }

//     } catch (error) {
//         console.error(error);
//     }
// }

// postUser()


async function getComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')

    const data = await response.json()

//     fetch('https://jsonplaceholder.typicode.com/comments?postId=1').then(res => {
//         res.json().then(data => console.log(data))
// })

console.log(data);
}

getComments()