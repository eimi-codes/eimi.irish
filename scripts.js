document.getElementById('language-toggle').addEventListener('click', function() {
    const englishText = document.querySelectorAll('p[data-language="en"]');
    const irishText = document.querySelectorAll('p[data-language="ga"]');
    
	for(i=0;i<englishText.length;++i) {
    if (englishText[i].style.display === 'none') {
        englishText[i].style.display = 'block';
        irishText[i].style.display = 'none';
        this.textContent = 'Gaeilge';
    } else {
        englishText[i].style.display = 'none';
        irishText[i].style.display = 'block';
        this.textContent = 'English';
    }
}
});
