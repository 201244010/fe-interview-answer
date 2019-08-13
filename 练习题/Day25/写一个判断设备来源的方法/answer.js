/**
 * 写一个判断设备来源的方法
 * 主要思路： 利用 navigator.userAgent 进行判断
 * 对于主流的移动端 可以用 "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod" 字段进行判断。
 */

const checkPlatform = () => {
  const { navigator: { userAgent = "" } = {} } = window;
  if (userAgent) {
    console.log(userAgent);
    const platforms = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod"
    ].map(item => item.toLowerCase());
    const agentInfo = userAgent.toLowerCase();
    const platform = platforms.find(agent => agentInfo.indexOf(agent) > -1);

    return {
      platform: platform || "pc"
    };
  }

  return { platform: "unknown" };
};

checkPlatform();
