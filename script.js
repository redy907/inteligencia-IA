// --- 1. Animação de Revelação ao Rolar a Página (Scroll Reveal) ---
const sections = document.querySelectorAll('.section');

const options = {
    threshold: 0.15
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('faded-in');
        observer.unobserve(entry.target); // Ativa a animação apenas uma vez
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
    section.classList.add('reveal-init'); // Prepara o CSS para a animação
});


// --- 2. Mini-Quiz Interativo sobre Desinformação ---
function verificarResposta(resposta CORRETA) {
    if (resposta CORRETA) {
        alert("🎯 Correto! Deepfakes de áudio já são usados para clonar vozes de parentes e aplicar golpes. Todo cuidado é pouco!");
    } else {
        alert("❌ Ops, incorreto. Atualmente, a IA já consegue clonar uma voz perfeitamente com menos de 3 segundos de amostra!");
    }
}

// Vincula o quiz dinâmica se o botão existir na página
document.getElementById('btn-quiz-verdade')?.addEventListener('click', () => verificarResposta(true));
document.getElementById('btn-quiz-falso')?.addEventListener('click', () => verificarResposta(false));
