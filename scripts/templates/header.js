/* code for handleing header on site */
class Header {

    constructor(name) {
        this.name = name;
    }

    /* function for generating header */
    generateHeader(container) {
        /* formatted for readability */
        const header = `<div class="flex justify-between items-center">
                            <a href="index.html" class="header-item">
                                <!-- alt text to preserve UD -->
                                <img class="logo" src="img/logo.png" alt="Politiets sikkerhetstjeneste logo">
                            </a>
                            <button type="button" class="header-item menu-btn flex items-center">
                                <svg class="menu-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                                </svg>
                            </button>
                        </div>
                        <nav class="nav hidden"> 
                            <a href="index.html" class="nav-item">Oversikt</a>
                            <a href="cards.html" class="nav-item">Saker</a>
                        </nav>`;

        /* append header to container defined when calling method */
        $(container).append(header);
    }
}

export default Header;