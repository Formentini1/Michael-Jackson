v// script.js

// 1. URL do Clipe Oficial de "They Don't Care About Us"
// Este é o link do videoclipe de Michael Jackson (versão Prisão)
const VIDEO_URL = "https://www.youtube.com/watch?v=QNJL6Op0Jz0";

// 2. Função para criar e adicionar o botão
function adicionarBotaoVideo() {
    // Acessa a seção da música
    const secaoMusica = document.querySelector('section h2');
    
    // Verifica se a seção foi encontrada
    if (!secaoMusica) {
        console.error("Seção da música não encontrada. O JavaScript não será executado.");
        return;
    }

    // Cria um novo elemento de botão
    const botaoVideo = document.createElement('button');
    
    // Define o texto do botão
    botaoVideo.textContent = "▶️ ASSISTIR AO CLIPE OFICIAL";
    
    // Adiciona um ID (para estilização via CSS, se desejado)
    botaoVideo.id = "assistir-clipe-btn";

    // Adiciona o evento de clique ao botão
    botaoVideo.addEventListener('click', function() {
        // Abre o link do YouTube em uma nova aba (_blank)
        window.open(VIDEO_URL, '_blank');
    });

    // Insere o botão na página (logo após o título H2 da seção de áudio)
    secaoMusica.parentNode.insertBefore(botaoVideo, secaoMusica.nextSibling);
}

// 3. Executa a função quando todo o conteúdo do HTML for carregado
// Isso garante que os elementos que tentamos acessar (como a 'section') já existam
document.addEventListener('DOMContentLoaded', adicionarBotaoVideo);