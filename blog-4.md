# TypeScript: OOP Concepts

## Introduction

Object-Oriented Programming (OOP) is a way of organizing code by grouping data and behavior into objects, making programs easier to structure and manage.

It helps you build clean and reusable systems, based on four main pillars: Encapsulation, Inheritance, Polymorphism, and Abstraction.

## OOP Principles in TypeScript

## Encapsulation

Encapsulation means keeping data and methods inside a class and controlling access to them.

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```

### Benefit:

* Protects internal state
* Prevents direct modification

---

## Inheritance

Inheritance allows one class to reuse another class’s properties and methods.

```ts
class Person {
  constructor(public name: string) {}
}

class Student extends Person {
  constructor(name: string, public grade: string) {
    super(name);
  }
}
```

### Benefit:

* Reuses code
* Reduces duplication

---

## Polymorphism

Polymorphism allows different classes to use the same method in different ways.

```ts
class Animal {
  speak() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}
```

### Benefit:

* Same method name, different behavior
* Makes code flexible

---

## Abstraction

Abstraction hides complex implementation details and shows only essential features.

```ts
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}
```

### Benefit:

* Focus on what an object does, not how it works
* Simplifies complex systems

---

## Conclusion

### OOP Principles

Object-Oriented Programming helps you organize your code in a structured way, especially in larger applications. Instead of writing everything in functions, you group related data and behavior into classes.

* **Encapsulation** helps protect your data and control how it is accessed.
* **Inheritance** allows you to reuse existing logic and avoid duplication.
* **Polymorphism** gives flexibility by allowing different behaviors using the same method name.
* **Abstraction** helps hide complex details and expose only what is necessary.

When used properly, OOP makes your code easier to scale, maintain, and understand over time. It helps you think in terms of real-world structures, which reduces complexity in large TypeScript projects.
