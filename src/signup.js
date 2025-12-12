import { createWheelItems } from './wheelSnap.js';
   
let abortMsg = document.querySelector(".js-abort-message");         //abort message
let btnAbortYes = abortMsg.querySelector(".js-btn-abort-yes");      // abort button yes
let btnAbortNo = abortMsg.querySelector(".js-btn-abort-no");        // abort button no
const closeButtons = document.querySelectorAll(".js-btn-close");    //close buttons

let btnStart = document.querySelector(".js-btn-start");                     //step 1
let termsCheck = document.querySelector(".js-terms-check");                 //step 2
let btnContinue = document.querySelector(".js-btn-continue");               //step 2
let phoneInput = document.querySelector(".js-phone-input");                 //step 3
let btnNext3 = document.querySelector(".js-btn-next4");                     //step 3
const verifyInputs = document.querySelectorAll(".js-verify-input");         //step 4
const enteredNumber = document.querySelector(".js-entered-num");            //step 4
let btnNext4 = document.querySelector(".js-btn-next5");                     //step 4
let btnBack = document.querySelector(".js-btn-back");                       //step 4
let btnNext5 = document.querySelector(".js-btn-next6");                     //step 5
let idInput = document.querySelector(".js-id-input");                       //step 6
let btnNext6 = document.querySelector(".js-btn-next7");                     //step 6
let daysContainer = document.querySelector(".js-daysWheel");                //step 7
let monthsContainer = document.querySelector(".js-monthsWheel");            //step 7
let yearsContainer = document.querySelector(".js-yearsWheel");              //step 7
let dateInput = document.querySelector(".js-dateInput");                    //step 7
let btnNext7 = document.querySelector(".js-btn-next8");                     //step 7
let activeRow = document.querySelector(".js-active-row");                   //step 7
let birthPage = document.querySelector(".birthPage");                       //step 7
let usernameInput = document.querySelector(".js-username-input");           //step 8
let btnNext8 = document.querySelector(".js-btn-next9");                     //step 8
let passwordInput = document.querySelector(".js-password-input");           //step 9
let btnNext9 = document.querySelector(".js-btn-next10");                    //step 9
let charsNumCheck = document.querySelector(".js-chars-num-check");          //step 9
let containDigit = document.querySelector(".js-contain-digit");             //step 9
let containLowerUpper = document.querySelector(".js-contain-lowerUpper");   //step 9
let btnNext10 = document.querySelector(".js-btn-next11");                   //step 10
let btnNext11 = document.querySelector(".js-btn-next12");                   //step 11

let step = 0;
let activeInput = 5;

// All steps
let stepList = document.querySelectorAll(".step");

// Loading steps function
function loadStep() {
  activeRow.classList.toggle('!block', step === 6);
  birthPage.classList.toggle('active', step === 6);

  stepList.forEach((state, index) => {
    state.classList.toggle('!block', step === index); 
  })

  if (step === 3) showActiveInput();
  if (step === 6) resetAllWheels();

}

loadStep();

// STEP 1: Start button event
btnStart.addEventListener('click', () => {
  step++;
  loadStep();
})

