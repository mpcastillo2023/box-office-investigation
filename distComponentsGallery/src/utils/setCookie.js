function setCookie(cname, cvalue, options = "") {
    document.cookie = cname + "=" + cvalue + ";" + options;
}
export default setCookie;
