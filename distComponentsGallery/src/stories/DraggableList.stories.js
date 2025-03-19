import { DraggableList } from "../components";
import React from "react";
const meta = {
    title: "DraggableList",
    component: DraggableList,
    tags: ["autodocs"],
    args: {
        list: [
            {
                item: React.createElement("div", null, "Primer elemento"),
                key: 1,
                searchBy: "1",
                disabled: true
            },
            {
                item: React.createElement("div", null, "Segundo elemento"),
                key: 2,
                searchBy: "2"
            },
            {
                item: React.createElement("div", null, "Tercer elemento"),
                key: 3,
                searchBy: "3"
            },
            {
                item: React.createElement("div", null, "Cuarto elemento"),
                key: 4,
                searchBy: "4"
            }
        ],
        shouldDisplayKey: false,
        onChangeSortingOrder: () => { }
    }
};
export default meta;
export const WithSearch = {
    args: {
        displaySearch: true
    }
};
export const WithItemIds = {
    args: {
        displaySearch: true,
        shouldDisplayKey: true
    }
};
export const WithButtons = {
    args: {
        displaySearch: true,
        shouldDisplayKey: true,
        moveToBottomButton: React.createElement(React.Fragment, null, "Mover al final"),
        moveToTopButton: React.createElement(React.Fragment, null, "Mover al principio")
    }
};
