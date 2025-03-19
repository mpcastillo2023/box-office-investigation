import React, { useEffect, useRef } from "react";
import styles from "./Styles/styles.module.scss";
/**
 * Spinner component provides a loading spinner to indicate a waiting state.
 * It features a dual-ring design and allows customization through custom styling classes.
 *
 * @param {Props} props - Props for the Spinner component.
 * @returns {JSX.Element}
 */
const distanceBetweenSpinners = 300;
export default function Spinner({ customClasses }) {
    const ref = useRef(null);
    const calculateDistance = (rect1, rect2) => {
        const dx = rect1.left - rect2.left;
        const dy = rect1.top - rect2.top;
        return Math.sqrt(dx * dx + dy * dy);
    };
    const checkSpinnersDistance = () => {
        const spinners = document.querySelectorAll(".spinners");
        for (let i = 1; i < spinners.length; i++) {
            const currentSpinner = spinners[i];
            const prevSpinner = spinners[i - 1];
            const currentSpinnerRect = currentSpinner.getBoundingClientRect();
            const prevSpinnerRect = prevSpinner.getBoundingClientRect();
            const totalDistanceBetweenSpinners = calculateDistance(currentSpinnerRect, prevSpinnerRect);
            if (totalDistanceBetweenSpinners < distanceBetweenSpinners) {
                currentSpinner.classList.add("hidden-spinner");
                currentSpinner.style.opacity = "0";
            }
        }
    };
    useEffect(() => {
        checkSpinnersDistance();
        return () => {
            const hiddenSpinners = document.querySelectorAll(".spinners.hidden-spinner");
            hiddenSpinners.forEach((spinner) => {
                spinner.classList.remove("hidden-spinner");
                spinner.style.opacity = "0";
            });
            checkSpinnersDistance();
        };
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: `${styles.ldsSpinner} ${customClasses || ""} spinners`, role: "alert", "aria-live": "assertive", ref: ref },
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null))));
}
