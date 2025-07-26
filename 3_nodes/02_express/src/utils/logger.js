import path from "path";
import fs from "fs";
import { createLogger } from "winston";

let dir = "logs";

if (!dir) dir = path.resolve("logs");

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

const logger = createLogger({});
