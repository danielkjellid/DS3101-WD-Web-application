class Header {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    /* function for generating header */
    generateHeader(container) {
        /* formatted for readability */
        const header = '<div class="flex justify-between items-center">' + 
                            '<div class="header-item">' + 
                                '<!-- alt tekst for UU -->' +
                                '<img class="logo" src="img/logo.png" alt="Politiets sikkerhetstjeneste logo">' +
                            '</div>' +
                            '<button class="header-item menu-btn flex items-center">' +
                                '<svg class="menu-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
                                    '<path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>' +
                                '</svg>' +
                            '</button>' +
                        '</div>' +
                        '<nav class="nav hidden">' + 
                            '<a href="#" class="nav-item active">Oversikt</a>' +
                            '<a href="#" class="nav-item">Saker</a>' + 
                            '<a href="#" class="nav-item">Ettersøkte</a>' +
                        '</nav>';

        $(container).append(header);
    }
}

export default Header;