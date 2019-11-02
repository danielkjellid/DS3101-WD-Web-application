
import { formatAddress, formatDate } from './scripts/utilities/utilities.js';
import Type from './scripts/modules/type.js';
import Card, { generateCard } from './scripts/modules/card.js';

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
const gradedLevels = ['konfidensielt', 'hemmelig', 'strengt hemmelig'];

/* statuses for task cards */
const statuses = ['Ikke løst','Løst'];

/* array of cards using constructor layout */
const cards = [
    {
        id: 1, 
        status: statuses[0], 
        title: 'Ransaking', 
        type: types[2].name,
        imgUrl: types[2].imgUrl,
        alt: types[2].alt,
        graded: gradedLevels[0], 
        date: formatDate(new Date(2019, 10, 2, 18, 10)), 
        address: formatAddress(
            { 
                streetname: 'Hausmansgate', 
                streetnumber: '21', 
                zip: '0182', 
                place: 'Oslo'
            }
        ) 
    },
    {
        id: 2, 
        status: statuses[1],
        title: 'Spaning', 
        type: types[0].name,
        imgUrl: types[0].imgUrl,
        alt: types[0].alt,
        graded: gradedLevels[2], 
        date: formatDate(new Date(2019, 11, 2, 18, 10)), 
        address: formatAddress(
            { 
                streetname: 'Hausmansgate', 
                streetnumber: '41', 
                zip: '0182', 
                place: 'Oslo'
            }
        ) 
    },   
];

/* adding types, cards, */
types.forEach(function(item) {
    let type = new Type(item.id, item.name, item.imgUrl, item.alt);
});

cards.forEach(function(item) {
    let card = new Card(item.id, item.status, item.title, item.type, item.imgUrl, item.alt, item.graded, item.date, item.address);

    if (card.getStatus() == 'Ikke løst') {
        generateCard(card, 'div.not-solved');
    } else {
        generateCard(card, 'div.solved');
    }

    console.log(item.imgUrl);
});
