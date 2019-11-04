
import Utility from './scripts/utilities/utilities.js';
import Type from './scripts/modules/type.js';
import Status from './scripts/modules/status.js';
import GradedLevel from './scripts/modules/gradedlevel.js';
import Card from './scripts/modules/card.js';

//localStorage.clear();

/*
* Global variables
*/
const utility = new Utility('utility');



/*
* Gobal arrays and object literals
*/
/* types of activities */
const types = [
    {
        id: 1,
        name: 'Spionasje',
        imgUrl: './img/types/spionasje.jpg',
        alt: 'Bilde av et overvåkningskamera'
    },
    {
        id: 2,
        name: 'Sabotasje',
        imgUrl: './img/types/sabotasje.jpg',
        alt: 'Bilde av en dykker som holder et våpen i et vann med snø rundt'
    },
    {
        id: 3,
        name: 'Etterforsking',
        imgUrl: './img/types/etterforsking.jpg',
        alt: 'Bilde av tegnestifter med et trådnett fra tegnestift til tegnestift'
    },
    {
        id: 4,
        name: 'Forebygging',
        imgUrl: './img/types/forebygging.jpg',
        alt: 'Bilde av en politimann som snakker med sivile over en kopp kaffe og lunsj'
    },
    {
        id: 5,
        name: 'Livvaktarbeid',
        imgUrl: './img/types/livvaktarbeid.jpg',
        alt: 'Bilde av en mann i strid som holder et våpen mens han dukker ned'
    },
    {
        id: 6,
        name: 'Rådgiving',
        imgUrl: './img/types/radgiving.jpg',
        alt: 'Bilde av to politiansatte som sitter ved et bord med et dokument og forklarer'
    }
];

/* level activtiy is graded */
const gradedLevels = [
    {
        id: 1,
        name: 'konfidensielt'
    }, 
    {
        id: 2,
        name: 'hemmelig'
    }, 
    {
        id: 3,
        name: 'strengt hemmelig'
    }
];

/* statuses for task cards */
const statuses = [
    {
        id: 1,
        name: 'Ikke løst'
    },
    {
        id: 2, 
        name: 'Løst'
    }
];

/* array of cards using constructor layout */
const cards = [
    {
        id: 1, 
        status: statuses[0].name, 
        title: 'Ransaking av leilighet',
        desc: 'Ransaking av leilighet til kjenning. Mulig terrorlink.',
        type: types[2].name,
        imgUrl: types[2].imgUrl,
        alt: types[2].alt,
        graded: gradedLevels[0].name, 
        date: utility.formatDate(new Date(2019, 10, 2, 18, 10)), 
        address: 
            { 
                streetname: 'Hausmansgate', 
                streetnumber: '21', 
                zip: '0182', 
                place: 'Oslo'
            }
    },
    {
        id: 2, 
        status: statuses[0].name, 
        title: 'Overvåking av person',
        desc: 'Overvåking og innhenting av informasjon om Navn Navnesen.', 
        type: types[0].name,
        imgUrl: types[0].imgUrl,
        alt: types[0].alt,
        graded: gradedLevels[1].name, 
        date: utility.formatDate(new Date(2019, 10, 2, 18, 10)), 
        address:
            { 
                streetname: 'Solheimveien', 
                streetnumber: '3', 
                zip: '1473', 
                place: 'Lørenskog'
            }
    },
    {
        id: 3, 
        status: statuses[0].name, 
        title: 'Samtale med elev',
        desc: 'Elev viser tendenser til voldlige holdninger. Forebyggende samtale.',
        type: types[3].name,
        imgUrl: types[3].imgUrl,
        alt: types[3].alt,
        graded: gradedLevels[0].name, 
        date: utility.formatDate(new Date(2019, 10, 2, 18, 10)), 
        address:
            { 
                streetname: 'Harald Løvenskiolds vei',
                streetnumber: '36',
                zip: '0760',
                place: 'Oslo'
            }
    },
    {
        id: 4, 
        status: statuses[0].name, 
        title: 'Strømkutting',
        desc: 'Strømkutting til leilighet mistenkt med terror.',
        type: types[1].name,
        imgUrl: types[1].imgUrl,
        alt: types[1].alt,
        graded: gradedLevels[2].name, 
        date: utility.formatDate(new Date(2019, 10, 2, 18, 10)), 
        address:
            { 
                streetname: 'Lislebyveien',
                streetnumber: '114',
                zip: '1619',
                place: 'Fredrikstad'
            }
    },
    {
        id: 5, 
        status: statuses[0].name, 
        title: 'Beskyttelse av kongen',
        desc: 'Kongen skal holde en tale, og trusselnivået er vurdert til høyt.',
        type: types[4].name,
        imgUrl: types[4].imgUrl,
        alt: types[4].alt,
        graded: gradedLevels[2].name, 
        date: utility.formatDate(new Date(2019, 10, 2, 18, 10)), 
        address:
            { 
                streetname: 'Kringlene',
                streetnumber: '12',
                zip: '3142',
                place: 'Tjøme'
            }
    },
    {
        id: 6, 
        status: statuses[0].name, 
        title: 'Møte med politiet',
        desc: 'Politiet trenger rådgiving ang. trusselnivå.',
        type: types[5].name,
        imgUrl: types[5].imgUrl,
        alt: types[5].alt,
        graded: gradedLevels[0].name, 
        date: utility.formatDate(new Date(2019, 10, 2, 18, 10)), 
        address: 
            { 
                streetname: 'Porsveien',
                streetnumber: '5',
                zip: '5142',
                place: 'Fyllingsdalen'
            }
    },
    {
        id: 7, 
        status: statuses[1].name, 
        title: 'Arrestasjon av gruppe',
        desc: 'Uteføre arrestasjon av en gruppe mennesker mistenkt for planlegging av terror.',
        type: types[0].name,
        imgUrl: types[0].imgUrl,
        alt: types[0].alt,
        graded: gradedLevels[1].name, 
        date: utility.formatDate(new Date(2019, 10, 2, 18, 10)), 
        address: 
            { 
                streetname: 'Gardvegen',
                streetnumber: '16B',
                zip: '2615',
                place: 'Lillehammer'
            }
    },
    {
        id: 8, 
        status: statuses[1].name, 
        title: 'Samtale med kjenning',
        desc: 'Forebyggene samtale med gjenganger.', 
        type: types[3].name,
        imgUrl: types[3].imgUrl,
        alt: types[3].alt,
        graded: gradedLevels[0].name, 
        date: utility.formatDate(new Date(2019, 10, 2, 18, 10)), 
        address: 
            { 
                streetname: 'Simon Leinums veg',
                streetnumber: '15',
                zip: '7088',
                place: 'Heimdal'
            }
    },
    {
        id: 9, 
        status: statuses[1].name,
        title: 'Samtale med forelder',
        desc: 'Barnet viser holdninger som kan være skadelig for andre. Forebyggende samtale.',
        type: types[3].name,
        imgUrl: types[3].imgUrl,
        alt: types[3].alt,
        graded: gradedLevels[0].name, 
        date: utility.formatDate(new Date(2019, 11, 2, 18, 10)), 
        address: 
            { 
                streetname: 'Myraveien',
                streetnumber: '3',
                zip: '8622',
                place: 'Mo i Rana'
            }
    },   
];

