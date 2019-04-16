"use strict";
// 约束好函数的输入输出
function sum(x, y) {
    return x + y;
}
sum(1, 2);
sum(1, 2, 3);
//[ts] Expected 2 arguments, but got 3.   多余的参数 or 少参数都是不可以的
// 多种函数定义方式
// 1. 对 mySum 变量进行类型定义，加入 => 来表示函数的参数和返回值
let mySum;
mySum = (x, y) => {
    return x + y;
};
// 因为上面已经对函数进行了定义，通过胖箭头来分割，左边是输入，右边是输出。
mySum(1, 3);
// 2. 当然也可以这样定义：
// 注意跟函数体的 箭头 作区分。es6 中的箭头函数 () => {}
let mySum1 = (x, y) => x + y;
let Str2Num = str => +str;
let herFn = (str1, str2) => str1 + str2;
// herFn 的定义，不符合 MyFn 接口的规范
//[ts] Type '(str1: string, str2: string) => string' is not assignable to type 'MyFn'.
// 默认值
function getFullName(firstName, lastName = 'yy') {
    return `${firstName}${lastName}`;
}
// 可选参数
function request(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (callback)
                callback(xhr.responseText);
        }
        ;
    };
    xhr.send();
}
// 剩余参数
function concat(array, ...etc) {
    array.push(...etc);
    return array;
}
concat([1], 2, 3);
// 回调函数返回值类型
// 不要为返回值被忽略的回调函数设置一个any类型的返回值类型：
/* 错误 */
function fn(x) {
    x();
}
// 应该给返回值被忽略的回调函数设置void类型的返回值类型：
/* OK */
function fn(x) {
    x();
}
// 函数重载，这块在函数声明去详解
