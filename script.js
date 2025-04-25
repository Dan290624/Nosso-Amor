// Controle do áudio
function tocarOuPausar() {
    const audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Contador de tempo
const dataInicio = new Date("2024-06-29T00:00:00");

function atualizarContador() {
    const agora = new Date();
    const diff = agora - dataInicio;

    const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24)) % 365;
    const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutos = Math.floor(diff / (1000 * 60)) % 60;
    const segundos = Math.floor(diff / 1000) % 60;

    document.getElementById('contador').innerHTML =
        `${anos} anos, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Corações flutuando
function criarCoracao() {
    const container = document.querySelector('.coracoes-container');
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.animationDuration = (5 + Math.random() * 5) + 's'; // velocidade variável
    container.appendChild(coracao);

    // Remove o coração depois que a animação termina
    setTimeout(() => {
        coracao.remove();
    }, 10000);
}

// Criar vários corações de tempos em tempos
setInterval(criarCoracao, 300); // cria um coração a cada 200ms
