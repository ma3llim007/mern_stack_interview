const Logger = (function () {
    let instance;
    function createInstance() {
        return {
            logs: [],
            log(message) {
                const timeStamp = new Date().toLocaleDateString();
                const entry = `[${timeStamp}] ${message}`;
                this.logs.push(entry);
                console.log(entry);
            },
            getLog() {
                return this.logs.length;
            },
        };
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }

            return instance;
        },
    };
})();

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("user login one");
logger1.log("User Click on the login Button");
logger2.log("user login two");
logger1.log("User Click on the SignUp Button");

console.log("Total logs:", logger1.getLog());
console.log("Same instance", logger1 === logger2);
