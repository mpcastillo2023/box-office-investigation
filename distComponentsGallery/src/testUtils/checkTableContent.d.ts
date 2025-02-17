import { Column } from "@cg-components/ServerTable/Types/Types";
declare const checkTableContent: <T>(columns: Column[], expectedData: T[], ignoredColumnsKeys?: Column["name"][]) => Promise<void>;
export default checkTableContent;
