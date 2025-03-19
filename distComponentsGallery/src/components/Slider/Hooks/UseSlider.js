import { UseGetElementDimension } from "@cg-hooks/index";
import { useState } from "react";
import { buttonHalfWidth } from "../Slider";
export default function UseSlider({ min, max, onChange }) {
    const trackDimension = UseGetElementDimension();
    const [sliderPosition, setSliderPosition] = useState(0);
    const [isSliderMoving, setIsSliderMoving] = useState(false);
    const trackRight = trackDimension.rect?.right || 0;
    const trackLeft = trackDimension.rect?.left || 0;
    const trackWidth = trackDimension.rect?.width || 0;
    let maxMinSliderPosition = "";
    if (trackRight < sliderPosition) {
        maxMinSliderPosition = `calc(100% + ${buttonHalfWidth}px)`;
    }
    else if (trackLeft > sliderPosition) {
        maxMinSliderPosition = `${buttonHalfWidth}px`;
    }
    const adjustedSliderPosition = maxMinSliderPosition === ""
        ? sliderPosition - trackLeft + 10
        : maxMinSliderPosition;
    const calculatePercentage = (sliderPosition) => {
        const totalPercentage = max - min;
        let percentage = Math.round(((sliderPosition - trackLeft) / trackWidth) * totalPercentage) + min;
        if (percentage > max) {
            percentage = max;
        }
        else if (percentage < min) {
            percentage = min;
        }
        return percentage;
    };
    const moveSlider = (newSliderPosition) => {
        setSliderPosition(newSliderPosition);
        if (onChange)
            onChange(calculatePercentage(newSliderPosition));
    };
    return {
        moveSlider,
        trackDimension,
        setIsSliderMoving,
        sliderPosition,
        isSliderMoving,
        calculatePercentage,
        adjustedSliderPosition
    };
}
