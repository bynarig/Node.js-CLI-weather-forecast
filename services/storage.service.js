import {homedir} from "os";
import {join} from "path";
import {promises} from "fs";

const filePath = join(homedir(), "/Documents/weather-data.json")

const saveKeyValue = async (key, value) => {
    var data = {};
    if (await isExsist(filePath)) {
        const file = await promises.readFile(filePath)
        data = JSON.parse(file);
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data))
}
const getKeyValue = async (key) => {
    if (await isExsist(filePath)){
        const file = await promises.readFile(filePath);
        const data = JSON.parse(file);
        return data[key];
    }
    return undefined;
}

const isExsist = async (path) => {
    try{
        await promises.stat(path);
        return true;
    } catch (e) {
        return false;
    }
}

export {saveKeyValue, getKeyValue}