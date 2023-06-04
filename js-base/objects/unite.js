const developerInfo = {
    age: 25,
    experience: 3,
    name: 'Spartak'
}

const developerExtraInfo = {
    height: 185,
    isJunior: false,
}

// ... - spread operator

const developer = {
    ...developerInfo,
    ...developerExtraInfo,
    name: 'SpaRtaK'
}

console.log(developer)

// Object.assign

const developer2 = Object.assign(developerInfo, developerExtraInfo)
console.log(developer2)