"use strict";
// 枚举值
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
console.log(Days.Mon === 1); // true
console.log(Days.Sat === 6); // true
console.log(Days[2] === 'Tue'); // true
console.log(Days);
// 打印一下 Days，得到如下结果
// { '0': 'Sun',
//   '1': 'Mon',
//   '2': 'Tue',
//   '3': 'Wed',
//   '4': 'Thu',
//   '5': 'Fri',
//   '6': 'Sat',
//   Sun: 0,
//   Mon: 1,
//   Tue: 2,
//   Wed: 3,
//   Thu: 4,
//   Fri: 5,
//   Sat: 6 }
// 查看 ts 编译后的代码
// var Days;
// (function (Days) {
//     Days[Days["Sun"] = 0] = "Sun";
//     Days[Days["Mon"] = 1] = "Mon";
//     Days[Days["Tue"] = 2] = "Tue";
//     Days[Days["Wed"] = 3] = "Wed";
//     Days[Days["Thu"] = 4] = "Thu";
//     Days[Days["Fri"] = 5] = "Fri";
//     Days[Days["Sat"] = 6] = "Sat";
// })(Days || (Days = {}));
// Days["Sun"] = 0 的返回值是 0，所以相当于再赋值  Days[0] = "Sun"
// 枚举值会从未赋值的开始递增，每次递增 1;
// 上面的 Days Sun 未赋值，默认从 0 开始
// 当然我们也可以默认赋值
var Days1;
(function (Days1) {
    Days1[Days1["Sun"] = 3] = "Sun";
    Days1[Days1["Mon"] = 1] = "Mon";
    Days1[Days1["Tue"] = 2] = "Tue";
    Days1[Days1["Wed"] = 3] = "Wed";
    Days1[Days1["Thu"] = 4] = "Thu";
    Days1[Days1["Fri"] = 5] = "Fri";
    Days1[Days1["Sat"] = 6] = "Sat";
})(Days1 || (Days1 = {}));
;
console.log(Days1);
// 则此时会从 Tue 开始递增，前一项是 Mon = 1，则之后是 2 3 4 5 6
// 不过有个问题是 3 出现了两次，这个 TS 不会报错，打印一下看看。
// { '1': 'Mon',
//   '2': 'Tue',
//   '3': 'Wed',
//   '4': 'Thu',
//   '5': 'Fri',
//   '6': 'Sat',
//   Sun: 3,
//   Mon: 1,
//   Tue: 2,
//   Wed: 3,
//   Thu: 4,
//   Fri: 5,
//   Sat: 6 }
// Sun 和 Wed 都是 3，只不过 Days1[3] 是 'Web'，因为后面的赋值把前面的覆盖了。
//  先执行 Days[Days["Sun"] = 3] = "Sun";
//  后执行 Days[Days["Wed"] = 3] = "Wed";
// 字符串枚举
var StrEnum;
(function (StrEnum) {
    StrEnum["UNKNOWN"] = "";
    StrEnum["PASSPORT_VISA"] = "passport_visa";
    StrEnum["PASSPORT"] = "passport";
})(StrEnum || (StrEnum = {}));
// 枚举值也可以是字符串
