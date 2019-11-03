/* importing template resources */
import Header from './scripts/templates/header.js';
import Footer from './scripts/templates/footer.js';
import Breadcrumb from './scripts/templates/breadcrumb.js';

const header = new Header('header');
const breadcrumb = new Breadcrumb('breadcrumb');
const footer = new Footer('footer');

/* call functions to generate header and footer templates */
header.generateHeader('header.header');
breadcrumb.generateBreadcrumb('div.breadcrumbs', 'Rediger kort', 'index.html');
footer.generateFooter('footer.footer')