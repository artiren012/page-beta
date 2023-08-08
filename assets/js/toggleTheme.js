window.addEventListener('DOMContentLoaded', function () {
    if (window.localStorage.getItem('theme') == null) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.dataset.theme = 'dark-mode';
        } else {
            document.body.dataset.theme = 'light-mode';
        }
        window.localStorage.setItem('theme', document.body.dataset.theme);
    } else {
        document.body.dataset.theme = window.localStorage.getItem('theme');
    }
});

function toggleDarkMode() {
    let dataAttr = document.body.dataset;
    dataAttr.theme.match('light-mode') ? dataAttr.theme = 'dark-mode' : dataAttr.theme = 'light-mode';
    window.localStorage.setItem('theme', document.body.dataset.theme);
}