console.log(`Utilizando funções com parâmetro`);

function imprimeTexto(texto) {
    console.log(texto);
}

imprimeTexto('Imprimindo um texto qualquer.');

console.log(`\nUtilizando funções com retorno e sem parâmetros.`);

function somaSemParametro() {
    return 3 + 3;
}

console.log(`Função soma sem parâmetro -> ${somaSemParametro()}`);


console.log(`\nUtilizando função com parâmetros`);

function operacaoCalculadora(num1, operacao, num2) {
    switch (operacao) {
        case '+':
            return console.log(`Soma -> ${num1 + num2}`);
        case '-':
            return console.log(`Subtração -> ${num1 - num2}`);
        case '*':
            return console.log(`Multiplicação -> ${num1 * num2}`);
        case '/':
            return console.log(`Divisão -> ${num1 / num2}`);
        default:
            return console.log('Operação inválida');
    }
}

console.log(`Calculadora, chamando o primeiro valor, operação e segundo valor`);
operacaoCalculadora(3,'+',3);
operacaoCalculadora(3,'-',3);
operacaoCalculadora(3,'*',3);
operacaoCalculadora(3,'/',3);
operacaoCalculadora(3,'_',3);

console.log(`\nUtilizando arrow functions`);
const calculadora = (num1, operacao, num2) => {
    switch (operacao) {
        case '+':
            return console.log(`Soma -> ${num1 + num2}`);
        case '-':
            return console.log(`Subtração -> ${num1 - num2}`);
        case '*':
            return console.log(`Multiplicação -> ${num1 * num2}`);
        case '/':
            return console.log(`Divisão -> ${(num1 / num2).toPrecision(3)}`);
        default:
            return console.log('Operação inválida');
    }
}
calculadora(5,'+',3);
calculadora(5,'-',3);
calculadora(5,'*',3);
calculadora(5,'/',3);
calculadora(5,'_',3);