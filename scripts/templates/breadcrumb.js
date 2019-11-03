class Breadcrumb {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    generateBreadcrumb(container, text, href) {
        const breadcrumb = `<a href="${href}" class="flex items-center">
                                <svg class="breadcrumbs-icn" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <circle id="Oval" fill="#000000" cx="10" cy="10" r="10"></circle>
                                    <path d="M11.7,13.3 C11.9985902,13.6981203 11.9589987,14.2552148 11.6071068,14.6071068 C11.2552148,14.9589987 10.6981203,14.9985902 10.3,14.7 L6.3,10.7 C5.91885712,10.3111565 5.91885712,9.68884351 6.3,9.3 L10.3,5.3 C10.6981203,5.00140977 11.2552148,5.04100126 11.6071068,5.39289322 C11.9589987,5.74478517 11.9985902,6.3018797 11.7,6.7 L8.42,10 L11.72,13.3 L11.7,13.3 Z" id="Path" fill="#FFFFFF"></path>
                                </svg>
                            </a>
                            <span class="breadcrumbs-previous">Saker</span>
                            <span class="breadcrumbs-current">→</span>
                            <span class="breadcrumbs-current">${text}</span>`;
        
        $(container).append(breadcrumb);
    }
}

export default Breadcrumb;