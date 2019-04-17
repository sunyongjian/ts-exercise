let list: number[] = [1, 2, 3, 4];
// 「类型 + 方括号」表示

let list1: number[] = [1, '2', 3];
// [ts]
// Type '(string | number)[]' is not assignable to type 'number[]'.
//   Type 'string | number' is not assignable to type 'number'.
//     Type 'string' is not assignable to type 'number'.
// 不允许存在其他类型，并且根据数据，类型被推断为 (string | number)[]


list1.push('4');
// push 新增元素也不行
// [ts] Argument of type '"4"' is not assignable to parameter of type 'number'.


// 还可以通过数组泛型
let numberAry: Array<number> = [5, 4, 3, 2, 1];


interface NumberArray {
  [index: number]: number;
}

let data: object[] = [ { name: 'ss' } ];

let anyArray: any[] = [{ name: 'ss' }, '1', 2, [3]];

// 类数组
function fn() {
  let args: IArguments = arguments;
}
// 函数的形参，dom 节点等类数组，都有自己的接口定义。如 NodeList, HTMLCollection