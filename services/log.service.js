import chalk from 'chalk';
import dedent from "dedent-js";

const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + " " + error)
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen('SUCCESS') + " " + message)
}

const printHelp = () => {
    console.log(
        dedent(`${chalk.bgCyan(" HELP ")}
         Without parameters - displaynig forecast
         -s [CITY] for setting city
         -h to display HELP menu
         -t [API_KEY] to save the weather api key`
        )
    )
}

export {printError, printSuccess, printHelp}