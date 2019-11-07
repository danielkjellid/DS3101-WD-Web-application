import Card from '../modules/card.js';

/* utility class for handleing most of the site functions/methods */
class Utility {

    /* default constructor */
    constructor (name) {
        this.name = name;
    }

    /* this method is used to format the datetime by adding '0' before int if the int is singular */
    /* This means that the output becomes 01:00 isntead of 1:1 */
    formatDateTime = (time) => { return ('0' + time).slice(-2); }

    /* this method is used to format the date into a scandinavian format */
    /* it takes all the parameters from the inputed date, and decsonstruct it before constructing it */
    formatDate = (date) => {

        /* array containing months */
        let monthInts = [
            '01', '02', '03',
            '04', '05', '06',
            '07', '08', '09',
            '10', '11', '12'
        ];

        /* variables for stroing date values */
        let day = this.formatDateTime(date.getDate());
        let monthIndex = date.getMonth();
        let year = date.getFullYear();
        let hours = this.formatDateTime(date.getHours());
        let minutes = this.formatDateTime(date.getMinutes());

        /* return formatted string */
        return day + '.' + monthInts[monthIndex] + '.' + year + ' ' + hours + ':' + minutes; /* output example: 22.10.2019 15:20 */

    }

    /* method for getting and parsing key to object from localstorage */
    getAndParse = (key) => { return JSON.parse(localStorage.getItem(key)); }

    /* method for toggleing modal */
    /* functions by adding the 'modal-open' class to body, and removes/adds the 'hidden' class form the modal */
    toggleModal = (modal) => {

        /* conditional check to figure out whether to add or remove 'hidden' and 'modal-open classes by checking if the body already has the class */
        if ($('body').hasClass('modal-open')) {
            $('body').removeClass('modal-open');
            $(modal).addClass('hidden');
        } else {
            $('body').addClass('modal-open');
            $(modal).removeClass('hidden');
        }
    }

    /* method for opening and closing the burger menu on small devices */
    /* functions by adding the 'block' class to nav with class nav, and removes/adds the 'hidden' class form the nav if it exists */
    toggleMenu() {

        /* conditional check to figure out wheter to add or remove 'hidden' and replacing it with 'block', or the other way around */
        if ($('nav.nav').hasClass('hidden')) {
            $('nav.nav').removeClass('hidden');
            $('nav.nav').addClass('block');
        } else {
            $('nav.nav').removeClass('block');
            $('nav.nav').addClass('hidden');
        }
    }

    /* method for updating the amount of cases with a certain status */
    /* functions by taking an array, and filter by id where status is equal to string, and getting amount of objects found */
    updateCount = (arr) => {

        /* getting amount, and sets it as inner html of the span.count-x */
        $('span.count-not-solved').html(arr.filter(obj => obj.status == 'Ikke løst').length);
        $('span.count-solved').html(arr.filter(obj => obj.status == 'Løst').length);
    }

