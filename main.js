'use strict'

const numeros = [20, 131, 70, 279, 320]

// construindo um array. assim como no php, o array em js pode conter 
//valores de tipos diferentes

// acrescentar 100 a cada elemento
// solucao imperativa
// const limite = numeros.length -1
// let numeros100 = []
// for (let i=0; i<=numeros.length -1; i++) {
//     numeros100 [i] = numeros[i] + 100
///////////////////////////////////////////////}

//solucao declarativa
// Map percorre o array podendo modificar ou não,
// retornando um novo array de mesmo tamanho

// 1º elemento
 //2° indice
 //3° array 

const adicionar100 = (numero) => numero + 100
const numeros100 = numeros.map(adicionar100)
/************************************************************************** */
// PROBLEMA: CRIAR UM ARRAY COM OS NUMEROS MENORES QUE 100

// filter = percorre todo o array filtrando de acordo com a condicao. 
//retorna um array que pode ou não ser do mesmo tamanho do original

// 1° Elemento
// 2° Indice
// 3° Array 

//IMPERATIVA
// const limite = numeros.length
// const numerosMenores100 = []
// for (let i=0; i<=limite; i++) {
//     if (numeros[i] <= 100){
//         numerosMenores100[i] = numeros[i]
//     }
// }

//DECLARATIVA
const ehMenor100 = (numero) => numero <= 100   
const numerosMenores100 = numeros.filter(ehMenor100) //o filter retorna um boolean e quando for true, adiciona o numero no array

/****************************************************************************** */
//PROBLEMA: SOMAR TODOS OS VALORES (elementos)

// IMPERATIVA
const limite = numeros.length -1
let somaTotal = 0

for (let i=0; i<=limite; i++) {
    somaTotal += numeros[i]  
}

// DECLARATIVA

// REDUCE: Percorre o array aplicando uma funcao (callback) e retorna um unico valor

// 1° Acumulador  (soma)
// 2° Elemento    (0 e depois 20)
// 3° Indice
// 4° Array

 const soma = (a, b) => a + b
 const total = numeros.reduce(soma, 0)

/***************************************************************************/
// PROBLEMA: CRIAR UM NOVO ARRAY COM OS VALORES AO QUADRADO

const aoQuadrado = (numero) => numero * numero 
const valorQuadrado = numeros.map(aoQuadrado)

/***************************************************************************/
// PROBLEMA: CRIAR UM NOVO ARRAY COM VALORES PARES

const pares = (numero) => numero % 2 == 0
const valorPar = numeros.filter(pares)

/***************************************************************************/
// PROBLEMA: CALCULAR A MEDIA DOS VALORES

const media = (numeros) => total 
const mediaTotal = numeros.reduce(media, 0) / numeros.length

/***************************************************************************/
// PROBLEMA: CALCULAR O VALOR TOTAL DOS VALORES IMPARES 

const impares = (numero) => numero % 2 == 1
const valorImpar = numeros.filter(impares)
const somaImpares = valorImpar.reduce(soma, 0)

/***************************************************************************/
// PROBLEMA: CALCULAR O VALOR TOTAL, SABENDO QUE CADA VALOR TEVE 20% DE DESCONTO

const valorDescontado = total - (total * 0.2)

//16 104,8 56 223,2 256 656

console.log('numeros:', numeros)
console.log('numeros mais 100:', numeros100)
console.log('numeros menores que 100:', numerosMenores100)
console.log('soma total:', somaTotal)
console.log('valor ao quadrado:', valorQuadrado)
console.log('valores pares:', valorPar)
console.log('media total:', mediaTotal)
console.log('soma impares:', somaImpares)
console.log('valor descontando 20%:', valorDescontado)
