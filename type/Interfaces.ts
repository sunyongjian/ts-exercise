interface Person {
  name: string;
  age: number;
}

let person1: Person = {
  name: 'xx',
  age: 11,
}

let person2: Person = {
  name: 'yy'
}
//  Type '{ name: string; }' is not assignable to type 'Person'.
//  Property 'age' is missing in type '{ name: string; }'.


interface Cat {
  name: string;
  age?: number;
  readonly id?: number;
}

let cat1: Cat = {
  name: 'dafu'
}

let cat2: Cat = {
  name: 'kk',
  age: 2,
  sex: 0
}
//Type '{ name: string; age: number; sex: number; }' is not assignable to type 'Cat'.
// Object literal may only specify known properties, and 'sex' does not exist in type 'Cat'.



interface Choosable {
  name: string;
  age?: number;
  [propName: string]: string;
  // [propName: string]: any;
}

//Property 'age' of type 'number' is not assignable to string index type 'string'.