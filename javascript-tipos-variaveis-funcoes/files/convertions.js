const number = 234;
const stringNumber = '234';
const text = 'anyText'

console.log(number + stringNumber);
console.log(number + +stringNumber); // usando o símbolo '+' antes da variável também a converte para uma variável do tipo numérico.
console.log(`\n${number + Number(stringNumber)}`)

console.log(+text);