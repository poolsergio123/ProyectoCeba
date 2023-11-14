window.addEventListener('DOMContentLoaded', function()
{
    let animacion = document.getElementById('animado');
    let posicionobj = animacion.getBoundingClientRect().top;
    console.log(posicionobj);
    let tamañopantalla = window.innerHeight;

    if (posicionobj < tamañopantalla) {
        animacion.style.animation = 'mover 0.5s ease-out'
    }  
})