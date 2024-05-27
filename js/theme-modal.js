const themeModal = document.getElementById('themeModal');
const openThemeModalButton = document.getElementById('openThemeModalButton');
const themeOptions = document.getElementById('themeOptions');
const closeThemeModalButton = themeModal.querySelector('.close');

openThemeModalButton.onclick = function () {
  themeModal.style.display = 'block';
};

closeThemeModalButton.onclick = function () {
  themeModal.style.display = 'none';
};

themeOptions.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    const selectedTheme = event.target.getAttribute('data-theme');
    applyTheme(selectedTheme);
    themeModal.style.display = 'none';
  }
});

function applyTheme(theme) {
  document.body.classList.remove('light-theme', 'dark-theme');
  if (theme === 'light') {
    document.body.classList.add('light-theme');
  } else if (theme === 'dark') {
    document.body.classList.add('dark-theme');
  }
}

window.onclick = function (event) {
  if (event.target === themeModal) {
    themeModal.style.display = 'none';
  }
};