import { SearchInput } from "../components";
const meta = {
    title: "SearchInput",
    component: SearchInput,
    tags: ["autodocs"],
    args: {}
};
export default meta;
export const DefaultSearch = {
    args: {}
};
export const DisabledSearch = {
    args: {
        disabled: true
    }
};
export const SearchIconStart = {
    args: {
        iconPosition: "start"
    }
};
export const SearchWithPlaceholder = {
    args: {
        placeholder: "Search organizers..."
    }
};
