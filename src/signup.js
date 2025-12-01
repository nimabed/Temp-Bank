import { createWheelItems } from './wheelSnap.js';
 
let mainContainer = document.querySelector(".js-main-container");   
let abortMsg = document.querySelector(".js-abort-message");         //abort message
let btnAbortYes = abortMsg.querySelector(".js-btn-abort-yes");      // abort button yes
let btnAbortNo = abortMsg.querySelector(".js-btn-abort-no");        // abort button no
const closeButtons = document.querySelectorAll(".js-btn-close");    //close buttons


let btnSignup = document.querySelector(".js-btn-signup");                   //step 1
let btnStart = document.querySelector(".js-btn-start");                     //step 2
let termsCheck = document.querySelector(".js-terms-check");                 //step 3
let btnContinue = document.querySelector(".js-btn-continue");               //step 3
let phoneInput = document.querySelector(".js-phone-input");                 //step 4
let btnNext4 = document.querySelector(".js-btn-next4");                     //step 4
const verifyInputs = document.querySelectorAll(".js-verify-input");         //step 5
let btnNext5 = document.querySelector(".js-btn-next5");                     //step 5
let btnNext6 = document.querySelector(".js-btn-next6");                     //step 6
let repInput = document.querySelector(".js-rep-input");                     //step 6
let idInput = document.querySelector(".js-id-input");                       //step 7
let btnNext7 = document.querySelector(".js-btn-next7");                     //step 7
let daysContainer = document.querySelector(".js-daysWheel");                //step 8
let monthsContainer = document.querySelector(".js-monthsWheel");            //step 8
let yearsContainer = document.querySelector(".js-yearsWheel");              //step 8
let dateInput = document.querySelector(".js-dateInput");                    //step 8
let btnNext8 = document.querySelector(".js-btn-next8");                     //step 8
let usernameInput = document.querySelector(".js-username-input");           //step 9
let btnNext9 = document.querySelector(".js-btn-next9");                     //step 9
let passwordInput = document.querySelector(".js-password-input");           //step 10
let btnNext10 = document.querySelector(".js-btn-next10");                   //step 10
let charsNumCheck = document.querySelector(".js-chars-num-check");          //step 10
let containDigit = document.querySelector(".js-contain-digit");             //step 10
let containLowerUpper = document.querySelector(".js-contain-lowerUpper");   //step 10
let btnNext11 = document.querySelector(".js-btn-next11");                   //step 11


let step = 0;

// All steps
let stepList = document.querySelectorAll(".step");

// Loading steps function
function loadStep() {
  mainContainer.classList.toggle('!bg-blue-400', !step);
  stepList.forEach((state, index) => {
    state.classList.toggle('!block', step === index);
  })
}

loadStep();


// STEP 1: Sign up button event
btnSignup.addEventListener('click', () => {
  step++;
  loadStep();
});

// STEP 2: Start button event
btnStart.addEventListener('click', () => {
  step++;
  loadStep();
})

