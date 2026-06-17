const pistasDeepfake = [
    "Piscar de olhos inconsistente ou ausente.",
    "Bordas borradas ao redor do rosto e cabelo.",
    "Sombras e iluminação que não batem com o cenário.",
    "Áudio ligeiramente dessincronizado com o movimento dos lábios.",
    "Textura da pele excessivamente lisa ou digitalizada."
];

function inicializarSimulador() {
    console.log("Simulador de Cidadania Digital carregado.");
    
    // Cria dinamicamente um botão de dica na página se houver um container adequado
    const container = document.querySelector('#combate');
    if (container) {
        const divSimulador = document.createElement('div');
        divSimulador.className = 'card-info';
        divSimulador.style.marginTop = '30px';
        divSimulador.style.borderTopColor = '#7209b7';
        
        divSimulador.innerHTML = `
            <h3>🔍 Analisador de Mídia Fictício</h3>
            <p>Clique no botão abaixo para gerar uma pista técnica aleatória usada por peritos para identificar vídeos manipulados por IA.</p>
            <button id="btn-analisar" class="btn-hero" style="background-color: #7209b7; margin-top: 15px;">Gerar Pista de Análise</button>
            <p id="resultado-analise" style="margin-top: 15px; font-weight: 500; color: #3f37c9;"></p>
        `;
        
        container.appendChild(divSimulador);

        document.getElementById('btn-analisar').addEventListener('click', () => {
            const indice = Math.floor(Math.random() * pistasDeepfake.length);
            document.getElementById('resultado-analise').innerText = `💡 Pista Encontrada: ${pistasDeepfake[indice]}`;
        });
    }
}
function configurarFiltros() {
    const sectionImpacto = document.querySelector('#impacto .container');
    if (!sectionImpacto) return;

    // Cria os botões de filtro antes da grid de cards
    const filtroContainer = document.createElement('div');
    filtroContainer.style.margin = '20px 0';
    filtroContainer.style.display = 'flex';
    filtroContainer.style.gap = '10px';
    
    filtroContainer.innerHTML = `
        <button class="btn-filtro active" data-filter="todos" style="padding: 8px 16px; border: none; border-radius: 20px; cursor: pointer; background: #0b132b; color: white;">Todos</button>
        <button class="btn-filtro" data-filter="politica" style="padding: 8px 16px; border: none; border-radius: 20px; cursor: pointer; background: #e2e8f0;">Política</button>
        <button class="btn-filtro" data-filter="social" style="padding: 8px 16px; border: none; border-radius: 20px; cursor: pointer; background: #e2e8f0;">Social</button>
        <button class="btn-filtro" data-filter="seguranca" style="padding: 8px 16px; border: none; border-radius: 20px; cursor: pointer; background: #e2e8f0;">Segurança</button>
    `;
    
    const grid = document.querySelector('.grid-3');
    if (grid) {
        sectionImpacto.insertBefore(filtroContainer, grid);
        
        // Atribui categorias aos cards existentes baseando-se no conteúdo
        const cards = grid.children;
        if(cards[0]) cards[0].setAttribute('data-categoria', 'politica');
        if(cards[1]) cards[1].setAttribute('data-categoria', 'social');
        if(cards[2]) cards[2].setAttribute('data-categoria', 'seguranca');

        // Lógica do clique nos botões de filtro
        const botoes = document.querySelectorAll('.btn-filtro');
        botoes.forEach(botao => {
            botao.addEventListener('click', () => {
                // Atualiza estados dos botões
                botoes.forEach(b => {
                    b.style.background = '#e2e8f0';
                    b.style.color = '#000';
                });
                botao.style.background = '#0b132b';
                botao.style.color = 'white';

                const filtro = botao.getAttribute('data-filter');

                // Filtra os cards com efeito visual
                Array.from(cards).forEach(card => {
                    const cat = card.getAttribute('data-categoria');
                    if (filtro === 'todos' || cat === filtro) {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                    } else {
                        card.style.display = 'none';
                        card.style.opacity = '0';
                    }
                });
            });
        });
    }
}
function calcularTempoLeitura() {
    const textoPagina = document.body.innerText;
    const contagemPalavras = textoPagina.split(/\s+/).length;
    
    // Média de leitura: 200 palavras por minuto
    const tempoMinutos = Math.ceil(contagemPalavras / 200);

    const bannerTempo = document.createElement('div');
    bannerTempo.style.position = 'fixed';
    bannerTempo.style.bottom = '20px';
    bannerTempo.style.left = '20px';
    bannerTempo.style.backgroundColor = '#0b132b';
    bannerTempo.style.color = '#fff';
    bannerTempo.style.padding = '10px 15px';
    bannerTempo.style.borderRadius = '30px';
    bannerTempo.style.fontSize = '12px';
    bannerTempo.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    bannerTempo.style.zIndex = '1000';
    bannerTempo.innerHTML = `⏱️ Leitura estimada: <strong>${tempoMinutos} min</strong>`;

    document.body.appendChild(bannerTempo);
}
document.addEventListener('DOMContentLoaded', () => {
    inicializarSimulador();
    configurarFiltros();
    calcularTempoLeitura();
});
