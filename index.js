const { getData } = require("country-list");
const { flag } = require("country-emoji");
const country = require("countryjs");

module.exports = () => {
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
};
