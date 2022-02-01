//Faça um programa que IMPRIMA na tela se um nome é DIFERENTE ao outro digitado
//Porém, os dois nomes devem estar em um ARRAY. Ex.: const array = ["JOÃO", "MARIA,"].
// ex: JOÃO e JOÃO, imprime FALSE. JOÃO e MARIA, imprime TRUE. 

const names = ["João", "Maria"]

const compare = names[0] !== names [1]

console.log(compare)