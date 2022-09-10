# JavaScript — tipos, variáveis e funções

### Steps:

- Tipos primitivos Ver primeiro vídeo ✅
  - Tipo number ✅
  - Tipo string ✅
  - Tipo boolean ✅
  - Carregando dados iniciais ✅
  - O que aprendemos? ✅
    - Que o computador consegue apenas armazenar valores em alguns tipos de variáveis, como números texto e booleanos.
    - Como declarar uma variável numérica, com tipo number, e associar um valor a ela, podendo ser um inteiro ou um valor de ponto flutuante.
    - Como declarar uma variável de texto, conhecida como string, e colocar uma frase, número, pontuação ou uma mistura de todos esses dentro dela.
    - Como declarar uma variável booleana e definir seu valor como verdadeiro (true) ou falso (false).
    - Onde as booleanas mais aparecem, como resultados de comparações com `===` ou outros operadores de comparação como `>=`.

- Declarando variáveis ✅
  - Var, let e const ✅
  - Truthy e falsy ✅
  - Conversão de tipos ✅
  - Variáveis e a resposta de tudo ✅
  - O que aprendemos? ✅
    - `var` tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.
    - `let` e `const` têm escopo local, sendo assim, não podem ser acessadas em outros escopos, e `const` não pode ter seu valor alterado após definido.
    - O JavaScript considera alguns valores como _false_ durante comparações, como com null, _undefined_, 0, NaN e Strings vazias.
    - null é usado quando não queremos dar um valor para uma variável, mas também não queremos deixá-lo como _undefined_ (não definido).
    - null é um objeto no JavaScript, diferente de _undefined_, que tem seu próprio tipo, e isso pode causar problemas se não tomarmos cuidado ao utilizá-lo.
    - O JavaScript converte automaticamente entre tipo de valores, como números para texto e para booleanos, porém não é interessante deixá-lo fazer isso automaticamente, pois podem ocorrer erros.
    - Temos como forçar uma mudança de tipo utilizando os métodos `Number()` e `String()`, onde `Number()` converte as variáveis para números ou NaN caso tenha algum erro na conversão, e `String()` converte as variáveis para texto.

- O JavaScript e o NodeJS ✅
  - JavaScript e NodeJS ✅
  - Erros e stacktrace ✅
  - Console.api ✅
  - Características do JS ✅
  - O que aprendemos? ✅
    - As características principais do JavaScript, como ser uma linguagem interpretada e dinamicamente tipada.
    - O que o NodeJS é um interpretador de JavaScript para backend, ou seja, não executa no navegador, mas sim no servidor.
    - Como ler os erros que aparecem no console da aplicação, podendo usar um tradutor, como o Google Tradutor, para entender o que o erro está avisando.
    - O que é _stacktrace_, também chamado pilha, que nos auxilia a saber o que está acontecendo quando temos um erro, e onde ele se localiza.
    - O que é o Console API e como podemos utilizá-lo usando o `console.log()` e `console.error()`.
    - Onde as mensagens do console devem aparecer dependendo do interpretador que estamos usando, sendo que para o NodeJS as mensagens são mostradas no terminal

- Operadores ✅
  - Operadores de comparação ✅
  - Operador ternário ✅
  - Template literal ✅
  - Praticando os operadores ✅
  - O que aprendemos? ✅
    - A diferença entre fazer comparações com `==`, em que o JavaScript faz conversão entre os tipos de variáveis antes de fazer a comparação, e `===`, em que tanto o valor quanto o tipo da variável deve ser o mesmo.
    - Como é escrito um operador ternário, com o qual fazemos uma comparação entre valores digitando um `?`, seguido da possibilidade true, um `:` e a possibilidade false, ou seja, `comparação ? true : false`.
    - O porquê do nome “operador ternário”, que se deve ao fato de termos 3 operadores juntos em uma única linha para desempenhar uma tarefa e devolver um resultado.
    - O uso da (template) literal, que facilita a construção de ‘strings’ que demandam concatenação (a operação em que se junta 2 ‘strings’), introduzido no ES6.
    - Como usar a template literal, escrevendo o texto entre acentos graves ( \` ) e colocando as variáveis com `${variavel}` para que o valor deles fique nessa posição.

- Funções
  - Funções
  - Parâmetros e argumentos
  - Utilizando parâmetros
  - Expressão de função
  - Arrow Function
  - Estrutura do `if`
  - O que aprendemos?