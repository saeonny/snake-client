const { stdin } = require("process");
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data",handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === "h") {
    connection.write("Say: hello");
  }
  if (data === "m") {
    connection.write("Say: move!");
  }
};




module.exports = {setupInput};