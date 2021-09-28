const jsonServer = require("json-server");

const server = jsonServer.create();

const { getData } = require("country-list");
const { flag } = require("country-emoji");
const country = require("countryjs");

function makeData() {
  const countries = getData();

  const countriesEmoji = [];
  for (let i = 0; i < countries.length; i++) {
    countriesEmoji.push({
      id: countries[i].code,
      name: countries[i].name,
      emoji: flag(countries[i].code),
    });
  }

  const data = { countries: countriesEmoji, countriesFull: country.all() };

  return data;
}


const router = jsonServer.router(makeData());

const middleware = jsonServer.defaults();
const port = process.env.PORT || 3000;

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'too many requests sent by this ip, please try again in an hour !'
});

server.use(limiter);
server.use()
server.use(middleware);
server.use(router);

jsonServer.defaults({"readOnly": true});

server.get("/", (req, res) => {
  res.json({ message: "Welcome to Countries API. Use /countries or /countriesFull" });
});

server.listen(port, () => {
  console.log("JSON Server is running on port " + port);
});
