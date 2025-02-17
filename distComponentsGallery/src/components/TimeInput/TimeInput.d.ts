import { TimeInputProps } from "./Types/Types";
/**
 * TimeInput component provides a time input field to control hours and minutes.
 * Display time in 24 hours or 12 hours format. Can be handle with keyboard (arrow up or down)
 *
 * @param {TimeInputProps} props - Props for the TimeInput component.
 * @returns {JSX.Element}
 */
declare const TimeInput: ({ id, value, dataTestId, hoursPlaceholder, minutesPlaceholder, secondsPlaceholder, name, disabled, required, onChange, className, ariaLabel, iconAriaLabel, hoursAriaLabel, minutesAriaLabel, secondsAriaLabel, currentLocale, hasSeconds, isThereError, customContainerClass }: TimeInputProps) => JSX.Element;
export default TimeInput;
