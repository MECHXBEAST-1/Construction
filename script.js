document.addEventListener('DOMContentLoaded', () => {
    const languageModal = document.getElementById('language-modal');
    const langButtons = document.querySelectorAll('.lang-btn');
    const languageSelect = document.getElementById('language-select');
    const elementsToTranslate = document.querySelectorAll('[data-lang-en]');

    const updateLanguage = (selectedLanguage) => {
        elementsToTranslate.forEach(element => {
            element.innerHTML = element.getAttribute(`data-lang-${selectedLanguage}`);
        });
        languageSelect.value = selectedLanguage;
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLanguage = button.getAttribute('data-lang');
            updateLanguage(selectedLanguage);
            languageModal.style.display = 'none';
        });
    });

    languageSelect.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        updateLanguage(selectedLanguage);
    });

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const exploreBtn = document.querySelector('.explore-btn');
    exploreBtn.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
