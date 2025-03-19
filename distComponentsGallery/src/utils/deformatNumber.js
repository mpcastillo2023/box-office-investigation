function deformatNumber(formattedNumber, locale) {
    const example = new Intl.NumberFormat(locale).format(12345.6);
    const thousandSeparator = example.charAt(2);
    const decimalSeparator = example.charAt(example.length - 2);
    const normalizedNumber = formattedNumber
        .replace(new RegExp(`\\${thousandSeparator}`, "g"), "")
        .replace(new RegExp(`\\${decimalSeparator}`), ".");
    return parseFloat(normalizedNumber);
}
export default deformatNumber;
