// Slugify a string
function slugify(str, options) {
    str = str.replace(/^\s+|\s+$/g, " ");
    // Make the string lowercase
    // str = options && options?.isLowerCase ? str.toLowerCase() : str;
    const hasOptions = options && Object.values(options).length > 0 ? true : false;
    if (hasOptions && options?.isLowerCase) {
        str = str.toLowerCase();
    }
    else if (!hasOptions) {
        str = str.toLowerCase();
    }
    // Remove accents, swap ñ for n, etc
    const from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;$";
    const to = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
    if (hasOptions && options?.replaceWhiteSpaces) {
        str = str
            // Remove invalid chars
            .replace(/[^a-zA-Z0-9 -]/g, "")
            // Collapse whitespace and replace by -
            .replace(/\s+/g, "-")
            // Collapse dashes
            .replace(/-+/g, "-");
    }
    else if (hasOptions && !options?.replaceWhiteSpaces) {
        str = str.replace(/[^a-zA-Z0-9 -]/g, "");
    }
    else {
        str = str
            .replace(/[^a-zA-Z0-9 -]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    }
    return str;
}
export default slugify;
