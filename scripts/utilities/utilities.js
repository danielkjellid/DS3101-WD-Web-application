class Utility {
    constructor (name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

/* function for getting address from the address array, and format it */
const formatAddress = (object) => {
    return '' + object.streetname + ' ' + object.streetnumber + ', ' + object.place;
}

/* function for adding '0' before int if the int is singular, so that it becomes 01:00 isntead of 1:1 */
const formatDateTime = (variable) => {
    return ('0' + variable).slice(-2);
}

/* function for formatting dates */
const formatDate = (date) => {
    let monthInts = [
        '01', '02', '03',
        '04', '05', '06',
        '07', '08', '09',
        '10', '11', '12'
    ];

    let day = formatDateTime(date.getDate());
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    let hours = formatDateTime(date.getHours());
    let minutes = formatDateTime(date.getMinutes());

    return day + '.' + monthInts[monthIndex] + '.' + year + ' ' + hours + ':' + minutes; /* output example: 22.10.2019 15:20 */

}

export default Utility;
export { formatAddress, formatDate }