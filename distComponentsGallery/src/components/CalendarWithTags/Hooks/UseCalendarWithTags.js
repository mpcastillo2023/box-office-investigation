import { useEffect, useState } from "react";
const UseCalendarWithTags = ({ value = [], currentLocale, onChange }) => {
    const [tags, setTags] = useState(value);
    const handleAddTags = (selectedDates) => {
        const newTags = selectedDates.map((date) => {
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();
            const transformedDate = date.toLocaleString(currentLocale, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            });
            return {
                formatedDate: transformedDate,
                date: `${year}-${month + 1}-${day}`
            };
        });
        setTags(newTags);
    };
    const handleRemove = (dateString) => {
        setTags((prev) => prev.filter((tag) => tag.formatedDate !== dateString));
    };
    useEffect(() => {
        onChange?.(tags.length ? tags.map((tag) => tag.date) : []);
    }, [tags]);
    return { handleAddTags, handleRemove, tags };
};
export default UseCalendarWithTags;
