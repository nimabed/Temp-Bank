let dateInput = document.querySelector(".js-dateInput"); 

export const date = ['', '', ''];

let isUserScrolling = false;

let timer;

export function createWheelItems(container, values) {
  values.forEach((item) => {
    const element = document.createElement('div');
    element.className = 'wheelItem';
    element.textContent = item;
    container.appendChild(element);
  })
  const el = document.createElement('div');
  el.className = 'py-3';

  container.appendChild(el);
  container.appendChild(el.cloneNode(true));
  container.appendChild(el.cloneNode(true));
  container.appendChild(el.cloneNode(true));
  container.appendChild(el.cloneNode(true));
  
  container.addEventListener('scroll', () => updateActiveElement(container));
}    

function updateActiveElement(container) { 

  const childElements = container.querySelectorAll('.wheelItem');
  const containerCenter = Math.abs(container.scrollTop + container.offsetHeight / 2);

  childElements.forEach((el) => {
    const elHeight = el.offsetHeight;
    const centerY = el.offsetTop + elHeight / 2;
    let interval = Math.abs(containerCenter - centerY);

    el.classList.toggle('wheelItem-active', interval <= elHeight / 2);

    el.classList.toggle('wheelItem-l1', interval > 16 && interval <= elHeight + 16);

    el.classList.toggle('wheelItem-l2', interval > elHeight + 16 && interval <= elHeight * 2 + 16);

    el.classList.toggle('wheelItem-l3', interval > elHeight * 2 + 16 && interval <= elHeight * 3 + 16);
  })

  updateDate(container);

  container.addEventListener('wheel', () => activateUserScroll());

  if (isUserScrolling) {
    dateInput.value = date.join('/');
    dateInput.dispatchEvent(new Event("input"));
  }
}


function activateUserScroll() {
  isUserScrolling = true;

  if (timer) clearTimeout(timer);

  timer = setTimeout(() => {
    isUserScrolling = false;
  }, 500);

}


function updateDate(container) {
  const activeEl = container.querySelector('.wheelItem-active');

  if (activeEl) {
    if (container.classList.contains('days')) {
      date[0] = activeEl.innerText;
    }else if (container.classList.contains('months')) {
      date[1] = activeEl.innerText;
    }else {
      date[2] = activeEl.innerText;
    }
  }
}

