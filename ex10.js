//Faça um programa que imprima na tela se um nome é IGUAL ao outro nome digitado.
// Porém os dois nomes devem estar em dois OBJETOS SEPARADOS. Ex.: const object1 = {name:"JOÃO"}, object2 = {name:"MARIA"}
// João e João, imprime TRUE. João e Maria, imprime FALSE.

const nameOne = {
    Name: "Dirce Fehmberger",
    Sex: "female",
    Age: 47,
    Country: "Palotina",
    Kinship: "mother"

}

const nameTwo = {
    Name: "Maylaine Siqueira",
    Sex: "female",
    Age: 22,
    Country: "Palotina",
    Kinship: "sister"
}

console.log(nameOne.Country == nameTwo.Country)