export const WEEKS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const TODAY = new Date();
export const THIS_YEAR = TODAY.getFullYear();
export const THIS_MONTH = TODAY.getMonth() + 1;
export const THIS_DAY = TODAY.getDate();

export const isLeapYear = (year: number): boolean => {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else if (year % 400 === 0) {
        return true;
    }
    return false;
};

/**
 * (int) Number days in a month for a given year from 28 - 31
 * @param month
 * @param year
 */
export const getMonthDays = (year: number = THIS_YEAR, month: number = THIS_MONTH): number => {
    const day = year && isLeapYear(year) ? 29 : 28;
    return [31, day, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
};

export const getWeekday = (year: number = THIS_YEAR, month: number = THIS_MONTH, day: number = THIS_DAY): number => {
    return new Date(year, month - 1, day).getDay();
};

type DayCell = {
    label: number,
    date: string,
    isThisMonth: boolean,
    today?: boolean,
};

export const getMonthDaysArray =
    (year: number = THIS_YEAR, month: number = THIS_MONTH, day: number = THIS_DAY): DayCell[] => {
        const dayArrays: DayCell[] = [];
        const days = getMonthDays(year, month);
        const preDays = getMonthDays(year, month - 1);
        const thisMonthFirstDayInWeek = getWeekday(year, month, 1);
        const thisMonthLastDayInWeek = getWeekday(year, month, days);

        // last month days
        for (let i = 0; i < thisMonthFirstDayInWeek; i++) {
            const label = (preDays - thisMonthFirstDayInWeek + i + 1);
            dayArrays.push({
                label,
                date: `${year}/${month - 1}/${label}`,
                isThisMonth: false,
            });
        }

        // this month days
        for (let i = 1; i <= days; i++) {
            const item = i === day ? {
                label: i,
                date: `${year}/${month}/${i}`,
                isThisMonth: true,
                today: true,
            } : {
                label: i,
                date: `${year}/${month}/${i}`,
                isThisMonth: true,
            };
            dayArrays.push(item);
        }

        // next month days
        for (let i = 1; i <= (13 - thisMonthLastDayInWeek); i++) {
            dayArrays.push({
                label: i,
                date: `${year}/${month + 1}/${i}`,
                isThisMonth: false,
            });
        }

        return dayArrays;
    };

export const isSameDate = (dateA: Date, dateB: Date): boolean => dateA.toISOString() === dateB.toISOString();

/**
 * (bool) Checks if a value is a date - this is just a simple check
 * @param date
 */
export const isDate = (date: Date): boolean => {
    const isPrototypeDate = Object.prototype.toString.call(date) === '[object Date]';
    const isValidDate = date && !Number.isNaN(date.valueOf());

    return isPrototypeDate && isValidDate;
};

/**
 * ({month, year}) Gets the month and year before the given month and year
 * For example: getPreviousMonth(1, 2000) => {month: 12, year: 1999}
 * while: getPreviousMonth(12, 2000) => {month: 11, year: 2000}
 * @param month
 * @param year
 */
export const getPreviousMonth = (year: number = THIS_YEAR, month: number = THIS_MONTH) => {
    const prevMonth = (month > 1) ? month - 1 : 12;
    const prevMonthYear = (month > 1) ? year : year - 1;

    return { month: prevMonth, year: prevMonthYear };
};

/**
 * ({month, year}) Gets the month and year after the given month and year
 * For example: getNextMonth(1, 2000) => {month: 2, year: 2000}
 * while: getNextMonth(12, 2000) => {month: 1, year: 2001}
 * @param month
 * @param year
 */
export const getNextMonth = (year: number = THIS_YEAR, month: number = THIS_MONTH) => {
    const nextMonth = (month < 12) ? month + 1 : 1;
    const nextMonthYear = (month < 12) ? year : year + 1;

    return { month: nextMonth, year: nextMonthYear };
};
