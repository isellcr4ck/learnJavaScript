// OOP

// В основе ООП лежат объекты
// Сущности - функций и классов

/* Сущность в виде функции 
function Animal(name) {
    this.name = name

    this.getName = function() {
        return this.name
    }
}
*/

class Animal {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

// new
const cat = new Animal('Cat')
const dog = new Animal('Dog')
// console.log('cat', cat)
// console.log('cat.name', cat.name)
// console.log('cat.getName()', cat.getName())
console.log(dog)