/*
* Initialization of code
*/
/* conditional check to check if browser supports localstorage */
if (typeof(Storage) !== 'undefined') {

    /* conditional check to check if the types key already exists in storage */
    if(localStorage.getItem('types') === null) {

        /* if it doesn't, create cards */
        localStorage.setItem('types', JSON.stringify(types));
    } 

    /* conditional check to check if the gradedLevels key already exists in storage */    
    if (localStorage.getItem('gradedLevels') === null) {

        /* if it doesn't, create gradedLevels */
        localStorage.setItem('gradedLevels', JSON.stringify(gradedLevels));
    } 
    
    /* conditional check to check if the statuses key already exists in storage */
    if (localStorage.getItem('statuses') === null) {

        /* if it doesn't, create statuses */
        localStorage.setItem('statuses', JSON.stringify(statuses));
    } 
    
    /* conditional check to check if the cards key already exists in storage */
    if (localStorage.getItem('cards') === null) {

        /* if it doesn't, create cards */
        localStorage.setItem('cards', JSON.stringify(cards));
    }

    /* conditional check to only run block of code on specific pages */
    if($('body.overview')[0]) {
        
        /* function for getting localstorage key, and parsing it to object literal */
        let cards = utility.getAndParse('cards');
        
        /* for each loop to loop through each card object */
        cards.forEach(function(item) {

            /* add each card in the for loop to the card constructor */
            let card = new Card(item.id, item.status, item.title, item.desc, item.type, item.imgUrl, item.alt, item.graded, item.date, item.address);
            
            /* conditional check to append the cards correctly */
            if (item.status == 'Ikke løst') {
                card.generateCard('div.not-solved');

            } else {
                card.generateCard('div.solved');
            }
        });

        $('span.count-not-solved').html(cards.filter(obj => obj.status == 'Ikke løst').length);
        $('span.count-solved').html(cards.filter(obj => obj.status == 'Løst').length);
        
    } else if ($('body.edit')[0]){

        if(localStorage.getItem('card') === null) {

        } else {
            let item = utility.getAndParse('card');
            let types = utility.getAndParse('types');
            let gradedLevels = utility.getAndParse('gradedLevels');
            let statuses = utility.getAndParse('statuses');
            let cards = utility.getAndParse('cards');

            let card = new Card(item.id, item.status, item.title, item.desc, item.type, item.imgUrl, item.alt, item.graded, item.date, item.address);

            card.generateEditForm('section.container', types, gradedLevels, statuses, cards);
        }
    } else if ($('body.cases')[0]) {

        /* function for getting localstorage key, and parsing it to object literal */
        let cards = utility.getAndParse('cards');

        /* for each loop to loop through each card object */
        cards.forEach(function(item) {

            /* add each card in the for loop to the card constructor */
            let card = new Card(item.id, item.status, item.title, item.desc, item.type, item.imgUrl, item.alt, item.graded, item.date, item.address);

            /* conditional check to append the cards correctly */
            if (item.status == 'Ikke løst') {
                card.generateCard('div.not-solved');

            } else {
                card.generateCard('div.solved');
            }
        });

        let types = utility.getAndParse('types');
        let gradedLevels = utility.getAndParse('gradedLevels');
        let statuses = utility.getAndParse('statuses');

        utility.generateAddForm('main', types, gradedLevels, statuses, utility.toggleModal());

        $('span.count-not-solved').html(cards.filter(obj => obj.status == 'Ikke løst').length);
        $('span.count-solved').html(cards.filter(obj => obj.status == 'Løst').length);
    }


} else {
    /* tell user to change or upgrade browser if support for localstorage is absent */
    alert('Browser does not support local storage. Please upgrade or change browser.');
}