// funciones

function funcionesTest(a) {
  console.log(a);
}
//asignacion

// la asignacion de una funcion

const x = function (a) {
  console.log(a);
};
x.dato = 'soy una funcion';
console.log(x);

// Arrow function

const y = (a) => {
  console.log(a);
};

// Objetos

const o = {};
o.name = 'Pepe';

console.log(o);

funcionesTest(2);
x(34);

// escribimos el codigo con expresiones y sentencias (statement)

console.log(2 + 2);
