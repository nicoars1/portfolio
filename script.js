let themeBtn = document.getElementById("themeChanger");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeBtn.setAttribute("aria-pressed", isDark);
});
