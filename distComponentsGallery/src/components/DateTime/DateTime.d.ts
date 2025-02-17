type Props = {
    /**
     * The current locale to use for displaying dates. Default value is "es" (Spanish).
     * @param {string}
     */
    currentLocale: string;
    /**
     * Disabled components
     * @param {boolean}
     */
    disabled?: boolean;
    /**
     * Value displaying time and date based on
     * @type {Date }
     */
    value: Date | string;
    /**
     * OnChange function that accept value as string
     *
     * @type {(value: Date | string) => void;}
     */
    onChange?: (value: Date | string) => void;
    /**
     * minDate - allows to define a minimum date
     *
     * @type {Date | undefined}
     */
    minDate?: Date | undefined;
    /**
     * maxDate - allows to define a maximum date
     *
     * @param {Date | undefined}
     */
    maxDate?: Date | undefined;
    /**
     * set this input to required
     *
     * @param {boolean}
     */
    required?: boolean;
    /**
     * identifier for input date and time
     * example: id="x"  x-calendar x-time
     *
     * @param {string}
     */
    id: string;
    /**
     * className applied only to CalendarInputNative
     * @type {string | undefined}
     */
    calendarInputClassName?: string | undefined;
    /**
     * className applied in DateTime to change styles
     * @type {string | undefined}
     */
    className?: string | undefined;
    /**
     * className applied only to CalendarInputNative
     * @type {string | undefined}
     */
    timeInputClassName?: string | undefined;
    /**
     * Whether the time has seconds
     * @type {string | undefined}
     */
    hasSeconds?: boolean;
};
/**
 * DateTime component represents a calendar input and time input that let
 * display and change dates and hours
 * @param {Props} Props  - Props for the DateTime component
 * @returns {JSX.Element}
 */
declare const DateTime: ({ currentLocale, disabled, value, onChange, required, maxDate, minDate, id, timeInputClassName, hasSeconds }: Props) => JSX.Element;
export default DateTime;
