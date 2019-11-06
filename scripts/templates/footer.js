/* code for handleing breadcrumbs on site */
class Footer {

    /* default constructor */
    constructor(name) {
        this.name = name;
    }

    /* function for generating footer */
    generateFooter(container) {

        /* defined as a constant as its not dynamic */
        const footer = '<span>En oppgave av Daniel Wendt Kjellid. Høst 2019.</span>' 

        /* append footer to whatever container is stated when calling the method */
        $(container).append(footer);
    }
}

export default Footer;