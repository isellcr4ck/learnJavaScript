// Добавление и удаление элементов массивов

// const users = ['Spartak', 'Lisa', 'Ann'];
// console.log(users);

// users[2] = 'Dima';
// console.log(users);

// const arrLenght = users.push('Adam');
// console.log(arrLenght);

// users.unshift('Vasya');
// console.log(users);

// const lastDeletedElement = users.pop();
// console.log(lastDeletedElement);
// console.log(users);

// const firstDeletedElement = users.shift();
// console.log(firstDeletedElement);
// console.log(users);

// Поиск элемента

// const roles = ['user', 'admin', 'manager'];
// const elIndex = roles.indexOf('admin'); // Ищет первое вхождение
// console.log(elIndex);
// const elIndex2 = roles.indexOf('superuser'); // -1 -- не существует
// console.log(elIndex2);

// if (roles.indexOf('user') >= 0) {
//   console.log('Доступ есть');
// } else {
//   console.log('Доступа нет');
// }

// console.log(roles.includes('admin')); // возвращает true либо false

// if (roles.includes('admin')) {
//   console.log('Доступ есть');
// } // Чаще всего используется именно в условии

// Слайс, сплайс, конкатенация, реверс

// const roles = ['user', 'admin', 'manager', 'superuser'];

// slice / не модифицирует исходные массивы
// const firstMethodOfSlice = roles.slice(2); // Отрезает все доконца массива
// console.log(firstMethodOfSlice);

// const secondMethodOfSlice = roles.slice(2, 3); // Принимает начальный и конечный индекс не включая второй индекс
// console.log(secondMethodOfSlice);

// const thirdMethodOfSlice = roles.slice(-1);
// console.log(thirdMethodOfSlice);

// const fourthMethodOfSlice = roles.slice(1, -1);
// console.log(fourthMethodOfSlice);

// splice
// const methodOfSplice = roles.splice(2); // Модифицирует исходный массив
// const methodOfSplice = roles.splice(2, 1); // Вторым аргументом принимает длину, которую нужно взять
// const methodOfSplice = roles.splice(-1);
// console.log('methodOfSplice', methodOfSplice);
// console.log('roles', roles);

// Методы массивов

// reverse
// const reversedRoles = roles.reverse(); // Модифицирует исходный массив
// console.log(reversedRoles);
// console.log(roles);

// concat
// const newRoles = ['sysadmin', 'developer'];
// const concatArrays = roles.concat(newRoles);
// console.log(concatArrays);

// Из строки в массив и обратно
// const url = 'auth/user/login';
// const res = url.split('/'); // Принимает символ по каторому необходимо разбить
// console.log(res);
// console.log(res.join('/'));

// Практическое упражнение
// const tasks = ['Задача 1'];

// function addToEnd(task) {
//   tasks.push(task);
//   return;
// }

// function removeTask(task) {
//   if (tasks.includes(task)) {
//     const deleteIndex = tasks.indexOf(task);
//     tasks.splice(deleteIndex, 1);
//     return;
//   }
// }

// function getHighPreority(task) {
//   const taskId = tasks.indexOf(task);
//   const taskBody = tasks[taskId];
//   tasks.splice(taskId, 1);
//   tasks.unshift(taskBody);
//   return;
// }

// console.log('tasks1', tasks);

// addToEnd('Задача 2');
// addToEnd('Задача 3');
// addToEnd('Задача 4');
// console.log('tasks2', tasks);

// removeTask('Задача 3');
// console.log('tasks3', tasks);

// getHighPreority('Задача 2');
// console.log('tasks4', tasks);

// Принцип DRY (Do not repit yourself)

//Деструктуризация
// const userData = ['Spartak', 21, 'Moscow'];

// const userName = userData[0]
// const age = userData[1]
// const city = userData[2] -

// const [userName, age, city] = userData;
// console.log(userName, age, city);

// Rest оператор - ...
// const data = [1, 2, 3, 4, 5, 6];
// const [one, two, ...others] = data;
// console.log(one, two);
// console.log(others);
