import { useEffect, useState } from "react";
export default function UseCheckItems({ disabled }) {
    const [checkedItems, setCheckedItems] = useState({
        leftColumn: [],
        rightColumn: []
    });
    useEffect(() => {
        if (disabled) {
            setCheckedItems({
                leftColumn: [],
                rightColumn: []
            });
        }
    }, [disabled]);
    const handleToggle = (checkedItem, columnKey) => {
        if (!disabled) {
            setCheckedItems((prevState) => {
                const newColumn = [...prevState[columnKey]];
                const currentIndex = newColumn.findIndex((item) => item.id === checkedItem.id);
                if (currentIndex === -1) {
                    newColumn.push(checkedItem);
                }
                else {
                    newColumn.splice(currentIndex, 1);
                }
                return {
                    ...prevState,
                    [columnKey]: newColumn
                };
            });
        }
    };
    return {
        checkedItems,
        setCheckedItems,
        handleToggle
    };
}
