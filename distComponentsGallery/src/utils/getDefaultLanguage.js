import { localeItem } from "../const/localStorageItems";
const getDefaultLanguage = () => {
    const storedLang = localStorage.getItem(localeItem);
    if (storedLang &&
        (storedLang === "es" || storedLang === "en" || storedLang === "ca")) {
        return storedLang;
    }
    const navigatorLang = navigator.language.split("-")[0];
    if (navigatorLang === "es" ||
        navigatorLang === "en" ||
        navigatorLang === "ca") {
        return navigatorLang;
    }
    else {
        return "es";
    }
};
export default getDefaultLanguage;
