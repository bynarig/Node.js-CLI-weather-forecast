#!usr/bin/env node
import {getArguments} from "./helpers/arguments.js";
import {printHelp} from "./services/log.service.js";
import {saveKeyValue} from "./services/storage.service.js";

const initCLI = () => {
    const argument = getArguments(process.argv)
    if(argument.h){
        printHelp();
    }
    if(argument.s){

    }
    if(argument.t){
        saveKeyValue("token", argument.t)
    }
};

initCLI();