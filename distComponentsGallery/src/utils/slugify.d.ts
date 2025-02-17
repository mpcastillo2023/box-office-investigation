type OptionsSlug = {
    isLowerCase: boolean;
    replaceWhiteSpaces: boolean;
};
declare function slugify(str: string, options?: OptionsSlug): string;
export default slugify;
