// Primitives: number, string, boolean
// more complex: arrays, objects
// function types, parameters

// primitives

let age: Number;
age = 44;

let userName: string;
userName = "Luc";

let isFather: boolean;
isFather = true;

// More complex types

let hobbies: string[];
hobbies = ["no-hobbies i have a family", "computer", "books"];

let person: {
  isEmployee: boolean;
  name: string;
  age: number;
};

person = {
  isEmployee: false,
  name: "Luc",
  age: 44,
};

let people: {
  isEmployee: boolean;
  name: string;
  age: number;
}[];

// type inference
let study = "I'm studing to enhance me";
study = 1234; // it's ok, typescript inferences the type without explicit declaration

// union
let idx: string | number;
idx = "idCode";
idx = 1234;

// alias
type Person = {
  name: string;
  age: number;
};
let aperson: Person;
person = { isEmployee: true, name: "sds", age: 22 };
let persons: Person[];
persons = [person, person];

// functions + types

function add(a: number, b: number): number {
  return a + b;
}
// no return
function print(value: any): void {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updateArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
updateArray[0].split(""); // error, typescr infers a number type... you can't split like a string!

const stringArray = insertAtBeginning(["a", "b", "c"], "d");
stringArray[0].split(""); // is ok,  typescript infers correctly because <T>
// best of both world, flexibility and type safety

// Classes and Interfaces
class Student {
//   firstName: string;
//   lastName: string;
//   age: number;
//   private courses: string[];
  //   constructor(firstName: string, last: string, age: number, courses: string[]) {
  //     this.firstName = firstName;
  //     this.lastName = last;
  //     this.age = age;
  //     this.courses = courses;
  //   }
  constructor( // shorthand notation
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enrol(courseName: string) {
    this.courses.push(courseName);
  }
  listCorses() {
    return this.courses.slice(); // .slice() => return new array, not a reference
  }
}
const student = new Student("Luc", "Pa", 44, ["typescript"]);
student.enrol('ReactJS');
student.listCorses(); // => typescript,ReactJS


// Interface

interface Human {
    firstName:string;
    age: number;
    greet: ()=> void;
}

let luc: Human;
luc = {
    firstName:'Luc',
    age:44,
    greet(){
        console.log('Ciao!');
    }
}
class Empolyee implements Human{
    firstName: string;
    age: number;
    // greet: () => void;
    greet(){console.log('sCiao!')};
}
