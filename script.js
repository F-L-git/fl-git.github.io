// script.js — добавьте интерактивность на ваш сайт

// 1. Приветствие в консоли (для разработчиков)
console.log('🚀 Сайт на GitHub Pages успешно загружен!');

// 2. Плавное появление контейнера при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }

    // 3. Добавляем кнопку "Нажми меня!" после заголовка
    const heading = document.querySelector('h1');
    if (heading && !document.getElementById('magic-button')) {
        const button = document.createElement('button');
        button.id = 'magic-button';
        button.textContent = '✨ Нажми меня!';
        button.style.cssText = `
            margin-top: 1.5rem;
            padding: 0.8rem 2rem;
            font-size: 1.1rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        `;
        
        // Эффект при наведении
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 6px 25px rgba(102, 126, 234, 0.6)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
        });
        
        // Действие при клике
        button.addEventListener('click', function() {
            const messages = [
                '🎉 Отлично! Вы нажали на кнопку!',
                '⭐ GitHub Pages — это круто!',
                '🚀 Ваш сайт работает с JavaScript!',
                '💡 Попробуйте обновить страницу!'
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
        });
        
        heading.parentNode.insertBefore(button, heading.nextSibling);
    }
});
