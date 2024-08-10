// 1. Problem: Create an object car with properties make, model, and year. Add a method getInfo that returns a string containing the car's details.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getInfo() {
    return `Car info: ${this.year} ${this.make} ${this.model}`;
  }
}

const car = new Car("Toyota", "Corolla", 2020);

// console.log(car.getInfo());

// 2. Problem: Create a Person class and a Student class that inherits from Person. Add a method introduce to the Student class.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
  introduce() {
    return `Hi, I am ${this.name}, and I am in grade ${this.grade}.`;
  }
}

const student = new Student("Alice", 8);
// console.log(student.introduce());

// 3. Problem: Create a BankAccount class with private properties balance. Add methods to deposit, withdraw, and check the balance.

class BankAccount {
  #balance = 0; // # = private
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) this.#balance -= amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
account.withdraw(50);
// console.log(account.getBalance());

// 4. Problem: Create a Shape class with a method area. Create Rectangle and Circle classes that inherit from Shape and override the area method.

class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

const rectangle = new Rectangle(4, 5);
const circle = new Circle(3);
// console.log(rectangle.area());
// console.log(circle.area().toFixed(2));

// 5. Problem: Create an abstract class Animal with a method makeSound. Create Dog and Cat classes that inherit from Animal and implement makeSound.

class Animal {
  makeSound() {
    throw new Error("Method 'makeSound()' must be implemented.");
  }
}

class Dog extends Animal {
  makeSound() {
    return "Woof!";
  }
}

class Cat extends Animal {
  makeSound() {
    return "Meow!";
  }
}

const dog = new Animal();
const cat = new Cat();

// console.log(dog.makeSound());
// console.log(cat.makeSound());

// 6. Problem: Create a House class that has a Door and Window objects. Use composition instead of inheritance.

class Door {
  constructor(color) {
    this.color = color;
  }
}

class Window {
  constructor(type) {
    this.type = type;
  }
}

class House {
  constructor(door, window) {
    this.door = door;
    this.window = window;
  }
  describe() {
    return `House with a ${this.door.color} door and ${this.window.type} windows.`;
  }
}

const door = new Door("red");
const window = new Window("sliding");
const house = new House(door, window);
// console.log(house.describe());

// 7. Problem: Create a MathUtils class with a static method add that takes two numbers and returns their sum.

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

// console.log(MathUtils.add(3, 5));

// 8. Problem: Create a Person class with a private property name. Use getter and setter to access and modify name.

class Person2 {
  #name = "";

  get name() {
    return this.#name;
  }

  set name(value) {
    if (value.length > 0) {
      this.#name = value;
    }
  }
}

const person = new Person2();
person.name = "Bob";
// console.log(person.name);

// 9. Problem: Create a Bird class that has a fly method. Create a Penguin class that overrides the fly method.

class Bird {
  fly() {
    return "I can fly!";
  }
}

class Penguin extends Bird {
  fly() {
    return "I can't fly, but I can swim!";
  }
}

const penguin = new Penguin();
// console.log(penguin.fly());

// 10. Problem: Create a Printer class that accepts objects implementing a print method. Demonstrate with TextDocument and ImageDocument classes.

class Printer {
  print(document) {
    document.print();
  }
}

class TextDocument {
  print() {
    console.log("Printing text document...");
  }
}

class ImageDocument {
  print() {
    console.log("Printing image document...");
  }
}

const printer = new Printer();
const textDoc = new TextDocument();
const imageDoc = new ImageDocument();

printer.print(textDoc);
printer.print(imageDoc);
