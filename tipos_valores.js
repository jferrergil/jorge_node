// tipos de valores _____ Usamos typeOf para saber que tipo de valor es

'Pepe';
4;
true;
null;
undefined;
Symbol();
3n;
new Object(); // Es el univo valor no primitivo
console.log(typeof 'Pepe');
console.log(typeof 4);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol());
console.log(typeof 3n);
console.log(typeof new Object());
console.log(typeof (() => {})); // las funciones nno son valores, estan dentros de los objetos, no son valores

console.log(typeof []);
console.log(typeof new Date());
console.log(typeof /a/);
