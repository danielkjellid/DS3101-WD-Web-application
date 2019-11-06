class Card {

    /* Card constructor */
    constructor(id, status, title, desc, type, imgUrl, alt, graded, date, address) {
        this.id = id;
        this.status = status;
        this.title = title;
        this.desc = desc;
        this.type = type;
        this.imgUrl = imgUrl;
        this.alt = alt;
        this.graded = graded;
        this.date = date;
        this.address = address;
    }

    /* get methods */
    getId() {
        return this.id;
    }

    getStatus() {
        return this.status;
    }

    getTitle() {
        return this.title;
    }

    getDesc() {
        return this.desc;
    }

    getType() {
        return this.type;
    }

    getImgUrl() {
        return this.imgUrl;
    }

    getAlt() {
        return this.alt;
    }

    getGradedLevel() {
        return this.graded;
    }

    getDate() {
        return this.date;
    }

    getAddress() {
        return this.address;
    }

    getFormattedAddress() {
        return this.address.streetname + ' ' + this.address.streetnumber + ', ' + this.address.place;
    }

    getStreetName() {
        return this.address.streetname;
    }

    getStreetNumber() {
        return this.address.streetnumber;
    }

    getZip() {
        return this.address.zip;
    }

    getPlace() {
        return this.address.place;
    }

    /* set methods */
    setId(id) {
        this.id = id; 
    }

    setStatus(status) {
        this.status = status;
    }

    setTitle(title) {
        this.title = title;
    }

    setDesc(desc) {
        this.desc = desc;
    }

    setType(type) {
        this.type = type;
    }

    setImgUrl(imgUrl) {
        this.imgUrl = imgUrl;
    }

    setAlt(alt) {
        this.alt = alt;
    }

    setGradedLevel(gradedLevel) {
        this.graded = gradedLevel;
    }

    setDate(date) {
        this.date = date;
    }

    setAddress(address) {
        this.address = address;
    }
}

export default Card;
