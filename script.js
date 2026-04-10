            // Gerar barras do equalizador
            const eqContainer = document.getElementById('equalizer');
            const barCount = 30;
            const bars = [];

            for (let i = 0; i < barCount; i++) {
                const bar = document.createElement('div');
                bar.className = 'eq-bar';
                bar.style.animationDelay = `${Math.random() * 2}s`;
                bar.style.height = `${Math.random() * 100}%`;
                eqContainer.appendChild(bar);
                bars.push(bar);
            }

            // Animação manual do equalizador para parecer mais orgânico
            setInterval(() => {
                bars.forEach(bar => {
                    const height = Math.random() * 90 + 10;
                    bar.style.height = `${height}%`;
                });
            }, 150);

            // Gerar marcações do Knob (Volume)
            const ticksContainer = document.getElementById('ticks');
            for (let i = 0; i < 30; i++) {
                const tick = document.createElement('div');
                tick.className = 'tick';
                // Espalhar os ticks em 270 graus
                const angle = (i * 9) - 135;
                tick.style.transform = `rotate(${angle}deg)`;
                ticksContainer.appendChild(tick);
            }

            // Lógica de rotação do Knob
            const knob = document.getElementById('knob');
            let isDragging = false;
            let startAngle = 0;
            let currentRotation = 0;

            knob.addEventListener('mousedown', (e) => {
                isDragging = true;
                const rect = knob.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
            });

            window.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                const rect = knob.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
                let delta = angle - startAngle;

                currentRotation += delta;
                // Limitar rotação
                if (currentRotation > 135) currentRotation = 135;
                if (currentRotation < -135) currentRotation = -135;

                knob.style.transform = `rotate(${currentRotation}deg)`;
                startAngle = angle;
            });

            window.addEventListener('mouseup', () => {
                isDragging = false;
            });

            // Suporte para touch
            knob.addEventListener('touchstart', (e) => {
                isDragging = true;
                const rect = knob.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const touch = e.touches[0];
                startAngle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * (180 / Math.PI);
            });

            window.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                const rect = knob.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const touch = e.touches[0];
                const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * (180 / Math.PI);
                let delta = angle - startAngle;
                currentRotation += delta;
                knob.style.transform = `rotate(${currentRotation}deg)`;
                startAngle = angle;
            });

            window.addEventListener('touchend', () => isDragging = false);

            // segunda pagina 
            function tab(id, btn) {
                document.querySelectorAll('.info-card').forEach(c => c.classList.remove('active'));
                document.querySelectorAll('.nav-btn-round').forEach(b => b.classList.remove('active'));
                document.getElementById('panel-' + id).classList.add('active');
                btn.classList.add('active');
            }

