let user = 'Pepe';
user = 'Ernesto';
console.log(user);

// vamos a ensar en las variables como un alembre que nos une a cualquier elmento

// const work = 'Coder';
// work = 'Teacher';

const data = { name: 'luis' };
// data = {name : 'Luis'}
// TypeError: Assignament to constant variable
data.name = 'juan';

console.log(data);

// s3 = 'peace';

let pets = 'Hammster';
pets = 'Dogs';

function doble(a) {
  a = a * 2;
  return a;
}
let a = 23;
doble(a);
console.log(a);

function double(x) {
  x = x * 2;
}

let money = 10;

double(money);

console.log(money); // money = 10;

//-------UNDEFINED -> No se caunto valgo pero existo,
// es to no hace ver que todas las variables declaradas pero que no esten igualadas, seran undefined

let algo;
console.log(algo);

// cuando queremos hacer undefined de forma voluntaria igualamos la variabe a null

// null -> se usa a proposito para hacer que halgo carezca de valor

// Booleans -> true o false, ! -> valor de negacion en el caso de los booleanos cambia al contrario

// ----------------------------------------------

// || -> uno de los dos son true

// && -> las dos tienen que ser true

// -----------------------------------------------

//------------------ NUMBERS ---------------------

let algo2 = null;
console.log(algo2);

console.log(1 / 0);
console.log(-1 / 0);
console.log(0 / 10_000);

console.log(0 / 0); // Esto da NaN -> not a number, que en verdad quiere decir, soy u numero pero no se cuanto valgo

console.log(Number('Pepe')); // siempre que no haya un valor determinado, pero tenga un valor, es un NaN.

let nombre2 = `Ernesto`;
let nombre = `Pepe y ${nombre2}`;

console.log(nombre.toUpperCase());

console.log(Math.PI);
console.log(Math.random().toFixed(2) * 100);

const person = {
  name: 'Pepe',
  edad: 22,
  isAlumno: true,
  addres: {
    calle: 'Galicia 6',
    num: 14,
  },
};

person.empleo = 'coders';

console.log(person.edad);
console.log(person['edad']);

let propiedad = 'isAlumno';
console.log(person[propiedad]);
console.log(propiedad);
