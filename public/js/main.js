import * as AOS from 'aos/dist/aos.js';

// CSS
import 'normalize.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@css/main.css';
//import 'typicons.font/src/font/typicons.css';

// COMPONENTS
import '@components/navbar';

//JS
const preloader = document.getElementById('preloader')

window.addEventListener('DOMContentLoaded', (event) => {
	// ✨ aestetic title for SEO ✨
	if (document.title === 'Custom and revolutionary web design | Jakub Vantuch') document.title = 'Jakub Vantuch | About me';

	// yeet out preloader
	preloader.style.display = 'none';
	preloader.classList.remove('loading')
	
	AOS.init({ once: true });
});

