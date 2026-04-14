const themeBtn = document.getElementById("themeChanger");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
}

// Guardar el tema en localstorage
themeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  document.documentElement.classList.toggle("dark");

  const isDark = document.documentElement.classList.contains("dark");

  themeBtn.setAttribute("aria-pressed", isDark);

  localStorage.setItem("theme", isDark ? "dark" : "light")
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
