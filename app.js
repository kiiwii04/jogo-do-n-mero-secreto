let listaDeNumerosSorteados = [];
let numeroLitemite = 10;
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'brazilian portuguese femele', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'jogo do numero secreto');
    exibirTextoNaTela('p',  'escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let  chute = document.querySelector('input').value;
    
    if(chute == numerosecreto) {
        exibirTextoNaTela ('h1', 'acertou!');
        let palavratentativa   = tentativas >  1 ? 'tentativas ' : 'tentativa';
        let mensagemtentativas = `voce descobriu o numero secreto com ${tentativas} ${palavratentativa}!`
        exibirTextoNaTela ('p', mensagemtentativas) ;
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numerosecreto) {
            exibirTextoNaTela('p', 'o numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'o numero secreto é  maior');
        }
        tentativas++;
        limparcampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() *  numeroLitemite + 1 );
   let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementoNaLista == numeroLitemite){
        listaDeNumerosSorteados = [];
    }


   if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
        return numeroEscolhido
   }
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numerosecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
    






