import { DateInfo } from "../Types/Types";
type Props = {
    /**
     * OnChange function
     *
     * @param {(tags: string[]) => void}
     */
    onChange?: (tags: string[]) => void;
    /**
     * value with an array of DateInfo
     * @param {DateInfo[]}
     */
    value?: DateInfo[];
    /**
     * The current locale to use for displaying dates. Default value is "es" (Spanish).
     * @param {string}
     */
    currentLocale: string;
};
declare const UseCalendarWithTags: ({ value, currentLocale, onChange }: Props) => {
    handleAddTags: (selectedDates: Date[]) => void;
    handleRemove: (dateString: string) => void;
    tags: DateInfo[];
};
export default UseCalendarWithTags;
