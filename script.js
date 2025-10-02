document.addEventListener('DOMContentLoaded', () => {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const letterContainer = document.getElementById('letterContainer');
    const unfoldButton = document.getElementById('unfold-button');
    const greetingTextElement = document.getElementById('greetingText');
    const button = document.querySelector('.letter-button');

button.addEventListener('mousemove', (e) => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = e.offsetX + 'px';
    heart.style.top = e.offsetY + 'px';
    button.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
});


    // --- Step 1 to Step 2 Transition ---
    envelopeContainer.addEventListener('click', () => {
        envelopeContainer.classList.add('open');
        setTimeout(() => {
            step1.classList.remove('active');
            step2.classList.add('active');
            setTimeout(() => letterContainer.classList.add('show'), 100);
        }, 700); // Wait for flap animation
    });

    // --- Step 2 to Step 3 Transition ---
    unfoldButton.addEventListener('click', () => {
        step2.classList.remove('active');
        step3.classList.add('active');
        startFinalAnimations();
    });

    function startFinalAnimations() {
        // Typewriter effect
        const greeting = "FELIZ CUMPLEAÑOOOOOOS PRECIOSA";
        let i = 0;
        greetingTextElement.innerHTML = '';
        const cursor = document.createElement('span');
        cursor.className = 'typewriter-cursor';
        greetingTextElement.appendChild(cursor);

        const typing = setInterval(() => {
            if (i < greeting.length) {
                greetingTextElement.insertBefore(document.createTextNode(greeting.charAt(i)), cursor);
                i++;
            } else {
                clearInterval(typing);
                cursor.style.animation = 'none'; // Optional: stop blinking
                cursor.style.display = 'none';
            }
        }, 100);

        // Balloon animation
        createBalloons(15);
    }

    function createBalloons(count) {
        const colors = ['#50ade2ff', '#0f78beff', '#00d8d6', '#493fdfff', '#8dbbdaff'];
        for (let i = 0; i < count; i++) {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = `${Math.random() * 100}vw`;
            balloon.style.animationDuration = `${Math.random() * 6 + 8}s`; // 8-14s duration
            balloon.style.animationDelay = `${Math.random() * 5}s`;
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.appendChild(balloon);
        }
    }
});