    /* save card method is used to save/replace objects in the array defined */
    /* it does so by creating a temporary object with the ID of card saved, replaces card with the same id in the array
    and then replaces it */
    saveCard(obj, arr, types) {

        /* gather values from form */
        let statusValue = $('select.status-select').val();
        let titleValue = $('input.title').val();
        let descValue = $('textarea.desc').val();
        let typeValue = $('select.category-select').val();
        let imgUrlValue = types[types.findIndex(x => x.name === typeValue)].imgUrl; /* find the index of the name that matches the cateogry selected */
        let altValue = types[types.findIndex(x => x.name === typeValue)].alt; /* find the index of the name that matches the cateogry selected */
        let gradedLevelValue = $('select.graded-level-select').val();
        let streetNameValue = $('input.streetname').val();
        let streetNumberValue = $('input.streetnumber').val();
        let zipValue = $('input.zip').val();
        let placeValue = $('input.place').val();
        let addressValue = {streetname: streetNameValue, streetnumber: streetNumberValue, zip: zipValue, place: placeValue};

        /* create and replace temporary storage object (card) with details from form by calling the createTempStorage method */
        this.createTempStorage(obj.getId(), statusValue, titleValue, descValue, typeValue, imgUrlValue, altValue, gradedLevelValue, obj.getDate(), addressValue);

        /* check of cards key exists in localstorage */
        if (localStorage.getItem('cards') === null) {

            /* if not, throw error */
            alert('There was an error saving the form due to not finding the cards array in localstorage');
        } else {

            /* check if localstorage card key exists */
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

    /* add card method is used to add objects to the defined array */
    /* it functions by grabbing values from form and placing them in a temporary stoarge object, and then adding it to the array */
    addCard(arr, types) {

        /* block of code to get the biggest id in the defined array */
        let maxId = 0;
        /* uses the map method to create a new array */
        arr.map(function(obj) {
            /* as long as the id of the object is higher then maxId, set max id to the highest existing value */
            if (obj.id > maxId) { 
                maxId = obj.id;
            }
        });

        /* gather values from form */
        let statusValue = $('select#status-select').val();
        let titleValue = $('input#title').val();
        let descValue = $('textarea#desc').val();
        let typeValue = $('select#type-select').val();
        let imgUrlValue = types[types.findIndex(x => x.name === typeValue)].imgUrl;
        let altValue = types[types.findIndex(x => x.name === typeValue)].alt;
        let gradedLevelValue = $('select#graded-level-select').val();
        let streetNameValue = $('input#streetname').val();
        let streetNumberValue = $('input#streetnumber').val();
        let zipValue = $('input#zip').val();
        let placeValue = $('input#place').val();
        let addressValue = {streetname: streetNameValue, streetnumber: streetNumberValue, zip: zipValue, place: placeValue};

        /* create and replace temporary storage object (card) with details from form, adding an ID with +1 */
        this.createTempStorage(maxId+1, statusValue, titleValue, descValue, typeValue, imgUrlValue, altValue, gradedLevelValue, this.formatDate(new Date()), addressValue);

        /* conditional check to check if localstorage contains the cards array */
        if (localStorage.getItem('cards') === null) {

            /* if not, throw error */
            alert("There was an error creating card due to not finding the cards array in localstorage");
        } else {

            /* if it does, check if localstorage contains the card object */
            if (localStorage.getItem('card') === null) {

                /* if not, throw error */
                alert("There was an error creating card due to not finding the card array in localstorage");
            } else {

                /* if it does, get and parse the card object, and set cards equal to function parameter */
                let card = this.getAndParse('card');
                let cards = arr;

                /* add card to cards through the push method */
                cards.push(card);

                /* remove the cards array from localstorage, before readding it containing the new object */
                localStorage.removeItem('cards');
                localStorage.setItem('cards', JSON.stringify(cards));
            }
        }
    }

    /* delete card method is used to delete objects from the defined array */
    /* it functions by finding the id of the object passedm abd deleting it from the array */
    deleteCard(obj, arr) {

        /* conditional check to check i localstorage contains the cards array */
        if (localStorage.getItem('cards') === null) {

            /* if not, throw error */
            alert('There was an error deleting the card due to not finding the cards array in localstorage');
        } else {

            /* if it does, check if localstorage contains the card object */
            if (localStorage.getItem('card') === null) {

                /* if not, throw error */
                alert('There was an error deleting the card due to not finding the card array in localstorage')
            } else {

                /* if it does, set cards equal to array passed into function */
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

    /* temporary storage method is used to create a temporary object in local storage. */
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

    /* generate index page method is used to create and append all card objects in localstorage */
    /* takes arguments such as a single card object, which container to append to, types array, gradedLevels array, statuses array and array containing all card objects */
    generateIndexPage(obj, container, types, gradedLevels, statuses, arr) {

        /* function for toggleing menu on smaller screens. Calles method defined in class */
        let toggleMenu = () => { return this.toggleMenu(); }

        /* function for generating edit form inside modal. Calls generateEditForm method defined in class */
        let generateEditForm = () => { return this.generateEditForm(obj, 'main', types, gradedLevels, statuses, arr);}

        /* function for toggleing modal, and appending it to div.edit-modal. Calls toggleModal method defined in class */
        let toggleModal = () => { return this.toggleModal('div.edit-modal') }

        /* functtion for creating an object in localstorage as a temporary storage soloution. Used to edit information about cards */
        let tempStorage = () => {return this.createTempStorage(obj.getId(), obj.getStatus(), obj.getTitle(), obj.getDesc(), obj.getType(), obj.getImgUrl(), obj.getAlt(), obj.getGradedLevel(), obj.getDate(), obj.getAddress())};

        /* function for deleting card object from the object array. Calls deleteCard method defined in class */
        let deleteCard = () => { return this.deleteCard(obj, arr); }

        /* function for updating counter for amount of tasks with a certain status. Calls updateCount method defined in class */
        let updateCount = () => { return this.updateCount(arr); }
        
        /* function for formatting status of card */
        let formatStatus = () => {
            /* conditional check if card has status 'Ikke løst' */
            if (obj.getStatus() == 'Ikke løst') {

                /* if it have, return css class x-negative */
                return 'case-card-content-status-negative';
            } else {

                /* else, return css class x-postivie */
                return 'case-card-content-status-positive'
            }
        }
        
        /* card structure, formatted for readability */
        let generateCard = `<article class="case-card-${obj.getId()} case-card">
                                <div>
                                    <!-- preserves UD by adding alt text -->
                                    <img class="case-card-img" src="${obj.getImgUrl()}" alt="${obj.getAlt()}">
                                </div> 
                                <div class="case-card-content">
                                    <div class="flex justify-between items-center">
                                        <!-- preserved UD by having strong grey color on a white background -->
                                        <p class="case-card-content-type"> ${obj.getType()} • Sak ${obj.getId()}</p>
                                        <div>
                                            <!-- preserves UD by having a strong red color on a light red colored background -->
                                            <span class="${formatStatus()} flex items-center">${obj.getStatus()}</span>
                                        </div>
                                    </div>
                                    <h2 class="case-card-content-title">${obj.getTitle()}</h2>
                                </div>
                                <div class="case-card-meta">
                                    <div class="flex items-center case-card-meta-content">
                                        <!-- preserves UD by having a strong gray color against a white background -->
                                        <svg class="case-card-meta-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/>
                                        </svg>
                                        <span>${obj.getFormattedAddress()}</span>
                                    </div>
                                    <div class="flex items-center case-card-meta-content">
                                        <!-- preserves UD by having a strong gray color against a white background -->
                                        <svg class="case-card-meta-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M13 16v5a1 1 0 0 1-1 1H9l-3-6a2 2 0 0 1-2-2 2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2 0-1.1.9-2 2-2h7.59l4-4H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2.41l-4-4H13zm0-2h1.41l4 4H20V4h-1.59l-4 4H13v6zm-2 0V8H6v2H4v2h2v2h5zm0 2H8.24l2 4H11v-4z"/>
                                        </svg>
                                        <span>Gradert ${obj.getGradedLevel()}</span>
                                    </div>
                                    <div class="flex items-center case-card-meta-content">
                                        <!-- preserves UD by having a strong gray color against a white background -->
                                        <svg class="case-card-meta-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8.41l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0v3.59z"/>
                                        </svg>
                                        <span>Opprettet ${obj.getDate()}</span>
                                    </div>
                                </div>
                                <div class="case-card-action flex items-center justify-between">
                                    <div class="case-card-action-btn-container w-1">
                                        <!-- preserves UD by having a white text color against a dark gray background -->
                                        <a href="edit.html" class="card-${obj.getId()} case-card-action-btn">Se detaljer</a>
                                    </div>
                                    <div class="flex justify-end items-center case-card-action-icn-container">
                                        <!-- preserves UD by having a white text color against a dark gray background -->
                                        <button type="button" class="delete-card-${obj.getId()} flex items-center mr-2">
                                            <svg class="icn actions-bar" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                <circle id="Oval" fill="#000000" cx="10" cy="10" r="10"></circle>
                                                <path d="M5.6,5.8 L14,5.8 L13.466,14.872 C13.4278642,15.5064687 12.9016127,16.0011451 12.266,16.000002 L7.34,16.000002 C6.7043873,16.0011451 6.17813579,15.5064687 6.14,14.872 L5.6,5.8 Z M8.6,8.8 C8.26862915,8.8 8,9.06862915 8,9.4 L8,13 C8,13.3313708 8.26862915,13.6 8.6,13.6 C8.93137085,13.6 9.2,13.3313708 9.2,13 L9.2,9.4 C9.2,9.06862915 8.93137085,8.8 8.6,8.8 Z M11,8.8 C10.6686292,8.8 10.4,9.06862915 10.4,9.4 L10.4,13 C10.4,13.3313708 10.6686292,13.6 11,13.6 C11.3313708,13.6 11.6,13.3313708 11.6,13 L11.6,9.4 C11.6,9.06862915 11.3313708,8.8 11,8.8 Z" id="Shape" fill="#FFFFFF"></path>
                                                <path d="M7.754,5.2 L8.774,4.18 C8.88624286,4.06548661 9.03965246,4.00066565 9.2,4 L10.4,4 C10.5582616,4.00225423 10.7092217,4.06695144 10.82,4.18 L11.852,5.2 L14,5.2 C14.3313708,5.2 14.6,5.46862915 14.6,5.8 C14.6,6.13137085 14.3313708,6.4 14,6.4 L5.6,6.4 C5.26862915,6.4 5,6.13137085 5,5.8 C5,5.46862915 5.26862915,5.2 5.6,5.2 L7.754,5.2 Z" id="Path" fill="#FFFFFF"></path>
                                            </svg>
                                        </button>
                                        <!-- preserves UD by having a white text color against a dark gray background -->
                                        <button type="button" class="card-${obj.getId()} edit-card-${obj.getId()} flex items-center">
                                            <svg class="icn actions-bar" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                <circle id="Oval" fill="#000000" cx="10" cy="10" r="10"></circle>
                                                <path d="M6,10.9929286 C6.00187852,10.8610439 6.05579287,10.7352438 6.15,10.6429286 L11.65,5.14292858 C11.8444218,4.95235714 12.1555782,4.95235714 12.35,5.14292858 L13.85,6.64292858 C14.0405714,6.83735033 14.0405714,7.14850682 13.85,7.34292858 L8.35,12.8429286 C8.25768477,12.9371357 8.13188463,12.9910501 8,12.9929286 L6.5,12.9929286 C6.22385763,12.9929286 6,12.769071 6,12.4929286 L6,10.9929286 L6,10.9929286 Z" id="Path" fill="#FFFFFF"></path>
                                                <rect id="Rectangle" fill="#FFFFFF" x="5" y="13.9929286" width="10" height="1" rx="0.5"></rect>
                                            </svg>
                                        </button>
                                    </div> 
                                </div> 
                            </article>`;

        /* append cards to 'container' */
        $(container).append(generateCard);

        /* after all cards are appended, run function for updating status count */
        updateCount();

        /* event handler for clicking "Se detaljer" button on each card */
        $('a.card-' + obj.getId()).on('click', function() {
            
            tempStorage(); /* call tempStorage to store object for editing */
        });

        /* event handler for clicking edit button on each card */
        $('button.card-' + obj.getId()).on('click', function() {
            
            tempStorage(); /* call tempStorage to store object for editing */
            generateEditForm() /* when object is stored in localstorage, generate edit form inside modal */
            toggleModal(); /* when form i generated, open modal populated with information from card clicked */
        });

        /* event handler for clicking delete button on each card */
        $('button.delete-card-' + obj.getId()).on('click', function() {

            /* send a confirmation alert. If "yes" is clicked, proceed */
            if (window.confirm("Are you sure you want to delete the card?") == true) {

                /* fade out card deleted */
                $('article.case-card-' + obj.getId()).fadeOut('slow', function() {
                    tempStorage();
                    deleteCard(); /* delete it from the cards array by running the deleteCard function/method */
                    updateCount(); /* update status count */
                });
            }
        });

        /* event handler for clicking burker menu on small devices */
        $('button.menu-btn').on('click', function() {
            toggleMenu(); /* run toggleMenu function/method */
        });
    }

    /* generate cards page method is used to create and append all card objects in localstorage */
    /* basically runs generate index page method, as these pages are very similar */
    generateCardsPage(obj, container, types, gradedLevels, statuses,  arr) {

        /* run generateIndexPage method */
        this.generateIndexPage(obj, container, types, gradedLevels, statuses, arr);
    }

    /* generate edit page method is used for generating a form view when a card is clicked */
    /* generates form based on temporary storage object in localstorage */
    generateEditPage(obj, container, types, gradedLevels, statuses, arr) {

        /* function for toggleing menu by calling the toggleMenu method */
        let toggleMenu = () => { return this.toggleMenu(); }

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

        /* function for handleing saving of card by calling the saveCard method */
        let saveCard = () => { return this.saveCard(obj, arr, types); }

        /* function for deleting card by calling the deleteCard method */
        let deleteCard = () => {return this.deleteCard(obj, arr); }

        /* variable for holding html code. Formatted for readability */
        /* grabbing information by calling different get methods from the card class */
        let generateForm = `<div class="edit-form">
                                <div>
                                    <!-- preserving UD by having alt text descibing the image -->
                                    <img class="edit-form-img" src="${obj.getImgUrl()}" alt="${obj.getAlt()}">
                                </div>
                                <form id="edit-form" action="">
                                    <div class="form-section basic-section">
                                        <div class="form-group type-group">
                                            <label for="category-select">Kategori</label>
                                            <select class="w-1 category-select" id="category-select">
                                                <!-- Created by DOM -->
                                            </select>
                                        </div>
                                        <div class="form-group title-group">
                                            <label for="title">Tittel</label>
                                            <input class="title w-1" type="text" id="title" placeholder="Tittel" value="${obj.getTitle()}">
                                        </div>
                                        <div class="form-group desc-group">
                                            <label for="desc">Beskrivelse</label>
                                            <textarea class="desc w-1" id="desc" placeholder="Beskrivelse">${obj.getDesc()}</textarea>
                                        </div>
                                    </div>
                                    <div class="form-section address-section">
                                        <div class="form-group street-group">
                                            <div class="flex w-1">
                                                <div class="w-4/5 mr-2">
                                                    <label for="streetname">Gate</label>
                                                    <input class="w-1 streetname" type="text" id="streetname" placeholder="Gatenavn" value="${obj.getStreetName()}">
                                                </div>
                                                <div class="w-1/5">
                                                    <label for="streetnumber">Nr</label>
                                                    <input class="w-1 streetnumber" type="text" id="streetnumber" placeholder="Nr" value="${obj.getStreetNumber()}">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group zipplace-group">
                                            <div class="flex w-1">
                                                <div class="w-1/2 mr-2">
                                                    <label for="zip">Postkode</label>
                                                    <input class="w-1 zip" type="text" id="zip" placeholder="Postkode" value="${obj.getZip()}">
                                                </div>
                                                <div class="w-1/2">
                                                    <label for="place">Sted</label>
                                                    <input class="w-1 place" type="text" id="place" placeholder="Poststed" value="${obj.getPlace()}">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-section">
                                        <div class="misc-section">
                                            <div class="form-group grade-group">
                                                <label for="graded-level-select">Graderingsnivå</label>
                                                <select id="graded-level-select" class="w-1 graded-level-select">
                                                    <!-- Options created by DOM -->
                                                </select>
                                            </div>
                                            <div class="form-group status-group">
                                                <label for="status-select">Status</label>
                                                <select id="status-select" class="w-1 status-select">
                                                    <!-- Options created by DOM -->
                                                </select>
                                            </div>
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

        /* add content to selects, and make appropriate option selected */
        loopAndAppend(types, obj.getType(), 'select.category-select');
        loopAndAppend(gradedLevels, obj.getGradedLevel(), 'select.graded-level-select');
        loopAndAppend(statuses, obj.getStatus(), 'select.status-select');

        /* event handler for deleting card */
        /* defined as an anchor to redirect after click */
        $('a#delete-card').on('click', function(){

            /* prompt user to confirm deletion. If 'yes' is clicked, proceed */
            if (window.confirm("Are you sure you want to delete the card?") == true) {    
                deleteCard(); /* run deleteCard function/method */
            }
        });

        /* event handler for submitting form */
        $('#edit-form').submit(function() {
            saveCard(); /* run saveCard function/method */
        });

        /* event handler for clicking burker menu on small devices */
        $('button.menu-btn').on('click', function() {
            toggleMenu(); /* run toggleMenu function/method */
        });
    }

    /* generate add form method is used for generating form within modal */
    /* the form is not populated with any data */
    generateAddForm(container, types, gradedLevels, statuses, arr) {

        /* function for toggleing modal by running toggleModal method, and appending modal to div.add-new-modal */
        let toggleModal = () => { return this.toggleModal('div.add-new-modal') }

        /* function for saving object to the defined array. Runs addCard method */
        let addCard = () => { return this.addCard(arr, types) }

        /* function for looping through parsed localstorage objects, and appending the names to select container */
        let loopAndAppend = (items, container) => {
            items.forEach(function(item) {
                $(container).append(new Option(item.name, item.name, false, false));      
            });
        }

        /* variable for holding html code. Formatted for readability */
        let generateForm = `<div class="add-new-modal modal hidden">
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

        /* event handler for opening modal when add-card button is clicked */
        $('button#add-card').on('click', function() {
            toggleModal(); /* runs toggleModal function/method */
        });

        /* event handler for closing modal when close-modal button is clicked */
        $('button#close-modal').on('click', function() {
            toggleModal(); /* runs toggleModal function/method */
        });

        /* event handler for submitting form */
        $('#add-form').submit(function() {
            addCard(); /* runs addCard function/metod */
        });
    }

    /* generate edit form method is used for generating form within modal */ 
    /* the form populated with values/content of card clicked */
    generateEditForm(obj, container, types, gradedLevels, statuses, arr) {

        /* function for opening and closing modal. Runs the toggleModal method */
        let toggleModal = () => { return this.toggleModal('div.edit-modal') }

        /* funcion for saving card to the cards array. Runs saveCard method */
        let saveCard = () => { return this.saveCard(obj, arr, types) }

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

        /* variable for holding html code. Formatted for readability */
        let generateForm = `<div class="edit-modal modal hidden">
                                <div class="modal-content">
                                        <div class="modal-header flex items-center justify-between">
                                            <h1>Rediger ${obj.getTitle()}</h1>
                                            <button type="button" id="close-modal" class="close-edit-modal flex items-center">
                                                <svg class="modal-header-close-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-close">
                                                    <path class="secondary" fill-rule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <form id="edit-existing-form" action="">
                                            <div class="modal-body">
                                                <div class="form-section basic-section">
                                                    <div class="form-group type-group">
                                                        <label for="category-select">Kategori</label>
                                                        <select class="w-1 category-select" id="category-select">
                                                            <!-- Created by DOM -->
                                                        </select>
                                                    </div>
                                                    <div class="form-group title-group">
                                                        <label for="title">Tittel</label>
                                                        <input class="w-1 title" type="text" id="title" placeholder="Tittel" value="${obj.getTitle()}">
                                                    </div>
                                                    <div class="form-group desc-group">
                                                        <label for="desc">Beskrivelse</label>
                                                        <textarea class="w-1 desc" id="desc" placeholder="Beskrivelse">${obj.getDesc()}</textarea>
                                                    </div>
                                                </div>
                                                <div class="form-section address-section">
                                                    <div class="form-group street-group">
                                                        <div class="flex w-1">
                                                            <div class="w-4/5 mr-2">
                                                                <label for="streetname">Gate</label>
                                                                <input class="w-1 streetname" type="text" id="streetname" placeholder="Gatenavn" value="${obj.getStreetName()}">
                                                            </div>
                                                            <div class="w-1/5">
                                                                <label for="streetnumber">Nr</label>
                                                                <input class="w-1 streetnumber" type="text" id="streetnumber" placeholder="Nr" value="${obj.getStreetNumber()}">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group zipplace-group">
                                                        <div class="flex w-1">
                                                            <div class="w-1/2 mr-2">
                                                                <label for="zip">Postkode</label>
                                                                <input class="w-1 zip" type="text" id="zip" placeholder="Postkode" value="${obj.getZip()}">
                                                            </div>
                                                            <div class="w-1/2">
                                                                <label for="place">Sted</label>
                                                                <input class="w-1 place" type="text" id="place" placeholder="Poststed" value="${obj.getPlace()}">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-section">
                                                    <div class="misc-section">
                                                        <div class="form-group grade-group">
                                                            <label for="graded-level-select">Graderingsnivå</label>
                                                            <select id="graded-level-select" class="w-1 graded-level-select">
                                                                <!-- Options created by DOM -->
                                                            </select>
                                                        </div>
                                                        <div class="form-group status-group">
                                                            <label for="status-select">Status</label>
                                                            <select id="status-select" class="w-1 status-select">
                                                                <!-- Options created by DOM -->
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="flex justify-center">
                                                        <span class="form-meta-text">Opprettet ${obj.getDate()}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="submit" class="modal-submit-btn">Endre kort</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>`;

        /* append genereateForm variable to container */
        $(container).append(generateForm);

        /* add content to selects */
        loopAndAppend(types, obj.getType() ,'select.category-select');
        loopAndAppend(gradedLevels, obj.getGradedLevel(), 'select.graded-level-select');
        loopAndAppend(statuses, obj.getStatus(), 'select.status-select');

        /* event handler for closing modal */
        $('button.close-edit-modal').on('click', function() {
            toggleModal(); /* runs toggleModal function/method */
        });

        /* event handler for submiting form after edit */
        $('#edit-existing-form').submit(function() {
            saveCard(); /* runs saveCard function/method */
        });
    }

    /* generate banner method is used for generating banner on the front page */
    /* generates slider elements based in the types array, and displays various task categories */
    generateBanner(arr, container) {

        /* set index to one so it displays the first slider element */
        let index = 1;

        /* function for changing slide to the next one in line */
        let nextSlide = (n) => {
            /* it gets the current index, and adds function parameter number */
            bannerSlides(index += n);
        }

        /* function for getting and changing slides */
        let bannerSlides = (n) => {
            /* get all div's with the class 'banner-slide' and all spans with the class 'dot' */
            let slides = $('div.banner-slide');
            let dots = $('span.dot');

            /* when the banner has went through all slides, reset to first slide */
            if (n > slides.length) {
                index = 1;
            } else  if (n < 1){
                index = slides.length;
            }

            /* hide all slides which is not displayed */
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }

            /* add class current to dot number matching slide number */
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(' current', '');
            }

            /* show slide which is on display, and set corresponding dot to 'current' */
            slides[index-1].style.display = 'block';
            dots[index-1].className += ' current';
        }
        
        /* function for generating all slides based on the types array */
        let generateSlides = (arr, container) => {
            /* iterate through array */
            arr.forEach(function(item) {
                /* if item in array has id of 1, we remove the hidden (display none) class */
                if (item.id == 1) {
                    let generateSlide = `<div class="banner-slide banner-animation">
                                            <!-- preserves UD by adding alt text to image -->
                                            <img class="banner-img" src="${item.imgUrl}" alt="${item.alt}">
                                            <div class="banner-caption">
                                                <h1>${item.name}</h1>
                                            </div>
                                        </div>`;

                    /* append slide to appropirate container */
                    $(container).append(generateSlide);
                
                /* if item in array does not have the id 1, generate slides, but with hidden class */
                } else {
                    let generateSlide = `<div class="banner-slide hidden banner-animation">
                                            <!-- preserves UD by adding alt text to image -->
                                            <img class="banner-img" src="${item.imgUrl}" alt="${item.alt}">
                                            <div class="banner-caption">
                                                <h1>${item.name}</h1>
                                            </div>
                                        </div>`;

                    /* append slide to appropirate container */
                    $(container).append(generateSlide); 
                }
            });
        }

        /* function for generating correct amount of dots */
        let generateDots = (arr, container) => {
            arr.forEach(function(item) {
                /* if item in array has id of 1, we set the corresponding dot as 'current' (active) */
                if (item.id == 1) {
                    let generateDot = `<span class="dot current"></span>`;
                    
                    /* append dot to appropirate container */
                    $(container).append(generateDot);
                
                /* if item does not have the id 1, generate a normal dot */
                } else {
                    let generateDot = `<span class="dot"></span>`;

                    /* append dot to appropirate container */
                    $(container).append(generateDot);
                }
            });
        }

        /* variable for storing banner structure, formatted for readability */
        let generateBanner = `<div class="banner-container">
                                <div class="banner-slides">
                                    <!-- slides created by DOM -->
                                </div>
                                <div class="banner-meta">
                                    <div class="banner-btns">
                                        <button type="button" class="prev-slide">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-cheveron-left-circle">
                                                <circle cx="12" cy="12" r="10" class="primary"/>
                                                <path class="secondary" d="M13.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L10.42 12l3.3 3.3z"/>
                                            </svg>
                                        </button>
                                        <button type="button" class="next-slide">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-cheveron-right-circle">
                                                <circle cx="12" cy="12" r="10" class="primary"/>
                                                <path class="secondary" d="M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="banner-dots">
                                        <!-- dots created by DOM -->
                                    </div>
                                </div>
                            </div>`

        /* append banner to appropirate container */
        $(container).append(generateBanner);

        /* call functions to generate slides and dots */
        generateSlides(arr, $('div.banner-slides'));
        generateDots(arr, 'div.banner-dots');

        /* call function to start banner carrousel */
        bannerSlides(index);

        /* event handlers for clicking next/prev slide buttons */
        $('button.prev-slide').on('click', function() {
            nextSlide(-1);
        });

        $('button.next-slide').on('click', function() {
            nextSlide(1);
        });

        /* interval loop to change slide every 5 seconds */
        setInterval(function() {
            nextSlide(1)
        }, 5000);
    }
}

export default Utility;