/*================================== QUESTÃO 3 ============================================
#  OBJETIVO: Repositório para o Checkpoint #1 de Engenharia de Software 
#  DATA: 25/03/2025
#  AUTORES: DANIEL GOMES TORRES - GUILHERME DE CORREIA ALVES - PEDRO PASSOS CORSINI
#========================================================================================== 
*/

/******* QUESTÃO - 01 *******/

 /*       
 *              node -v        |                v22.15.0
 *   COMANDO -  npm -v         |  RESULTADO -   10.9.2
 *              git --version. |                git version 2.50.1 (Apple Git-155) 
 */

/*==================================================================================*/


/******* QUESTÃO - 02 *******/

console.log("Mensagem inicial")
alert("Bem-vindo ao Checkpoint!")


/*==================================================================================*/
/******* QUESTÃO - 04 *******/

// Variáveis com var
var nome = "Guilherme";
var idade = 20;

// Variáveis com let
let cidade = "São Paulo";
let curso = "Engenharia de Software";

// Variáveis com const
const pais = "Brasil";
const ano = 2026;

// Exibindo no console
console.log("Nome:", nome);
console.log("Idade:", idade);

console.log("Cidade:", cidade);
console.log("Curso:", curso);

console.log("País:", pais);
console.log("Ano:", ano);

/*==================================================================================*/

/******* QUESTÃO - 05 *******/

// Declarando as variáveis
let a = 10;
let b = 5;

// Operações
console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);

/*==================================================================================*/

/******* QUESTÃO - 6 *******/

// == (compara valor, ignora tipo)
console.log("5 == '5':", 5 == "5"); // true

// === (compara valor e tipo)
console.log("5 === '5':", 5 === "5"); // false

// != (diferente, ignora tipo)
console.log("5 != '5':", 5 != "5"); // false

// !== (diferente, compara tipo também)
console.log("5 !== '5':", 5 !== "5"); // true

// > (maior que)
console.log("10 > 5:", 10 > 5); // true

// < (menor que)
console.log("3 < 2:", 3 < 2); // false

/*==================================================================================*/

/******* QUESTÃO - 7 *******/

let x = true; // também pode ser definido com números:
let y = false; // qualquer número diferente de zero = true /  0 = false

console.log("AND:", x && y);
console.log("OR:", x || y);
console.log("NOT x:", !x);
console.log("NOT y:", !y);

/*==================================================================================*/

/******* QUESTÃO - 8 *******/
// Exemplo de branch e merge

/*==================================================================================*/

/******* QUESTÃO - 9 *******/

function compararNumeros(a, b) {
    if (a >b) {
        return "A é maior.";
    } else if (b> a) {
        return "B é maior.";
    } else {
        return "Ambos são iguais."
    }
}
console.log(compararNumeros(7, 4)); // printa no console: "A é maior"
console.log(compararNumeros(2, 10)); // printa no console: "B é maior"
console.log(compararNumeros(3, 3));  // printa no console: "Ambos são iguais"

/*==================================================================================*/