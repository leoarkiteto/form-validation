import './style.css';

const form = document.getElementById('form') as HTMLFormElement;
const username = document.getElementById('username') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;
const password2 = document.getElementById('password2') as HTMLInputElement;

function showError(input: HTMLElement, message: string) {
  const hiddenTag = input.nextElementSibling as HTMLElement;
  hiddenTag.textContent = message;
  hiddenTag.classList.remove('invisible');
  hiddenTag.classList.add('visible');
  input.classList.add('border-red-500');
}

function showSuccess(input: HTMLElement) {
  const visibleTag = input.nextElementSibling as HTMLElement;
  visibleTag.classList.add('invisible');
  input.classList.add('border-green-500');
}

function checkEmail(emailToTest: HTMLInputElement) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(emailToTest.value)) {
    showSuccess(emailToTest);
  } else {
    showError(emailToTest, 'Email is not valid!');
  }
}

function getFieldName(field: HTMLElement) {
  return field.id.charAt(0).toUpperCase() + field.id.slice(1);
}

function checkRequired(inputArray: HTMLInputElement[]) {
  inputArray.forEach(item => {
    if (!item.value.trim()) {
      showError(item, `${getFieldName(item)} is required`);
    } else {
      showSuccess(item);
    }
  });
}

function checkLength(input: HTMLInputElement, min: number, max: number) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function checkPasswordsMatch(
  input1: HTMLInputElement,
  input2: HTMLInputElement
) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
