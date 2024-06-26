/*
let formDom = document.querySelector('#userForm');
formDom.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault() // default process blocked.
    console.log('Process Done!');
    let scoreInputDOM = document.querySelector('#score');
    console.log(scoreInputDOM.value);
    localStorage.setItem('score', scoreInputDOM.value);
}
*/

let userFormDOM = document.querySelector('#userForm');
userFormDOM.addEventListener('submit', formHandler);
const alertDOM = document.querySelector('#alert');


const alertFunction = (title, message, className='warning') => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault();
    const USER_NAME = document.querySelector('#username');
    const SCORE = document.querySelector('#score');
    
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value); // Reset the data after sending
        USER_NAME.value = "";
        SCORE.value = "";
    } else {
        alertDOM.innerHTML = alertFunction(
            'Error!',
            'Please Enter a Valid Data',
            'danger'
            )
    }
}

/*
<li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge text-bg-primary rounded-pill">14</span>
</li>
*/

let userListDOM = document.querySelector('#userList');

const addItem = (userName, score) => {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `
        ${userName}
        <span class="badge text-bg-primary rounded-pill">${score}</span>
    `;
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM);
}