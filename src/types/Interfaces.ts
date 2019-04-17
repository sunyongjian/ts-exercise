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



// 合并接口
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}
let box: Box = {height: 5, width: 6, scale: 10};

// 接口的非函数的成员应该是唯一的，但是函数可以不唯一。
// 对于函数成员，每个同名函数声明都会被当成这个函数的一个重载。 
// 同时需要注意，当接口 A与后来的接口 A合并时，后面的接口具有更高的优先级。
interface Document {
  createElement(tagName: any): Element;
}
interface Document {
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
  createElement(tagName: string): HTMLElement;
  createElement(tagName: "canvas"): HTMLCanvasElement;
}

//合并后的 Document将会像下面这样：
interface Document {
  createElement(tagName: "canvas"): HTMLCanvasElement;
  createElement(tagName: "div"): HTMLDivElement;
  createElement(tagName: "span"): HTMLSpanElement;
  createElement(tagName: string): HTMLElement;
  createElement(tagName: any): Element;
}