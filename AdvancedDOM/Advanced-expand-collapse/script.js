
/// mine
// const cards = document.querySelectorAll('.card');


// cards.forEach(card => {
//     console.log(card);
//     const button = card.querySelector('.expand-button')
//     const cardBody = card.querySelector('.card-body');

//     button.addEventListener('click', e => {

//         if (cardBody.classList[1]) {

//             button.innerHTML = 'Expand'
//             cardBody.classList.remove('show')
//         } else {
//             button.innerHTML = 'Collapse'
//             cardBody.classList.add('show')

//         }

//     })
// })


// master 

document.addEventListener('click',e => {
    // console.log(e.target.matches('.expand-button'));
    if(!e.target.matches('.expand-button')) return ;
    const card = e.target.closest('.card')

    const cardBody = card.querySelector('.card-body')
    cardBody.classList.toggle("show")
    e.target.innerText = e.target.innerText === 'Expand' ? 'Collapse': 'Expand'
    // button.innerHTML = cardBody.classList.toggle("show")? 'Collapse' : 'Expand'
})
