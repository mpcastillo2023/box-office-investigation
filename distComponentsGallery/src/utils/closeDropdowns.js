const closeDropdowns = () => {
    document.dispatchEvent(new CustomEvent("closeDropdowns"));
};
export default closeDropdowns;
