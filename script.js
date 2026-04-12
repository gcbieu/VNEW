document.addEventListener('DOMContentLoaded', () => {
    const eqContainer = document.getElementById('equalizer');
    const isMobile = window.innerWidth < 768;
    const barCount = isMobile ? 15 : 30;

    const bars = [];

    for (let i = 0; i < barCount; i++) {
        const bar = document.createElement('div');
        bar.className = 'eq-bar';
        eqContainer.appendChild(bar);
        bars.push(bar);
    }

    setInterval(() => {
        bars.forEach(bar => {
            bar.style.height = `${Math.random() * 80 + 20}%`;
        });
    }, 200);
});

document.querySelectorAll('.lista-checkbox input').forEach(input => {
    input.addEventListener('change', () => {
        console.log('Filtro:', input.parentElement.innerText);
    });
});

// UMA SÓ
function tab(id, btn) {
    document.querySelectorAll('.info-card').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.nav-btn-round').forEach(b => b.classList.remove('active'));

    document.getElementById('panel-' + id).classList.add('active');
    btn.classList.add('active');
}