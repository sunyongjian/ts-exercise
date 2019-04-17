// 通过 type 关键字可以自己定义 type 类型

// 别名
type waha = string;

// 字面量也可以
type EventName = 'click' | 'mouseup' | 'resize';

function handleEvent(e: Element, event: EventName) {

};