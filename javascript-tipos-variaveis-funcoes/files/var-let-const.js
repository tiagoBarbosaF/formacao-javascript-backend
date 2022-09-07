// var
console.log(`Usando VAR`)
var forma = 'triângulo';
var altura = 6;
var comprimento = 8;
var area;

if (forma === 'quadrado'){
    area = altura * comprimento;
    console.log(`Área do quadrado: ${area}`);
} else {
    area = (altura * comprimento) / 2;
    console.log(`Área do triângulo: ${area}`);
}

// let
console.log(`\nUsando LET`)
let forma2 = 'quadrado';
let altura2 = 6;
let comprimento2 = 8;
let area2;

if (forma2 === 'quadrado'){
    area2 = altura2 * comprimento2;
    console.log(`Área do quadrado: ${area2}`);
} else {
    area2 = (altura2 * comprimento2) / 2;
    console.log(`Área do triângulo: ${area2}`);
}

// const
console.log(`\nUsando CONST`)
const forma3 = 'quadrado';
const altura3 = 6;
const comprimento3 = 8;
let area3;

if (forma3 === 'quadrado'){
    area3 = altura3 * comprimento3;
    console.log(`Área do quadrado: ${area3}`);
} else {
    area3 = (altura3 * comprimento3) / 2;
    console.log(`Área do triângulo: ${area3}`);
}