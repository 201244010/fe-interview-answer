/**
 * 写一个获取当前url查询字符串中的参数的方法
 * 思路: 如果是 url 上带有参数，一半会在 location.search 中可以找到参数字符串
 * 通常只要解析 location.search 即可
 * 如果是解析完整的 url 则多一步用 ? 分割
 */

const getLocationParams = () => {
  const paramsMap = new Map();
  if (location.search) {
    // 第一个字符串为 ?
    location.search
      .substr(1)
      .split("&")
      .forEach((param) => {
        const [key, value] = param.split("=");
        paramsMap.set(key, value);
      });
  }

  return paramsMap;
};

const getLocationParam = (key) => getLocationParams().get(key);
