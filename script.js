document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const resumeBtn = document.getElementById("resume-btn");
    const resumeBtnFooter = document.getElementById("resume-btn-footer"); // Новая кнопка

    // Функция установки темы
    function setTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        themeToggleBtn.textContent = theme === "dark" ? "Светлая тема☀️" : "Темная тема🌙";
    }

    // Проверяем сохранённую тему
    const savedTheme = localStorage.getItem("theme") || 
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(savedTheme);

    // Обработчик клика для смены темы
    themeToggleBtn.addEventListener("click", () => {
        const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        setTheme(newTheme);
    });

    // Обработчик для кнопки "Посмотреть резюме" в хедере
    resumeBtn.addEventListener("click", () => {
        window.open("res.pdf", "_blank");
    });

    // Обработчик для кнопки "Посмотреть резюме" в футере
    resumeBtnFooter.addEventListener("click", () => {
        window.open("res.pdf", "_blank");
    });
});