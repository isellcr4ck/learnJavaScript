// Обработчики событий

/*
const firstNavButton = document.querySelector('.nav-a');
firstNavButton.addEventListener('click', (event) => {
  console.log(event.target);
  //   const target = event.target
  const { target } = event;
  target.classList.add('change-shadow');
});
*/

// const allNavButtons = document.querySelectorAll('.nav-a');
// allNavButtons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     allNavButtons.forEach((button) => {
//       button.classList.remove('change-shadow');
//     });
//     const { target } = event;
//     target.classList.add('change-shadow');
//   });
// });

// const allNavButtons = document.querySelectorAll('.nav-a');
// allNavButtons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     allNavButtons.forEach((button) => {
//       button.style.color = '#66fcf1';
//     });
//     const { target } = event;
//     target.style.color = 'red';
//   });
// });

const allNavButtons = document.querySelectorAll('.nav-a');
allNavButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    allNavButtons.forEach((button) => {
      button.style.color = '#66f1fc';
    });
    const { target } = event;
    target.style.color = '#66fc';
  });
});

// submit

const createTaskForm = document.querySelector('.form-comment');
createTaskForm.addEventListener('submit', (event) => {
  event.preventDefault(); // отмена действия по умалчанию
  const { target } = event;
  const taskNameInput = target;
  alert('Отзыв отправлен');
});
