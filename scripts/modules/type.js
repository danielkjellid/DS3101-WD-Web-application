class Type {

    constructor(id, name, imgUrl, alt) {
        this.id = id;
        this.name = name;
        this.imgUrl = imgUrl;
        this.alt = alt;
    }

    /* get methods */
    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getImgUrl() {
        return this.getImgUrl;
    }

    getAlt() {
        return this.alt;
    }

    /* set methods */
    setId(id) {
        this.id = id;
    }

    setName(name) {
        this.name = name;
    }

    setImgUrl(imgUrl) {
        this.imgUrl = this.imgUrl;
    }

    setAlt(alt) {
        this.alt = alt;
    }

    /* class specific utilities */
}

export default Type;