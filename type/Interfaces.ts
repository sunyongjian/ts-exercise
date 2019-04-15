// 面向对象语言中，接口是描述对象行为的抽象。
// 即如果 “你” 是 Person，那你就必须包含 name 和 age 属性。
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
//  定义的 person2 缺少 age，ts 会抛错
//  Type '{ name: string; }' is not assignable to type 'Person'.
//  Property 'age' is missing in type '{ name: string; }'.


// name 必需，age 可选， id 可选并且只读，即 id 不能赋值。否则抛错
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
// sex 属性  Cat 接口 并没有定义，抛错
//Type '{ name: string; age: number; sex: number; }' is not assignable to type 'Cat'.
// Object literal may only specify known properties, and 'sex' does not exist in type 'Cat'.


// 定义接口中的某个属性为任意属性，即这个属性的 key，以及是否必需，都是任意的。
// 并且，一旦定义了任意属性，那么必需属性和可选属性的类型，都必须是 任意属性类型的 子集
interface Choosable {
  name: string;
  age?: number;
  [propName: string]: string;
  // [propName: string]: any;
}

//Property 'age' of type 'number' is not assignable to string index type 'string'.
// 因为 age 可选属性的类型的 number，任意属性的类型是 string，所以不是其子集。
// 任意属性的类型改成 any 即可

