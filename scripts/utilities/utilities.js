import Card from '../modules/card.js';

class Utility {
    constructor (name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    /* function for adding '0' before int if the int is singular, so that it becomes 01:00 isntead of 1:1 */
    formatDateTime = (time) => { return ('0' + time).slice(-2); }

    /* function for formatting dates */
    formatDate = (date) => {
        let monthInts = [
            '01', '02', '03',
            '04', '05', '06',
            '07', '08', '09',
            '10', '11', '12'
        ];

        let day = this.formatDateTime(date.getDate());
        let monthIndex = date.getMonth();
        let year = date.getFullYear();
        let hours = this.formatDateTime(date.getHours());
        let minutes = this.formatDateTime(date.getMinutes());

        return day + '.' + monthInts[monthIndex] + '.' + year + ' ' + hours + ':' + minutes; /* output example: 22.10.2019 15:20 */

    }

    /* function for getting and parsing key to object from localstorage */
    getAndParse = (key) => { return JSON.parse(localStorage.getItem(key)); }

    toggleModal = () => {

        if ($('body').hasClass('modal-open')) {
            $('body').removeClass('modal-open');
            $('div.modal').addClass('hidden');
        } else {
            $('body').addClass('modal-open');
            $('div.modal').removeClass('hidden');
        }
    }

    toggleMenu = () => {
        if ($('nav.nav').hasClass('hidden')) {
            $('nav.nav').removeClass('hidden');
            $('nav.nav').addClass('block');
        } else {
            $('nav.nav').removeClass('block');
            $('nav.nav').addClass('hidden');
        }
    }

    /* temporary storage function is used to create a temporary object in local storage. */
    /* this is to be able to grab specific card details when editing card in edit.html */
    createTempStorage(id, status, title, desc, type, imgUrl, alt, gradedLevel, date, address) {

        /* create new card object */
        let card = new Card(id, status, title, desc, type, imgUrl, alt, gradedLevel, date, address);

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

    generateIndexPage(obj, container, arr) {

        let toggleMenu = () => { return this.toggleMenu(); }

        /* storing createTempStorage in another function for easy access */
        let tempStorage = () => {return this.createTempStorage(obj.getId(), obj.getStatus(), obj.getTitle(), obj.getDesc(), obj.getType(), obj.getImgUrl(), obj.getAlt(), obj.getGradedLevel(), obj.getDate(), obj.getAddress())};

        let deleteCard = () => { return this.deleteCard(obj, arr); }
        
        let formatStatus = () => {
            if (obj.getStatus() == 'Ikke løst') {
                return 'case-card-content-status-negative';
            } else {
                return 'case-card-content-status-positive'
            }
        }
        
        
            /* card structure, formatted for readability */
            let generateCard = `<article class="case-card">
                <div>
                    <!-- Ivaretar UU ved alt tekst -->
                    <img class="case-card-img" src="${obj.getImgUrl()}" alt="${obj.getAlt()}">
                </div> 
                <div class="case-card-content">
                    <div class="flex justify-between items-center">
                        <!-- Ivaretar UU ved hjelp av grå farge mot hvit bakgrunn -->
                        <p class="case-card-content-type"> ${obj.getType()} • Sak ${obj.getId()}</p>
                        <div>
                            <!-- Ivaretar UU ved sterk rødfarge på lysrød bakgrunn -->
                            <span class="${formatStatus()} flex items-center">${obj.getStatus()}</span>
                        </div>
                    </div>
                    <h2 class="case-card-content-title">${obj.getTitle()}</h2>
                </div>
                <div class="case-card-meta">
                    <div class="flex items-center case-card-meta-content">
                        <!-- Ivaretar UU ved hjelp av sterk grå farge mot hvit bakgrunn på ikon -->
                        <svg class="case-card-meta-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/>
                        </svg>
                        <span>${obj.getFormattedAddress()}</span>
                    </div>
                    <div class="flex items-center case-card-meta-content">
                        <!-- Ivaretar UU ved hjelp av sterk grå farge mot hvit bakgrunn på ikon -->
                        <svg class="case-card-meta-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M13 16v5a1 1 0 0 1-1 1H9l-3-6a2 2 0 0 1-2-2 2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2 0-1.1.9-2 2-2h7.59l4-4H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2.41l-4-4H13zm0-2h1.41l4 4H20V4h-1.59l-4 4H13v6zm-2 0V8H6v2H4v2h2v2h5zm0 2H8.24l2 4H11v-4z"/>
                        </svg>
                        <span>Gradert ${obj.getGradedLevel()}</span>
                    </div>
                    <div class="flex items-center case-card-meta-content">
                        <!-- Ivaretar UU ved hjelp av sterk grå farge mot hvit bakgrunn på ikon -->
                        <svg class="case-card-meta-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8.41l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0v3.59z"/>
                        </svg>
                        <span>Opprettet ${obj.getDate()}</span>
                    </div>
                </div>
                <div class="case-card-action flex items-center justify-between">
                    <div class="case-card-action-btn-container w-1">
                        <!-- Ivaretar UU ved hjelp av hvit farge mot mørk grå bakgrunn på ikon -->
                        <a href="edit.html" class="card-${obj.getId()} case-card-action-btn">Se detaljer</a>
                    </div>
                    <div class="flex justify-end items-center case-card-action-icn-container">
                        <a href="cards.html" class="delete-card-${obj.getId()} flex items-center mr-2">
                            <svg class="icn actions-bar" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <circle id="Oval" fill="#000000" cx="10" cy="10" r="10"></circle>
                                <path d="M5.6,5.8 L14,5.8 L13.466,14.872 C13.4278642,15.5064687 12.9016127,16.0011451 12.266,16.000002 L7.34,16.000002 C6.7043873,16.0011451 6.17813579,15.5064687 6.14,14.872 L5.6,5.8 Z M8.6,8.8 C8.26862915,8.8 8,9.06862915 8,9.4 L8,13 C8,13.3313708 8.26862915,13.6 8.6,13.6 C8.93137085,13.6 9.2,13.3313708 9.2,13 L9.2,9.4 C9.2,9.06862915 8.93137085,8.8 8.6,8.8 Z M11,8.8 C10.6686292,8.8 10.4,9.06862915 10.4,9.4 L10.4,13 C10.4,13.3313708 10.6686292,13.6 11,13.6 C11.3313708,13.6 11.6,13.3313708 11.6,13 L11.6,9.4 C11.6,9.06862915 11.3313708,8.8 11,8.8 Z" id="Shape" fill="#FFFFFF"></path>
                                <path d="M7.754,5.2 L8.774,4.18 C8.88624286,4.06548661 9.03965246,4.00066565 9.2,4 L10.4,4 C10.5582616,4.00225423 10.7092217,4.06695144 10.82,4.18 L11.852,5.2 L14,5.2 C14.3313708,5.2 14.6,5.46862915 14.6,5.8 C14.6,6.13137085 14.3313708,6.4 14,6.4 L5.6,6.4 C5.26862915,6.4 5,6.13137085 5,5.8 C5,5.46862915 5.26862915,5.2 5.6,5.2 L7.754,5.2 Z" id="Path" fill="#FFFFFF"></path>
                            </svg>
                        </a>
                        <a href="edit.html" class="card-${obj.getId()} flex items-center">
                            <svg class="icn actions-bar" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <circle id="Oval" fill="#000000" cx="10" cy="10" r="10"></circle>
                                <path d="M6,10.9929286 C6.00187852,10.8610439 6.05579287,10.7352438 6.15,10.6429286 L11.65,5.14292858 C11.8444218,4.95235714 12.1555782,4.95235714 12.35,5.14292858 L13.85,6.64292858 C14.0405714,6.83735033 14.0405714,7.14850682 13.85,7.34292858 L8.35,12.8429286 C8.25768477,12.9371357 8.13188463,12.9910501 8,12.9929286 L6.5,12.9929286 C6.22385763,12.9929286 6,12.769071 6,12.4929286 L6,10.9929286 L6,10.9929286 Z" id="Path" fill="#FFFFFF"></path>
                                <rect id="Rectangle" fill="#FFFFFF" x="5" y="13.9929286" width="10" height="1" rx="0.5"></rect>
                            </svg>
                        </a>
                    </div> 
                </div> 
            </article>`;

        /* append cards to 'container' */
        $(container).append(generateCard);

        /* event handler for clicking "Se detaljer" button on each card */
        $('a.card-' + obj.getId()).on('click', function() {
            /* call tempStorage (and createTempStorage) to store object */
            tempStorage();
        });

        $('a.delete-card-' + obj.getId()).on('click', function() {
            if (window.confirm("Are you sure you want to delete the card?") == true) {
                deleteCard();
            }
        });

        $('button.menu-btn').on('click', function() {
            toggleMenu();
        });
    }

    generateCardsPage(obj, container, arr) {
        this.generateIndexPage(obj, container, arr);
    }

    generateAddForm(container, types, gradedLevels, statuses, arr) {

        let toggleModal = () => { return this.toggleModal() }

        let addCard = () => { return this.addCard(arr, types) }

        /* function for looping through parsed localstorage objects, and appending the names to select container */
        let loopAndAppend = (items, container) => {
            items.forEach(function(item) {
                $(container).append(new Option(item.name, item.name, false, false));      
            });
        }

        /* variable for holding html code. Formatted for readability */
        let generateForm = `<div class="modal hidden">
                                <div class="modal-content">
                                        <div class="modal-header flex items-center justify-between">
                                            <h1>Lag ny oppgave</h1>
                                            <button type="button" id="close-modal" class="flex items-center">
                                                <svg class="modal-header-close-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-close">
                                                    <path class="secondary" fill-rule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <form id="add-form" action="">
                                            <div class="modal-body">
                                                <div class="form-section basic-section">
                                                    <div class="form-group type-group">
                                                        <label for="type-select">Kategori</label>
                                                        <select class="w-1 type-select" id="type-select">
                                                            <!-- Created by DOM -->
                                                        </select>
                                                    </div>
                                                    <div class="form-group title-group">
                                                        <label for="title">Tittel</label>
                                                        <input class="w-1" type="text" id="title" placeholder="Tittel">
                                                    </div>
                                                    <div class="form-group desc-group">
                                                        <label for="desc">Beskrivelse</label>
                                                        <textarea class="w-1" id="desc" placeholder="Beskrivelse"></textarea>
                                                    </div>
                                                </div>
                                                <div class="form-section address-section">
                                                    <div class="form-group street-group">
                                                        <div class="flex w-1">
                                                            <div class="w-4/5 mr-2">
                                                                <label for="streetname">Gate</label>
                                                                <input class="w-1" type="text" id="streetname" placeholder="Gatenavn">
                                                            </div>
                                                            <div class="w-1/5">
                                                                <label for="streetnumber">Nr</label>
                                                                <input class="w-1" type="text" id="streetnumber" placeholder="Nr">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group zipplace-group">
                                                        <div class="flex w-1">
                                                            <div class="w-1/2 mr-2">
                                                                <label for="zip">Postkode</label>
                                                                <input class="w-1" type="text" id="zip" placeholder="Postkode">
                                                            </div>
                                                            <div class="w-1/2">
                                                                <label for="place">Sted</label>
                                                                <input class="w-1" type="text" id="place" placeholder="Poststed">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-section misc-section">
                                                    <div class="form-group grade-group">
                                                        <label for="graded-level-select">Graderingsnivå</label>
                                                        <select id="graded-level-select" class="w-1">
                                                            <!-- Options created by DOM -->
                                                        </select>
                                                    </div>
                                                    <div class="form-group status-group">
                                                        <label for="status-select">Status</label>
                                                        <select id="status-select" class="w-1">
                                                            <!-- Options created by DOM -->
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="submit" class="modal-submit-btn">Legg til kort</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>`;

        /* append genereateForm variable to container */
        $(container).append(generateForm);

        /* add content to selects */
        loopAndAppend(types, '#type-select');
        loopAndAppend(gradedLevels, '#graded-level-select');
        loopAndAppend(statuses, '#status-select');

        $('button#add-card').on('click', function() {
            toggleModal();
        });

        $('button#close-modal').on('click', function() {
            toggleModal();
        });

        $('#add-form').submit(function(e) {
            addCard();
        });
    }

    generateEditPage(obj, container, types, gradedLevels, statuses, arr) {

        let toggleMenu = () => { return this.toggleMenu(); }

        /* easy access to getType class method */
        let getType = () => { return obj.getType(); }

        /* easy access to getGradedLevel class method */
        let getGradedLevel = () => { return obj.getGradedLevel(); }

        /* easy access to getStatus class method */
        let getStatus = () => { return obj.getStatus(); }

        /* function for looping through parsed localstorage objects, and appending the names to select container */
        let loopAndAppend = (items, func, container) => {
            items.forEach(function(item) {

                /* if function, for example getStatus() is equal to item name, make item seleceted */
                if (func == item.name) {
                    $(container).append(new Option(item.name, item.name, false, true));
                } else {
                    $(container).append(new Option(item.name, item.name, false, false));
                }
            });
        }

        /* easy access to saveCard class method */
        let saveCard = () => { return this.saveCard(obj, arr, types); }

        let deleteCard = () => {return this.deleteCard(obj, arr); }

        /* variable for holding html code. Formatted for readability */
        let generateForm = `<div class="edit-form">
                                <div>
                                    <img class="edit-form-img" src="${obj.getImgUrl()}" alt="${obj.getAlt()}">
                                </div>
                                <form id="edit-form" action="">
                                    <div class="form-section basic-section">
                                        <div class="form-group type-group">
                                            <label for="type-select">Kategori</label>
                                            <select class="w-1 type-select" id="type-select">
                                                <!-- Created by DOM -->
                                            </select>
                                        </div>
                                        <div class="form-group title-group">
                                            <label for="title">Tittel</label>
                                            <input class="w-1" type="text" id="title" placeholder="Tittel" value="${obj.getTitle()}">
                                        </div>
                                        <div class="form-group desc-group">
                                            <label for="desc">Beskrivelse</label>
                                            <textarea class="w-1" id="desc" placeholder="Beskrivelse">${obj.getDesc()}</textarea>
                                        </div>
                                    </div>
                                    <div class="form-section address-section">
                                        <div class="form-group street-group">
                                            <div class="flex w-1">
                                                <div class="w-4/5 mr-2">
                                                    <label for="streetname">Gate</label>
                                                    <input class="w-1" type="text" id="streetname" placeholder="Gatenavn" value="${obj.getStreetName()}">
                                                </div>
                                                <div class="w-1/5">
                                                    <label for="streetnumber">Nr</label>
                                                    <input class="w-1" type="text" id="streetnumber" placeholder="Nr" value="${obj.getStreetNumber()}">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group zipplace-group">
                                            <div class="flex w-1">
                                                <div class="w-1/2 mr-2">
                                                    <label for="zip">Postkode</label>
                                                    <input class="w-1" type="text" id="zip" placeholder="Postkode" value="${obj.getZip()}">
                                                </div>
                                                <div class="w-1/2">
                                                    <label for="place">Sted</label>
                                                    <input class="w-1" type="text" id="place" placeholder="Poststed" value="${obj.getPlace()}">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-section misc-section">
                                        <div class="form-group grade-group">
                                            <label for="graded-level-select">Graderingsnivå</label>
                                            <select id="graded-level-select" class="w-1">
                                                <!-- Options created by DOM -->
                                            </select>
                                        </div>
                                        <div class="form-group status-group">
                                            <label for="status-select">Status</label>
                                            <select id="status-select" class="w-1">
                                                <!-- Options created by DOM -->
                                            </select>
                                        </div>
                                        <div class="flex justify-center">
                                            <span class="form-meta-text">Opprettet ${obj.getDate()}</span>
                                        </div>
                                    </div>
                                    <div class="edit-form-footer">
                                        <button type="submit" class="edit-form-submit-btn">Lagre</button>
                                    </div>
                                </form>
                            </div>`;

        /* append genereateForm variable to container */
        $(container).append(generateForm);

        /* add content to selects */
        loopAndAppend(types, getType(), '#type-select');
        loopAndAppend(gradedLevels, getGradedLevel(), '#graded-level-select');
        loopAndAppend(statuses, getStatus(), '#status-select');

        $('a#delete-card').on('click', function(){

            if (window.confirm("Are you sure you want to delete the card?") == true) {
                deleteCard();
            }
        });

        /* event handler for saving form */
        $('#edit-form').submit(function() {
            saveCard();
        });

        $('button.menu-btn').on('click', function() {
            toggleMenu();
        });
    }

    saveCard(obj, arr, types) {

        /* gather values from form */
        let statusValue = $('select#status-select').val();
        let titleValue = $('input#title').val();
        let descValue = $('textarea#desc').val();
        let typeValue = $('select#type-select').val();
        let imgUrlValue = types[types.findIndex(n => n.name === typeValue)].imgUrl;
        let altValue = types[types.findIndex(n => n.name === typeValue)].alt;
        let gradedLevelValue = $('select#graded-level-select').val();
        let streetNameValue = $('input#streetname').val();
        let streetNumberValue = $('input#streetnumber').val();
        let zipValue = $('input#zip').val();
        let placeValue = $('input#place').val();
        let addressValue = {streetname: streetNameValue, streetnumber: streetNumberValue, zip: zipValue, place: placeValue};

        /* create and replace temporary storage object (card) with details from form */
        this.createTempStorage(obj.getId(), statusValue, titleValue, descValue, typeValue, imgUrlValue, altValue, gradedLevelValue, obj.getDate(), addressValue);

        /* check of cards key exists in localstorage */
        if (localStorage.getItem('cards') === null) {

            /* if not, throw error */
            alert('There was an error saving the form due to not finding the cards array in localstorage');
        } else {

            if (localStorage.getItem('card') == null) {
                /* if not, throw error */
                alert('There was an error saving the form due to not finding the card array in localstorage');
            } else {
                /* get and parse temporary card object */
                let card = this.getAndParse('card');

                /* get parsed array from function */
                let cards = arr;

                /* find the index of the matching id's in the cards array */
                let index = cards.findIndex(obj => obj.id === card.id);

                /* replace object found with card created from form values */
                cards.splice(index, 1, card);

                /* remove the cards array from local storage, before readding it with new details */
                localStorage.removeItem('cards');
                localStorage.setItem('cards', JSON.stringify(cards));
            }
        }
    }

    addCard(arr, types) {

        let maxId = 0;
        arr.map(function(obj) {
            if (obj.id > maxId) { 
                maxId = obj.id;
            }
        });

        /* gather values from form */
        let statusValue = $('select#status-select').val();
        let titleValue = $('input#title').val();
        let descValue = $('textarea#desc').val();
        let typeValue = $('select#type-select').val();
        let imgUrlValue = types[types.findIndex(n => n.name === typeValue)].imgUrl;
        let altValue = types[types.findIndex(n => n.name === typeValue)].alt;
        let gradedLevelValue = $('select#graded-level-select').val();
        let streetNameValue = $('input#streetname').val();
        let streetNumberValue = $('input#streetnumber').val();
        let zipValue = $('input#zip').val();
        let placeValue = $('input#place').val();
        let addressValue = {streetname: streetNameValue, streetnumber: streetNumberValue, zip: zipValue, place: placeValue};

        /* create and replace temporary storage object (card) with details from form */
        this.createTempStorage(maxId+1, statusValue, titleValue, descValue, typeValue, imgUrlValue, altValue, gradedLevelValue, this.formatDate(new Date()), addressValue);

        if (localStorage.getItem('cards') === null) {

            alert("There was an error creating card due to not finding the cards array in localstorage");
        } else {
             
            if (localStorage.getItem('card') === null) {
                alert("There was an error creating card due to not finding the card array in localstorage");
            } else {

                let card = this.getAndParse('card');
                let cards = arr;

                cards.push(card);

                localStorage.removeItem('cards');
                localStorage.setItem('cards', JSON.stringify(cards));
            }
        }
    }

    deleteCard(obj, arr) {
        if (localStorage.getItem('cards') === null) {

            /* if not, throw error */
            alert('There was an error deleting the card due to not finding the cards array in localstorage');
        } else {
            if (localStorage.getItem('card') === null) {
                
                alert('There was an error deleting the card due to not finding the card array in localstorage')
            } else {
    
                /* get parsed array from function */
                let cards = arr;

                /* find the index of the matching id's in the cards array */
                let index = cards.findIndex(object => object.id === obj.getId());

                /* replace object found with card created from form values */
                cards.splice(index, 1);

                /* remove the cards array from local storage, before readding it with new details */
                localStorage.removeItem('cards');
                localStorage.setItem('cards', JSON.stringify(cards));
            }
        }
    }
}

export default Utility;