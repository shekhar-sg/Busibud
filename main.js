// Fonts
import '@fontsource/nunito-sans/latin.css'

// Styles
import './scss/main.scss'

// Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Swiper
import Swiper, {Autoplay, Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper1 = new Swiper('#swiper_1', {
    modules: [Autoplay, Navigation],
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            spaceBetween: 40,
        },
        1280: {
            spaceBetween: 40
        }
    }
});

const swiper2 = new Swiper('#swiper_2', {
    modules: [Autoplay, Navigation],
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
});