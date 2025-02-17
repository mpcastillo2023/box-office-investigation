import { MenuItem } from "../Types";
export declare const MultiLevelMenuTestData: MenuItem[];
export declare const getParent: (element: HTMLElement) => HTMLElement;
export declare const getChildLevel: (parentElement: HTMLElement) => HTMLElement;
export declare const queryLinksInMenuLevel: (parentElement: HTMLElement, linkNames: string[]) => (HTMLElement | null)[];
