/* --- JAVASCRIPT FOR TRANSLATION --- */

// Объект с переводами на разные языки
const translations = {
    en: {
        heroTitle: "Zero Client",
        heroText: "We provide you with the best client for comfortable gaming that will give you the best gaming experience.",
        btnDownload: "Download",
        btnTelegram: "Channel",
        featuresTitle: "Our advantages",
        featuresSubtitle: "We have summarized for you what you get after downloading our client.",
        feat1Title: "Beautiful appearance",
        feat1Desc: "Our client has a large number of visual features that will make your game more colorful and really beautiful.",
        feat2Title: "Customizability",
        feat2Desc: "In our client you can customize almost any function for yourself. This allows you to use our client to the maximum.",
        feat3Title: "Performance",
        feat3Desc: "We are constantly improving optimization. You will be able to run Zero Client even on weak computers.",
        feat4Title: "Frequent updates",
        feat4Desc: "We regularly update the functionality, adding new functions as well as improving existing ones."
    },
    ru: {
        heroTitle: "Zero Client",
        heroText: "Мы предоставляем лучший клиент для комфортной игры, который подарит вам незабываемый игровой опыт.",
        btnDownload: "Скачать",
        btnTelegram: "Канал",
        featuresTitle: "Наши преимущества",
        featuresSubtitle: "Мы обобщили для вас то, что вы получите после загрузки нашего клиента.",
        feat1Title: "Красивый внешний вид",
        feat1Desc: "Наш клиент имеет множество визуальных функций, которые сделают вашу игру более красочной и по-настоящему красивой.",
        feat2Title: "Настраиваемость",
        feat2Desc: "В нашем клиенте вы можете настроить практически любую функцию под себя. Используйте клиент на максимум.",
        feat3Title: "Производительность",
        feat3Desc: "Мы постоянно улучшаем оптимизацию. Вы сможете запустить Zero Client даже на слабых компьютерах.",
        feat4Title: "Частые обновления",
        feat4Desc: "Мы регулярно обновляем функционал, добавляя новые функции, а также улучшая существующие."
    }
};

// Функция смены языка
function setLang(lang) {
    // 1. Проверяем, существует ли перевод для выбранного языка, чтобы избежать ошибок
    if (!translations[lang]) return;

    // 2. Обновляем текст элементов по их ID
    document.getElementById('hero-title').innerText = translations[lang].heroTitle;
    document.getElementById('hero-text').innerText = translations[lang].heroText;
    document.getElementById('btn-download').innerText = translations[lang].btnDownload;
    document.getElementById('btn-telegram').innerText = translations[lang].btnTelegram;
    
    document.getElementById('features-title').innerText = translations[lang].featuresTitle;
    document.getElementById('features-subtitle').innerText = translations[lang].featuresSubtitle;

    document.getElementById('feat-1-title').innerText = translations[lang].feat1Title;
    document.getElementById('feat-1-desc').innerText = translations[lang].feat1Desc;
    document.getElementById('feat-2-title').innerText = translations[lang].feat2Title;
    document.getElementById('feat-2-desc').innerText = translations[lang].feat2Desc;
    document.getElementById('feat-3-title').innerText = translations[lang].feat3Title;
    document.getElementById('feat-3-desc').innerText = translations[lang].feat3Desc;
    document.getElementById('feat-4-title').innerText = translations[lang].feat4Title;
    document.getElementById('feat-4-desc').innerText = translations[lang].feat4Desc;

    // 3. Управление активной кнопкой (подсветка EN или RU)
    const buttons = document.querySelectorAll('.lang-btn');
    
    // Сначала убираем класс 'active' у всех кнопок
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Затем ищем кнопку с нужным текстом (например, "EN" или "RU") и делаем её активной
    buttons.forEach(btn => {
        if(btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
}