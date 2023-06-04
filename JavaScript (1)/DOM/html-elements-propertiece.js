// Получение значения класса

const taskList = document.querySelector('.tasks-list');

taskList.className = 'task-list1';
// console.log(taskList.className);

// Изменение содержимого элемента
const submitButton = document.querySelector('.create-task-block__button');
console.log(submitButton.innerText);
console.log(submitButton.textContent);

submitButton.textContent = 'Sosati';

// innerHtml
console.log(taskList.innerHTML);
taskList.innerHTML += '<b>taskList</b>';

// children
const createTaskForms = document.querySelector('.create-task-block');
console.log('children', createTaskForms.children);

// data-атрибуты
const firstNavButton = document.querySelector('.create-task-block__button');
console.log('dataset', firstNavButton.dataset);

// style

console.log('submitButton.style', submitButton.style);
submitButton.style.fontWeight = 'bold';
submitButton.style.boxShadow = 'inset 0 0 0 3px #fff';

// createElement

const newNavButton = document.createElement('a');
newNavButton.className = 'main-navigation__button-item';
newNavButton.href = '#task_expired';
newNavButton.dataset.buttonId = '4';
newNavButton.textContent = 'AAAAAAAAAAA';

// append - добавляет вконец, prepend - добавляет вначало

const mainNavigation = document.querySelector('.nav');
mainNavigation.append(newNavButton);
// mainNavigation.insertAdjacentElement('beforebegin', newNavButton);
console.log(newNavButton);
