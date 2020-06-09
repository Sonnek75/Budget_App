import moment from 'moment';

export function numberWithCommas(x) {
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return formatter.format(x)
}

export function dateFormat(rawDate) {
    let formattedDate = moment(rawDate).format('MM-DD-YYYY');
    return formattedDate;
}