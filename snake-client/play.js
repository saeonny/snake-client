// port : 50541
const net = require("net");
const { stdin } = require("process");


const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541"
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("hello i entered");
  });

  conn.on("connect", ()=> {
    conn.write("Name: SJ");
  });
  
  
  // conn.on("connect", ()=> {
  //   setTimeout(()=>{
  //     console.log("move up");
  //     conn.write("Move: up");
  //   },2000);
    
  // });
 

  return conn;
};


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
};
setupInput();

stdin.on("data",handleUserInput);



console.log("Connecting ...");
connect();

module.exports = {net,connect};

