// Components import
import { Navbar } from '../components/Navbar.js';
import { Header } from '../components/Header.js';
import { ContainerProduct } from '../components/ContainerProducts.js';
import { Footer } from '../components/Footer.js';

// Nodes import
import { root } from '../nodes.js';

// Import data products
import { propsSections } from '../utils/data.js';

// This templates or complete interface load each component for a view depending the route
const Home = () => {
    // Function componentn invoques
    const navbar = Navbar();
    const header = Header();
    const sections = propsSections.map((element) => ContainerProduct(element));
    const footer = Footer();

    // Principal component who save the components
    const template = [navbar, header, ...sections, footer];

    root.innerHTML = template.join('');
};

export { Home };
