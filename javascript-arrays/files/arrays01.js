const notas = [10, 6.5, 8, 7.5];

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`Média notas -> ${media}`);

console.log(`\nSoma notas -> ${notas.reduce((a, b) => a + b)}`)
console.log(`\nMédia notas -> ${notas.reduce((a, b) => a + b) / notas.length}`)