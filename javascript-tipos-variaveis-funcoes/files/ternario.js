const idadeMinima = 18;
let idadeCliente = 16;

console.log(`Usando if - else`)
console.log(`Idade cliente: ${idadeCliente}`)
if (idadeCliente >= idadeMinima){
    console.log('Permitido consumo de álcool.')
} else {
    console.log('Cliente com idade menor que o permitido para consumir bebidas alcoólicas.')
}

idadeCliente = 19;
console.log(`\nUsando operador ternário.`)
console.log(`Idade cliente: ${idadeCliente}`)
console.log(idadeCliente >= idadeMinima ? 'Permitido consumo de álcool.' : 'Cliente com idade menor que o permitido' +
    ' para consumir bebidas alcoólicas.');