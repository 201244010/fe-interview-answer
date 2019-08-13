/**
 * 说说 bind、call、apply 的区别？并手写实现一个 bind 的方法
 */

function sayName(age) {
  console.log(`Hi~ My name is ${this.name}`);
  if (age) {
    console.log(`My age is ${age}`);
  }
}

const kizunaai = {
  name: "kizinaai"
};

const luna = {
  name: "luna"
};

// const bindSayName = sayName.bind(kizunaai);
// bindSayName();

function customBind(fun, obj) {
  return (...args) => {
    fun.apply(obj, [...args]);
  };
}

const customBindSayName = customBind(sayName, kizunaai);
// customBindSayName();

const customBindSayName2 = customBind(sayName, luna);
customBindSayName2(3);
