// Set a cookie upon selecting a theme from the drop down menu
let selectElement = document.getElementById("theme-select");
selectElement.addEventListener('change', function () {
    let selectedTheme = selectElement.value;
    document.body.className = selectedTheme;
    document.cookie = "theme=" + selectedTheme + "; max-age=" + 2 * 60;
});

// load the cookie and set the theme upon loading the webpage
document.addEventListener("DOMContentLoaded", function () {
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [key, value] = cookie.trim().split('=');
        if (key === "theme") {
            document.body.className = value;
        }
    }
});