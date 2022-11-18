#!usr/bin/env node
import {getArguments} from "./helpers/arguments.js";
import {printHelp, printSuccess, printError} from "./services/log.service.js";
import {getKeyValue, saveKeyValue} from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";

const saveToken = async (token) => {
    if (!token.length){
        printError("No token");
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess("Token saved")
    } catch (e) {
        printError(e.message)
    }
}

const initCLI = () => {
    const argument = getArguments(process.argv)
    if(argument.h){
        printHelp();
    }
    if(argument.s){

    }
    if(argument.t){
        return saveToken(argument.t)
    }
    getWeather("London");
};

initCLI();