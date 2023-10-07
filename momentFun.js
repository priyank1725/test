// Import the Moment.js library (if not already imported)
const moment = require('moment');

function getDaysInMonth(month) {
    const year = moment().year();
    const firstDayOfMonth = moment({ year, month: month - 1, day: 1 });
    const firstDayOfNextMonth = firstDayOfMonth.clone().add(1, 'months');
    const daysInMonth = firstDayOfNextMonth.diff(firstDayOfMonth, 'days');
    return daysInMonth;
}

function getUpcomingDateWithMoment(selectedDate) {

    const currentDate = moment();
    
    const daysInCurrentMonth = getDaysInMonth((currentDate.month() + 1))

    const currentDayDate = currentDate.date()

    if ( currentDayDate > selectedDate) {
        currentDate.add(1, 'months');
    }
    if (selectedDate > daysInCurrentMonth) {
        currentDate.add(1, 'months');
    }
    currentDate.date(selectedDate);

    return currentDate.format("DD-MM-YYYY");
}

const upcomingDate = getUpcomingDateWithMoment(6);
