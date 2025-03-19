import { objectHasProperty } from "@cg-utils";
const mergeObjects = (firstObject, secondObject) => {
    if (!firstObject)
        return secondObject || {};
    if (!secondObject)
        return firstObject || {};
    const newObject = {};
    const keysIterated = [];
    for (const key in firstObject) {
        keysIterated.push(key);
        if (objectHasProperty(firstObject, key)) {
            newObject[key] = firstObject[key];
        }
        if (objectHasProperty(secondObject, key)) {
            newObject[key] += ` ${secondObject[key]}`;
        }
    }
    for (const key in secondObject) {
        if (!keysIterated.includes(key)) {
            keysIterated.push(key);
            if (objectHasProperty(secondObject, key)) {
                newObject[key] = secondObject[key];
            }
        }
    }
    return newObject;
};
export default mergeObjects;
