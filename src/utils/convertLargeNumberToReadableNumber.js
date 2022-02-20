export default (number, precision = 0)  =>
    number
        .toFixed(precision)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")