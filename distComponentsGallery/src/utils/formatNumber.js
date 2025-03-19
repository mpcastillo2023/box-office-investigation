function formatNumber(numberToFormart, locale, options) {
    const format = new Intl.NumberFormat(locale, options).format(numberToFormart);
    return format;
}
export default formatNumber;
