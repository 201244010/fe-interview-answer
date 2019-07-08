/**
 * 用js实现一个九九乘法口诀表
 */

// const multipleTable = () => {
//   for (let i = 1; i < 10; i++) {
//     let result = "";
//     for (let j = 1; j <= i; j++) {
//       result += `${j} * ${i} = ${i * j} \t`;
//     }
//     console.log(result);
//   }
// };

const multipleTable = () => {
  const base = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const multi = [];

  base.forEach((num) => {
    let result = "";
    multi.push(num);
    multi.forEach((n) => {
      result += `${n} * ${num} = ${n * num} \t`;
    });
    console.log(result);
  });
};

multipleTable();
