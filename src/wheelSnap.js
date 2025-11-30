let userScrolling = false;

export function createWheelItems(container, values) {
  values.forEach((item) => {
    const element = document.createElement('div');
    element.className = 'wheelItem';
    element.textContent = item;
    container.appendChild(element);
  })
  const el = document.createElement('div');
  el.className = 'wheelItem';
  el.classList.add('!py-3');

  container.appendChild(el);
  container.appendChild(el.cloneNode(true));
  container.appendChild(el.cloneNode(true));
  container.appendChild(el.cloneNode(true));
  container.appendChild(el.cloneNode(true));

  container.scrollTo(0, container.scrollHeight / 2 - container.clientHeight / 2);

  container.addEventListener('scroll', () => {
    updateActiveElement(container);
    if (userScrolling) {
      updateDate();
    }
    
  });

}


function updateActiveElement(container) {
  container.addEventListener('wheel', () => {
    userScrolling = true;
  })

  const childElements = container.querySelectorAll('.wheelItem');
  const containerCenter = Math.abs(container.scrollTop + container.offsetHeight / 2);

  childElements.forEach((el) => {
    const elHeight = el.offsetHeight;
    const centerY = el.offsetTop + elHeight / 2;
    let interval = Math.abs(containerCenter - centerY);

    el.classList.toggle('wheelItem-active', interval <= elHeight / 2);

    el.classList.toggle('wheelItem-l1', interval > 21 && interval <= 62);

    el.classList.toggle('wheelItem-l2', interval > 62 && interval <= 98);

    el.classList.toggle('wheelItem-l3', interval > 98 && interval <= 132);

  })
}

function updateDate() {
  let day;
  let month;
  let year;

  // Containers
  let daysContainer = document.querySelector(".js-daysWheel");         
  let monthsContainer = document.querySelector(".js-monthsWheel");     
  let yearsContainer = document.querySelector(".js-yearsWheel"); 
  let dateInput = document.querySelector(".js-dateInput"); 
  // let btnNext8 = document.querySelector(".js-btn-next8");
  
  // Day/Month/Year elements
  let dayEl = daysContainer.querySelector('.wheelItem-active');
  let monthEl = monthsContainer.querySelector('.wheelItem-active');
  let yearEl = yearsContainer.querySelector('.wheelItem-active');

  if (dayEl) day = dayEl.innerText;
  if (monthEl) month = monthEl.innerText;
  if (yearEl) year = yearEl.innerText;

  dateInput.value = `${day}/${month}/${year}`;
  dateInput.dispatchEvent(new Event("input"));
}