// STEP 2: Terms check and continue button events
termsCheck.addEventListener('click', () => {
  termsCheck.checked 
    ? btnContinue.classList.add('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90')
    : btnContinue.classList.remove('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
})

btnContinue.addEventListener('click', () => {
  if (termsCheck.checked) {
    phoneInput.placeholder = "مانند: ۰۹۱۲۳۴۵۶۷۸۹"
    step++;
    loadStep();
  }
})

// STEP 3: Phone number input and next button events
phoneInput.addEventListener('input', () => {
  if (phoneInput.checkValidity()) {
    btnNext3.classList.add('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  } else {
      btnNext3.classList.remove('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }
})

btnNext3.addEventListener('click', () => {
  if (btnNext3.classList.contains('cursor-pointer')) {
    enteredNumber.innerText = phoneInput.value;
    step++;
    loadStep();
    phoneInput.value = '';
  }
})

// STEP 4: Verification code inputs and next button events
function inputValueCheck() {
  for(let i=0; i < verifyInputs.length; i++) {
    if ((verifyInputs[i].value.length !== 1) || (!verifyInputs[i].checkValidity())) {
      return false;
    } 
  }
  return true;
}

// Show active input element
function showActiveInput() {
  verifyInputs.forEach((item, idx) => {
    if (idx === activeInput) {
      item.focus();
      item.classList.add('focus:ring-blue-500');
      item.readOnly = false;
    }else {
      item.blur();
      item.classList.remove('focus:ring-blue-500');
      item.readOnly = true;
    }
  })
}


verifyInputs.forEach((input) => {
  input.addEventListener('input', () => {
    // For changing focus
    if (input.value.length === 1 && input.checkValidity()) {
      activeInput--;
      showActiveInput();
    }
    // Verify input value and enable/disable next button
    if (inputValueCheck()) {
      btnNext4.classList.add('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
    }else {
      btnNext4.classList.remove('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
    }
  })
})


btnNext4.addEventListener('click', () => {
  if (btnNext4.classList.contains('cursor-pointer')) {
    step++;
    loadStep();
  }
})

btnBack.addEventListener('click', () => {
  step--;
  phoneInput.dispatchEvent(new Event("input"));
  loadStep();
  activeInput = 5;
  verifyInputs.forEach((input) => {
    input.value = '';
    input.dispatchEvent(new Event("input"));
  })
})

// STEP 5: Represetative code next button event
btnNext5.addEventListener('click', () => {
  step++;
  loadStep();
})

// STEP 6: Personal ID input and next button events
idInput.addEventListener('input', () => {
  if (idInput.checkValidity()) {
    btnNext6.classList.add('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }else {
    btnNext6.classList.remove('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }
})

btnNext6.addEventListener('click', () => {
  if (btnNext6.classList.contains('cursor-pointer')) {
    step++;
    loadStep();
  }
})

// STEP 7: Creating date's wheel and next button event
function toPersian(num) {
  return num.toString().replace(/\d/g, d => String.fromCharCode(0x06F0 + Number(d)));
}

function resetAllWheels() {
    daysContainer.scrollTo(0, daysContainer.scrollHeight / 2 - daysContainer.clientHeight / 2);
    monthsContainer.scrollTo(0, monthsContainer.scrollHeight / 2 - monthsContainer.clientHeight / 2);
    yearsContainer.scrollTo(0, yearsContainer.scrollHeight / 2 - yearsContainer.clientHeight / 2);
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
    btnNext7.classList.add('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }else {
    btnNext7.classList.remove('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }
})

btnNext7.addEventListener('click', () => {
  if (btnNext7.classList.contains('cursor-pointer')) {
    step++;
    loadStep();
  }
})

// STEP 8: Username input and next button events
usernameInput.addEventListener('input', () => {
  if (usernameInput.checkValidity()) {
    btnNext8.classList.add('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }else {
    btnNext8.classList.remove('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }
})

btnNext8.addEventListener('click', () => {
  if (btnNext8.classList.contains('cursor-pointer')) {
    step++;
    loadStep();
  }
})

// STEP 9: Password input and next button events
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
    btnNext9.classList.add('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');

  }else {
    btnNext9.classList.remove('bg-blue-500', 'cursor-pointer', 'hover:bg-blue-500/90');
  }
}

passwordInput.addEventListener('input', () => {
  let userInput = passwordInput.value;

  minCharsCheck(userInput);
  digitCheck(userInput);
  lowerUpperCheck(userInput);
  allCheck();
})

btnNext9.addEventListener('click', () => {
  if (btnNext9.classList.contains('cursor-pointer')) {
    step++;
    loadStep();
  }
})

// STEP 10: Continue button event
btnNext10.addEventListener('click', () => {
  step++;
  loadStep();
})

// STEP 11: Continue button event
btnNext11.addEventListener('click', () => {
  resetAllInputs();
  loadStep();
})

// Close buttons
function resetAllInputs() {
  step = 0;
  activeInput = 5;
  termsCheck.checked = false;     //step 2
  document.querySelectorAll('input').forEach((item) => {
    item.value = '';
    item.dispatchEvent(new Event("input"));
  })
}

closeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    abortMsg.classList.add('!block');
  })
})

btnAbortYes.addEventListener('click', () => {
  resetAllInputs();
  abortMsg.classList.remove('!block');
  window.location.href = '/';
})

btnAbortNo.addEventListener('click', () => {
  abortMsg.classList.remove('!block');
})

