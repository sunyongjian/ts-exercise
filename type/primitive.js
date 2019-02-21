// number
var num = 2;
var binary = 17;
var nan = NaN;
// string
var myName = 'syj';
// boolean
var createdByNewBoolean = new Boolean(1);
// 'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
var createdByNewBoolean1 = new Boolean(1);
var createdByNewBoolean2 = Boolean(1);
var isTrue = false;
// Void
var aVoid = undefined;
// undefined
var u = 1;
//Type '1' is not assignable to type 'undefined'.
var u1 = undefined;
// null
var n = null;
// any
var anyThing = 'yoyo';
anyThing = 12;
console.log(anyThing.name);
console.log(anyThing.person.age);
anyThing.person.cry();
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
// 所以尽量不要用 any
// # 类型推论
var str = 'yoyo';
str = 12;
// 
// 没有明确的指定类型的时候 ts 会推测出一个类型，那这里就是 string
var str1;
str1 = 'momo';
str1 = 13;
