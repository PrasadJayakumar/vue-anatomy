const { reactive, ref, computed } = require('@vue/reactivity');

// Reactive primitives
let a = ref(0);
let b = ref(0);
let lhs = computed(() => (a.value + b.value) ** 2);
let rhs = computed(() => a.value ** 2 + b.value ** 2 + 2 * a.value * b.value);

a.value = 2;
console.log(lhs.value, rhs.value);
b.value = 3;
console.log(lhs.value, rhs.value);

// Reactive object
let o = reactive({ a: 0, b: 0 });
let o_lhs = computed(() => (o.a + o.b) ** 2);
let o_rhs = computed(() => o.a ** 2 + o.b ** 2 + 2 * o.a * o.b);

o.a = 2;
console.log(o_lhs.value, o_rhs.value);
o.b = 3;
console.log(o_lhs.value, o_rhs.value);

// Reactive array
let arr = reactive([0, 0]);
let arr_lhs = computed(() => (arr[0] + arr[1]) ** 2);
let arr_rhs = computed(() => arr[0] ** 2 + arr[1] ** 2 + 2 * arr[0] * arr[1]);

arr[0] = 2;
console.log(arr_lhs.value, arr_rhs.value);
arr[1] = 3;
console.log(arr_lhs.value, arr_rhs.value);
