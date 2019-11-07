
import Utility from './scripts/utilities/utilities.js';
import Card from './scripts/modules/card.js';

//localStorage.clear();

const utility = new Utility('utility');

/* types of activities */
const typesArr = [
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
const gradedLevelsArr = [
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
const statusesArr = [
    {
        id: 1,
        name: 'Ikke løst'
    },
    {
        id: 2, 
        name: 'Løst'
    }
];

/* array of default cards */
const cardsArr = [
    {
        id: 1, 
        status: statusesArr[0].name, 
        title: 'Ransaking av leilighet',
        desc: 'Ransaking av leilighet til kjenning. Mulig terrorlink.',
        type: typesArr[2].name,
        imgUrl: typesArr[2].imgUrl,
        alt: typesArr[2].alt,
        graded: gradedLevelsArr[0].name, 
        date: utility.formatDate(new Date()), 
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
        status: statusesArr[0].name, 
        title: 'Overvåking av person',
        desc: 'Overvåking og innhenting av informasjon om Navn Navnesen.', 
        type: typesArr[0].name,
        imgUrl: typesArr[0].imgUrl,
        alt: typesArr[0].alt,
        graded: gradedLevelsArr[1].name, 
        date: utility.formatDate(new Date()), 
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
        status: statusesArr[0].name, 
        title: 'Samtale med elev',
        desc: 'Elev viser tendenser til voldlige holdninger. Forebyggende samtale.',
        type: typesArr[3].name,
        imgUrl: typesArr[3].imgUrl,
        alt: typesArr[3].alt,
        graded: gradedLevelsArr[0].name, 
        date: utility.formatDate(new Date()), 
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
        status: statusesArr[0].name, 
        title: 'Strømkutting',
        desc: 'Strømkutting til leilighet mistenkt med terror.',
        type: typesArr[1].name,
        imgUrl: typesArr[1].imgUrl,
        alt: typesArr[1].alt,
        graded: gradedLevelsArr[2].name, 
        date: utility.formatDate(new Date()), 
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
        status: statusesArr[0].name, 
        title: 'Beskyttelse av kongen',
        desc: 'Kongen skal holde en tale, og trusselnivået er vurdert til høyt.',
        type: typesArr[4].name,
        imgUrl: typesArr[4].imgUrl,
        alt: typesArr[4].alt,
        graded: gradedLevelsArr[2].name, 
        date: utility.formatDate(new Date()), 
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
        status: statusesArr[0].name, 
        title: 'Møte med politiet',
        desc: 'Politiet trenger rådgiving ang. trusselnivå.',
        type: typesArr[5].name,
        imgUrl: typesArr[5].imgUrl,
        alt: typesArr[5].alt,
        graded: gradedLevelsArr[0].name, 
        date: utility.formatDate(new Date()), 
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
        status: statusesArr[1].name, 
        title: 'Arrestasjon av gruppe',
        desc: 'Uteføre arrestasjon av en gruppe mennesker mistenkt for planlegging av terror.',
        type: typesArr[0].name,
        imgUrl: typesArr[0].imgUrl,
        alt: typesArr[0].alt,
        graded: gradedLevelsArr[1].name, 
        date: utility.formatDate(new Date()), 
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
        status: statusesArr[1].name, 
        title: 'Samtale med kjenning',
        desc: 'Forebyggene samtale med gjenganger.', 
        type: typesArr[3].name,
        imgUrl: typesArr[3].imgUrl,
        alt: typesArr[3].alt,
        graded: gradedLevelsArr[0].name, 
        date: utility.formatDate(new Date()), 
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
        status: statusesArr[1].name,
        title: 'Samtale med forelder',
        desc: 'Barnet viser holdninger som kan være skadelig for andre. Forebyggende samtale.',
        type: typesArr[3].name,
        imgUrl: typesArr[3].imgUrl,
        alt: typesArr[3].alt,
        graded: gradedLevelsArr[0].name, 
        date: utility.formatDate(new Date()), 
        address: 
            { 
                streetname: 'Myraveien',
                streetnumber: '3',
                zip: '8622',
                place: 'Mo i Rana'
            }
    },   
];

const addressImagesArr = [
    {
        id: 1,
        imgUrl: './img/addresses/1.jpg',
        alt: 'Hvit slitent hus',
    },
    {
        id: 2,
        imgUrl: './img/addresses/2.jpg',
        alt: 'Gul skole med lekestativ i fokus',
    },
    {
        id: 3,
        imgUrl: './img/addresses/3.jpg',
        alt: 'Fallerferdig forlatt hvit tomannsbolig',
    },
    {
        id: 4,
        imgUrl: './img/addresses/4.jpg',
        alt: 'Nybygd hvit funkisvilla oppå en skrent',
    },
    {
        id: 5,
        imgUrl: './img/addresses/5.jpg',
        alt: 'Gul bygård på en hjørne'
    },
    {
        id: 6,
        imgUrl: './img/addresses/6.jpg',
        alt: 'Gult bygg med bakeri i førsteetasjen'
    },
    {
        id: 7,
        imgUrl: './img/addresses/7.jpg',
        alt: 'Eldre rekkehus med bar i førsteetasjen'
    }
];

const personsUnderInvestigationsArr = [];


/* conditional check to check if browser supports localstorage */
if (typeof(Storage) !== 'undefined') {

    /* conditional check to check if the types key already exists in storage */
    if (localStorage.getItem('types') === null) {

        /* if it doesn't, create cards */
        localStorage.setItem('types', JSON.stringify(typesArr));
    } 

    /* conditional check to check if the gradedLevels key already exists in storage */    
    if (localStorage.getItem('gradedLevels') === null) {

        /* if it doesn't, create gradedLevels */
        localStorage.setItem('gradedLevels', JSON.stringify(gradedLevelsArr));
    } 
    
    /* conditional check to check if the statuses key already exists in storage */
    if (localStorage.getItem('statuses') === null) {

        /* if it doesn't, create statuses */
        localStorage.setItem('statuses', JSON.stringify(statusesArr));
    } 
    
    /* conditional check to check if the cards key already exists in storage */
    if (localStorage.getItem('cards') === null) {

        /* if it doesn't, create cards */
        localStorage.setItem('cards', JSON.stringify(cardsArr));
    }

    /* global variables getting and parsing localstore objects */
    let cards = utility.getAndParse('cards');
    let types = utility.getAndParse('types');
    let gradedLevels = utility.getAndParse('gradedLevels');
    let statuses = utility.getAndParse('statuses');

    /* conditional check to only run block of code on specific pages */
    /* check if body has the class 'overview' */
    if($('body.overview')[0]) {
        
        /* for each loop to loop through each card object */
        cards.forEach(function(item) {

            /* add each card in the for loop to the card constructor */
            let card = new Card(item.id, item.status, item.title, item.desc, item.type, item.imgUrl, item.alt, item.graded, item.date, item.address);
            
            /* conditional check to append the cards correctly */
            if (item.status == 'Ikke løst') {
                utility.generateIndexPage(card, 'div.not-solved', types, gradedLevels, statuses, cards);

            } else {
                utility.generateIndexPage(card, 'div.solved', types, gradedLevels, statuses, cards);
            }
        });

        /* generate banner */
        utility.generateBanner(types, 'div.banner');
    
    /* else if the body has the class 'edit' */
    } else if ($('body.edit')[0]){

        /* conditional check to check if the card object exists in localstorage */
        if (localStorage.getItem('card') === null) {

            /* if it does'nt, throw error */
            alert('There was an error displaying the card. It was not found in localstorage.')
        } else {

            /* if it does, get and parse card object */
            let item = utility.getAndParse('card');

            /* create a new card object using card class constructor */
            let card = new Card(item.id, item.status, item.title, item.desc, item.type, item.imgUrl, item.alt, item.graded, item.date, item.address);

            /* generate edit view with card details */
            utility.generateEditPage(card, 'section.container', types, gradedLevels, statuses, cards);
        }

    /* else if the body has the class 'cases' */
    } else if ($('body.cases')[0]) {

        /* for each loop to loop through each card object */
        cards.forEach(function(item) {

            /* add each card in the for loop to the card constructor */
            let card = new Card(item.id, item.status, item.title, item.desc, item.type, item.imgUrl, item.alt, item.graded, item.date, item.address);

            /* conditional check to append the cards correctly */
            if (item.status == 'Ikke løst') {
                utility.generateCardsPage(card, 'div.not-solved', types, gradedLevels, statuses, cards);

            } else {
                utility.generateCardsPage(card, 'div.solved', types, gradedLevels, statuses, cards);
            }
        });

        /* generate the add form within the moodal */
        utility.generateAddForm('main', types, gradedLevels, statuses, cards);
    }

} else {
    /* tell user to change or upgrade browser if support for localstorage is absent */
    alert('Browser does not support local storage. Please upgrade or change browser.');
}