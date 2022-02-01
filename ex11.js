//Faça um programa que imprima na tela se um nome é IGUAL ao outro nome digitado.
// Porém os dois nomes devem estar em um OBJETO. Ex.: const object1 = {firstName:"JOÃO" seccondName:"MARIA"}
// João e João, imprime TRUE. João e Maria, imprime FALSE.

const object1 = { firsName: "João",
                  secondName: "Maria"
                }


console.log(object1.firsName != object1.secondName)