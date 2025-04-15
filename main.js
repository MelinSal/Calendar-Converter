const moment = require('jalali-moment');


// function to convert gregorian to persian calendar
function gregorianToPersian(date) {
    return moment(date, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
}

// function to convert persian to gregorian calendar
function persianToGregorian(date) {
    return moment(date, 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD');
}

// exporting from main.js
module.exports = {
    gregorianToPersian,
    persianToGregorian
  };