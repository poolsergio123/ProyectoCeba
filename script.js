

window.onload = function(){ 
    // your code 
    document.getElementById('next').onclick = function(){
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]);
    }
    document.getElementById('prev').onclick = function(){
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
    }

    var div1 = document.getElementById('div1');

    // Obtener la altura del primer div
    var alturaDiv1 = div1.offsetHeight;
    var anchoDiv1 = div1.offsetWidth;

    // Aplicar la altura como margen superior al segundo div
    var div2 = document.getElementById('div2');
    // div2.style.marginTop = 'calc(' + alturaDiv1 + 'px )';
    div2.style.width='calc('+ anchoDiv1 +'px + 24px)'



};
  
 window.addEventListener('DOMContentLoaded', function()
 {
     let animacion = document.getElementById('animado');
     let posicionobj = animacion.getBoundingClientRect().top;
     console.log(posicionobj);
     let tamañopantalla = window.innerHeight;
     if (posicionobj < tamañopantalla) {
         animacion.style.animation = 'mover 1s ease-out'
     }  
 })