/**
 * 写一个字符串重复的repeat函数
 */

const repeatStr = ({str = "", repeat = 1}) => {
  if (!str || repeat === 0) {
    return str;
  }

  return (str += repeatStr({str: str, repeat: (repeat -= 1)}));
};

console.log(repeatStr({str: "abc", repeat: 3}));
console.log(repeatStr({str: "abc_e", repeat: 2}));
console.log(repeatStr({str: "abc||", repeat: 4}));
console.log(repeatStr({str: "a b c_", repeat: 2}));
console.log(repeatStr({str: "_abc_", repeat: 3}));
console.log(repeatStr({str: "_abc_"}));
