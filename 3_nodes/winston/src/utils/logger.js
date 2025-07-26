import winston from "winston";
const { combine, timestamp, errors, jso } = winston.format;

const logger = winston.createLogger({
    level: "info",
    format: combine(timestamp(), errors({ stack: true }), json()),
    transports: [new winston.transports.Console(), new winston.transports.File({ filename: "logs/standard.log" })],
    defaultMeta: { service: "checkout-service" },
    exceptionHandlers: [new winston.transports.File({ filename: "logs/exception.log" })],
    rejectionHandlers: [new winston.transports.File({ filename: "logs/rejections.log" })],
});

// logger.info("Hello World");
logger.error(new Error("An Error"));

export default logger;
