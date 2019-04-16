// 断言类型，即在使用变量的时候，手动指定它的类型。

const person = {};
person.age = 12;
person.name = 'syj';
// [ts] Property 'age' does not exist on type '{}'.
// age 和 name 属性存在于 {}.

// 因为 ts 对 person 的类型推断为 零属性 的对象，即不能添加属性。

interface Person {
  age: number;
  name: string;
}

const newPerson = {} as Person;
person1.age = 13;
person1.name = 'fy';
// 通过类型断言来规避上述错误。


function getLength(sth: string | number): number {
  return sth.length;
}
// Property 'length' does not exist on type 'string | number'.
// 不确定类型就去访问


function getLength1(sth: string | number): number {
  if(sth as string) {
    return (<string>sth).length;
  }
  return sth.toString().length;
}
// 断言的两种写法：   <string>sth  ===  sth as string
// 通过类型断言为 string


// 所以，类型断言就是在不确定 “值” 的类型的时候，把它断言为某个类型，去做相应的处理


// 但是类型断言并不意味着发生了类型转换。
// 之所以不被称为「类型转换」，是因为转换通常意味着某种运行时的支持。
// 但是，类型断言纯粹是一个编译时语法，同时，它也是一种为编译器提供关于如何分析代码的方法。