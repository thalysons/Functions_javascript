
//1 - Crie uma função que exiba uma mensagem no console:


function exibeMensagem(){
    console.log("Olá! Bem vindo!")
}

exibeMensagem()

//2 - Crie uma função que receba o seu nome como (parâmetro) 
//e exiba no console:

function exibeNome(nome){
    console.log("Seu nome é " + nome + ".")  
}

exibeNome("Thalyson de Souza")

//3 - Crie uma função que receba nome, idade, 
// e um estilo musical preferido (parâmetros) e exiba no console:


function exibeInfos(nome, idade, estiloMusical){
    console.log("Seu nome é "+ nome + ".\nVocê tem "+ idade + " anos.\nE prefere música "+ estiloMusical +".")

}

exibeInfos("Thalyson", 22, "indie")

/// Uma versão com prompt pedindo dados ao usuário:

function exibeInfos2(){
    let nome = prompt("Qual é o seu nome?");

    let idade = "";
    while (isNaN(idade) || idade === "") {
        idade = prompt("Qual é a sua idade?");
      if(idade === Number)
        break;
    }
    let musical = prompt("Qual seu estilo musical favorito?");

console.log("Seu nome é "+ nome + ".\nVocê tem "+ idade + " anos.\nE prefere música "+musical+".")
}

exibeInfos2()

//4 - crie uma função que receba um filme, uma música (parâmetros) 
//e exiba no console:

function perguntaFilmeMusica(filme, musica){
    console.log("O filme: " + filme +".\nA música: " + musica + ".");}

perguntaFilmeMusica("Gatos de Botas", "Virgo's Groove")

/// Uma versão com prompt pedindo dados ao usuário:

function perguntaFilmeMusica2(){
    let filme = prompt("Me diga um filme:");

    let musica = prompt("Agora digite qualquer nome de uma música:");

    console.log("O filme: " + filme +".\nA música: " + musica + ".");
}

perguntaFilmeMusica2()

//5 - Crie uma função que retorne o triplo do número recebido 
//no parâmetro da função:

function triplicaNum(numero){
    console.log("O triplo do número " + numero + " = " + numero *3 + ".");
}

triplicaNum(25)

/// Uma versão com prompt pedindo dados ao usuário:

function triplicaNum2(){
let numero = "";
    while (isNaN(numero) || numero === "") {
        numero = prompt("Por favor, digite um número:");
      if(numero === Number)
        break;
    }
    console.log("O triplo de " + numero + " é " + numero *3 + ".");
}

triplicaNum2()

//6 - Crie uma função que verifique se uma variável é true ou false:


function verificaBooleano(valor){
    if(typeof valor === "boolean"){
        console.log("A variável inserida é um booleano!");
    }
    else{console.log("A variável inserida não é um booleano.");}
}

var ponto = true

verificaBooleano(ponto)