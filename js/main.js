// Elementos da interface
const btnStart = document.getElementById('btn-start');
const flashLayer = document.getElementById('lightning-flash');

// Áudios
const soundRain = document.getElementById('audio-rain');
const soundWind = document.getElementById('audio-wind');
const soundThunder = document.getElementById('audio-thunder');
const soundFootstep = document.getElementById('audio-footstep');

let isAtmosphereActive = false;
let treeMovements = 0;

// Função para iniciar a atmosfera (Chuva e Vento)
function startAtmosphere() {
  if (!isAtmosphereActive) {
    soundRain.volume = 0.5;
    soundWind.volume = 0.7;
    soundRain.play();
    soundWind.play();
    isAtmosphereActive = true;
    
    // Inicia o ciclo dos trovões
    setInterval(triggerThunder, 3000); // Roda a cada 3 segundos para contar os movimentos
  }
}

// Lógica: a cada "4 movimentos", dá o trovão
function triggerThunder() {
  treeMovements++;
  
  if (treeMovements >= 4) {
    // Toca o som do trovão
    soundThunder.volume = 1.0;
    soundThunder.currentTime = 0; // Reseta o som caso já esteja tocando
    soundThunder.play();
    
    // Adiciona o clarão na tela
    flashLayer.classList.add('flash-active');
    
    // Remove o clarão depois que a animação acaba para poder usar de novo
    setTimeout(() => {
      flashLayer.classList.remove('flash-active');
    }, 500);
    
    treeMovements = 0; // Zera a contagem
  }
}

// O navegador precisa de um clique inicial para liberar o áudio
window.addEventListener('click', startAtmosphere, { once: true });

// Evento de clicar no Start
btnStart.addEventListener('click', () => {
  // Toca o som de passos rápidos
  soundFootstep.play();
  
  // Aqui você pode esconder o menu e mostrar os personagens depois!
  console.log("Start clicado! Indo para seleção de personagens...");
});
