const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 6, 9];

let listaNotasAlunos = [alunos, medias];

for (let i = 0; i < alunos.length; i++) {
    for (let j = 0; j < medias.length; j++) {
        if (i <= j) {
            console.log(`nome: ${alunos[i]}, media: ${medias[j]}`);
            break;
        }
    }
}