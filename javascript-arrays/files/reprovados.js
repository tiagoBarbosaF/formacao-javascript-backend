const nomes = ['Ana', 'Marcos', 'Maria', 'Paulo'];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((nome, indice) => notas[indice] < 6);

console.log(`Reprovados: ${reprovados}`);