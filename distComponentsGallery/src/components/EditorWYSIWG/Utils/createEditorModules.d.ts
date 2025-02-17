declare const createEditorModules: (handlers: Record<string, () => void>) => {
    toolbar: {
        container: (string[] | ({
            header: string;
            font?: undefined;
        } | {
            font: never[];
            header?: undefined;
        })[] | {
            size: string[];
        }[] | ({
            list: string;
            indent?: undefined;
        } | {
            indent: string;
            list?: undefined;
        })[] | {
            color: string[];
            background: string[];
        }[] | {
            background: string[];
        }[])[];
        handlers: Record<string, () => void>;
    };
    clipboard: {
        matchVisual: boolean;
    };
};
export default createEditorModules;
