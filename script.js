// --- SCRIPT DE EFEITO TYPEWRITER (DIGITAÇÃO) ---
const elementoTexto = document.getElementById("texto-efeito");
// Palavras que vão ficar se alternando na tela
const palavras = ["Desinformação.", "Manipulação.", "Falsidade Digital.", "Pós-Verdade."];

let indicePalavra = 0;
let indiceLetra = 0;
let apagando = false;

function digitacaoEfeito() {
    const palavraAtual = palavras[indicePalavra];
    
    if (!apagando) {
        // Escrevendo a palavra
        elementoTexto.textContent = palavraAtual.substring(0, indiceLetra + 1);
        indiceLetra++;
        
        // Se terminou de escrever a palavra inteira
        if (indiceLetra === palavraAtual.length) {
            apagando = true;
            setTimeout(digitacaoEfeito, 2000); // Pausa quando a palavra está cheia
            return;
        }
    } else {
        // Apagando a palavra
        elementoTexto.textContent = palavraAtual.substring(0, indiceLetra - 1);
        indiceLetra--;
        
        // Se terminou de apagar
        if (indiceLetra === 0) {
            apagando = false;
            indicePalavra = (indicePalavra + 1) % palavras.length; // Passa para a próxima palavra
        }
    }
    
    // Velocidade: mais rápido ao apagar, mais lento ao escrever
    const velocidade = apagando ? 50 : 120;
    setTimeout(digitacaoEfeito, velocidade);
}

// Inicia o efeito assim que a página carregar
document.addEventListener("DOMContentLoaded", () => {
    if (elementoTexto) digitacaoEfeito();
});
