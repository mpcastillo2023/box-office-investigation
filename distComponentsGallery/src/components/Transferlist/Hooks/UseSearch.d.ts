import { TransferlistItemColumns } from "../Types/Types";
type Props = {
    columns: TransferlistItemColumns;
};
export default function UseSearch({ columns }: Props): {
    leftDisplay: import("../Types/Types").TransferlistItem[];
    rightDisplay: import("../Types/Types").TransferlistItem[];
    setLeftSearch: import("react").Dispatch<import("react").SetStateAction<string>>;
    setRightSearch: import("react").Dispatch<import("react").SetStateAction<string>>;
};
export {};
