const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "Localhost",
    port: "50541"
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("you are connected");
  });

 
  return conn;
};


module.exports = {net, connect};