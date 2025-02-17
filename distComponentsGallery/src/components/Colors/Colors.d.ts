import React from "react";
type Props = {
    /**
     * An objects that contains the dark Colors.
     * @param {object}
     */
    darkColors: object;
    /**
     * An objects that contains the light Colors.
     * @param {object}
     */
    lightColors: object;
};
declare const ColorSwatches: ({ darkColors, lightColors }: Props) => React.JSX.Element;
export default ColorSwatches;
