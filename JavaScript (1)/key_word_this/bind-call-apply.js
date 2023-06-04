const mainHero = {
    fullName: 'SpiderMan',
    health: 65,
    strength: 5,
}

const badHero = {
    fullName: 'Joker',
    health: 55,
    strength: 10,
}

function printHeroInfo(extraInfo = '') {
    console.log(`Name: ${this.fullName}, Health: ${this.health},  Strength: ${this.strength}, ${extraInfo}`)
}

// bing call apply

console.log(printHeroInfo.call(badHero,'dick'))
