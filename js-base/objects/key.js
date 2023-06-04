// string | symbol

const id = Symbol('id')

const user = {
    [id]: 1,
    name: 'Spartak',
    name: 'Igor',
}

console.log(Object.keys(user))
console.log(user[id])

// in

console.log('name' in user)
