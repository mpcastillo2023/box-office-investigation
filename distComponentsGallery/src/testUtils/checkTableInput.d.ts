import { Column } from "@cg-components/ServerTable/Types/Types";
declare const checkTableInput: <T>(columns: {
    name: string;
    label: string;
}[], expectedData: T[], ignoredColumnsKeys?: Column["name"][]) => Promise<void>;
export default checkTableInput;
