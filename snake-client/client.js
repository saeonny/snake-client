const net = require("net");

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

module.exports = {connect};
