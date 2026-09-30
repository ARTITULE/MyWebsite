
function getSavedTheme() {
    try {
        return localStorage.getItem('theme');
    }
    catch (error) {
        return null;
    }
}

function saveTheme(theme) {
    try {
        localStorage.setItem('theme', theme);
    }
    catch (error) {

    }
}


const prefersDark = window.matchMedia('(prefers-color-sheme: dark)').matches;
let theme = getSavedTheme() || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', theme);

document.addEventListener('DOMContentLoaded', function() {

    const button = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    const text = document.getElementById('theme-text');

    function updateButton() {
        const showingDark = theme === 'dark';
        icon.src = showingDark ? 'icons/sun.svg' : 'icons/moon.svg';
        text.textContent = showingDark ? 'Light mode' : 'Dark mode';
    }

    button.addEventListener('click', function() {
        theme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        saveTheme(theme);
        updateButton();
    });

    updateButton();

});

