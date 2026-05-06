// problem-1
const filterEvenNumbers = (array: number[]): number[] => {
  const even = array.filter((n) => n % 2 === 0);
  return even;
};

// problem-2

const reverseString = (value: string): string => {
  const reverse = value.split("").reverse().join("");
  return reverse;
};

// problem-3

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): "String" | "Number" => {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// problem-4

const getProperty = <X, Y extends keyof X>(obj: X, key: Y): X[Y] => {
  return obj[key];
};

// problem-5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface BookWithReadProperty extends Book {
  isRead: boolean;
}
const toggleReadStatus = (obj: Book): BookWithReadProperty => {
  return {
    ...obj,
    isRead: true,
  };
};

// problem-6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// problem-7

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const intersection = arr1.filter((i) => arr2.includes(i));
  return intersection;
};
