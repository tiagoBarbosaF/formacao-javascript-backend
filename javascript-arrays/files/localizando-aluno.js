const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 6, 9];

let listaNotasAlunos = [alunos, medias];

const exibeMediaAluno = (nomeAluno) => {
    if (listaNotasAlunos[0].includes('Juliana')) {
        let index = listaNotasAlunos[0].indexOf(nomeAluno);
        return `Aluno: ${listaNotasAlunos[0][index]}, Média: ${listaNotasAlunos[1][index]}`;
    } else {
        return `Aluno não cadastrado.`;
    }
};

for (let i = 0; i < listaNotasAlunos[0].length; i++) {
    console.info(exibeMediaAluno(listaNotasAlunos[0][i]));
}