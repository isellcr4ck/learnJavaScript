// const developerNames = ['Spartak', 'Igor', 'Lisa', 'Ann']

// for

/*
for (let i = 0; i < developerNames.length; i += 1) {
     console.log('Developer: ', developerNames[i])
}
*/

// for of

/*
for (const developer of developerNames) {
    console.log(developer)
}
*/

// forEach 
/*
developerNames.forEach((developer, index, array) => {
    console.log('Developer:', developer, ', index:', index)
})
*/

const salariesOfDevelopers = [400, 500, 600, 2000, 350];

// map - для применения действия к каждому элементу массива

/*
const updatedSalaries = salariesOfDevelopers.map((salary, index, array)=> {
    return salary ** 2
})
*/

// filter

/*
const filtredSalaries = salariesOfDevelopers.filter((salary, index, array) => {
    return salary > 600
})
*/

// find - выводит первый найденный в массиве элемент, по порядку

/*
const searchSalary = salariesOfDevelopers.find((salary, index, array) => {
    return salary >= 500
})
*/

// findIndex - выводит первый найденный в массиве индекс

/*
const searchedIndex = salariesOfDevelopers.findIndex((salary)=>{
    return salary === 400
})
*/

// some every
// some - returns true or false
// every - true if all elements are satisfy the condition  

/*
const elementExist = salariesOfDevelopers.every((salary)=>{
    return salary > 1000
})

*/