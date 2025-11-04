// script.js

// Link direto para o clipe oficial de "They Don't Care About Us"
const VIDEO_URL = "https://www.youtube.com/watch?v=QNJL6Op0Jz0";

function adicionarBotaoVideo() {
    // Seleciona o elemento H2 dentro da seção para posicionar o botão
    const elementoReferencia = document.querySelector('section h2');
    
    if (!elementoReferencia) {
        // Se o H2 não existir, o script para.
        return;
    }

    // Cria o novo elemento de botão
    const botaoVideo = document.createElement('button');
    
    // Define o texto e o ID para o CSS
    botaoVideo.textContent = " ASSISTIR AO CLIPE OFICIAL";
    botaoVideo.id = "assistir-clipe-btn";

    // Adiciona a função que abre o link ao ser clicado
    botaoVideo.addEventListener('click', function() {
        window.open(VIDEO_URL, '_blank'); // Abre em uma nova aba
    });

    // Insere o botão logo abaixo do título H2 na seção
    elementoReferencia.parentNode.insertBefore(botaoVideo, elementoReferencia.nextSibling);
}

// Garante que o script só rode depois que a página HTML for totalmente carregada
document.addEventListener('DOMContentLoaded', adicionarBotaoVideo);