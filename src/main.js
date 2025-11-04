const passwordInput = document.getElementById('password');
const userInput = document.getElementById('username');
const toggleIcon = document.getElementById('toggleIcon');
const loginBtn = document.getElementById('loginBtn');
const btnIcon = document.getElementById('btnIcon');
const btnText = document.getElementById('btnText');
let isVisible = false;

// Checks if both username and password inputs entered
function checkInputs(){
  const usernameCheck = userInput.value.length > 0;
  const passwordCheck = passwordInput.value.length > 0;

  if(usernameCheck && passwordCheck){
    loginBtn.classList.remove('noFingerprint');
    loginBtn.classList.add('bg-blue-500', 'py-3');
    btnText.innerText = 'ورود با رمز عبور';
  }else {
    loginBtn.classList.add('noFingerprint');
    loginBtn.classList.remove('bg-blue-500', 'py-3');
    btnText.innerText = 'ورود به بلو';
  }
}

// Show/hide eye icon on input change and checkInputs
passwordInput.addEventListener('input', () => {
  toggleIcon.classList.toggle('hidden', passwordInput.value.length == 0);
  checkInputs();
});

// checkInputs
userInput.addEventListener('input', checkInputs);

// Preventing focus distraction
toggleIcon.addEventListener('mousedown', e => e.preventDefault());

// Changing toggle icon && Show/hide password characters
toggleIcon.addEventListener('click', () => {
  isVisible = !isVisible;
  toggleIcon.src = isVisible ? 'eyeslash.png' : 'eye.png';
  passwordInput.type = isVisible ? 'text' : 'password';
});





