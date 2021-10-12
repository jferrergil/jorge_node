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
