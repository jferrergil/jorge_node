function pipeFix(numbers) {
  let primero = numbers[0];
  let ultimo = numbers[numbers.length - 1];
  console.log(primero);
  console.log(ultimo);
  let output = [];
  for (let i = primero; i < ultimo + 1; i++) {
    output.push(i);
  }
  return output;
}
console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
