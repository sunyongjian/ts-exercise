// TypeScript 的设计目标之一是让你从现有的 JavaScript 库中安全、轻松的使用 TypeScript，你可以通过 TypeScript 声明文件来做到这一点。
// 推荐阅读： https://www.tslang.cn/docs/handbook/declaration-files/deep-dive.html
// 我们能够为任何结构书写声明文件。


// --- 全局变量 ---
// 尽管实际开发过程中，很少用到全局变量，但是不妨碍我们学习。而且也很少并且不推荐写全局变量的声明文件，会导致无法处理的命名冲突

// foo = 123;
// 即认定  foo1 为全局变量，告诉 ts 编译器。
declare var foo1: any;

foo1 = 123;

// --- 全局函数 ---
// 比如像 jQuery，需要告诉 ts 编译器它的类型。比如：

declare const jQuery: (selector: string) => any;

jQuery('abc');

// 注意 declare 声明的代码，经过 ts 编译之后，都会删除。
// 也就是转成 js 就只剩  `jQuery('abc');` 了

declare function getName(str: string): string;

// declare function getAge(age: number) {
//   console.log(age);
// }
//[ts] An implementation cannot be declared in ambient contexts.
// declare 只能用来声明，定义类型。不可以写具体的语句，代码

// declare class
declare class Person {
  constructor(name: string);
  sayHi(): string
}

// declare enum   枚举值
declare enum Week {
  SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}

// --- 命名空间 --- ：表示全局变量是一个对象，包含许多子属性
declare namespace ModuleA{
  function yy(str: string): void;

  namespace PkgA {
    let name: any;
  }
}

ModuleA.yy;
ModuleA.PkgA.name;


// --- 可重用类型（接口）--- 
interface AjaxSettings {
  method?: 'GET' | 'POST'
  data?: any;
}

declare function fetch(url: string, settings?: AjaxSettings): void;

// --- 声明合并 --- 。类似于接口合并、命名空间合并等，声明同样可以合并。

declare namespace fetch {
  let status: string;
} 
// 比如在声明了 fetch 函数后，但是 fetch 同样可以作为命名空间（对象）存在。可以挂很多变量


// --- 函数重载 --- 
// 顺序：不要把一般的重载放在精确的重载前面

declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: any): any;

let myElem: HTMLDivElement;
let x = fn(myElem); // x: string, :)
