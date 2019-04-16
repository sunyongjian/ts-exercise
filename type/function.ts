// 约束好函数的输入输出

function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);

sum(1, 2, 3);
//[ts] Expected 2 arguments, but got 3.   多余的参数 or 少参数都是不可以的

// 多种函数定义方式
// 1. 对 mySum 变量进行类型定义，加入 => 来表示函数的参数和返回值
let mySum: (x: number, y: number) => number

mySum = (x, y) => {
  return x + y;
};
// 因为上面已经对函数进行了定义，通过胖箭头来分割，左边是输入，右边是输出。

mySum(1, 3);

// 2. 当然也可以这样定义：
// 注意跟函数体的 箭头 作区分。es6 中的箭头函数 () => {}

let mySum1 = (x: number, y: number): number => x + y;




// 3. interface 接口定义
interface MyFn {
  (str: string): number
}

let Str2Num: MyFn = str => +str;

let herFn: MyFn = (str1: string, str2: string): string => str1 + str2;
// herFn 的定义，不符合 MyFn 接口的规范
//[ts] Type '(str1: string, str2: string) => string' is not assignable to type 'MyFn'.

// 默认值

function getFullName(firstName: string, lastName: string = 'yy') {
  return `${firstName}${lastName}`;
}

// 可选参数
function request(url: string, callback: (data: any) => void) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if(callback) callback(xhr.responseText);
    };
  }
  xhr.send();
}

// 剩余参数
function concat(array: any[], ...etc: any[]) {
  array.push(...etc);
  return array;
}
concat([1], 2, 3);


// 回调函数返回值类型
// 不要为返回值被忽略的回调函数设置一个any类型的返回值类型：
/* 错误 */
function fn(x: () => any) {
    x();
}
// 应该给返回值被忽略的回调函数设置void类型的返回值类型：

/* OK */
function fn(x: () => void) {
    x();
}

// 函数重载，这块在函数声明去详解