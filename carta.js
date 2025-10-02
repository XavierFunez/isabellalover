const container = document.querySelector('.floating-container');
const emojis = ['💖','❤️','💌','🧁','🎂','🌸'];

function createFloatingItem() {
    const span = document.createElement('span');
    span.classList.add('floating-item');

    // Elegir emoji al azar
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    span.textContent = emoji;

    // Posición horizontal aleatoria
    span.style.left = Math.random() * 100 + 'vw';

    // Velocidad y tamaño aleatorio
    const duration = 5 + Math.random() * 5; // 5-10 segundos
    const size = 20 + Math.random() * 20; // 20-40px
    span.style.fontSize = size + 'px';
    span.style.animationDuration = duration + 's';

    container.appendChild(span);

    // Eliminar después de la animación
    setTimeout(() => {
        span.remove();
    }, duration * 1000);
}

// Crear continuamente los elementos flotantes
setInterval(createFloatingItem, 500);
