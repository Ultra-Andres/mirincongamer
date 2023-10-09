// Cambiar al modo oscuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Agregar evento al botón de modo oscuro
const darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", toggleDarkMode);
