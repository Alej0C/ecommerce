//Import hash router
import { router } from './router/index.js';

const principalFunction = () => {
    location.hash = 'home';
};

window.addEventListener('load', principalFunction);
window.addEventListener('hashchange', () => router(location.hash));
