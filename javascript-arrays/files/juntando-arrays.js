const salaJava = ['João','Juliana','Ana','Caio','Lara','Marjorie','Guilherme','Aline','Fabiana','Andre'];
const salaCSharp = ['Carlos','Paulo','Bia','Vivian','Isabela','Vinicius','Renan','Renata','Daisy','Camilo'];

console.log(`Alunos sala Java: ${salaJava}`);
console.log(`Alunos sala C#: ${salaCSharp}`);

const salaPalestra = salaJava.concat(salaCSharp);
console.log(`\nPalestra alunos: ${salaPalestra}`);