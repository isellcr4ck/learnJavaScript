const goodInfo = {
    id: 1,
    price: 80,
    currency: '$',
    name: 'shoes',
}

// console.log(goodInfo)

// for in - for iterate objects
/*
for (const key in goodInfo) {
    console.log(key)
    const value = goodInfo[key]
    console.log(value)
}
*/

// Object.keys
const keys = Object.keys(goodInfo)
console.log(keys)

// Object.values
const values = Object.values(goodInfo)
console.log(values)

// Object.entries
const entries = Object.entries(goodInfo)
console.log(entries)