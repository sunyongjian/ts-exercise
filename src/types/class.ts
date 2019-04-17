
class Animal {
  public name: string;
  // private age: number = 0;

  public constructor(name: string) {
    this.name = name;
  }

  public eat(food: string) {
    console.log('I eat ' + food);
  }

  private ml(lover: string) {
    console.log('Do it with' + lover);
  }

  protected shit(){ 
    console.log('shit......')
  }
}

class Cat extends Animal{
  public climb() {
    console.log('上🌲');
  }
  public catMl(lover: string) {
    super.ml(lover);
    // private 私有的属性，不可以访问
    // [ts] Property 'ml' is private and only accessible within class 'Animal'.
  }
  public catShit() {
    super.shit();// 子类可以访问父类的  protected 属性
  }
}
const newKind = new Animal('laohu');
newKind.ml('mu lao hu');
// [ts] Property 'ml' is private and only accessible within class 'Animal'.

const cat = new Cat('Dafu');
cat.eat('maoliang');
cat.climb();
cat.catShit();

cat.ml();
// [ts] Property 'ml' is private and only accessible within class 'Animal'.
// ml 是 Animal 类的私有属性，子类继承不能访问。


// 抽象类
abstract class Animal1 {
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
}
const ani = new Animal1('wa');
// [ts] Cannot create an instance of an abstract class.

// 抽象类不可以实例化，只允许用来被子类继承。
class Cat1 extends Animal1 {

}




// 类跟接口的区别
// 两者都可以用于对 对象 的描述
// 1. 接口里面的方法只能声明，不能有具体的实现。这说明接口是设计的结果，抽象类是重构的结果。
// 2. 接口（类）可以继承接口，甚至可以继承多个接口。但是类只能继承一个类。
// 接口 更像是对一种操作、动作的抽象，比如不同类有相似的行为，那就可以提取成接口
// interface is for when you simply want to describe the shape of an object

// 而 类 是对根源本质的一种抽象，比如 生物，人 等等，具有各种各样的属性和动作

class Alpha {
  public name: string = '1';
}

// interface 


