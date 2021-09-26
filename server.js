const jsonServer = require("json-server");
const server = jsonServer.create();

const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'index.js'))

// const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

jsonServer.defaults(["readOnly"]);

server.get("/", (req, res) => {
  res.json({ message: "use /countries" });
});

server.listen(port, () => {
  console.log("JSON Server is running on port " + port);
});
