"use strict";
let person1 = {
    name: 'xx',
    age: 11,
};
let person2 = {
    name: 'yy'
};
let cat1 = {
    name: 'dafu'
};
let cat2 = {
    name: 'kk',
    age: 2,
    sex: 0
};
//Property 'age' of type 'number' is not assignable to string index type 'string'.
// 因为 age 可选属性的类型的 number，任意属性的类型是 string，所以不是其子集。
// 任意属性的类型改成 any 即可
