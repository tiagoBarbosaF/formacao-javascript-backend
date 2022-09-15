const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos',
               'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata','Daisy', 'Camilo'];

console.log(`Total de alunos: ${nomes.length}`);

const sala1 = nomes.slice(0, nomes.length/2);
console.log(`Qtd. alunos sala 01: ${sala1.length}`);
console.log(`Alunos sala 01: ${sala1}`);

const sala2 = nomes.slice(nomes.length/2);
console.log(`\nQtd. alunos sala 02: ${sala2.length}`);
console.log(`Alunos sala 02: ${sala2}`);
