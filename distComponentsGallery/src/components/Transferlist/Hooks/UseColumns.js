import { useState } from "react";
import moveAllItems from "../Utils/moveAllItems";
import moveSomeItems from "../Utils/moveSomeItems";
export default function UseColumns({ onChange, checkedItems, setCheckedItems, defaultValue = {
    rightColumn: [],
    leftColumn: []
}, value }) {
    const [columns, setColumns] = useState(defaultValue);
    const moveCheckedItems = ({ from, to }) => {
        const checkedItemsFrom = checkedItems[from];
        if (value) {
            const newColumns = moveSomeItems(checkedItemsFrom, value, from, to);
            onChange(newColumns);
        }
        else {
            const newColumns = moveSomeItems(checkedItemsFrom, columns, from, to);
            setColumns(newColumns);
        }
        setCheckedItems((prevState) => {
            return {
                ...prevState,
                [from]: []
            };
        });
    };
    const moveAllItemsFromTo = ({ from, to }) => {
        if (value) {
            const newColumns = moveAllItems(value, from, to);
            onChange(newColumns);
        }
        else {
            const newColumns = moveAllItems(columns, from, to);
            setColumns(newColumns);
        }
        setCheckedItems((prevState) => {
            return {
                ...prevState,
                [from]: []
            };
        });
    };
    const moveItem = ({ from, to, index }) => {
        if (value) {
            const movedItem = value[from][index];
            const newColumns = moveSomeItems([movedItem], value, from, to);
            onChange(newColumns);
        }
        else {
            const movedItem = columns[from][index];
            const newColumns = moveSomeItems([movedItem], columns, from, to);
            setColumns(newColumns);
            onChange(newColumns);
        }
    };
    return {
        moveAllItemsFromTo,
        moveCheckedItems,
        columns: value ? value : columns,
        moveItem
    };
}
