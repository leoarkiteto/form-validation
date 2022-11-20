import './style.css';

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');
const form = document.getElementById('form');

console.log('Hello from Dublin!');

/* for name
empty == Error
>25 == Error
*/

function nameCheck() {
  const x = document.forms['.form']['.username'].value;
  if (x === '') {
    alert('Name must be filled out');
  } else if (x > 25) {
    alert('Name is too long, must be less than 25 char');
  } else {
    setSuccess(username);
  }
}

form.addEventListener('submit', nameCheck);
