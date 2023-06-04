// Полиморфизм
// Одно действие, несколько реализаций

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {}
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    console.log('Гав-гав');
  }
}

class Horse extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    console.log('Иго-го-го');
  }
}
