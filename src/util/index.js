const toStr = Object.prototype.toString;
export function isUndef(v) {
  return v === undefined || v === null;
}
export function isDef(v) {
  return v !== undefined && v !== null;
}
export function isTrue(v) {
  return v === true;
}
export function isFalse(v) {
  return v === false;
}
export function isRegExp(v) {
  return toStr.call(v) === '[object RegExp]';
}
export function isArray(v) {
  return toStr.call(v) === '[object Array]';
}
export function isString(v) {
  return toStr.call(v) === '[object String]';
}
export function isObject(v) {
  return toStr.call(v) === '[object Object]';
}
export function isFunction(v) {
  return toStr.call(v) === '[object Function]';
}
export function isNumber(v) {
  return toStr.call(v) === '[object Number]';
}
/**
 * 移除数组项
 */
export function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
  return arr;
}
function capitalizeFirstLetter(string) {
  return string.charAt(0) + string.slice(1);
}
export function requireContext(rContext, handle) {
  rContext.keys().forEach((key) => {
    const context = rContext(key);
    // 因为得到的file格式是: `./filename.js`, 所以这里我们去掉头和尾，只保留真正的文件名: `filename`
    const name = capitalizeFirstLetter(key.replace(/^\.\//, '').replace(/\.\w+$/, ''));
    if (handle) handle(name, context);
  });
}
export function isExternal(path) {
  return /^[a-z|A-Z]*:\/\//.test(path);
}

export const requestAnimFrame = (
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function raf(callback) {
    return setTimeout(callback, 1000 / 60);
  }
);
export const cancelAnimFrame = (
  window.cancelAnimationFrame ||
  window.webkitCancelAnimationFrame ||
  window.mozCancelAnimationFrame ||
  window.msCancelAnimationFrame ||
  function raf(timer) {
    window.clearTimeout(timer);
  }
);
export const scrollToTop = (el, animation = false) => {
  if (!animation) {
    el.scrollTop = 0;
    return;
  }
  const anim = () => {
    if (el.scrollTop <= 0) return;
    el.scrollTop -= 30;
    requestAnimFrame(anim);
  };
  requestAnimFrame(anim);
};
