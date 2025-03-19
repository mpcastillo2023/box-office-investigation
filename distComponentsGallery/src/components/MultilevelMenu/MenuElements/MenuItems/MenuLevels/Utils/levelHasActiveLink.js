const levelHasActiveLink = (menuItems = [], location) => {
    let hasActiveLocation = false;
    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        if (menuItem.children) {
            hasActiveLocation = levelHasActiveLink(menuItem.children, location);
        }
        else if (menuItem.href) {
            hasActiveLocation = menuItem.href === location;
        }
        if (hasActiveLocation)
            break;
    }
    return hasActiveLocation;
};
export default levelHasActiveLink;
