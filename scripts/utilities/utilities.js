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
    getAndParse = (key) => { return JSON.parse(localStorage.getItem(key));}
}

export default Utility;