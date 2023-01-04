// Import interfaces to be loaded
import { Home } from '../interface/index.js';

const router = (hash) => {
    const url = hash.slice(1);

    switch (url) {
        case 'home':
            Home();
            break;

        default:
            location.hash = 'home';
            break;
    }
};

export { router };
