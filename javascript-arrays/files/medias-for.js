const notas = [10, 6.5, 8, 7.5];

console.log(`Usando for`);
let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

let media = somaNotas / notas.length;
console.log(`Média: ${media}\n\n`);

console.log(`Usando function reduce`);
let sumNotas = notas.reduce((a, b) => (a + b));
let medias = sumNotas / notas.length;

console.log(`Médias: ${medias}\n\n`);

console.log(`Usando forEach`);

let sumNotas2 = 0;
notas.forEach(nota => sumNotas2 += nota);
console.info(`Média: ${sumNotas2 / notas.length}`);