const a = 2;
const b = 2;

console.log(Object.is(a, b));
console.log(Object.is({}, {}));

console.log(Object.is({}, {}));
console.log('identidad', {} == {});
