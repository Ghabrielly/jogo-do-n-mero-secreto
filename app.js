let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 10');   
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (numeroSecreto == chute) {
        exibirTextoNaTela("h1", "Acertou!");
        let textoTentativas = tentativas == 1 ? " tentativa." : " tentativas.";
        exibirTextoNaTela("p", "Você descobriu o número secreto com " + tentativas + textoTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        chute > numeroSecreto ? exibirTextoNaTela("p", "O número secreto é menor."): exibirTextoNaTela("p", "O número secreto é maior.");
        tentativas ++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeLista = listaDeNumerosSorteados.length;
    if (quantidadeLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value =  " ";
}

function reiniciarJogo() {
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}