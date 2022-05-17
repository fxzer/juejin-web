// 时间格式化成秒 分钟 小时 前
export const formatDate = (value) => {
  const time = Date.now() - new Date(value) 
  /* 
    1秒 1000
    1分钟 1000 * 60 60000 
    1小时 1000 * 60 * 60 3600000
    1天 1000 * 60 * 60 * 24 86400000
    1个月 1000 * 60 * 60 * 24 * 30 2592000000
    1年 1000 * 60 * 60 * 24 * 365 31536000000
  */
 
  const times = [31536000000, 2592000000, 86400000, 3600000, 60000, 1000]
  const units = ['年前', '月前', '天前', '小时前', '分钟前', '秒前']
 
  for (let i = 0; i < times.length; i++) {
    const res = time / times[i]
    if (res >= 1) {
      return Math.ceil(res) + units[i]
    }
  }
}

// 时间格式化
export function timeFormat(input, format = 'yyyy-MM-dd hh:mm:ss') {
  const date = new Date(input);
  if (String(date) === 'Invalid Date') {
      return '';
  }
  const makeReg = (value) => new RegExp(`${value}`);
  const keys = ['M+', 'd+', 'h+', 'm+', 's+', 'q+', 'S'];
  const values = [
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      Math.floor((date.getMonth() + 3) / 3),
      date.getMilliseconds()
  ];
  if (/(y+)/.test(format)) {
      format = format.replace(/(y+)/, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let len = 0,
      key, val;
  while (len < keys.length) {
      key = keys[len];
      val = values[len];
      if (makeReg(key).test(format)) {
          format = (format).replace(makeReg(key), (RegExp.$1.length === 1) ? val : ('00' + val).substr(('' + val).length));
      }
      len++;
  }
  return format;
}