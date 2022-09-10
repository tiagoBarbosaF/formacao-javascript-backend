// == comparação implícita

const number = 5;
const text = '5';

console.log(`number == text -> ${number == text}`);
console.log(`number === text -> ${number === text}`);

// typeof

console.log(`typeof number -> ${typeof number}`);
console.log(`typeof text -> ${typeof text}`);

// == só compara valores
// === compara valores e tipos de dados

// conversão explicita
Number(text);
String(number);