console.log(`Adicionando um novo elemento no array`);

const notas = [10, 6, 8];
console.log(`Notas -> ${notas}`);
console.log(`Adicionando uma nova nota no indice -> ${notas.push(7)}`);
console.log(notas);
let media = notas.reduce((a, b) => a + b) / notas.length;
console.log(`Média -> ${media}`);


console.log(`\nRemovendo um elemento no array`);

notas.pop();
media = notas.reduce((a, b) => a + b) / notas.length;
console.log(notas);
console.log(`Média -> ${media}`);
