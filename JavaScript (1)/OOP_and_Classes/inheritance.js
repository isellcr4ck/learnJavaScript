// Наследование

class Plane {
    constructor(type, numberOfPassengers) {
        this.type = type
        this.numberOfPassengers = numberOfPassengers
    }

    startFlight() {
        console.log('Полетели!')
    }
}

class MilitaryPlane extends Plane {
    constructor(type) {
        super(type, 0)
        this.numberOfGuns = 0
    }

    startFlight() {
        console.log('Полетели в атаку!')
    }

    setNumberOfGuns(numberOfGuns) {
        console.log(numberOfGuns)
        this.numberOfGuns = numberOfGuns
    }

    shoot() {
        console.log('FIREEEEE')
    }
}

// const plane = new Plane('Пассажирский', 100)
// console.log(plane)
// plane.startFlight()

const militaryPlane = new MilitaryPlane('military')
console.log('militaryPlane', militaryPlane)
militaryPlane.startFlight()
militaryPlane.setNumberOfGuns(4)
militaryPlane.shoot()


// instanceof

console.log(militaryPlane instanceof Plane)