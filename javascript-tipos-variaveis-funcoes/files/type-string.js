const text1 = "Hello, world!";
const text2 = 'Hello, world!';
const password = 'passowrdSafe123!';
const stringNumbers = '2345';

const quote = 'I say "HIIII!"';
console.log(quote);

// concatenation (+)
const myName = 'Tiago';
const myAge = 36;
const textPresentationName = 'Hi my name is ';
const textPresentationAge = ', I have ';
console.log(textPresentationName + myName + textPresentationAge + myAge);

// template string

console.log(`Hi, my name is ${myName} and I are ${myAge} years old.`);

console.log('\n-------------------------------\n');

const city = 'belo horizonte';
const input = 'Belo Horizonte';
console.log(city === input);

const inputLowerCase = input.toLowerCase();
console.log(city === inputLowerCase);

const password2 = 'myPassword3424235';
console.log(password2.length);
