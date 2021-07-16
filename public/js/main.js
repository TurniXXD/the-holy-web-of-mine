import * as AOS from 'aos/dist/aos.js';

// CSS
import 'normalize.css';
import 'bootstrap'
import '@css/main.css';
//import 'typicons.font/src/font/typicons.css';

// COMPONENTS
import '@components/navbar';

//JS
const preloader = document.getElementById('preloader')

window.onload = function () {
	// ✨ aestetic title for SEO ✨
	if (document.title === 'Custom and revolutionary web design | Jakub Vantuch') document.title = 'Jakub Vantuch | About me';
	// yeet out preloader
	preloader.style.display = 'none';
	preloader.classList.remove('loading')

	AOS.init({ once: true });
};