const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map(nota => nota === 10 ? nota : ++nota);

console.log(`Notas anteriores => ${notas}`);
console.log(`Notas atualizadas => ${notasAtualizadas}`);