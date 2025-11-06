const passwordInput = document.querySelector('#password');
const userInput = document.querySelector('#username');
const inputsWrapper = document.querySelector('#inputsWrapper');
const toggleIcon = document.querySelector('#toggleIcon');
const loginBtn = document.querySelector('#loginBtn');
const btnIcon = document.querySelector('#btnIcon');
const btnText = document.querySelector('#btnText');
const errorMsg = document.querySelector('#errorMsg');
let isVisible = false;

// Check if username input is empty or not
function userCheck(){
  return userInput.value.length > 0;
}

// Check if password input is empty or not
function passCheck(){
  return passwordInput.value.length > 0;
}

// Change login button state base on username and password changes
function btnState(){
  const usernameCheck = userCheck();
  const passwordCheck = passCheck();

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

// Focus on input's wrapper on typing
function focusOnTyping(){
  if (inputsWrapper.classList.contains('ring-red-500')) {
    inputsWrapper.classList.remove('ring-3', 'ring-red-500');
    errorMsg.classList.add('hidden');
  }

  inputsWrapper.classList.add('ring-3');  
}

// Error states
function errorState(userState, passState){
  let msg;
  if(!userState && !passState){
    msg = 'نام کاربری و رمز عبور لازم است';
  }else if(!userState && passState){
    msg = 'نام کاربری لازم است';
  }else if(userState && !passState){
    msg = 'رمز عبور لازم است';
  }
  if(msg){
    errorMsg.innerText = msg;
    errorMsg.classList.remove('hidden');
    inputsWrapper.classList.add('ring-red-500', 'ring-3');
  }
}

// Show/hide eye icon on input change and checkInputs
passwordInput.addEventListener('input', () => {
  toggleIcon.classList.toggle('hidden', passwordInput.value.length == 0);
  btnState();
  focusOnTyping();
});

// checkInputs
userInput.addEventListener('input', () => {
  btnState();
  focusOnTyping();
});

// Preventing focus distraction
toggleIcon.addEventListener('mousedown', e => e.preventDefault());

// Changing toggle icon && Show/hide password characters
toggleIcon.addEventListener('click', () => {
  isVisible = !isVisible;
  toggleIcon.src = isVisible ? 'eyeslash.png' : 'eye.png';
  passwordInput.type = isVisible ? 'text' : 'password';
});

// Login button error check
loginBtn.addEventListener('click', () => {
  errorState(userCheck(), passCheck());
})

// Inputs focus
inputsWrapper.addEventListener('focusin', () => {
  if (errorMsg.classList.contains('hidden')) {
    inputsWrapper.classList.add('ring-3');
  }
})





