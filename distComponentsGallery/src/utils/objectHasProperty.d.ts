declare function objectHasProperty<T extends object>(obj: T, key: PropertyKey): key is keyof T;
export default objectHasProperty;
