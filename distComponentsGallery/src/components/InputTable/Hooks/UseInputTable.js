import { useState } from "react";
export default function UseInputTable({ data, onChange, isValidSaveCallback }) {
    const [tableData, setTableData] = useState(data);
    const [hiddenIndexes, setHiddenIndexes] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeItem, setActiveItem] = useState(null);
    const rows = onChange ? data : tableData;
    const onSearchChangeHandler = (query) => {
        if (query.trim().length > 0) {
            const hiddenIndexes = rows
                .map((row, index) => {
                const searchableRow = JSON.stringify(row);
                return searchableRow.includes(query) ? -1 : index;
            })
                .filter((index) => index > -1);
            setHiddenIndexes(hiddenIndexes);
        }
        else {
            setHiddenIndexes([]);
        }
    };
    const onChangeCellHandler = (value, rowIndex, field) => {
        const onChangeCell = (oldData) => {
            const newState = oldData.map((prevData) => {
                return { ...prevData };
            });
            newState[rowIndex][field] = value;
            return newState;
        };
        if (onChange) {
            onChange(onChangeCell(data));
        }
        else {
            setTableData(onChangeCell);
        }
    };
    const onCancelHandler = (rowIndex) => {
        if (activeItem) {
            const onCancel = (oldData) => {
                const newState = oldData.map((prevData) => {
                    return { ...prevData };
                });
                newState[rowIndex] = activeItem;
                return newState;
            };
            if (onChange) {
                onChange(onCancel(data));
            }
            else {
                setTableData(onCancel);
            }
        }
        setActiveIndex(null);
        setActiveItem(null);
    };
    const onSaveHandler = async (rowIndex) => {
        let isValid;
        if (onChange) {
            isValid = isValidSaveCallback
                ? await isValidSaveCallback(data[rowIndex])
                : true;
        }
        else {
            isValid = isValidSaveCallback
                ? await isValidSaveCallback(tableData[rowIndex])
                : true;
        }
        if (isValid) {
            if (activeIndex !== null && activeItem !== null) {
                setActiveIndex(null);
                setActiveItem(null);
            }
        }
    };
    const onEditHandler = (rowIndex) => {
        if (activeItem !== null && activeIndex !== null) {
            const onEdit = (oldData) => {
                const newState = oldData.map((prevData) => {
                    return { ...prevData };
                });
                newState[activeIndex] = activeItem;
                return newState;
            };
            if (onChange) {
                onChange(onEdit(data));
            }
            else {
                setTableData(onEdit);
            }
        }
        if (onChange) {
            setActiveItem({ ...data[rowIndex] });
        }
        else {
            setActiveItem({ ...tableData[rowIndex] });
        }
        setActiveIndex(rowIndex);
    };
    const onRemoveHandler = (rowIndex) => {
        const onRemove = (oldData) => {
            const newState = oldData.map((prevData) => {
                return { ...prevData };
            });
            newState.splice(rowIndex, 1);
            return newState;
        };
        if (onChange) {
            onChange(onRemove(data));
        }
        else {
            setTableData(onRemove);
        }
    };
    const onRemoveAllHandler = () => {
        if (onChange) {
            onChange([]);
        }
        else {
            setTableData([]);
        }
    };
    return {
        onChangeCellHandler,
        onCancelHandler,
        onSaveHandler,
        onEditHandler,
        onRemoveHandler,
        activeIndex,
        activeItem,
        tableData,
        rows,
        hiddenIndexes,
        onSearchChangeHandler,
        onRemoveAllHandler
    };
}
