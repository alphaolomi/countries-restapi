# Simple Countries REST API
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Falphaolomi%2Fcountries-restapi.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Falphaolomi%2Fcountries-restapi?ref=badge_shield)

 
API for getting information about countries.

API is based on [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) standard.

## Endpoints

### GET /countries

```json
[
  {
    "id": "AD",
    "shortName": "Andorra",
    "name": "Andorra",
    "emoji": "🇦🇩"
  },
//   ...
]
```


### GET /countries?id=TZ


```json
{
    "id": "TZ",    
    "name": "Tanzania, United Republic of",
    "emoji": "🇹🇿"
},
```

### GET /countriesFull

```json
[
//    ...
  {
    "name": "Tanzania",
    "altSpellings": [
      "TZ",
      "United Republic of Tanzania",
      "Jamhuri ya Muungano wa Tanzania"
    ],
    "area": 945087,
    "borders": [ "BDI", "COD", "KEN", "MWI", "MOZ", "RWA", "UGA", "ZMB" ],
    "callingCodes": [ "255"],
    "capital": "Dodoma",
//    ...
  }
]
```

### GET /countriesFull?name=Tanzania

```json
  {
    "name": "Tanzania",
    "altSpellings": [
      "TZ",
      "United Republic of Tanzania",
      "Jamhuri ya Muungano wa Tanzania"
    ],
    "area": 945087,
    "borders": [ "BDI", "COD", "KEN", "MWI", "MOZ", "RWA", "UGA", "ZMB" ],
    "callingCodes": [ "255"],
    "capital": "Dodoma",
//    ...
  }
```

## 📝 License

This API is licensed under [MIT](http://opensource.org/licenses/MIT).


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Falphaolomi%2Fcountries-restapi.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Falphaolomi%2Fcountries-restapi?ref=badge_large)