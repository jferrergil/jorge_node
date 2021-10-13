const a = 2;
const b = '3';

console.log(a + b);
console.log(a - b);
console.log(a - 'pepe');

function suma(a = 0, b = 0) {
  const result = a + b;
  return result;
}

console.log(suma(1, 2));

//---------------------------------------
