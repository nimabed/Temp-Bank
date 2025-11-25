

export function createWheelItems(container, values) {
  values.forEach((item) => {
    const element = document.createElement('div');
    element.className = 'wheelItem';
    element.textContent = item;
    container.appendChild(element);
  })
  const el = document.createElement('div');
  el.className = 'wheelItem';

  container.appendChild(el);
  container.appendChild(el.cloneNode(true));
  container.appendChild(el.cloneNode(true));


  container.scrollTo(0, container.scrollHeight / 2 - container.clientHeight / 2);

  container.addEventListener('scroll', () => selectActive(container));

  selectActive(container);
}


function selectActive(container) {
  const childElements = container.querySelectorAll('.wheelItem');

  // console.log(container.getBoundingClientRect());
  // console.log(container.scrollHeight);

  const containerCenter = Math.abs(container.scrollTop + container.offsetHeight / 2);

  childElements.forEach((el) => {
    const centerY = el.offsetTop + el.offsetHeight / 2;

    if (Math.abs(containerCenter - centerY) <= 24) {
      el.classList.add('active');
    }else {
      el.classList.remove('active');
    }

  })
}






// let wheelsContainer = document.querySelector('.js-wheels-container');

// let daysWheel = document.querySelector('.js-daysWheel');
// let monthsWheel = document.querySelector('.js-monthsWheel');
// let yearsWheel = document.querySelector('.js-yearsWheel');

// console.log(2000 < Infinity);
// const containerCenter = daysWheel.getBoundingClientRect().top + daysWheel.clientHeight / 2;
// daysWheel.scrollTo(0, containerCenter);
// console.log(daysWheel.scrollTop);

// const daysList = [...daysWheel.children];
// const monthsList = [...monthsWheel.children];
// const yearsList = [...yearsWheel.children];

// console.log(daysWheel.clientHeight);
// console.log(daysList[1].offsetTop);

// daysWheel.addEventListener('scroll', () => {
//   daysList.forEach((el) => {
//     let elementRect = el.getBoundingClientRect();
//     let elementCenter = elementRect.top + elementRect.height / 2;

//     if ((Math.abs(elementCenter - containerCenter)) < 24) {
//       el.classList.add('bg-blue-500', 'text-red-500');
//     } else {
//       el.classList.remove('bg-blue-500', 'text-red-500');
//     }
//   })

// })

// monthsWheel.addEventListener('scroll', () => {
//   monthsList.forEach((el) => {
//     let elementRect = el.getBoundingClientRect();
//     let elementCenter = elementRect.top + elementRect.height / 2;

//     if ((Math.abs(elementCenter - containerCenter)) < 24) {
//       el.classList.add('bg-blue-500', 'text-red-500');
//     } else {
//       el.classList.remove('bg-blue-500', 'text-red-500');
//     }
//   })

// })

// yearsWheel.addEventListener('scroll', () => {
//   yearsList.forEach((el) => {
//     let elementRect = el.getBoundingClientRect();
//     let elementCenter = elementRect.top + elementRect.height / 2;

//     if ((Math.abs(elementCenter - containerCenter)) <= 20) {
//       el.classList.add('bg-blue-500', 'text-red-500');
//     } else {
//       el.classList.remove('bg-blue-500', 'text-red-500');
//     }
//   })

// })

// console.log(daysWheel.scrollHeight);
// console.log([...daysWheel.children][0].getBoundingClientRect());

