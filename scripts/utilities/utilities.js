class Utility {
    constructor (name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    /* function for adding '0' before int if the int is singular, so that it becomes 01:00 isntead of 1:1 */
    formatDateTime = (variable) => { return ('0' + variable).slice(-2); }

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

    generateAddForm(container, types, gradedLevels, statuses) {

        let toggleModal = () => { return this.toggleModal() }

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
                                        <form id="create-form" action="">
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
    }

    addCard = (arr, types) => {

    }
}

export default Utility;