// Получение элементов через JS

// document - глобальный объект, позволяющий рабоать с HTML

// получение по id

/*
const tasksBlock = document.getElementById('tasks')
console.log(tasksBlock)
*/

// document
// console.log(document)

// получение по классу

/*
const allNavButtons = document.getElementsByClassName(' default-button')
console.log(allNavButtons)
*/

// получение по тэгу

/*
const allButtons = document.getElementsByTagName('button')
console.log(allButtons)
*/

// Старые способы

// Новые способы 

// querySelector - ищет первое совпадение
const tasksBlock = document.querySelector('#tasks')
console.log(tasksBlock)

const defaultButton = document.querySelector('.create-task-block__button')
console.log(defaultButton)

const allButtons = document.querySelector('button')
console.log(allButtons)

// Чтобы искать по атрибуту, необходимо указать его внутри []


// querySelectorAll - выбирет все элементы по селектору
const allNavButtons = document.querySelectorAll('button')
console.log(allNavButtons)

