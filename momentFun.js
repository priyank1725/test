// Import the Moment.js library (if not already imported)
const moment = require('moment');

function getDateOfSelectedDay(dayOfWeek) {
    const today = moment().tz(userTimeZone()).startOf('day');
    const selectedDay = moment().tz(userTimeZone()).day(dayOfWeek);
    if (selectedDay.isBefore(today)) {
        selectedDay.add(7, 'days');
    }
    return selectedDay.toISOString();
}

function getDaysInMonth(month) {
    const firstDayOfMonth = moment({ month: month, day: 1 }).tz(userTimeZone());
    const firstDayOfNextMonth = firstDayOfMonth.clone().add(1, 'months');
    const daysInMonth = firstDayOfNextMonth.diff(firstDayOfMonth, 'days');
    return daysInMonth;
}

function getUpcomingDateWithMoment(selectedDate) {
    let monthAdded = false
    const currentDate = moment().tz(userTimeZone()).startOf('day');
    const daysInCurrentMonth = getDaysInMonth((currentDate.month()))
    const currentDayDate = currentDate.date()
    if (currentDayDate > selectedDate) {
        currentDate.add(1, 'months');
        monthAdded = true
    }
    if (selectedDate > daysInCurrentMonth) {
        currentDate.add(1, 'months');
        monthAdded = true
    }
    if (monthAdded) {
        const daysInNextMonth = getDaysInMonth((currentDate.month()))
        if (selectedDate > daysInNextMonth) {
            currentDate.add(1, 'months');
        }
    }
    currentDate.date(selectedDate);
    return currentDate.toISOString();
}
