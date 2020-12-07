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

// Reactive array of objects
let cart = reactive([]);
let total = computed(() =>
  cart.reduce((subTotal, item) => subTotal + item.qty * item.price, 0)
);

cart.push({ name: 'laptop', qty: 1, price: 350 });
cart.push({ name: 'desktop', qty: 1, price: 200 });
console.log(`total: ${total.value}`);

cart.push({ name: 'keyboard', qty: 2, price: 50 });
console.log(`total: ${total.value}`);
