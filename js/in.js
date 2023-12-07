document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        offset: 200, 
        duration: 800, 
        easing: 'ease-in-out',
        once: true 
    });
    const animationContainer = document.getElementById("animation-container");
    animationContainer.addEventListener("animationend", function () {
        console.log("La animación inicial ha terminado");
    });
});