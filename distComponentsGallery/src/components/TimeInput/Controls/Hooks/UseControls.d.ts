import { ControlProps } from "../Controls";
declare const UseControls: (props: ControlProps) => {
    handleAddTime: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleRemoveTime: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export default UseControls;
