// 将声明文件导出，常用于 npm 包中
// 通常来说，在 ts 中使用 npm 包，是需要坚持这个包的声明文件是否存在。一般来说存在于两个地方，
// 一个是在 npm 包内部，比如 index.ts 和 index.d.ts
// 另一个是官方的 @types group 下，比如 @types/node  @types/react，交由社区维护
// 如果没有，就需要自己写了。需要注意这个 lib 的类型，是 esmodule 还是 umd，以及使用的时候，要在 tsconfig 中引入

// 以下是一个通用的声明文件的模板。
// 只需要把你的各个定义都 export 导出就可以了

// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ This is the module template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace myLib;

/*~ If this module has methods, declare them as functions like so.
 */
export function myMethod(a: string): string;
export function myOtherMethod(a: number): number;

/*~ You can declare types that are available via importing the module */
export interface someType {
    name: string;
    length: number;
    extras?: string[];
}

/*~ You can declare properties of the module using const, let, or var */
export const myField: number;

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
export namespace subProp {
    /*~ For example, given this definition, someone could write:
     *~   import { subProp } from 'yourModule';
     *~   subProp.foo();
     *~ or
     *~   import * as yourMod from 'yourModule';
     *~   yourMod.subProp.foo();
     */
    export function foo(): void;
}