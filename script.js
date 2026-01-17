let themeBtn = document.getElementById("themeChanger");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeBtn.setAttribute("aria-pressed", isDark);
});

// Guardar el tema en localstorage
themeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Permite hacer click al boton con el enter por cuestiones de accesibilidad
themeBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    themeBtn.click();
  }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker registrado"));
}
