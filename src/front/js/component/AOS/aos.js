import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000, // Duración de la animación (en milisegundos)
    easing: 'ease-out-back', // Función de aceleración de la animación
    delay: 200,
});

export default AOS;