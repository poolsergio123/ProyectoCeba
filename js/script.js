document.addEventListener("DOMContentLoaded", function () {
  const animationContainer = document.getElementById("animation-container");
  animationContainer.addEventListener("animationend", function () {
    console.log("La animación ha terminado");
  });
});