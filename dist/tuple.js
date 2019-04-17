"use strict";
// 元组。已知固定数量的元素的类型，但是类型不必相同。数组更多是相同类型的
let tuple1 = ['ts', 1];
tuple1[0] = 'js';
// tuple1[0] = 2;
// [ts] Type '2' is not assignable to type 'string'.
tuple1[1] = 3;
tuple1[1].toString();
tuple1[2] = 'react';
tuple1[3] = 4;
tuple1[4] = {};
// Type '{}' is not assignable to type 'string | number'.
//   Type '{}' is not assignable to type 'number'.
// 元素类型必须是 string | number
// 所以元组可以约定已知位置的元素的类型，并且超出位置的类型，是已知的联合类型
