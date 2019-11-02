/* importing resources */
import { generateNavbar } from './scripts/modules/nav.js';
import { generateFooter } from './scripts/modules/footer.js';
import { formatAddress, formatDate } from './scripts/utilities/utilities.js';

import Card, { generateCard } from './scripts/modules/card.js';

/* types of activities */
const types = ['Spionasje','Sabotasje','Etterforsking','Forebygging','Livvaktarbeid','Rådgivning'];

/* level activtiy is graded */
const gradedLevels = ['konfidensielt', 'hemmelig', 'strengt hemmelig'];

/* statuses for task cards */
const statuses = ['Ikke løst','Løst'];

/* array of cards */
const cards = [
    {
        id: 1, 
        status: statuses[0], 
        title: 'Ransaking', 
        type: types[2], 
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
        title: 'Test', 
        type: types[0], 
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

/* call functions to generate modules */
generateNavbar('header.header');
generateFooter('footer.footer');
//generateCard(card1, 'div.ongoing');

cards.forEach(function(item) {
    let card = new Card(item.id, item.status, item.title, item.type, item.graded, item.date, item.address);
    generateCard(card, 'div.ongoing');
});
