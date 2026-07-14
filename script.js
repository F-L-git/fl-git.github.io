// ========================
// 1. ПРИВЕТСТВИЕ ПО ВРЕМЕНИ
// ========================
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greetingText = '';
    if (hour < 6) greetingText = '🌙 Доброй ночи!';
    else if (hour < 12) greetingText = '🌅 Доброе утро!';
    else if (hour < 18) greetingText = '☀️ Добрый день!';
    else greetingText = '🌇 Добрый вечер!';
    
    const greetingEl = document.getElementById('greeting');
    if (greetingEl) {
        greetingEl.textContent = greetingText + ' 👋';
    }

    // Показываем текущее время
    const timeEl = document.getElementById('time-display');
    if (timeEl) {
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        timeEl.textContent = '🕐 ' + now.toLocaleTimeString('ru-RU', options);
    }
}
updateGreeting();
setInterval(updateGreeting, 1000); // обновляем каждую секунду

// ========================
// 2. ПЕРЕКЛЮЧЕНИЕ ТЕМЫ
// ========================
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeToggle.textContent = isDark ? '☀️ Светлая тема' : '🌙 Тёмная тема';
    });
}

// ========================
// 3. СЧЁТЧИК ПОСЕЩЕНИЙ (localStorage)
// ========================
function updateVisitCounter() {
    let count = localStorage.getItem('pageVisits');
    if (count === null) {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem('pageVisits', count);
    document.getElementById('count').textContent = count;
}
updateVisitCounter();

// ========================
// 4. АККОРДЕОН (сворачивание разделов)
// ========================
document.querySelectorAll('.section h2').forEach((header) => {
    // Делаем заголовок кликабельным
    header.style.cursor = 'pointer';
    header.style.userSelect = 'none';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    // Добавляем иконку-индикатор
    const icon = document.createElement('span');
    icon.textContent = ' ▾';
    icon.style.fontSize = '1.2rem';
    header.appendChild(icon);

    const section = header.parentElement;
    const content = section.querySelector('p, ul, ol');
    if (!content) return;

    // Скрываем контент по умолчанию (кроме первого раздела)
    if (section.id !== 'about') {
        content.style.display = 'none';
        icon.textContent = ' ▸';
    }

    header.addEventListener('click', () => {
        const isOpen = content.style.display !== 'none';
        content.style.display = isOpen ? 'none' : 'block';
        icon.textContent = isOpen ? ' ▸' : ' ▾';
    });
});

// ========================
// 5. АНИМАЦИЯ ПРИ ПОЯВЛЕНИИ (Intersection Observer)
// ========================
if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}
