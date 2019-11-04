class Breadcrumb {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    generateBreadcrumb(container, text, href) {

        let breadcrumb = 0;

        if ($('body.edit')[0]) {
            breadcrumb = `<div class="breadcrumbs flex items-center">
                <a href="cards.html" class="flex items-center">
                    <svg class="breadcrumbs-icn" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <circle id="Oval" fill="#000000" cx="10" cy="10" r="10"></circle>
                        <path d="M11.7,13.3 C11.9985902,13.6981203 11.9589987,14.2552148 11.6071068,14.6071068 C11.2552148,14.9589987 10.6981203,14.9985902 10.3,14.7 L6.3,10.7 C5.91885712,10.3111565 5.91885712,9.68884351 6.3,9.3 L10.3,5.3 C10.6981203,5.00140977 11.2552148,5.04100126 11.6071068,5.39289322 C11.9589987,5.74478517 11.9985902,6.3018797 11.7,6.7 L8.42,10 L11.72,13.3 L11.7,13.3 Z" id="Path" fill="#FFFFFF"></path>
                    </svg>
                </a>
                <span class="breadcrumbs-previous">Saker</span>
                <span class="breadcrumbs-current">→</span>
                <span class="breadcrumbs-current">Rediger kort</span>
            </div>
            <a href="index.html" id="delete-card" class="breadcrumbs-action">
                <svg class="breadcrumbs-icn" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <circle id="Oval" fill="#000000" cx="10" cy="10" r="10"></circle>
                    <path d="M5.6,5.8 L14,5.8 L13.466,14.872 C13.4278642,15.5064687 12.9016127,16.0011451 12.266,16.000002 L7.34,16.000002 C6.7043873,16.0011451 6.17813579,15.5064687 6.14,14.872 L5.6,5.8 Z M8.6,8.8 C8.26862915,8.8 8,9.06862915 8,9.4 L8,13 C8,13.3313708 8.26862915,13.6 8.6,13.6 C8.93137085,13.6 9.2,13.3313708 9.2,13 L9.2,9.4 C9.2,9.06862915 8.93137085,8.8 8.6,8.8 Z M11,8.8 C10.6686292,8.8 10.4,9.06862915 10.4,9.4 L10.4,13 C10.4,13.3313708 10.6686292,13.6 11,13.6 C11.3313708,13.6 11.6,13.3313708 11.6,13 L11.6,9.4 C11.6,9.06862915 11.3313708,8.8 11,8.8 Z" id="Shape" fill="#FFFFFF"></path>
                    <path d="M7.754,5.2 L8.774,4.18 C8.88624286,4.06548661 9.03965246,4.00066565 9.2,4 L10.4,4 C10.5582616,4.00225423 10.7092217,4.06695144 10.82,4.18 L11.852,5.2 L14,5.2 C14.3313708,5.2 14.6,5.46862915 14.6,5.8 C14.6,6.13137085 14.3313708,6.4 14,6.4 L5.6,6.4 C5.26862915,6.4 5,6.13137085 5,5.8 C5,5.46862915 5.26862915,5.2 5.6,5.2 L7.754,5.2 Z" id="Path" fill="#FFFFFF"></path>
                </svg>
            </a>`;
        } else if ($('body.cases')[0]) {
            breadcrumb = `<div class="breadcrumbs flex items-center">
                <a href="index.html" class="flex items-center">
                    <svg class="breadcrumbs-icn" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <circle id="Oval" fill="#000000" cx="10" cy="10" r="10"></circle>
                        <path d="M11.7,13.3 C11.9985902,13.6981203 11.9589987,14.2552148 11.6071068,14.6071068 C11.2552148,14.9589987 10.6981203,14.9985902 10.3,14.7 L6.3,10.7 C5.91885712,10.3111565 5.91885712,9.68884351 6.3,9.3 L10.3,5.3 C10.6981203,5.00140977 11.2552148,5.04100126 11.6071068,5.39289322 C11.9589987,5.74478517 11.9985902,6.3018797 11.7,6.7 L8.42,10 L11.72,13.3 L11.7,13.3 Z" id="Path" fill="#FFFFFF"></path>
                    </svg>
                </a>
                <span class="breadcrumbs-previous">Oversikt</span>
                <span class="breadcrumbs-current">→</span>
                <span class="breadcrumbs-current">Alle saker</span>
            </div>
            <button id="add-card" class="breadcrumbs-action">
                <svg class="breadcrumbs-icn" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <circle id="Oval" fill="#000000" cx="10" cy="10" r="10"></circle>
                    <path d="M14.1666667,9.16666667 C14.626904,9.16666667 15,9.53976271 15,10 C15,10.4602373 14.626904,10.8333333 14.1666667,10.8333333 L10.8333333,10.8333333 L10.8333333,14.1666667 C10.8333333,14.626904 10.4602373,15 10,15 C9.53976271,15 9.16666667,14.626904 9.16666667,14.1666667 L9.16666667,10.8333333 L5.83333333,10.8333333 C5.37309604,10.8333333 5,10.4602373 5,10 C5,9.53976271 5.37309604,9.16666667 5.83333333,9.16666667 L9.16666667,9.16666667 L9.16666667,5.83333333 C9.16666667,5.37309604 9.53976271,5 10,5 C10.4602373,5 10.8333333,5.37309604 10.8333333,5.83333333 L10.8333333,9.16666667 L14.1666667,9.16666667 Z" id="Path" fill="#FFFFFF"></path>
                </svg>
            </button>`; 
        }
        
        $(container).append(breadcrumb);
    }
}

export default Breadcrumb;