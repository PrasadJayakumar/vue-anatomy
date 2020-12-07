const { reactive, effect } = require('@vue/reactivity');

let axiosMock = () =>
  Promise.resolve({ data: [{ name: 'Mac' }, { name: 'iPad 5' }] });

let data = [];
let navObj = reactive({ curRecord: 1, lastRecord: 8 });

// Concurrency and edge cases are ignored for sake of brevity
let preFetch = effect(async () => {
  if (navObj.lastRecord - navObj.curRecord < 5) {
    let resp = await axiosMock();
    data.push(...resp.data);
    navObj.lastRecord += resp.data.length;
  }
});

console.log(data);
console.log(navObj);

(async function iife() {
  navObj.curRecord = 4;
  await sleep(1000);
  console.log(data);
  console.log(navObj);
})();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
