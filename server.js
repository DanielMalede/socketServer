const fs = require("fs");
const server = require("http").createServer((req, res) => {
  fs.readFile("./index.html", (error, result) => res.end(result));
});
const io = require("socket.io")(server);


io.on("connection", (socket) => {
  socket.on("message", (textmsg) => {
    io.emit("message", textmsg);
  });
});


server.listen(5000);
