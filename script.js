const pwdAmount = document.getElementById('amount');
const pwdLength = document.getElementById('length');
const error = document.getElementById('error');
const passwords = document.getElementById('passwords');

const chars =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 !@#$%^&*().,[]{}~<>?/\\';

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  validateInput();
  if (validateInput()) {
    error.classList.add('hidden');
    generatePasswords();
  } else {
    displayError();
  }
});

function validateInput() {
  if (!pwdAmount.value || !pwdLength.value || pwdAmount.value === '0' || pwdLength.value === '0') {
    return false;
  } else {
    return true;
  }
}

function displayError() {
  error.classList.remove('hidden');
}

function generatePasswords() {
  passwords.innerHTML = '';
  let h2 = document.createElement('h2');
  h2.classList.add('copy-pwd');
  let text = document.createTextNode('Click to copy');
  passwords.appendChild(h2);
  h2.appendChild(text);
  passwords.classList.remove('hidden');
  for (let i = 0; i < pwdAmount.value; i++) {
    let pwd = '';
    for (let i = 0; i < pwdLength.value; i++) {
      pwd += chars[Math.floor(Math.random() * chars.length)];
    }
    let p = document.createElement('p');
    let text = document.createTextNode(pwd);
    p.classList.add('pwd');
    p.addEventListener('click', (e) => {
      console.log(e.target.innerHTML);
      navigator.clipboard.writeText(e.target.innerHTML);
    });
    p.appendChild(text);
    passwords.appendChild(p);
  }
}
