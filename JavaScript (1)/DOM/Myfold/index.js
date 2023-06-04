const body = document.querySelector('body');

const newNavButton = document.createElement('a');
newNavButton.href = '#';
newNavButton.dataset.buttonId = '4';
newNavButton.className = 'nav-a';
newNavButton.textContent = 'ОТЗЫВЫ';
const mainNavigation = document.querySelector('nav');
mainNavigation.append(newNavButton);

const headerH1 = document.querySelector('h1');
headerH1.textContent = 'Главная страница ресторана';

// Methods

// remove - для удаления из DOM
// mainNavigation.remove();

// closest

const taskItemText = document.querySelector('.title-h3');
const taskItem = taskItemText.closest('.self-box-param');
// console.log(taskItem);

// classlist: add, remote, toggle - включает в себя два других метода

const firstNavigationButton = document.querySelector('.nav-a');
// firstNavigationButton.classlist.add('change-shadow');
// firstNavigationButton.classList.remove('change-shadow');
// firstNavigationButton.classList.toggle('change-shadow');
// firstNavigationButton.classList.toggle('change-shadow');

// работа с атрибутами

const createTaskInput = document.querySelector('.btn-menu');
console.log(createTaskInput.hasAttribute('type1'));
createTaskInput.getAttribute('value');
createTaskInput.removeAttribute('class');
createTaskInput.setAttribute('class', 'btn-menu');
