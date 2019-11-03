class Footer {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    /* function for generating footer */
    generateFooter(container) {

        const footer = '<span>En oppgave av Daniel Wendt Kjellid. Høst 2019.</span>' 

        $(container).append(footer);
    }
}

export default Footer;