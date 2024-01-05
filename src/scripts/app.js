// Obtenemos las frases (guardadas en un JSON)
import frases from '../data/frases.json';

// Cargamos la frase célebre
cargarFraseCelebre();

function cargarFraseCelebre() {
    // Cogemos el span donde debe pintarse la frase célebre
    let fraseCelebre = document.getElementById('frase-celebre');
    // Si existe dicho span, pintamos una frase célebre aleatoria
    if (fraseCelebre!==null) {
        fraseCelebre.innerText = frases[(Math.floor(Math.random() * frases.length))].frase;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));
  
    if ("IntersectionObserver" in window) {
      let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            lazyBackgroundObserver.unobserve(entry.target);
          }
        });
      });
  
      lazyBackgrounds.forEach(function(lazyBackground) {
        lazyBackgroundObserver.observe(lazyBackground);
      });
    }

    var elementoAnimado = document.getElementById("animacion-especial");
    elementoAnimado.classList.add("especial");
});