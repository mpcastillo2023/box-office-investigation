type Props = {
    min: number;
    max: number;
    value?: number;
    onChange?: (sliderValue: number) => void;
};
export default function UseSlider({ min, max, onChange }: Props): {
    moveSlider: (newSliderPosition: number) => void;
    trackDimension: {
        elementRef: (node: Element | null) => void;
        rect: DOMRect | undefined;
        node: Element | null;
    };
    setIsSliderMoving: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    sliderPosition: number;
    isSliderMoving: boolean;
    calculatePercentage: (sliderPosition: number) => number;
    adjustedSliderPosition: string | number;
};
export {};
