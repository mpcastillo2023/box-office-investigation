import { DateInfo } from "./Types/Types";
type Props = {
    /**
     * The current locale to use for displaying dates. Default value is "es" (Spanish).
     * @param {string}
     */
    currentLocale: string;
    /**
     * minDate - allows to define a minimun date
     * @param {Date | undefined}
     */
    minDate?: Date | undefined;
    /**
     * maxDate - allows to define a maximun date
     * @param {Date | undefined}
     */
    maxDate?: Date | undefined;
    /**
     * OnChange function
     * @param {(tags: string[]) => void}
     */
    onChange?: (tags: string[]) => void;
    /**
     * value with an array of DateInfo
     * @param {DateInfo[]}
     */
    value?: DateInfo[];
    /**
     * Disabled component and tags
     * @param {boolean}
     */
    disabled?: boolean;
    className?: string;
};
/**
 * CalendarWithTags component represents a calendar UI that allows users to select dates,
 * and those selected dates are displayed as tags next to the calendar.
 *
 * Dates can be added by clicking on the date in the calendar and removed by clicking the corresponding tag.
 *
 * @param {Props} props - Props for the CalendarWithTags component.
 *
 * @returns {JSX.Element}
 */
declare const CalendarWithTags: ({ currentLocale, disabled, onChange, value, minDate, maxDate, className }: Props) => JSX.Element;
export default CalendarWithTags;
