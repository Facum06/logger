const winston = require("winston");

function buildProdLogger(){
    const prodLogger = winston.createLogger({
        //level:"",
        transports: [
            new winston.transports.File({filename: "./log/warn.log", level:"warn"}),
            new winston.transports.File({filename: "./log/error.log", level:"error"}),
            new winston.transports.Console({level:"info"}),
            new winston.transports.Console({level:"warning"}),
            new winston.transports.Console({level:"error"}),
        ],
    });
    return prodLogger;
}

function buildDevLogger(){
    const prodLogger = winston.createLogger({
        //level:"",
        transports: [
           // new winston.transports.File({filename: "debug.log", level:"debug"}),
           new winston.transports.Console({level:"info"}),
           new winston.transports.Console({level:"warning"}),
           new winston.transports.Console({level:"error"}),
        ],
    });
    return prodLogger;
}

let logger = null;

if (process.env.NODE_ENV === "PROD"){
    logger = buildProdLogger();

}else {
    logger = buildDevLogger();
}

module.exports = logger;