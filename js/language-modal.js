const languageModal = document.getElementById('languageModal');
const openLanguageModalButton = document.getElementById('openLanguageModalButton');
const languageSearchInput = document.getElementById('languageSearch');
const languageList = document.getElementById('languageList');
const closeBtn = document.getElementById('close');

openLanguageModalButton.onclick = function () {
    languageModal.style.display = "block";
}

closeBtn.onclick = function () {
    languageModal.style.display = "none";
}

window.addEventListener('click', function(event) {
    if (event.target === languageModal) {
        languageModal.style.display = 'none';
    }
});
languageSearchInput.addEventListener('input', function () {
    const searchTerm = languageSearchInput.value.toLowerCase();
    const languageItems = languageList.getElementsByTagName('li');

    Array.from(languageItems).forEach(item => {
        const languageName = item.textContent.toLowerCase();
        if (languageName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

languageList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        const selectedLang = event.target.getAttribute('data-lang');
        const selectedText = event.target.textContent;
        const selectedImgSrc = "../img/located-1.svg";

        document.documentElement.lang = selectedLang;

        const navLink = openLanguageModalButton.querySelector('.nav-link');
        navLink.textContent = selectedText;
        let locatedImg = navLink.querySelector('.located'); 

        if (!locatedImg) {
            locatedImg = document.createElement('img');
            locatedImg.classList.add('located');
            navLink.insertBefore(locatedImg, navLink.firstChild);
        }

        locatedImg.src = selectedImgSrc;

        languageModal.style.display = 'none';
    }
});