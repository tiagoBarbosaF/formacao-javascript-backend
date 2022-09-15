const listaChamada = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme'];

listaChamada.splice(2,0,'Peter');
console.log(`Lista de chamada: ${listaChamada}`);

listaChamada.splice(1,2,'Rodrigo');
console.log(`\nLista de chamada: ${listaChamada}`);
