import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000, // Duración de la animación (en milisegundos)
    easing: 'ease-out-back', // Función de aceleración de la animación
    delay: 200, // Retardo antes de empezar la animación (en milisegundos)});

export default AOS;