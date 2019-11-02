class Card {

    constructor(id, status, title, type, graded, date, address) {
        this.id = id;
        this.status = status;
        this.title = title;
        this.type = type;
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

    setGradedLevel(gradedLevel) {
        this.graded = gradedLevel;
    }

    setDate(date) {
        this.date = date;
    }

    setAddress(address) {
        this.address = address;
    }

    formatStatus() {
        if (this.getStatus() == 'Ikke løst') {
            return 'case-card-content-status-negative';
        } else {
            return 'case-card-content-status-positive'
        }
    }
}

function generateCard(card, container) {
    /* card structure, formatted for readability */
    let generateCard = `<article class="case-card">
                            <div>
                                <img class="case-card-img" src="" alt="">
                            </div> 
                            <div class="case-card-content">
                                <div class="flex justify-between items-center">
                                    <p class="case-card-content-type"> ${card.getType()} • Sak ${card.getId()}</p>
                                    <div>
                                        <span class="${card.formatStatus()} flex items-center">${card.getStatus()}</span>
                                    </div>
                                </div>
                                <h2 class="case-card-content-title">${card.getTitle()}</h2>
                            </div>
                            <div class="case-card-meta">
                                <div class="flex items-center case-card-meta-content">
                                    <svg class="case-card-meta-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/>
                                    </svg>
                                    <span>${card.getAddress()}</span>
                                </div>
                                <div class="flex items-center case-card-meta-content">
                                    <svg class="case-card-meta-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M13 16v5a1 1 0 0 1-1 1H9l-3-6a2 2 0 0 1-2-2 2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2 0-1.1.9-2 2-2h7.59l4-4H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2.41l-4-4H13zm0-2h1.41l4 4H20V4h-1.59l-4 4H13v6zm-2 0V8H6v2H4v2h2v2h5zm0 2H8.24l2 4H11v-4z"/>
                                    </svg>
                                    <span>Gradert ${card.getGradedLevel()}</span>
                                </div>
                                <div class="flex items-center case-card-meta-content">
                                    <svg class="case-card-meta-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8.41l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0v3.59z"/>
                                    </svg>
                                    <span>${card.getDate()}</span>
                                </div>
                            </div>
                            <div class="case-card-action"> 
                                <a href="$" class="case-card-action-btn">Se detaljer</a> 
                                </div> 
                            </article>`;

    /* append cards to 'container' */
    $(container).append(generateCard);
}

export default Card;
export { generateCard }
