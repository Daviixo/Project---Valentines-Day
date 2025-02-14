const frases = [
    "Eres la madre increíble de nuestro tesoro más preciado 💖",
    "Juntos creamos la mejor obra de nuestra vida: nuestro pequeñito",
    "Poder verte ser mamá es el regalo más hermoso que podría pedir",
    "Nuestro pequeño de seguro heredó tu corazón bondadoso y tu sonrisa hermosa\n(Deberías sonreír mas seguido, porfi)",
    "Gracias por darme el título más grande: 'papá de tu hijo'",
    "Cada día admiro más la madre amorosa que eres",
    "Nuestra familia es mi mayor logro, y tú, su pilar fundamental"
];

let contador = 0;
let indiceFrase = 0;
const modal = document.getElementById('modal');
const elementoContador = document.getElementById('contador');
const botonAmor = document.getElementById('botonAmor');
const elementoMensaje = document.getElementById('mensaje');

function actualizarInteraccion() {
    // Actualizar contador y mensaje
    contador++;
    elementoContador.textContent = `Veces presionado: ${contador}`;
    
    // Cambiar frase principal (rotativa)
    elementoMensaje.textContent = frases[indiceFrase];
    indiceFrase = (indiceFrase + 1) % frases.length;
    
    // Configurar modal
    modal.textContent = 'Te am' + 'o'.repeat(contador);
    modal.className = 'modal'; // Resetear estilos
    
    // Efecto especial al llegar a 4
    if(contador >= 4) {
        modal.classList.add('grande');
    }
    
    // Mostrar y ocultar modal
    modal.style.display = 'block';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 1000);
}

botonAmor.addEventListener('click', actualizarInteraccion);