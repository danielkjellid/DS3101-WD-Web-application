/* importing template resources */
import Header from './scripts/templates/header.js';
import Footer from './scripts/templates/footer.js';
import Breadcrumb from './scripts/templates/breadcrumb.js';

/* defining new objects using the template's constructor layout */
const header = new Header('header');
const breadcrumb = new Breadcrumb('breadcrumb');
const footer = new Footer('footer');

/* call functions to generate header, breadcrumb and footer templates */
header.generateHeader('header.header');
breadcrumb.generateBreadcrumb('div.toolbar');
footer.generateFooter('footer.footer')