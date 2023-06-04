// this - object - global
// window - for browsers
// global - for NodeJS

const user = {
    name: 'Spartak',
    dateOfBirth: 2002,
    getName() {
        // return user.name
        return this.name
    },
    calculateAge() {
        const currentYear = new Date().getFullYear()
        return currentYear - this.dateOfBirth
    },
    getAllInfo: function() {
        const age = this.calculateAge()
        console.log(`Name: ${this.name}, Age: ${age}`)
    },
}
console.log(user.getName())
console.log(user.calculateAge())
console.log(user.getAllInfo())

// bind, call, apply

const user2 = {
    name: 'Igor'
}

const user2Name = user.getName.call(user2)
console.log(user2Name)