// STEP 3: Terms check and continue button events
termsCheck.addEventListener('click', () => {
  termsCheck.checked 
    ? btnContinue.classList.add('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90')
    : btnContinue.classList.remove('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
})

btnContinue.addEventListener('click', () => {
  if (termsCheck.checked) {
    step++;
    loadStep();
  }
})

// STEP 4: Phone number input and next button events
phoneInput.addEventListener('input', () => {
  if (phoneInput.value.length > 0) {
    phoneInput.style.unicodeBidi = 'normal';
    if (phoneInput.value.length === 11) {
      btnNext4.classList.add('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
    } else {
        btnNext4.classList.remove('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
    }
  } else {
      phoneInput.style.unicodeBidi = 'bidi-override';
  }
})

btnNext4.addEventListener('click', () => {
  if (btnNext4.classList.contains('cursor-pointer')) {
    phoneInput.value = '';
    step++;
    loadStep();
  }
})

// STEP 5: Verification code inputs and next button events
function inputValueCheck() {
  for(let i=0; i < verifyInputs.length; i++) {
    if (verifyInputs[i].value.length !== 1) {
      return false;
    }
  }
  return true;
}

verifyInputs.forEach((item) => {
  item.addEventListener('input', () => {
    if (inputValueCheck()) {
      btnNext5.classList.add('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
    }else {
      btnNext5.classList.remove('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
    }
  });
})

btnNext5.addEventListener('click', () => {
  if (btnNext5.classList.contains('cursor-pointer')) {
    verifyInputs.forEach(item => item.value = '');
    step++;
    loadStep();
  }
})

// STEP 6: Represetative code next button event
btnNext6.addEventListener('click', () => {
  repInput.value = '';
  step++;
  loadStep();
})

// STEP 7: Personal ID input and next button events
idInput.addEventListener('input', () => {
  if (idInput.value.length === 10) {
    btnNext7.classList.add('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }else {
    btnNext7.classList.remove('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }
})

btnNext7.addEventListener('click', () => {
  if (btnNext7.classList.contains('cursor-pointer')) {
    idInput.value = '';
    step++;
    loadStep();
  }
})

// STEP 8: Creating date's wheel and next button event
function toPersian(num) {
  return num.toString().replace(/\d/g, d => String.fromCharCode(0x06F0 + Number(d)));
}

const days = Array.from({ length: 31 }, (_, i) => toPersian(i + 1));
const months = [
  'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
]
const years = Array.from({ length: 61}, (_, i) => toPersian(1330 + i));

createWheelItems(daysContainer, days);
createWheelItems(monthsContainer, months);
createWheelItems(yearsContainer, years);

dateInput.addEventListener('input', () => {
  if (dateInput.value.length > 0) {
    btnNext8.classList.add('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }else {
    btnNext8.classList.remove('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }
})

btnNext8.addEventListener('click', () => {
  if (btnNext8.classList.contains('cursor-pointer')) {
    dateInput.value = '';
    step++;
    loadStep();
  }
})

// STEP 9: Username input and next button events
usernameInput.addEventListener('input', () => {
  if (usernameInput.value.length > 2) {
    btnNext9.classList.add('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }else {
    btnNext9.classList.remove('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }
})

btnNext9.addEventListener('click', () => {
  if (btnNext9.classList.contains('cursor-pointer')) {
    usernameInput.value = '';
    step++;
    loadStep();
  }
})

// STEP 10: Password input and next button events
function minCharsCheck(pass) {
  if (pass.length >= 8) {
    charsNumCheck.classList.add('text-green-500');
    charsNumCheck.previousElementSibling.src = "check-green.png";
  }else {
    charsNumCheck.classList.remove('text-green-500');
    charsNumCheck.previousElementSibling.src = "check-gray.png";
  }
}

function digitCheck(pass) {
  if (/\d+/.test(pass)) {
    containDigit.classList.add('text-green-500');
    containDigit.previousElementSibling.src = 'check-green.png';
  }else {
    containDigit.classList.remove('text-green-500');
    containDigit.previousElementSibling.src = 'check-gray.png';
  }  
}

function lowerUpperCheck(pass) {
  if (/[a-z]+/.test(pass) && /[A-Z]+/.test(pass)) {
    containLowerUpper.classList.add('text-green-500');
    containLowerUpper.previousElementSibling.src = 'check-green.png';
  }else {
    containLowerUpper.classList.remove('text-green-500');
    containLowerUpper.previousElementSibling.src = 'check-gray.png';
  }

}

function allCheck() {
  let lowerUpper = containLowerUpper.classList.contains('text-green-500');
  let minChars = charsNumCheck.classList.contains('text-green-500');
  let containNum = containDigit.classList.contains('text-green-500');

  if (lowerUpper && minChars && containNum) {
    btnNext10.classList.add('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');

  }else {
    btnNext10.classList.remove('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }
}


passwordInput.addEventListener('input', () => {
  let userInput = passwordInput.value;

  minCharsCheck(userInput);
  digitCheck(userInput);
  lowerUpperCheck(userInput);
  allCheck();
})

btnNext10.addEventListener('click', () => {
  if (btnNext10.classList.contains('cursor-pointer')) {
    passwordInput.value = '';
    step++;
    loadStep();
  }
})

// STEP 11: Continue button event
btnNext11.addEventListener('click', () => {
  step++;
  loadStep();
})


// EXTRA
closeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    abortMsg.classList.add('!block');
  })
})

btnAbortYes.addEventListener('click', () => {
  step = 0;
  abortMsg.classList.remove('!block');
  loadStep();
})

btnAbortNo.addEventListener('click', () => {
  abortMsg.classList.remove('!block');
})


