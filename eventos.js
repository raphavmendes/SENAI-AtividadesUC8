//Verificando a data

let data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
var dataAtual = dia + '/' + mes + '/' + ano;
console.log("Data atual: " + dataAtual);
let dataEvento = ("10/12/2021")

if (dataAtual<dataEvento){
    console.log("Evento Cadastrado!");
} else {
    console.log("Não é possivel cadastrar o evento, data inválida")
}

//Verificando a idade do participante 
let idade = (18)

if (idade >= 18){
    console.log("Cadastro Permitido!")
} else { 
    console.log("Cadastro não permitido! Idade mínima 18 anos.")
}

// Verificando os Participantes

let listaDeParticipantes = ["Maria", "Joaquim", "Fernando", "Mateus"];
let quantidadeDeParticipantes = listaDeParticipantes.length;

if (quantidadeDeParticipantes < 100 && idade >=18 && dataAtual < dataEvento){
    listaDeParticipantes.push("Vicente");
    console.log("Cadastro Registrado com Sucesso!");
    console.log("Data do Evento: " + dataEvento);
    console.log("Participantes: " + listaDeParticipantes);
} else {
    console.log("Cadastro não Realizado!");
}