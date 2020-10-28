const KEY_NAMES = {
  KEEP_ALIVE_COUNTER: 'keep-alive-counter',
  REGULAR_COUNTER: 'regular-counter',
};

let ConstantsPlugin = {};

ConstantsPlugin.install = function (Vue) {
  Vue.prototype.$constants = {
    ...KEY_NAMES,
  };
};
export default ConstantsPlugin;
