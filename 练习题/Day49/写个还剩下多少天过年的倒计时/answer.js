/**
 * 写个还剩下多少天过年的倒计时
 * 暂时只能做到西历新年，农历需要调接口
 */

const countDown = (range = "day") => {
  const nowDate = new Date();
  const currentYear = nowDate.getFullYear();
  const nextYear = new Date(currentYear + 1, 1, 1);

  const rangeBase = {
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
    week: 1000 * 60 * 60 * 24 * 7,
    month: 1000 * 60 * 60 * 24 * 30
  };

  return Math.floor(
    (nextYear.valueOf() - nowDate.valueOf()) /
      (rangeBase[range] || rangeBase.day)
  );
};

console.log(countDown("hour"));
console.log(countDown());
console.log(countDown("week"));
console.log(countDown("month"));
