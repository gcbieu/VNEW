document.addEventListener('DOMContentLoaded', () => {
    // 1. Equalizador Adaptável
    const eqContainer = document.getElementById('equalizer');
    const isMobile = window.innerWidth < 768;
    const barCount = isMobile ? 15 : 40; 
    const bars = [];

    for (let i = 0; i < barCount; i++) {
        const bar = document.createElement('div');
        bar.className = 'eq-bar';
        bar.style.height = '10%';
        eqContainer.appendChild(bar);
        bars.push(bar);
    }

    setInterval(() => {
        bars.forEach(bar => {
            const height = Math.random() * 85 + 15;
            bar.style.height = `${height}%`;
        });
    }, 150);

    // 2. Lógica do Knob (Melhorada para Mobile e Desktop)
    const knob = document.getElementById('knob');
    let isDragging = false;
    let currentRotation = 0;

    const handleRotation = (clientX, clientY) => {
        const rect = knob.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
        
        currentRotation = Math.min(Math.max(angle, -135), 135);
        knob.style.transform = `rotate(${currentRotation}deg)`;
    };

    knob.addEventListener('mousedown', () => isDragging = true);
    window.addEventListener('mousemove', (e) => { if(isDragging) handleRotation(e.clientX, e.clientY); });
    window.addEventListener('mouseup', () => isDragging = false);

    // Suporte Touch
    knob.addEventListener('touchstart', () => isDragging = true);
    window.addEventListener('touchmove', (e) => { 
        if(isDragging) handleRotation(e.touches[0].clientX, e.touches[0].clientY); 
    });
    window.addEventListener('touchend', () => isDragging = false);
});

// 3. Sistema de Abas (Explorar)
function tab(id, btn) {
    document.querySelectorAll('.info-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.nav-btn-round').forEach(b => b.classList.remove('active'));
    document.getElementById('panel-' + id).classList.add('active');
    btn.classList.add('active');
}

// final da primeira pagina
// segunda pagina 
function tab(id, btn) {
    document.querySelectorAll('.info-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.nav-btn-round').forEach(b => b.classList.remove('active'));
    document.getElementById('panel-' + id).classList.add('active');
    btn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    // Equalizador dinâmico por tamanho de tela
    const eqContainer = document.getElementById('equalizer');
    const isMobile = window.innerWidth < 768;
    const barCount = isMobile ? 15 : 30; // Menos barras no mobile para não poluir
    const bars = [];

    for (let i = 0; i < barCount; i++) {
        const bar = document.createElement('div');
        bar.className = 'eq-bar';
        bar.style.height = '10%';
        eqContainer.appendChild(bar);
        bars.push(bar);
    }

    setInterval(() => {
        bars.forEach(bar => {
            const height = Math.random() * 85 + 15;
            bar.style.height = `${height}%`;
        });
    }, 150);

    // Ticks do Knob (Otimizado)
    const ticksContainer = document.getElementById('ticks');
    for (let i = 0; i < 20; i++) { // Reduzi para 20 para ficar mais limpo
        const tick = document.createElement('div');
        tick.className = 'tick opacity-20';
        const angle = (i * 13.5) - 135; // 270 graus distribuídos
        tick.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-30px)`;
        ticksContainer.appendChild(tick);
    }

    // Lógica do Knob (Mantida a sua, com adição de ARIA)
    const knob = document.getElementById('knob');
    let isDragging = false;
    let currentRotation = 0;

    const updateRotation = (angle, startAngle) => {
        let delta = angle - startAngle;
        currentRotation += delta;
        currentRotation = Math.min(Math.max(currentRotation, -135), 135);
        knob.style.transform = `rotate(${currentRotation}deg)`;
        knob.setAttribute('aria-valuenow', Math.round(currentRotation));
    };

    // ... lógica de mouse e touch que você já criou funciona perfeitamente ...
});
// Efeito de brilho que segue o mouse nos cards sociais
document.querySelectorAll('.social-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});