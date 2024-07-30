document.getElementById('language-toggle').addEventListener('click', function() {
    const englishText = document.querySelector('p[data-language="en"]');
    const irishText = document.querySelector('p[data-language="ga"]');
    
    if (englishText.style.display === 'none') {
        englishText.style.display = 'block';
        irishText.style.display = 'none';
        this.textContent = 'Gaeilge';
    } else {
        englishText.style.display = 'none';
        irishText.style.display = 'block';
        this.textContent = 'English';
    }
});