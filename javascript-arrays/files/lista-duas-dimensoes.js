const alunos = ['João','Juliana','Ana','Caio'];
const medias = [10,8,6,9];

let listaAlunosMedias = [alunos, medias];

console.table([{alunos, medias}])
//
// for (let i = 0; i < listaAlunosMedias.length; i++) {
//     for (let j = 1; j < alunos.length; j++) {
//         console.table([{Aluno: listaAlunosMedias[i][j], Media: listaAlunosMedias[j][i]}])
//     }
// }