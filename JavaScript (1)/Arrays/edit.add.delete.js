const salariesOfDevelopers = [400, 500, 600, 2000, 350];

const newSeniorDeveloperSalary = 5000;
// push - добавление элементов в конец
salariesOfDevelopers.push(newSeniorDeveloperSalary, 5001, 5002);
console.log(salariesOfDevelopers);

// unshift - добавление элементов вначало
salariesOfDevelopers.unshift(100, 101, 102, 103);
console.log(salariesOfDevelopers);

// shift - удаление первого элемента
const firstRemovedElement = salariesOfDevelopers.shift();
salariesOfDevelopers.shift();
console.log(salariesOfDevelopers);
console.log(firstRemovedElement);

// pop - удаление элементов с конца
const lastRemovedElement = salariesOfDevelopers.pop();
console.log(lastRemovedElement);

// Изменение элементов массива
salariesOfDevelopers[4] = 6000;
console.log(salariesOfDevelopers);