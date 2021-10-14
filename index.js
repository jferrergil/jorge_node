function algo(a) {
  a = null;
}

function otra(a) {
  const b = { ...a }; //Desetructuracion de un objet, es parecido al import de objetos

  b.name = null;
}

let x = 2;
let z = {};
z.name = 'Pepe';

algo(x);
console.log({ x });
otra(z);
console.log({ z });

// const aDatos = [1, 3, 6];
// const aDatos2 = New Array ();
// Array.isArray(aDatos);
// console.log(Array.isArray(aDatos));

let myName = 'Pepe';

myName.normalize();

console.log(aDatos.length);
aDatos.push(2);
console.log(Array.isArray(aDatos));

// METODO MUTABLES

aDatos.push(2);
aDatos.sort();

//METODOS INMUTABLES - usa callbacks

// .forEach
aDatos.forEach((i) => console.log(i));

// .map
const aDatos2 = aDatos.map((item) => item * 2);

// metodo .filter
const aDatosPares = aDatos.filter((i) => !(i % 2));

// Arroe function
const f = (w) => {
  return w;
};

//arrow function
const f = (w) => w;
