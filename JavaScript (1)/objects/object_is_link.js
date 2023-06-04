const setName = (entity, value) => {
    typeof entity === 'object' ? entity.name = value: entity = value
}

const developer = {
    name: 'Spartak',
}

let developerName = 'Sparta'

setName(developer, 'SpartaK')
setName(developerName, 'KiborgUbitsa')

// console.log('developer:', developer)
// console.log('developerName:', developerName)

// const entity = {}
// const entityCopy = entity

// const array = [1,2]
// const arrayCopy = array

// console.log(entity === entityCopy)
// console.log(array === arrayCopy)

