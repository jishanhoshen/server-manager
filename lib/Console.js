// stylishConsoleLib.js

const stylishConsole = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

const logStart = () => {
  console.log("\n");
  console.log(
    `${stylishConsole.yellow}${stylishConsole.bold}------- [Log Awesome] ------- ${stylishConsole.reset}`
  );
};

global.printError = function (message) {
  console.log(
    `${stylishConsole.red}${stylishConsole.bold}[ERROR] ${message}${stylishConsole.reset}`
  );
};

global.printSuccess = function (message) {
  console.log(
    `${stylishConsole.green}${stylishConsole.bold}[SUCCESS] ${message}${stylishConsole.reset}`
  );
};

global.printWarning = function (message) {
  console.log(
    `${stylishConsole.yellow}${stylishConsole.bold}[WARNING] ${message}${stylishConsole.reset}`
  );
};

global.printInfo = function (message) {
  console.log(
    `${stylishConsole.blue}${stylishConsole.bold}[INFO] ${message}${stylishConsole.reset}`
  );
};

logStart();
