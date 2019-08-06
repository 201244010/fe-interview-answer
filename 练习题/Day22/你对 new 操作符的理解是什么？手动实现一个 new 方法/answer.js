/**
 * `new` 操作符做了以下几件事情。

    1. 创建一个新对象
    2. 把新对象的 `prototype` 指向这个构造函数
    3. 把相关的属性赋给这个对象
    4. 返回这个新的对象
 */

function Vtuber(name, age) {
  this.name = name;
  this.age = age;
}

Vtuber.prototype.sayHello = function() {
  console.log(`${this.name} say hello to you~`);
};

// 正常 new 操作
const kizunaai = new Vtuber("kizunaai", 3);
console.log("name: ", kizunaai.name);
console.log("age: ", kizunaai.age);
kizunaai.sayHello();

function customNew(Fun, ...args) {
  const temp = {};
  temp.__proto__ = Fun.prototype;
  Fun.apply(temp, [...args]);
  return temp;
}

const kizunaai2 = customNew(Vtuber, "kizunaai2", 0);
console.log("name: ", kizunaai2.name);
console.log("age: ", kizunaai2.age);
kizunaai2.sayHello();
