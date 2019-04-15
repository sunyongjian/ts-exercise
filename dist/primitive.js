"use strict";
// number
let num = 2;
let binary = 0b10001;
let nan = NaN;
// string
let myName = 'syj';
// boolean
let createdByNewBoolean = new Boolean(1);
// 'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
let createdByNewBoolean1 = new Boolean(1);
let createdByNewBoolean2 = Boolean(1);
let isTrue = false;
// Void
let aVoid = undefined;
// undefined
let u = 1;
//Type '1' is not assignable to type 'undefined'.
let u1 = undefined;
// null
let n = null;
// any
let anyThing = 'yoyo';
anyThing = 12;
console.log(anyThing.name);
console.log(anyThing.person.age);
anyThing.person.cry();
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
// 所以尽量不要用 any
// # 类型推论
let str = 'yoyo';
str = 12;
// Type '12' is not assignable to type 'string'.
// 没有明确的指定类型的时候 ts 会推测出一个类型，那这里就是 string
let str1;
str1 = 'momo';
str1 = 13;
// 定义 str1 的时候没有赋值，则被推论成 any
// # 联合类型
// 取值可以为多种类型中的一种
let strOrNum = 'waka';
strOrNum = 12;
strOrNum.toString();
