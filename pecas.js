var ListaDePecas = ["Amortecedor","Motor","Filtro de Ar"]
// Se a peça possiur um peso superior a 100 gramas, pode cadastrar 
let peso = 200;
if (peso < 100){
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log("A peça possui peso adequado")
}

// Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima a mensagem informando nao ter capacidade suficiente.
// Não é possível cadastrar.
if (ListaDePecas.length <= 10){
    console.log("É possível cadastrar peça na mesma lista")
} else {
    console.log("Não tem mais espaço na lista")
}

// Caso a peça tenha um nome com a quantidde inferior a 3 caracteres, informe a mensagem de erro.

let NomePeca = "Disco de Freio"
if (NomePeca.length >= 3 && ListaDePecas.length <=10 && peso > 100){
    ListaDePecas.push(NomePeca);
    console.log("Nome da peça esta adequado para o cadastro!");
    console.log(ListaDePecas);
} else if (NomePeca.length == 0){
    console.log("O nome da peça não pode ser vazio")
} else {
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado. Ou existe algum impecílio anteriormente indentificado!")
}