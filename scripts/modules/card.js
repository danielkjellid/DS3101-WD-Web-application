class Card {

    constructor(id, status, title, type, imgUrl, alt, graded, date, address) {
        this.id = id;
        this.status = status;
        this.title = title;
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

    /* class specific utilities */
    formatStatus() {
        if (this.getStatus() == 'Ikke løst') {
            return 'case-card-content-status-negative';
        } else {
            return 'case-card-content-status-positive'
        }
    }

    /* temporary storage function is used to create a temporary object in local storage. */
    /* this is to be able to grab specific card details when editing card in edit.html */
    createTempStorage() {

        /* create new card object */
        let card = new Card(this.getId(), this.getStatus(), this.getTitle(), this.getType(), this.getImgUrl(), this.getAlt(), this.getGradedLevel(), this.getDate(), this.getAddress());

        /* check if card object already exists in localstorage */
        if (localStorage.getItem('card') === null) {

            /* if it does not exist, create a new one */
            localStorage.setItem('card', JSON.stringify(card));
        } else {
            /* if it does exist, remove the previous one, and replace it with the new one */
            /* this is to overwrite the card object if a different card is clicked while a previous card is stored */
            localStorage.removeItem('card');
            localStorage.setItem('card', JSON.stringify(card));
        }
    }

    generateCard(container) {

        /* storing createTempStorage in another function for easy access */
        let tempStorage = () => {this.createTempStorage()};

        /* card structure, formatted for readability */
        let generateCard = `<article class="case-card">
                                <div>
                                    <!-- Ivaretar UU ved alt tekst -->
                                    <img class="case-card-img" src="${this.getImgUrl()}" alt="${this.getAlt()}">
                                </div> 
                                <div class="case-card-content">
                                    <div class="flex justify-between items-center">
                                        <!-- Ivaretar UU ved hjelp av grå farge mot hvit bakgrunn -->
                                        <p class="case-card-content-type"> ${this.getType()} • Sak ${this.getId()}</p>
                                        <div>
                                            <!-- Ivaretar UU ved sterk rødfarge på lysrød bakgrunn -->
                                            <span class="${this.formatStatus()} flex items-center">${this.getStatus()}</span>
                                        </div>
                                    </div>
                                    <h2 class="case-card-content-title">${this.getTitle()}</h2>
                                </div>
                                <div class="case-card-meta">
                                    <div class="flex items-center case-card-meta-content">
                                        <!-- Ivaretar UU ved hjelp av sterk grå farge mot hvit bakgrunn på ikon -->
                                        <svg class="case-card-meta-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/>
                                        </svg>
                                        <span>${this.getAddress()}</span>
                                    </div>
                                    <div class="flex items-center case-card-meta-content">
                                        <!-- Ivaretar UU ved hjelp av sterk grå farge mot hvit bakgrunn på ikon -->
                                        <svg class="case-card-meta-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M13 16v5a1 1 0 0 1-1 1H9l-3-6a2 2 0 0 1-2-2 2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2 0-1.1.9-2 2-2h7.59l4-4H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2.41l-4-4H13zm0-2h1.41l4 4H20V4h-1.59l-4 4H13v6zm-2 0V8H6v2H4v2h2v2h5zm0 2H8.24l2 4H11v-4z"/>
                                        </svg>
                                        <span>Gradert ${this.getGradedLevel()}</span>
                                    </div>
                                    <div class="flex items-center case-card-meta-content">
                                        <!-- Ivaretar UU ved hjelp av sterk grå farge mot hvit bakgrunn på ikon -->
                                        <svg class="case-card-meta-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8.41l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0v3.59z"/>
                                        </svg>
                                        <span>${this.getDate()}</span>
                                    </div>
                                </div>
                                <div class="case-card-action">
                                    <!-- Ivaretar UU ved hjelp av hvit farge mot mørk grå bakgrunn på ikon -->
                                    <a id="card-${this.getId()}" href="#" class="case-card-action-btn">Se detaljer</a> 
                                </div> 
                            </article>`;

        /* append cards to 'container' */
        $(container).append(generateCard);

        /* event handler for clicking "Se detaljer" button on each card */
        $('#card-' + this.getId()).on('click', function() {
            /* call tempStorage (and createTempStorage) to store object */
            tempStorage();
        });
    }
}

export default Card;
