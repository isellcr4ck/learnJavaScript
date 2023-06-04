// Инкапсуляция

// public
// private - метод для доступа только из родительского класса
// Для создания private поля указывается #

class Developer {
  #salary;

  constructor(name, programmingLanguage) {
    this.name = name;
    this.programmingLanguage = programmingLanguage;
    this.#salary = 3000;
  }

  get devSalary() {
    return this.#salary;
  }

  set setSalary(salary) {
    this.#salary = salary;
  }

  startCoding() {
    console.log(`Зарплата: ${this.#salary}$`);
    console.log(`${this.name} начинает писать код!`);
  }

  #printProgrammingLanguage() {
    console.log(`Язык программирования: ${this.programmingLanguage}`);
  }
}

class JuniorDeveloper extends Developer {
  constructor(name, programmingLanguage) {
    super(name, programmingLanguage);
  }
}

// const juniorDeveloper = new JuniorDeveloper('Lisa', 'JavaScript');
// juniorDeveloper.printProgrammingLanguage();

const developer = new Developer('Спартак', 'JavaScript');
console.log(developer);
console.log(developer.devSalary);
developer.setSalary = 5000;
console.log(developer.devSalary);
// developer.startCoding();
// developer.printProgrammingLanguage();
