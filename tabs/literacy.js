const literacyContent = document.getElementById("literacy-content");
const literacyData = [
    {
        "country": "Zimbabwe",
        "code": null,
        "year": 2022,
        "litreacy": 89.85,
        "gdp_percapita": null
    },
    {
        "country": "Zimbabwe",
        "code": "ZW",
        "year": 2015,
        "litreacy": 86.87348,
        "gdp_percapita": 2313.8787
    },
    {
        "country": "Zimbabwe",
        "code": "ZW",
        "year": 2014,
        "litreacy": 88.69342,
        "gdp_percapita": 2316.9546
    },
    {
        "country": "Zimbabwe",
        "code": "ZW",
        "year": 2011,
        "litreacy": 83.58271,
        "gdp_percapita": 2033.1814
    },
    {
        "country": "Zimbabwe",
        "code": "ZW",
        "year": 1992,
        "litreacy": 83.51258,
        "gdp_percapita": 2468.2783
    },
    {
        "country": "Zimbabwe",
        "code": null,
        "year": 1982,
        "litreacy": 77.79417,
        "gdp_percapita": null
    },
    {
        "country": "Zambia",
        "code": "ZM",
        "year": 2020,
        "litreacy": 87.5,
        "gdp_percapita": 3183.651
    },
    {
        "country": "Zambia",
        "code": "ZM",
        "year": 2015,
        "litreacy": 85.11726,
        "gdp_percapita": 3365.3792
    },
    {
        "country": "Zambia",
        "code": "ZM",
        "year": 2010,
        "litreacy": 83.00767,
        "gdp_percapita": 3083.3552
    },
    {
        "country": "Zambia",
        "code": "ZM",
        "year": 2007,
        "litreacy": 61.12709,
        "gdp_percapita": 2641.0315
    },
    {
        "country": "Zambia",
        "code": "ZM",
        "year": 2002,
        "litreacy": 69.14922,
        "gdp_percapita": 2171.9312
    },
    {
        "country": "Zambia",
        "code": "ZM",
        "year": 1999,
        "litreacy": 68.00179,
        "gdp_percapita": 2074.4536
    },
    {
        "country": "Zambia",
        "code": "ZM",
        "year": 1990,
        "litreacy": 64.99828,
        "gdp_percapita": 2290.0393
    },
    {
        "country": "Yemen",
        "code": null,
        "year": 2015,
        "litreacy": 69.96195,
        "gdp_percapita": null
    },
    {
        "country": "Yemen",
        "code": null,
        "year": 2014,
        "litreacy": 68.78942,
        "gdp_percapita": null
    },
    {
        "country": "Yemen",
        "code": null,
        "year": 2004,
        "litreacy": 54.1,
        "gdp_percapita": null
    },
    {
        "country": "Yemen",
        "code": null,
        "year": 1994,
        "litreacy": 37.09,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 2022,
        "litreacy": 87.01175,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 2021,
        "litreacy": 86.85275,
        "gdp_percapita": 16997.135
    },
    {
        "country": "World",
        "code": null,
        "year": 2020,
        "litreacy": 86.71151,
        "gdp_percapita": 16175.776
    },
    {
        "country": "World",
        "code": null,
        "year": 2019,
        "litreacy": 86.4896,
        "gdp_percapita": 16847.46
    },
    {
        "country": "World",
        "code": null,
        "year": 2018,
        "litreacy": 86.33905,
        "gdp_percapita": 16558.998
    },
    {
        "country": "World",
        "code": null,
        "year": 2017,
        "litreacy": 86.28823,
        "gdp_percapita": 16156.354
    },
    {
        "country": "World",
        "code": null,
        "year": 2016,
        "litreacy": 86.06116,
        "gdp_percapita": 15750.084
    },
    {
        "country": "World",
        "code": null,
        "year": 2015,
        "litreacy": 85.60183,
        "gdp_percapita": 15433.18
    },
    {
        "country": "World",
        "code": null,
        "year": 2014,
        "litreacy": 85.43371,
        "gdp_percapita": 15112.653
    },
    {
        "country": "World",
        "code": null,
        "year": 2013,
        "litreacy": 84.86014,
        "gdp_percapita": 14789.622
    },
    {
        "country": "World",
        "code": null,
        "year": 2012,
        "litreacy": 84.76106,
        "gdp_percapita": 14504.989
    },
    {
        "country": "World",
        "code": null,
        "year": 2011,
        "litreacy": 84.32265,
        "gdp_percapita": 14230.719
    },
    {
        "country": "World",
        "code": null,
        "year": 2010,
        "litreacy": 84.16,
        "gdp_percapita": 13868.406
    },
    {
        "country": "World",
        "code": null,
        "year": 2009,
        "litreacy": 83.5132,
        "gdp_percapita": 13359.558
    },
    {
        "country": "World",
        "code": null,
        "year": 2008,
        "litreacy": 83.25666,
        "gdp_percapita": 13622.655
    },
    {
        "country": "World",
        "code": null,
        "year": 2007,
        "litreacy": 82.92806,
        "gdp_percapita": 13428.616
    },
    {
        "country": "World",
        "code": null,
        "year": 2006,
        "litreacy": 82.46365,
        "gdp_percapita": 12933.736
    },
    {
        "country": "World",
        "code": null,
        "year": 2005,
        "litreacy": 82.37777,
        "gdp_percapita": 12463.141
    },
    {
        "country": "World",
        "code": null,
        "year": 2004,
        "litreacy": 82.43894,
        "gdp_percapita": 12074.206
    },
    {
        "country": "World",
        "code": null,
        "year": 2003,
        "litreacy": 82.06556,
        "gdp_percapita": 11637.828
    },
    {
        "country": "World",
        "code": null,
        "year": 2002,
        "litreacy": 81.57198,
        "gdp_percapita": 11367.639
    },
    {
        "country": "World",
        "code": null,
        "year": 2001,
        "litreacy": 81.20433,
        "gdp_percapita": 11215.04
    },
    {
        "country": "World",
        "code": null,
        "year": 2000,
        "litreacy": 80.87452,
        "gdp_percapita": 11108.324
    },
    {
        "country": "World",
        "code": null,
        "year": 1999,
        "litreacy": 80.7684,
        "gdp_percapita": 10749.006
    },
    {
        "country": "World",
        "code": null,
        "year": 1998,
        "litreacy": 80.43393,
        "gdp_percapita": 10526.854
    },
    {
        "country": "World",
        "code": null,
        "year": 1997,
        "litreacy": 79.24868,
        "gdp_percapita": 10418.802
    },
    {
        "country": "World",
        "code": null,
        "year": 1996,
        "litreacy": 77.25817,
        "gdp_percapita": 10175.511
    },
    {
        "country": "World",
        "code": null,
        "year": 1995,
        "litreacy": 76.86894,
        "gdp_percapita": 9949.668
    },
    {
        "country": "World",
        "code": null,
        "year": 1994,
        "litreacy": 76.46277,
        "gdp_percapita": 9791.423
    },
    {
        "country": "World",
        "code": null,
        "year": 1993,
        "litreacy": 76.05962,
        "gdp_percapita": 9670.078
    },
    {
        "country": "World",
        "code": null,
        "year": 1992,
        "litreacy": 75.64575,
        "gdp_percapita": 9665.21
    },
    {
        "country": "World",
        "code": null,
        "year": 1991,
        "litreacy": 75.19876,
        "gdp_percapita": 9667.7
    },
    {
        "country": "World",
        "code": null,
        "year": 1990,
        "litreacy": 74.60577,
        "gdp_percapita": 9697.508
    },
    {
        "country": "World",
        "code": null,
        "year": 1989,
        "litreacy": 74.30384,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1988,
        "litreacy": 73.77016,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1987,
        "litreacy": 72.04868,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1986,
        "litreacy": 71.35792,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1985,
        "litreacy": 70.8034,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1984,
        "litreacy": 70.20852,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1983,
        "litreacy": 69.5504,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1982,
        "litreacy": 68.84949,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1981,
        "litreacy": 68.29191,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1980,
        "litreacy": 67.58338,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1979,
        "litreacy": 67.15501,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1978,
        "litreacy": 66.50104,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1977,
        "litreacy": 65.87833,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1976,
        "litreacy": 65.58655,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1960,
        "litreacy": 42,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1950,
        "litreacy": 36,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1940,
        "litreacy": 42,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1930,
        "litreacy": 33,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1920,
        "litreacy": 32,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1910,
        "litreacy": 26,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1900,
        "litreacy": 21,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1890,
        "litreacy": 21,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1880,
        "litreacy": 20,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1870,
        "litreacy": 19,
        "gdp_percapita": null
    },
    {
        "country": "World",
        "code": null,
        "year": 1820,
        "litreacy": 12,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2022,
        "litreacy": 60.3127,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2021,
        "litreacy": 60.03461,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2020,
        "litreacy": 59.61751,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2019,
        "litreacy": 59.51172,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2018,
        "litreacy": 59.56846,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2017,
        "litreacy": 56.48554,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2016,
        "litreacy": 55.43792,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2015,
        "litreacy": 54.81832,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2014,
        "litreacy": 54.00676,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2013,
        "litreacy": 53.00278,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2012,
        "litreacy": 52.41016,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2011,
        "litreacy": 51.76631,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2010,
        "litreacy": 51.15696,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2009,
        "litreacy": 50.69238,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2008,
        "litreacy": 49.81004,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2007,
        "litreacy": 50.11955,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2006,
        "litreacy": 57.47115,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2005,
        "litreacy": 51.42382,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2004,
        "litreacy": 51.38341,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2003,
        "litreacy": 49.47437,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2002,
        "litreacy": 49.47245,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2001,
        "litreacy": 48.76261,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 2000,
        "litreacy": 47.05716,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1999,
        "litreacy": 51.05166,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1998,
        "litreacy": 50.17558,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1997,
        "litreacy": 48.82888,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1996,
        "litreacy": 47.80645,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1995,
        "litreacy": 47.01763,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1994,
        "litreacy": 46.86951,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1993,
        "litreacy": 46.00217,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1992,
        "litreacy": 45.16338,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1991,
        "litreacy": 44.82332,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1990,
        "litreacy": 43.60494,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1989,
        "litreacy": 42.82516,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1988,
        "litreacy": 42.03242,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1987,
        "litreacy": 41.29927,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1986,
        "litreacy": 40.55083,
        "gdp_percapita": null
    },
    {
        "country": "Western and Central Africa (WB)",
        "code": null,
        "year": 1985,
        "litreacy": 40.29465,
        "gdp_percapita": null
    },
    {
        "country": "Wallis and Futuna",
        "code": null,
        "year": 1969,
        "litreacy": 50,
        "gdp_percapita": null
    },
    {
        "country": "Virgin Islands",
        "code": null,
        "year": 2005,
        "litreacy": 90,
        "gdp_percapita": null
    },
    {
        "country": "Vietnam",
        "code": null,
        "year": 2019,
        "litreacy": 95.75387,
        "gdp_percapita": 10252.005
    },
    {
        "country": "Vietnam",
        "code": null,
        "year": 2015,
        "litreacy": 94.51427,
        "gdp_percapita": 8091.0903
    },
    {
        "country": "Vietnam",
        "code": null,
        "year": 2009,
        "litreacy": 93.52045,
        "gdp_percapita": 6006.58
    },
    {
        "country": "Vietnam",
        "code": null,
        "year": 2000,
        "litreacy": 90.15613,
        "gdp_percapita": 3690.8682
    },
    {
        "country": "Vietnam",
        "code": null,
        "year": 1999,
        "litreacy": 90.2783,
        "gdp_percapita": 3495.098
    },
    {
        "country": "Vietnam",
        "code": null,
        "year": 1989,
        "litreacy": 87.59645,
        "gdp_percapita": null
    },
    {
        "country": "Vietnam",
        "code": null,
        "year": 1979,
        "litreacy": 83.82594,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 2022,
        "litreacy": 97.6,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 2016,
        "litreacy": 97.12709,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 2015,
        "litreacy": 96.60522,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 2011,
        "litreacy": 94.77022,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 2009,
        "litreacy": 95.51199,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 2007,
        "litreacy": 95.15464,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 2001,
        "litreacy": 92.97983,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1990,
        "litreacy": 89.82525,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1981,
        "litreacy": 84.7322,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1980,
        "litreacy": 84,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1979,
        "litreacy": 83,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1978,
        "litreacy": 83,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1977,
        "litreacy": 82,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1976,
        "litreacy": 81,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1975,
        "litreacy": 80,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1974,
        "litreacy": 80,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1973,
        "litreacy": 79,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1972,
        "litreacy": 78,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1971,
        "litreacy": 77,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1970,
        "litreacy": 76,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1960,
        "litreacy": 62,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1950,
        "litreacy": 51,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1940,
        "litreacy": 42,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1930,
        "litreacy": 36,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1920,
        "litreacy": 32,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1910,
        "litreacy": 29,
        "gdp_percapita": null
    },
    {
        "country": "Venezuela",
        "code": null,
        "year": 1900,
        "litreacy": 28,
        "gdp_percapita": null
    },
    {
        "country": "Vatican",
        "code": null,
        "year": 2011,
        "litreacy": 100,
        "gdp_percapita": null
    },
    {
        "country": "Vanuatu",
        "code": "VU",
        "year": 2021,
        "litreacy": 89.1,
        "gdp_percapita": 2783.0195
    },
    {
        "country": "Vanuatu",
        "code": "VU",
        "year": 2015,
        "litreacy": 85.05868,
        "gdp_percapita": 2859.3496
    },
    {
        "country": "Vanuatu",
        "code": "VU",
        "year": 2014,
        "litreacy": 84.7,
        "gdp_percapita": 2917.6272
    },
    {
        "country": "Vanuatu",
        "code": "VU",
        "year": 2004,
        "litreacy": 78.4,
        "gdp_percapita": 2652.9688
    },
    {
        "country": "Vanuatu",
        "code": "VU",
        "year": 1999,
        "litreacy": 74,
        "gdp_percapita": 2858.0493
    },
    {
        "country": "Vanuatu",
        "code": "VU",
        "year": 1994,
        "litreacy": 68.7,
        "gdp_percapita": 2921.9011
    },
    {
        "country": "Vanuatu",
        "code": null,
        "year": 1984,
        "litreacy": 58.2,
        "gdp_percapita": null
    },
    {
        "country": "Vanuatu",
        "code": null,
        "year": 1979,
        "litreacy": 52.87392,
        "gdp_percapita": null
    },
    {
        "country": "Uzbekistan",
        "code": null,
        "year": 2022,
        "litreacy": 99.99998,
        "gdp_percapita": null
    },
    {
        "country": "Uzbekistan",
        "code": "UZ",
        "year": 2021,
        "litreacy": 99.99792,
        "gdp_percapita": 7734.8325
    },
    {
        "country": "Uzbekistan",
        "code": "UZ",
        "year": 2019,
        "litreacy": 99.99995,
        "gdp_percapita": 7348.147
    },
    {
        "country": "Uzbekistan",
        "code": "UZ",
        "year": 2018,
        "litreacy": 99.99289,
        "gdp_percapita": 7082.9253
    },
    {
        "country": "Uzbekistan",
        "code": "UZ",
        "year": 2016,
        "litreacy": 99.98657,
        "gdp_percapita": 6663.9497
    },
    {
        "country": "Uzbekistan",
        "code": "UZ",
        "year": 2015,
        "litreacy": 99.98383,
        "gdp_percapita": 6401.115
    },
    {
        "country": "Uzbekistan",
        "code": "UZ",
        "year": 2014,
        "litreacy": 99.98055,
        "gdp_percapita": 6075.1924
    },
    {
        "country": "Uzbekistan",
        "code": "UZ",
        "year": 2013,
        "litreacy": 99.99486,
        "gdp_percapita": 5781.1567
    },
    {
        "country": "Uzbekistan",
        "code": "UZ",
        "year": 2000,
        "litreacy": 98.64258,
        "gdp_percapita": 2967.6018
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 2019,
        "litreacy": 98.77035,
        "gdp_percapita": 23256.598
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 2018,
        "litreacy": 98.70386,
        "gdp_percapita": 23184.625
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 2017,
        "litreacy": 98.61572,
        "gdp_percapita": 23106.998
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 2016,
        "litreacy": 98.56147,
        "gdp_percapita": 22793.07
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 2015,
        "litreacy": 98.52387,
        "gdp_percapita": 22486.428
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 2014,
        "litreacy": 98.43593,
        "gdp_percapita": 22477.06
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 2013,
        "litreacy": 98.36387,
        "gdp_percapita": 21839.408
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 2012,
        "litreacy": 98.39594,
        "gdp_percapita": 20933.69
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 2011,
        "litreacy": 98.3359,
        "gdp_percapita": 20275.441
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 2010,
        "litreacy": 98.07271,
        "gdp_percapita": 19331.85
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 2009,
        "litreacy": 98.26723,
        "gdp_percapita": 17978.055
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 2008,
        "litreacy": 98.16356,
        "gdp_percapita": 17287.725
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 2007,
        "litreacy": 97.86389,
        "gdp_percapita": 16166.421
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 2006,
        "litreacy": 97.78963,
        "gdp_percapita": 15202.913
    },
    {
        "country": "Uruguay",
        "code": "UY",
        "year": 1996,
        "litreacy": 96.78181,
        "gdp_percapita": 13657.074
    },
    {
        "country": "Uruguay",
        "code": null,
        "year": 1985,
        "litreacy": 95.37998,
        "gdp_percapita": null
    },
    {
        "country": "Uruguay",
        "code": null,
        "year": 1975,
        "litreacy": 93.86107,
        "gdp_percapita": null
    },
    {
        "country": "Uruguay",
        "code": null,
        "year": 1974,
        "litreacy": 94,
        "gdp_percapita": null
    },
    {
        "country": "Uruguay",
        "code": null,
        "year": 1973,
        "litreacy": 93,
        "gdp_percapita": null
    },
    {
        "country": "Uruguay",
        "code": null,
        "year": 1972,
        "litreacy": 93,
        "gdp_percapita": null
    },
    {
        "country": "Uruguay",
        "code": null,
        "year": 1971,
        "litreacy": 93,
        "gdp_percapita": null
    },
    {
        "country": "Uruguay",
        "code": null,
        "year": 1970,
        "litreacy": 93,
        "gdp_percapita": null
    },
    {
        "country": "Uruguay",
        "code": null,
        "year": 1960,
        "litreacy": 89,
        "gdp_percapita": null
    },
    {
        "country": "Uruguay",
        "code": null,
        "year": 1950,
        "litreacy": 86,
        "gdp_percapita": null
    },
    {
        "country": "Uruguay",
        "code": null,
        "year": 1940,
        "litreacy": 81,
        "gdp_percapita": null
    },
    {
        "country": "Uruguay",
        "code": null,
        "year": 1930,
        "litreacy": 76,
        "gdp_percapita": null
    },
    {
        "country": "Uruguay",
        "code": null,
        "year": 1920,
        "litreacy": 70,
        "gdp_percapita": null
    },
    {
        "country": "Uruguay",
        "code": null,
        "year": 1910,
        "litreacy": 65,
        "gdp_percapita": null
    },
    {
        "country": "Uruguay",
        "code": null,
        "year": 1900,
        "litreacy": 59,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2022,
        "litreacy": 95.95597,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2021,
        "litreacy": 95.91167,
        "gdp_percapita": 18192.873
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2020,
        "litreacy": 95.95692,
        "gdp_percapita": 17017.123
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2019,
        "litreacy": 95.73506,
        "gdp_percapita": 17273.334
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2018,
        "litreacy": 95.42072,
        "gdp_percapita": 16737.379
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2017,
        "litreacy": 95.6296,
        "gdp_percapita": 16094.106
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2016,
        "litreacy": 95.64911,
        "gdp_percapita": 15443.416
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2015,
        "litreacy": 95.07114,
        "gdp_percapita": 14978.602
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2014,
        "litreacy": 95.30264,
        "gdp_percapita": 14538.028
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2013,
        "litreacy": 94.60601,
        "gdp_percapita": 14056.592
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2012,
        "litreacy": 94.83447,
        "gdp_percapita": 13476.776
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2011,
        "litreacy": 94.38587,
        "gdp_percapita": 12849.577
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2010,
        "litreacy": 94.1354,
        "gdp_percapita": 12156.753
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2009,
        "litreacy": 93.93437,
        "gdp_percapita": 11333.18
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2008,
        "litreacy": 93.85072,
        "gdp_percapita": 11239.053
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2007,
        "litreacy": 93.57468,
        "gdp_percapita": 10672.2
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2006,
        "litreacy": 92.73255,
        "gdp_percapita": 9845.702
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2005,
        "litreacy": 92.44411,
        "gdp_percapita": 9136.9
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2004,
        "litreacy": 92.12041,
        "gdp_percapita": 8570.362
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2003,
        "litreacy": 91.86902,
        "gdp_percapita": 7996.584
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2002,
        "litreacy": 91.45816,
        "gdp_percapita": 7617.0557
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2001,
        "litreacy": 91.18142,
        "gdp_percapita": 7342.613
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 2000,
        "litreacy": 90.8407,
        "gdp_percapita": 7166.797
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1999,
        "litreacy": 90.5234,
        "gdp_percapita": 6790.1855
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1998,
        "litreacy": 90.20424,
        "gdp_percapita": 6623.9565
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1997,
        "litreacy": 89.81379,
        "gdp_percapita": 6540.6396
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1996,
        "litreacy": 85.50188,
        "gdp_percapita": 6275.3047
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1995,
        "litreacy": 85.04725,
        "gdp_percapita": 6061.6855
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1994,
        "litreacy": 84.56281,
        "gdp_percapita": 5961.396
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1993,
        "litreacy": 84.08188,
        "gdp_percapita": 5902.8433
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1992,
        "litreacy": 83.58292,
        "gdp_percapita": 5799.0903
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1991,
        "litreacy": 83.05663,
        "gdp_percapita": 5902.524
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1990,
        "litreacy": 81.94503,
        "gdp_percapita": 5967.592
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1989,
        "litreacy": 82.00051,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1988,
        "litreacy": 81.40846,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1987,
        "litreacy": 78.11403,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1986,
        "litreacy": 77.26837,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1985,
        "litreacy": 76.43733,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1984,
        "litreacy": 75.58398,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1983,
        "litreacy": 74.5785,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1982,
        "litreacy": 73.4479,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1981,
        "litreacy": 72.87539,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1980,
        "litreacy": 71.50332,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1979,
        "litreacy": 70.97245,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1978,
        "litreacy": 69.90414,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1977,
        "litreacy": 68.93139,
        "gdp_percapita": null
    },
    {
        "country": "Upper-middle-income countries",
        "code": null,
        "year": 1976,
        "litreacy": 68.74029,
        "gdp_percapita": null
    },
    {
        "country": "Upper middle income",
        "code": null,
        "year": 2010,
        "litreacy": 94.26899,
        "gdp_percapita": null
    },
    {
        "country": "Upper middle income",
        "code": null,
        "year": 2000,
        "litreacy": 90.65731,
        "gdp_percapita": null
    },
    {
        "country": "Upper middle income",
        "code": null,
        "year": 1990,
        "litreacy": 81.91885,
        "gdp_percapita": null
    },
    {
        "country": "United States",
        "code": null,
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": 51503.773
    },
    {
        "country": "United States",
        "code": null,
        "year": 1979,
        "litreacy": 99.4,
        "gdp_percapita": null
    },
    {
        "country": "United States",
        "code": null,
        "year": 1969,
        "litreacy": 99,
        "gdp_percapita": null
    },
    {
        "country": "United States",
        "code": null,
        "year": 1959,
        "litreacy": 97.8,
        "gdp_percapita": null
    },
    {
        "country": "United States",
        "code": null,
        "year": 1952,
        "litreacy": 97.5,
        "gdp_percapita": null
    },
    {
        "country": "United States",
        "code": null,
        "year": 1950,
        "litreacy": 96.8,
        "gdp_percapita": null
    },
    {
        "country": "United States",
        "code": null,
        "year": 1947,
        "litreacy": 97.3,
        "gdp_percapita": null
    },
    {
        "country": "United States",
        "code": null,
        "year": 1940,
        "litreacy": 97.1,
        "gdp_percapita": null
    },
    {
        "country": "United States",
        "code": null,
        "year": 1930,
        "litreacy": 95.7,
        "gdp_percapita": null
    },
    {
        "country": "United States",
        "code": null,
        "year": 1920,
        "litreacy": 94,
        "gdp_percapita": null
    },
    {
        "country": "United States",
        "code": null,
        "year": 1910,
        "litreacy": 92.3,
        "gdp_percapita": null
    },
    {
        "country": "United States",
        "code": null,
        "year": 1900,
        "litreacy": 89.3,
        "gdp_percapita": null
    },
    {
        "country": "United States",
        "code": null,
        "year": 1890,
        "litreacy": 86.7,
        "gdp_percapita": null
    },
    {
        "country": "United States",
        "code": null,
        "year": 1880,
        "litreacy": 83,
        "gdp_percapita": null
    },
    {
        "country": "United States",
        "code": null,
        "year": 1870,
        "litreacy": 80,
        "gdp_percapita": null
    },
    {
        "country": "United Kingdom",
        "code": null,
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": 41369.496
    },
    {
        "country": "United Kingdom",
        "code": null,
        "year": 1870,
        "litreacy": 76,
        "gdp_percapita": null
    },
    {
        "country": "United Kingdom",
        "code": null,
        "year": 1820,
        "litreacy": 53,
        "gdp_percapita": null
    },
    {
        "country": "United Kingdom",
        "code": null,
        "year": 1750,
        "litreacy": 54,
        "gdp_percapita": null
    },
    {
        "country": "United Kingdom",
        "code": null,
        "year": 1650,
        "litreacy": 53,
        "gdp_percapita": null
    },
    {
        "country": "United Kingdom",
        "code": null,
        "year": 1550,
        "litreacy": 16,
        "gdp_percapita": null
    },
    {
        "country": "United Kingdom",
        "code": null,
        "year": 1475,
        "litreacy": 5,
        "gdp_percapita": null
    },
    {
        "country": "United Arab Emirates",
        "code": null,
        "year": 2022,
        "litreacy": 98.28541,
        "gdp_percapita": null
    },
    {
        "country": "United Arab Emirates",
        "code": "AE",
        "year": 2021,
        "litreacy": 98.12636,
        "gdp_percapita": 69733.8
    },
    {
        "country": "United Arab Emirates",
        "code": "AE",
        "year": 2019,
        "litreacy": 97.78251,
        "gdp_percapita": 71782.16
    },
    {
        "country": "United Arab Emirates",
        "code": "AE",
        "year": 2015,
        "litreacy": 92.98637,
        "gdp_percapita": 68076.63
    },
    {
        "country": "United Arab Emirates",
        "code": "AE",
        "year": 2005,
        "litreacy": 90.03385,
        "gdp_percapita": 96188.125
    },
    {
        "country": "United Arab Emirates",
        "code": null,
        "year": 1985,
        "litreacy": 71.2353,
        "gdp_percapita": null
    },
    {
        "country": "United Arab Emirates",
        "code": null,
        "year": 1975,
        "litreacy": 53.51488,
        "gdp_percapita": null
    },
    {
        "country": "Ukraine",
        "code": "UA",
        "year": 2021,
        "litreacy": 100,
        "gdp_percapita": 12943.614
    },
    {
        "country": "Ukraine",
        "code": "UA",
        "year": 2015,
        "litreacy": 99.76411,
        "gdp_percapita": 11216.118
    },
    {
        "country": "Ukraine",
        "code": "UA",
        "year": 2014,
        "litreacy": 99.75347,
        "gdp_percapita": 12385.813
    },
    {
        "country": "Ukraine",
        "code": "UA",
        "year": 2012,
        "litreacy": 99.97435,
        "gdp_percapita": 12985.087
    },
    {
        "country": "Ukraine",
        "code": "UA",
        "year": 2001,
        "litreacy": 99.43041,
        "gdp_percapita": 8242.703
    },
    {
        "country": "Uganda",
        "code": null,
        "year": 2022,
        "litreacy": 80.59,
        "gdp_percapita": null
    },
    {
        "country": "Uganda",
        "code": "UG",
        "year": 2018,
        "litreacy": 76.5275,
        "gdp_percapita": 2186.9072
    },
    {
        "country": "Uganda",
        "code": "UG",
        "year": 2015,
        "litreacy": 73.80984,
        "gdp_percapita": 2108.8604
    },
    {
        "country": "Uganda",
        "code": "UG",
        "year": 2012,
        "litreacy": 70.19822,
        "gdp_percapita": 2013.5464
    },
    {
        "country": "Uganda",
        "code": "UG",
        "year": 2010,
        "litreacy": 73.21188,
        "gdp_percapita": 1878.5209
    },
    {
        "country": "Uganda",
        "code": "UG",
        "year": 2006,
        "litreacy": 71.37314,
        "gdp_percapita": 1588.0022
    },
    {
        "country": "Uganda",
        "code": "UG",
        "year": 2002,
        "litreacy": 68.14251,
        "gdp_percapita": 1335.1953
    },
    {
        "country": "Uganda",
        "code": "UG",
        "year": 1991,
        "litreacy": 56.10738,
        "gdp_percapita": 921.085
    },
    {
        "country": "Turks and Caicos Islands",
        "code": null,
        "year": 1970,
        "litreacy": 98,
        "gdp_percapita": null
    },
    {
        "country": "Turkmenistan",
        "code": "TM",
        "year": 2015,
        "litreacy": 99.69293,
        "gdp_percapita": 12540.284
    },
    {
        "country": "Turkmenistan",
        "code": "TM",
        "year": 2014,
        "litreacy": 99.67285,
        "gdp_percapita": 11989.653
    },
    {
        "country": "Turkmenistan",
        "code": "TM",
        "year": 2005,
        "litreacy": 99.4,
        "gdp_percapita": 5477.9985
    },
    {
        "country": "Turkmenistan",
        "code": "TM",
        "year": 1995,
        "litreacy": 98.77832,
        "gdp_percapita": 3969.826
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 2019,
        "litreacy": 96.74221,
        "gdp_percapita": 28150.059
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 2017,
        "litreacy": 96.15053,
        "gdp_percapita": 27582.832
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 2016,
        "litreacy": 96.16733,
        "gdp_percapita": 25996.967
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 2015,
        "litreacy": 95.60142,
        "gdp_percapita": 25594.66
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 2014,
        "litreacy": 95.43963,
        "gdp_percapita": 24600.518
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 2013,
        "litreacy": 95.25666,
        "gdp_percapita": 23912.732
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 2012,
        "litreacy": 94.91975,
        "gdp_percapita": 22422.537
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 2011,
        "litreacy": 94.10609,
        "gdp_percapita": 21716.266
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 2010,
        "litreacy": 92.6606,
        "gdp_percapita": 19790.068
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 2009,
        "litreacy": 90.81672,
        "gdp_percapita": 18497.01
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 2007,
        "litreacy": 88.6559,
        "gdp_percapita": 19757.82
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 2006,
        "litreacy": 88.11939,
        "gdp_percapita": 19043.623
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 2005,
        "litreacy": 88.22906,
        "gdp_percapita": 18038.812
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 2004,
        "litreacy": 87.36549,
        "gdp_percapita": 16775.08
    },
    {
        "country": "Turkey",
        "code": "TR",
        "year": 1990,
        "litreacy": 79.23245,
        "gdp_percapita": 12535.92
    },
    {
        "country": "Turkey",
        "code": null,
        "year": 1985,
        "litreacy": 75.96824,
        "gdp_percapita": null
    },
    {
        "country": "Turkey",
        "code": null,
        "year": 1980,
        "litreacy": 65.69434,
        "gdp_percapita": null
    },
    {
        "country": "Turkey",
        "code": null,
        "year": 1975,
        "litreacy": 61.62768,
        "gdp_percapita": null
    },
    {
        "country": "Tunisia",
        "code": null,
        "year": 2022,
        "litreacy": 83.56,
        "gdp_percapita": null
    },
    {
        "country": "Tunisia",
        "code": "TN",
        "year": 2015,
        "litreacy": 81.05419,
        "gdp_percapita": 10749.49
    },
    {
        "country": "Tunisia",
        "code": "TN",
        "year": 2014,
        "litreacy": 79.03643,
        "gdp_percapita": 10766.497
    },
    {
        "country": "Tunisia",
        "code": "TN",
        "year": 2012,
        "litreacy": 80.21875,
        "gdp_percapita": 10428.271
    },
    {
        "country": "Tunisia",
        "code": "TN",
        "year": 2011,
        "litreacy": 79.65391,
        "gdp_percapita": 10134.997
    },
    {
        "country": "Tunisia",
        "code": "TN",
        "year": 2010,
        "litreacy": 79.13058,
        "gdp_percapita": 10477.304
    },
    {
        "country": "Tunisia",
        "code": "TN",
        "year": 2008,
        "litreacy": 77.71462,
        "gdp_percapita": 10072.95
    },
    {
        "country": "Tunisia",
        "code": "TN",
        "year": 2007,
        "litreacy": 77.1904,
        "gdp_percapita": 9754.755
    },
    {
        "country": "Tunisia",
        "code": "TN",
        "year": 2004,
        "litreacy": 74.297,
        "gdp_percapita": 8628.278
    },
    {
        "country": "Tunisia",
        "code": "TN",
        "year": 1994,
        "litreacy": 59.06181,
        "gdp_percapita": 6170.643
    },
    {
        "country": "Tunisia",
        "code": null,
        "year": 1984,
        "litreacy": 48.1907,
        "gdp_percapita": null
    },
    {
        "country": "Trinidad and Tobago",
        "code": "TT",
        "year": 2015,
        "litreacy": 98.96958,
        "gdp_percapita": 29876.98
    },
    {
        "country": "Trinidad and Tobago",
        "code": "TT",
        "year": 2014,
        "litreacy": 98.91949,
        "gdp_percapita": 30301.936
    },
    {
        "country": "Trinidad and Tobago",
        "code": "TT",
        "year": 2004,
        "litreacy": 98.28851,
        "gdp_percapita": 22010.941
    },
    {
        "country": "Trinidad and Tobago",
        "code": "TT",
        "year": 2000,
        "litreacy": 97.9,
        "gdp_percapita": 16190.903
    },
    {
        "country": "Trinidad and Tobago",
        "code": "TT",
        "year": 1990,
        "litreacy": 96.93855,
        "gdp_percapita": 9766.818
    },
    {
        "country": "Trinidad and Tobago",
        "code": null,
        "year": 1980,
        "litreacy": 94.97032,
        "gdp_percapita": null
    },
    {
        "country": "Tonga",
        "code": "TO",
        "year": 2021,
        "litreacy": 99.4,
        "gdp_percapita": 6142.857
    },
    {
        "country": "Tonga",
        "code": "TO",
        "year": 2015,
        "litreacy": 99.39786,
        "gdp_percapita": 5644.535
    },
    {
        "country": "Tonga",
        "code": "TO",
        "year": 2011,
        "litreacy": 99.38553,
        "gdp_percapita": 5332.404
    },
    {
        "country": "Tonga",
        "code": "TO",
        "year": 2006,
        "litreacy": 99.01846,
        "gdp_percapita": 5040.017
    },
    {
        "country": "Tonga",
        "code": "TO",
        "year": 1996,
        "litreacy": 98.90537,
        "gdp_percapita": 4535.9224
    },
    {
        "country": "Tonga",
        "code": null,
        "year": 1976,
        "litreacy": 99.59246,
        "gdp_percapita": null
    },
    {
        "country": "Togo",
        "code": "TG",
        "year": 2019,
        "litreacy": 66.53708,
        "gdp_percapita": 2080.5242
    },
    {
        "country": "Togo",
        "code": "TG",
        "year": 2015,
        "litreacy": 63.74562,
        "gdp_percapita": 1881.9052
    },
    {
        "country": "Togo",
        "code": "TG",
        "year": 2011,
        "litreacy": 60.40994,
        "gdp_percapita": 1645.7479
    },
    {
        "country": "Togo",
        "code": "TG",
        "year": 2009,
        "litreacy": 57.09338,
        "gdp_percapita": 1537.6179
    },
    {
        "country": "Togo",
        "code": "TG",
        "year": 2006,
        "litreacy": 56.88837,
        "gdp_percapita": 1543.1755
    },
    {
        "country": "Togo",
        "code": "TG",
        "year": 2000,
        "litreacy": 53.1776,
        "gdp_percapita": 1672.0458
    },
    {
        "country": "Thailand",
        "code": "TH",
        "year": 2021,
        "litreacy": 94.1,
        "gdp_percapita": 17077.043
    },
    {
        "country": "Thailand",
        "code": "TH",
        "year": 2018,
        "litreacy": 93.76776,
        "gdp_percapita": 17669.045
    },
    {
        "country": "Thailand",
        "code": "TH",
        "year": 2015,
        "litreacy": 92.86831,
        "gdp_percapita": 15919.37
    },
    {
        "country": "Thailand",
        "code": "TH",
        "year": 2013,
        "litreacy": 93.70207,
        "gdp_percapita": 15442.38
    },
    {
        "country": "Thailand",
        "code": "TH",
        "year": 2010,
        "litreacy": 96.43091,
        "gdp_percapita": 14172.218
    },
    {
        "country": "Thailand",
        "code": "TH",
        "year": 2005,
        "litreacy": 93.50647,
        "gdp_percapita": 12228.661
    },
    {
        "country": "Thailand",
        "code": "TH",
        "year": 2000,
        "litreacy": 92.64654,
        "gdp_percapita": 9791.8955
    },
    {
        "country": "Thailand",
        "code": null,
        "year": 1980,
        "litreacy": 87.98176,
        "gdp_percapita": null
    },
    {
        "country": "Tanzania",
        "code": null,
        "year": 2022,
        "litreacy": 82.02,
        "gdp_percapita": null
    },
    {
        "country": "Tanzania",
        "code": null,
        "year": 2015,
        "litreacy": 77.88723,
        "gdp_percapita": 2306.6382
    },
    {
        "country": "Tanzania",
        "code": null,
        "year": 2012,
        "litreacy": 78.10059,
        "gdp_percapita": 2095.8745
    },
    {
        "country": "Tanzania",
        "code": null,
        "year": 2010,
        "litreacy": 67.8007,
        "gdp_percapita": 1972.9811
    },
    {
        "country": "Tanzania",
        "code": null,
        "year": 2002,
        "litreacy": 69.4309,
        "gdp_percapita": 1475.5526
    },
    {
        "country": "Tanzania",
        "code": null,
        "year": 1988,
        "litreacy": 59.1138,
        "gdp_percapita": null
    },
    {
        "country": "Tajikistan",
        "code": "TJ",
        "year": 2015,
        "litreacy": 99.78105,
        "gdp_percapita": 2959.9941
    },
    {
        "country": "Tajikistan",
        "code": "TJ",
        "year": 2014,
        "litreacy": 99.76841,
        "gdp_percapita": 2858.2354
    },
    {
        "country": "Tajikistan",
        "code": "TJ",
        "year": 2010,
        "litreacy": 99.7,
        "gdp_percapita": 2360.015
    },
    {
        "country": "Tajikistan",
        "code": "TJ",
        "year": 2000,
        "litreacy": 99.45068,
        "gdp_percapita": 1312.7123
    },
    {
        "country": "Tajikistan",
        "code": null,
        "year": 1989,
        "litreacy": 97.69402,
        "gdp_percapita": null
    },
    {
        "country": "Taiwan",
        "code": null,
        "year": 2003,
        "litreacy": 96.1,
        "gdp_percapita": null
    },
    {
        "country": "Syria",
        "code": null,
        "year": 2015,
        "litreacy": 86.30393,
        "gdp_percapita": null
    },
    {
        "country": "Syria",
        "code": null,
        "year": 2014,
        "litreacy": 86.3,
        "gdp_percapita": null
    },
    {
        "country": "Syria",
        "code": null,
        "year": 2004,
        "litreacy": 80.84452,
        "gdp_percapita": null
    },
    {
        "country": "Syria",
        "code": null,
        "year": 2002,
        "litreacy": 82.88825,
        "gdp_percapita": null
    },
    {
        "country": "Syria",
        "code": null,
        "year": 1981,
        "litreacy": 55.6545,
        "gdp_percapita": null
    },
    {
        "country": "Switzerland",
        "code": "CH",
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": 59577.76
    },
    {
        "country": "Sweden",
        "code": "SE",
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": 42678.285
    },
    {
        "country": "Sweden",
        "code": null,
        "year": 1870,
        "litreacy": 80,
        "gdp_percapita": null
    },
    {
        "country": "Sweden",
        "code": null,
        "year": 1820,
        "litreacy": 75,
        "gdp_percapita": null
    },
    {
        "country": "Sweden",
        "code": null,
        "year": 1750,
        "litreacy": 48,
        "gdp_percapita": null
    },
    {
        "country": "Sweden",
        "code": null,
        "year": 1650,
        "litreacy": 23,
        "gdp_percapita": null
    },
    {
        "country": "Sweden",
        "code": null,
        "year": 1550,
        "litreacy": 1,
        "gdp_percapita": null
    },
    {
        "country": "Sweden",
        "code": null,
        "year": 1475,
        "litreacy": 1,
        "gdp_percapita": null
    },
    {
        "country": "Suriname",
        "code": "SR",
        "year": 2021,
        "litreacy": 95,
        "gdp_percapita": 14766.748
    },
    {
        "country": "Suriname",
        "code": "SR",
        "year": 2015,
        "litreacy": 95.53899,
        "gdp_percapita": 18768.795
    },
    {
        "country": "Suriname",
        "code": "SR",
        "year": 2012,
        "litreacy": 92.86866,
        "gdp_percapita": 19415.578
    },
    {
        "country": "Suriname",
        "code": "SR",
        "year": 2010,
        "litreacy": 94.67575,
        "gdp_percapita": 18255.625
    },
    {
        "country": "Suriname",
        "code": "SR",
        "year": 2008,
        "litreacy": 94.62094,
        "gdp_percapita": 17233.766
    },
    {
        "country": "Suriname",
        "code": "SR",
        "year": 2004,
        "litreacy": 89.59806,
        "gdp_percapita": 14892.122
    },
    {
        "country": "Sudan",
        "code": "SD",
        "year": 2018,
        "litreacy": 60.69718,
        "gdp_percapita": 4349.21
    },
    {
        "country": "Sudan",
        "code": "SD",
        "year": 2015,
        "litreacy": 58.60132,
        "gdp_percapita": 4718.919
    },
    {
        "country": "Sudan",
        "code": "SD",
        "year": 2008,
        "litreacy": 53.51738,
        "gdp_percapita": 4993.871
    },
    {
        "country": "Sudan",
        "code": "SD",
        "year": 2000,
        "litreacy": 61.34587,
        "gdp_percapita": 4040.612
    },
    {
        "country": "Sub-Saharan Africa (excluding high income)",
        "code": null,
        "year": 2010,
        "litreacy": 60.875755,
        "gdp_percapita": null
    },
    {
        "country": "Sub-Saharan Africa (excluding high income)",
        "code": null,
        "year": 2000,
        "litreacy": 56.976406,
        "gdp_percapita": null
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2022,
        "litreacy": 67.71501,
        "gdp_percapita": null
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2021,
        "litreacy": 67.59193,
        "gdp_percapita": 3716.9844
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2020,
        "litreacy": 67.54763,
        "gdp_percapita": 3657.401
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2019,
        "litreacy": 67.41086,
        "gdp_percapita": 3826.4426
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2018,
        "litreacy": 66.68364,
        "gdp_percapita": 3822.5564
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2017,
        "litreacy": 65.22324,
        "gdp_percapita": 3813.7358
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2016,
        "litreacy": 64.8614,
        "gdp_percapita": 3813.0122
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2015,
        "litreacy": 64.13228,
        "gdp_percapita": 3853.2708
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2014,
        "litreacy": 63.51338,
        "gdp_percapita": 3843.545
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2013,
        "litreacy": 62.83043,
        "gdp_percapita": 3765.0273
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2012,
        "litreacy": 61.96924,
        "gdp_percapita": 3684.9446
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2011,
        "litreacy": 60.78816,
        "gdp_percapita": 3656.677
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2010,
        "litreacy": 59.21304,
        "gdp_percapita": 3599.5242
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2009,
        "litreacy": 58.65356,
        "gdp_percapita": 3493.7405
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2008,
        "litreacy": 57.88128,
        "gdp_percapita": 3491.1816
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2007,
        "litreacy": 57.71746,
        "gdp_percapita": 3409.4832
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2006,
        "litreacy": 60.25526,
        "gdp_percapita": 3298.8677
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2005,
        "litreacy": 58.89574,
        "gdp_percapita": 3192.6917
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2004,
        "litreacy": 59.86667,
        "gdp_percapita": 3091.317
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2003,
        "litreacy": 58.34713,
        "gdp_percapita": 2978.9746
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2002,
        "litreacy": 57.98504,
        "gdp_percapita": 2936.6375
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2001,
        "litreacy": 57.49454,
        "gdp_percapita": 2843.4465
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 2000,
        "litreacy": 56.25376,
        "gdp_percapita": 2799.6543
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1999,
        "litreacy": 57.72549,
        "gdp_percapita": 2776.8367
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1998,
        "litreacy": 56.86825,
        "gdp_percapita": 2784.461
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1997,
        "litreacy": 56.19275,
        "gdp_percapita": 2786.6113
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1996,
        "litreacy": 55.34565,
        "gdp_percapita": 2741.3289
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1995,
        "litreacy": 54.72776,
        "gdp_percapita": 2676.9011
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1994,
        "litreacy": 54.4332,
        "gdp_percapita": 2653.1956
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1993,
        "litreacy": 53.72444,
        "gdp_percapita": 2694.6846
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1992,
        "litreacy": 53.17252,
        "gdp_percapita": 2785.8525
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1991,
        "litreacy": 52.81162,
        "gdp_percapita": 2867.115
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1990,
        "litreacy": 52.3394,
        "gdp_percapita": 2930.7515
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1989,
        "litreacy": 51.69056,
        "gdp_percapita": null
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1988,
        "litreacy": 51.10168,
        "gdp_percapita": null
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1987,
        "litreacy": 50.62375,
        "gdp_percapita": null
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1986,
        "litreacy": 49.99364,
        "gdp_percapita": null
    },
    {
        "country": "Sub-Saharan Africa (WB)",
        "code": null,
        "year": 1985,
        "litreacy": 49.67415,
        "gdp_percapita": null
    },
    {
        "country": "Sub-Saharan Africa (IDA & IBRD)",
        "code": null,
        "year": 2010,
        "litreacy": 60.880547,
        "gdp_percapita": null
    },
    {
        "country": "Sub-Saharan Africa (IDA & IBRD)",
        "code": null,
        "year": 2000,
        "litreacy": 56.981934,
        "gdp_percapita": null
    },
    {
        "country": "Sub-Saharan Africa (IDA & IBRD)",
        "code": null,
        "year": 1990,
        "litreacy": 52.53158,
        "gdp_percapita": null
    },
    {
        "country": "Sub-Saharan Africa",
        "code": null,
        "year": 2010,
        "litreacy": 60.880547,
        "gdp_percapita": null
    },
    {
        "country": "Sub-Saharan Africa",
        "code": null,
        "year": 2000,
        "litreacy": 56.981934,
        "gdp_percapita": null
    },
    {
        "country": "Sri Lanka",
        "code": "LK",
        "year": 2021,
        "litreacy": 92.42903,
        "gdp_percapita": 13386.682
    },
    {
        "country": "Sri Lanka",
        "code": "LK",
        "year": 2020,
        "litreacy": 92.3823,
        "gdp_percapita": 13095.761
    },
    {
        "country": "Sri Lanka",
        "code": "LK",
        "year": 2019,
        "litreacy": 92.25296,
        "gdp_percapita": 13639.021
    },
    {
        "country": "Sri Lanka",
        "code": "LK",
        "year": 2018,
        "litreacy": 91.70982,
        "gdp_percapita": 13753.055
    },
    {
        "country": "Sri Lanka",
        "code": "LK",
        "year": 2017,
        "litreacy": 91.89575,
        "gdp_percapita": 13584.193
    },
    {
        "country": "Sri Lanka",
        "code": "LK",
        "year": 2016,
        "litreacy": 92.3869,
        "gdp_percapita": 12904.854
    },
    {
        "country": "Sri Lanka",
        "code": "LK",
        "year": 2015,
        "litreacy": 92.61417,
        "gdp_percapita": 12420.553
    },
    {
        "country": "Sri Lanka",
        "code": "LK",
        "year": 2010,
        "litreacy": 91.18136,
        "gdp_percapita": 9440.672
    },
    {
        "country": "Sri Lanka",
        "code": "LK",
        "year": 2008,
        "litreacy": 90.55795,
        "gdp_percapita": 8558.664
    },
    {
        "country": "Sri Lanka",
        "code": "LK",
        "year": 2006,
        "litreacy": 90.80883,
        "gdp_percapita": 7674.5137
    },
    {
        "country": "Sri Lanka",
        "code": "LK",
        "year": 2001,
        "litreacy": 90.68275,
        "gdp_percapita": 6016.46
    },
    {
        "country": "Sri Lanka",
        "code": null,
        "year": 1981,
        "litreacy": 86.77792,
        "gdp_percapita": null
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2020,
        "litreacy": 98.59446,
        "gdp_percapita": 35967.89
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2018,
        "litreacy": 98.4365,
        "gdp_percapita": 40255.254
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2016,
        "litreacy": 98.25051,
        "gdp_percapita": 38476.79
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2015,
        "litreacy": 98.14326,
        "gdp_percapita": 37373.95
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2014,
        "litreacy": 98.09372,
        "gdp_percapita": 35964.46
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2013,
        "litreacy": 98.07913,
        "gdp_percapita": 35363.51
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2012,
        "litreacy": 97.89454,
        "gdp_percapita": 35749.51
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2011,
        "litreacy": 97.78375,
        "gdp_percapita": 36863.492
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2010,
        "litreacy": 97.7489,
        "gdp_percapita": 37298.47
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2009,
        "litreacy": 97.67927,
        "gdp_percapita": 37409.645
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2008,
        "litreacy": 97.63061,
        "gdp_percapita": 39218.293
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2007,
        "litreacy": 97.93884,
        "gdp_percapita": 39498.59
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2006,
        "litreacy": 97.75214,
        "gdp_percapita": 38836.594
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2005,
        "litreacy": 97.75069,
        "gdp_percapita": 37942.008
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 2004,
        "litreacy": 97.16512,
        "gdp_percapita": 37228.797
    },
    {
        "country": "Spain",
        "code": "ES",
        "year": 1991,
        "litreacy": 96.49497,
        "gdp_percapita": 28157.527
    },
    {
        "country": "Spain",
        "code": null,
        "year": 1981,
        "litreacy": 92.80977,
        "gdp_percapita": null
    },
    {
        "country": "Spain",
        "code": null,
        "year": 1870,
        "litreacy": 30,
        "gdp_percapita": null
    },
    {
        "country": "Spain",
        "code": null,
        "year": 1820,
        "litreacy": 20,
        "gdp_percapita": null
    },
    {
        "country": "Spain",
        "code": null,
        "year": 1750,
        "litreacy": 8,
        "gdp_percapita": null
    },
    {
        "country": "Spain",
        "code": null,
        "year": 1650,
        "litreacy": 5,
        "gdp_percapita": null
    },
    {
        "country": "Spain",
        "code": null,
        "year": 1550,
        "litreacy": 4,
        "gdp_percapita": null
    },
    {
        "country": "Spain",
        "code": null,
        "year": 1475,
        "litreacy": 3,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2022,
        "litreacy": 72.6004,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2021,
        "litreacy": 72.58116,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2020,
        "litreacy": 72.78562,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2019,
        "litreacy": 72.63497,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2018,
        "litreacy": 71.39262,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2017,
        "litreacy": 71.00907,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2016,
        "litreacy": 71.0952,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2015,
        "litreacy": 70.31342,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2014,
        "litreacy": 69.83477,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2013,
        "litreacy": 69.3831,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2012,
        "litreacy": 68.36135,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2011,
        "litreacy": 66.82965,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2010,
        "litreacy": 64.61788,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2009,
        "litreacy": 64.00042,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2008,
        "litreacy": 63.30951,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2007,
        "litreacy": 62.83576,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2006,
        "litreacy": 62.13387,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2005,
        "litreacy": 63.94247,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2004,
        "litreacy": 65.60042,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2003,
        "litreacy": 64.3503,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2002,
        "litreacy": 63.74941,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2001,
        "litreacy": 63.41789,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 2000,
        "litreacy": 62.49518,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 1999,
        "litreacy": 62.25842,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 1998,
        "litreacy": 61.40871,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 1997,
        "litreacy": 61.17406,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 1996,
        "litreacy": 60.43493,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 1995,
        "litreacy": 59.92194,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 1994,
        "litreacy": 59.52685,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 1993,
        "litreacy": 58.9126,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 1992,
        "litreacy": 58.53064,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 1991,
        "litreacy": 58.14119,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 1990,
        "litreacy": 58.18002,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 1989,
        "litreacy": 57.61875,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 1988,
        "litreacy": 57.16619,
        "gdp_percapita": null
    },
    {
        "country": "Southern and Eastern Africa (WB)",
        "code": null,
        "year": 1987,
        "litreacy": 56.85891,
        "gdp_percapita": null
    },
    {
        "country": "South Sudan",
        "code": null,
        "year": 2018,
        "litreacy": 34.52276,
        "gdp_percapita": null
    },
    {
        "country": "South Sudan",
        "code": null,
        "year": 2015,
        "litreacy": 31.97625,
        "gdp_percapita": null
    },
    {
        "country": "South Sudan",
        "code": null,
        "year": 2008,
        "litreacy": 26.83128,
        "gdp_percapita": null
    },
    {
        "country": "South Korea",
        "code": null,
        "year": 2018,
        "litreacy": 98.8,
        "gdp_percapita": 41965.89
    },
    {
        "country": "South Korea",
        "code": null,
        "year": 2008,
        "litreacy": 97.96594,
        "gdp_percapita": 32275.125
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2022,
        "litreacy": 74.18776,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2021,
        "litreacy": 73.42247,
        "gdp_percapita": 6299.5947
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2020,
        "litreacy": 72.65861,
        "gdp_percapita": 5896.237
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2019,
        "litreacy": 71.94279,
        "gdp_percapita": 6287.8604
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2018,
        "litreacy": 72.08151,
        "gdp_percapita": 6123.9854
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2017,
        "litreacy": 71.79036,
        "gdp_percapita": 5827.1343
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2016,
        "litreacy": 71.10493,
        "gdp_percapita": 5537.5728
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2015,
        "litreacy": 69.75716,
        "gdp_percapita": 5205.7124
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2014,
        "litreacy": 68.79317,
        "gdp_percapita": 4909.902
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2013,
        "litreacy": 68.05453,
        "gdp_percapita": 4651.385
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2012,
        "litreacy": 67.30776,
        "gdp_percapita": 4446.0015
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2011,
        "litreacy": 66.50597,
        "gdp_percapita": 4275.2866
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2010,
        "litreacy": 66.03606,
        "gdp_percapita": 4127.931
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2009,
        "litreacy": 63.46568,
        "gdp_percapita": 3898.871
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2008,
        "litreacy": 62.79358,
        "gdp_percapita": 3699.7722
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2007,
        "litreacy": 61.70198,
        "gdp_percapita": 3635.5432
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2006,
        "litreacy": 60.16197,
        "gdp_percapita": 3441.6348
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2005,
        "litreacy": 60.62967,
        "gdp_percapita": 3249.63
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2004,
        "litreacy": 60.87617,
        "gdp_percapita": 3073.071
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2003,
        "litreacy": 60.09578,
        "gdp_percapita": 2909.044
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2002,
        "litreacy": 59.20313,
        "gdp_percapita": 2763.3696
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2001,
        "litreacy": 58.09879,
        "gdp_percapita": 2719.1633
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 2000,
        "litreacy": 57.65058,
        "gdp_percapita": 2653.67
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1999,
        "litreacy": 56.87631,
        "gdp_percapita": 2598.9355
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1998,
        "litreacy": 56.10294,
        "gdp_percapita": 2464.7268
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1997,
        "litreacy": 51.26017,
        "gdp_percapita": 2384.1597
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1996,
        "litreacy": 50.4492,
        "gdp_percapita": 2345.8677
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1995,
        "litreacy": 49.64048,
        "gdp_percapita": 2243.7292
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1994,
        "litreacy": 48.84938,
        "gdp_percapita": 2145.293
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1993,
        "litreacy": 48.08146,
        "gdp_percapita": 2069.853
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1992,
        "litreacy": 47.08633,
        "gdp_percapita": 2029.0298
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1991,
        "litreacy": 45.78956,
        "gdp_percapita": 1960.607
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1990,
        "litreacy": 45.3592,
        "gdp_percapita": 1963.0359
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1989,
        "litreacy": 44.61243,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1988,
        "litreacy": 43.84537,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1987,
        "litreacy": 43.09805,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1986,
        "litreacy": 42.44037,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1985,
        "litreacy": 41.78566,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1984,
        "litreacy": 41.1337,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1983,
        "litreacy": 40.47922,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1982,
        "litreacy": 39.82555,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1981,
        "litreacy": 38.63157,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1980,
        "litreacy": 38.5959,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1979,
        "litreacy": 37.98005,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1978,
        "litreacy": 37.34392,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1977,
        "litreacy": 36.6957,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1976,
        "litreacy": 36.04425,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (WB)",
        "code": null,
        "year": 1975,
        "litreacy": 36.03934,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (IDA & IBRD)",
        "code": null,
        "year": 2010,
        "litreacy": 66.69118,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (IDA & IBRD)",
        "code": null,
        "year": 2000,
        "litreacy": 58.08542,
        "gdp_percapita": null
    },
    {
        "country": "South Asia (IDA & IBRD)",
        "code": null,
        "year": 1990,
        "litreacy": 46.487602,
        "gdp_percapita": null
    },
    {
        "country": "South Asia",
        "code": null,
        "year": 2010,
        "litreacy": 66.69118,
        "gdp_percapita": null
    },
    {
        "country": "South Asia",
        "code": null,
        "year": 2000,
        "litreacy": 58.08542,
        "gdp_percapita": null
    },
    {
        "country": "South Asia",
        "code": null,
        "year": 1990,
        "litreacy": 46.487602,
        "gdp_percapita": null
    },
    {
        "country": "South Africa",
        "code": "ZA",
        "year": 2021,
        "litreacy": 90.00136,
        "gdp_percapita": 13311.926
    },
    {
        "country": "South Africa",
        "code": "ZA",
        "year": 2019,
        "litreacy": 95.02297,
        "gdp_percapita": 13852.206
    },
    {
        "country": "South Africa",
        "code": "ZA",
        "year": 2017,
        "litreacy": 87.04667,
        "gdp_percapita": 13950.453
    },
    {
        "country": "South Africa",
        "code": "ZA",
        "year": 2015,
        "litreacy": 94.36792,
        "gdp_percapita": 13887.211
    },
    {
        "country": "South Africa",
        "code": "ZA",
        "year": 2014,
        "litreacy": 94.1399,
        "gdp_percapita": 13993.2705
    },
    {
        "country": "South Africa",
        "code": "ZA",
        "year": 2012,
        "litreacy": 93.72947,
        "gdp_percapita": 13864.971
    },
    {
        "country": "South Africa",
        "code": "ZA",
        "year": 2011,
        "litreacy": 93.10214,
        "gdp_percapita": 13721.686
    },
    {
        "country": "South Africa",
        "code": "ZA",
        "year": 2010,
        "litreacy": 92.87732,
        "gdp_percapita": 13469.361
    },
    {
        "country": "South Africa",
        "code": "ZA",
        "year": 2009,
        "litreacy": 92.89486,
        "gdp_percapita": 13228.895
    },
    {
        "country": "South Africa",
        "code": "ZA",
        "year": 2007,
        "litreacy": 88.71725,
        "gdp_percapita": 13325.982
    },
    {
        "country": "South Africa",
        "code": "ZA",
        "year": 1996,
        "litreacy": 82.4021,
        "gdp_percapita": 10097.474
    },
    {
        "country": "South Africa",
        "code": null,
        "year": 1980,
        "litreacy": 76.20049,
        "gdp_percapita": null
    },
    {
        "country": "Somalia",
        "code": null,
        "year": 2022,
        "litreacy": 41.025,
        "gdp_percapita": null
    },
    {
        "country": "Somalia",
        "code": null,
        "year": 2001,
        "litreacy": 37.8,
        "gdp_percapita": null
    },
    {
        "country": "Somalia",
        "code": null,
        "year": 1972,
        "litreacy": 5.40465,
        "gdp_percapita": null
    },
    {
        "country": "Solomon Islands",
        "code": "SB",
        "year": 2011,
        "litreacy": 84.1,
        "gdp_percapita": 2527.8708
    },
    {
        "country": "Solomon Islands",
        "code": "SB",
        "year": 1999,
        "litreacy": 76.6,
        "gdp_percapita": 2543.3958
    },
    {
        "country": "Small states",
        "code": null,
        "year": 2010,
        "litreacy": 85.654785,
        "gdp_percapita": null
    },
    {
        "country": "Small states",
        "code": null,
        "year": 2000,
        "litreacy": 81.47796,
        "gdp_percapita": null
    },
    {
        "country": "Small states",
        "code": null,
        "year": 1990,
        "litreacy": 77.28492,
        "gdp_percapita": null
    },
    {
        "country": "Slovenia",
        "code": "SI",
        "year": 2015,
        "litreacy": 99.71476,
        "gdp_percapita": 33799.727
    },
    {
        "country": "Slovenia",
        "code": "SI",
        "year": 2014,
        "litreacy": 99.71005,
        "gdp_percapita": 33093.75
    },
    {
        "country": "Slovenia",
        "code": "SI",
        "year": 2004,
        "litreacy": 99.65179,
        "gdp_percapita": 30041.814
    },
    {
        "country": "Slovenia",
        "code": "SI",
        "year": 2001,
        "litreacy": 99.6,
        "gdp_percapita": 27079.475
    },
    {
        "country": "Slovenia",
        "code": null,
        "year": 1991,
        "litreacy": 99.52452,
        "gdp_percapita": null
    },
    {
        "country": "Slovakia",
        "code": "SK",
        "year": 2004,
        "litreacy": 99.6,
        "gdp_percapita": 18783.896
    },
    {
        "country": "Singapore",
        "code": "SG",
        "year": 2020,
        "litreacy": 97.13185,
        "gdp_percapita": 94505.63
    },
    {
        "country": "Singapore",
        "code": "SG",
        "year": 2019,
        "litreacy": 97.47958,
        "gdp_percapita": 98283.31
    },
    {
        "country": "Singapore",
        "code": "SG",
        "year": 2018,
        "litreacy": 97.34486,
        "gdp_percapita": 98336.95
    },
    {
        "country": "Singapore",
        "code": "SG",
        "year": 2017,
        "litreacy": 97.20222,
        "gdp_percapita": 95310.336
    },
    {
        "country": "Singapore",
        "code": "SG",
        "year": 2016,
        "litreacy": 97.04956,
        "gdp_percapita": 91146.09
    },
    {
        "country": "Singapore",
        "code": "SG",
        "year": 2015,
        "litreacy": 96.82549,
        "gdp_percapita": 89160.73
    },
    {
        "country": "Singapore",
        "code": "SG",
        "year": 2014,
        "litreacy": 96.71669,
        "gdp_percapita": 87616.64
    },
    {
        "country": "Singapore",
        "code": "SG",
        "year": 2013,
        "litreacy": 96.54802,
        "gdp_percapita": 85400.73
    },
    {
        "country": "Singapore",
        "code": "SG",
        "year": 2012,
        "litreacy": 96.36979,
        "gdp_percapita": 82805.62
    },
    {
        "country": "Singapore",
        "code": "SG",
        "year": 2011,
        "litreacy": 96.18604,
        "gdp_percapita": 81258.086
    },
    {
        "country": "Singapore",
        "code": "SG",
        "year": 2010,
        "litreacy": 95.85733,
        "gdp_percapita": 78115.21
    },
    {
        "country": "Singapore",
        "code": "SG",
        "year": 2000,
        "litreacy": 92.5494,
        "gdp_percapita": 55904.234
    },
    {
        "country": "Singapore",
        "code": "SG",
        "year": 1990,
        "litreacy": 89.096,
        "gdp_percapita": 37289.75
    },
    {
        "country": "Singapore",
        "code": null,
        "year": 1980,
        "litreacy": 82.90605,
        "gdp_percapita": null
    },
    {
        "country": "Sierra Leone",
        "code": null,
        "year": 2022,
        "litreacy": 48.64,
        "gdp_percapita": null
    },
    {
        "country": "Sierra Leone",
        "code": "SL",
        "year": 2015,
        "litreacy": 48.4319,
        "gdp_percapita": 1513.562
    },
    {
        "country": "Sierra Leone",
        "code": "SL",
        "year": 2014,
        "litreacy": 47.18624,
        "gdp_percapita": 1952.6921
    },
    {
        "country": "Sierra Leone",
        "code": "SL",
        "year": 2013,
        "litreacy": 32.42617,
        "gdp_percapita": 1914.7379
    },
    {
        "country": "Sierra Leone",
        "code": "SL",
        "year": 2004,
        "litreacy": 34.82679,
        "gdp_percapita": 1209.0588
    },
    {
        "country": "Seychelles",
        "code": "SC",
        "year": 2020,
        "litreacy": 96.2,
        "gdp_percapita": 26879.77
    },
    {
        "country": "Seychelles",
        "code": "SC",
        "year": 2015,
        "litreacy": 95.32108,
        "gdp_percapita": 26198.72
    },
    {
        "country": "Seychelles",
        "code": "SC",
        "year": 2010,
        "litreacy": 93.95423,
        "gdp_percapita": 21322.54
    },
    {
        "country": "Seychelles",
        "code": "SC",
        "year": 2002,
        "litreacy": 91.83646,
        "gdp_percapita": 18519.186
    },
    {
        "country": "Seychelles",
        "code": "SC",
        "year": 1994,
        "litreacy": 87.81115,
        "gdp_percapita": 16174.6045
    },
    {
        "country": "Seychelles",
        "code": null,
        "year": 1987,
        "litreacy": 84.22922,
        "gdp_percapita": null
    },
    {
        "country": "Serbia",
        "code": "RS",
        "year": 2019,
        "litreacy": 99.48253,
        "gdp_percapita": 18310.08
    },
    {
        "country": "Serbia",
        "code": "RS",
        "year": 2016,
        "litreacy": 98.84151,
        "gdp_percapita": 16185.742
    },
    {
        "country": "Serbia",
        "code": "RS",
        "year": 2015,
        "litreacy": 98.00289,
        "gdp_percapita": 15581.014
    },
    {
        "country": "Serbia",
        "code": "RS",
        "year": 2011,
        "litreacy": 97.96241,
        "gdp_percapita": 14926.494
    },
    {
        "country": "Serbia",
        "code": "RS",
        "year": 2003,
        "litreacy": 96.39724,
        "gdp_percapita": 10616.243
    },
    {
        "country": "Senegal",
        "code": null,
        "year": 2022,
        "litreacy": 57.67,
        "gdp_percapita": null
    },
    {
        "country": "Senegal",
        "code": "SN",
        "year": 2017,
        "litreacy": 51.90042,
        "gdp_percapita": 3259.1926
    },
    {
        "country": "Senegal",
        "code": "SN",
        "year": 2015,
        "litreacy": 55.62485,
        "gdp_percapita": 3012.3833
    },
    {
        "country": "Senegal",
        "code": "SN",
        "year": 2013,
        "litreacy": 43.5345,
        "gdp_percapita": 2815.2815
    },
    {
        "country": "Senegal",
        "code": "SN",
        "year": 2011,
        "litreacy": 51.81455,
        "gdp_percapita": 2790.8975
    },
    {
        "country": "Senegal",
        "code": "SN",
        "year": 2009,
        "litreacy": 48.03678,
        "gdp_percapita": 2812.549
    },
    {
        "country": "Senegal",
        "code": "SN",
        "year": 2006,
        "litreacy": 41.89115,
        "gdp_percapita": 2779.2239
    },
    {
        "country": "Senegal",
        "code": "SN",
        "year": 2002,
        "litreacy": 39.27525,
        "gdp_percapita": 2606.8772
    },
    {
        "country": "Senegal",
        "code": null,
        "year": 1988,
        "litreacy": 26.86885,
        "gdp_percapita": null
    },
    {
        "country": "Saudi Arabia",
        "code": "SA",
        "year": 2020,
        "litreacy": 97.58507,
        "gdp_percapita": 42891.688
    },
    {
        "country": "Saudi Arabia",
        "code": "SA",
        "year": 2017,
        "litreacy": 95.32863,
        "gdp_percapita": 45795.51
    },
    {
        "country": "Saudi Arabia",
        "code": "SA",
        "year": 2015,
        "litreacy": 94.84237,
        "gdp_percapita": 47379.355
    },
    {
        "country": "Saudi Arabia",
        "code": "SA",
        "year": 2013,
        "litreacy": 94.42634,
        "gdp_percapita": 45674.324
    },
    {
        "country": "Saudi Arabia",
        "code": "SA",
        "year": 2004,
        "litreacy": 82.85774,
        "gdp_percapita": 42243.97
    },
    {
        "country": "Saudi Arabia",
        "code": "SA",
        "year": 2000,
        "litreacy": 79.35094,
        "gdp_percapita": 40234.816
    },
    {
        "country": "Saudi Arabia",
        "code": "SA",
        "year": 1992,
        "litreacy": 70.82165,
        "gdp_percapita": 46502.133
    },
    {
        "country": "Sao Tome and Principe",
        "code": null,
        "year": 2022,
        "litreacy": 93.75,
        "gdp_percapita": null
    },
    {
        "country": "Sao Tome and Principe",
        "code": "ST",
        "year": 2015,
        "litreacy": 91.74711,
        "gdp_percapita": 3762.5698
    },
    {
        "country": "Sao Tome and Principe",
        "code": "ST",
        "year": 2012,
        "litreacy": 90.1431,
        "gdp_percapita": 3433.4436
    },
    {
        "country": "Sao Tome and Principe",
        "code": "ST",
        "year": 2008,
        "litreacy": 69.53639,
        "gdp_percapita": 3185.3728
    },
    {
        "country": "Sao Tome and Principe",
        "code": "ST",
        "year": 2001,
        "litreacy": 84.90851,
        "gdp_percapita": 2558.9834
    },
    {
        "country": "Sao Tome and Principe",
        "code": null,
        "year": 1991,
        "litreacy": 73.24242,
        "gdp_percapita": null
    },
    {
        "country": "Sao Tome and Principe",
        "code": null,
        "year": 1981,
        "litreacy": 57.32426,
        "gdp_percapita": null
    },
    {
        "country": "San Marino",
        "code": "SM",
        "year": 2011,
        "litreacy": 96,
        "gdp_percapita": 63458.816
    },
    {
        "country": "Samoa",
        "code": "WS",
        "year": 2021,
        "litreacy": 99.1,
        "gdp_percapita": 5534.127
    },
    {
        "country": "Samoa",
        "code": "WS",
        "year": 2015,
        "litreacy": 99.01501,
        "gdp_percapita": 5811.005
    },
    {
        "country": "Samoa",
        "code": "WS",
        "year": 2011,
        "litreacy": 98.97326,
        "gdp_percapita": 5980.2915
    },
    {
        "country": "Samoa",
        "code": "WS",
        "year": 2004,
        "litreacy": 98.54048,
        "gdp_percapita": 5025.835
    },
    {
        "country": "Samoa",
        "code": "WS",
        "year": 1991,
        "litreacy": 97.94433,
        "gdp_percapita": 3560.899
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "code": null,
        "year": 1980,
        "litreacy": 96.9,
        "gdp_percapita": null
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "code": null,
        "year": 1970,
        "litreacy": 95.63216,
        "gdp_percapita": null
    },
    {
        "country": "Saint Pierre and Miquelon",
        "code": null,
        "year": 1982,
        "litreacy": 99,
        "gdp_percapita": null
    },
    {
        "country": "Saint Lucia",
        "code": "LC",
        "year": 2001,
        "litreacy": 90.1,
        "gdp_percapita": 12287.856
    },
    {
        "country": "Saint Kitts and Nevis",
        "code": "KN",
        "year": 2003,
        "litreacy": 97.8,
        "gdp_percapita": 19712.701
    },
    {
        "country": "Saint Helena",
        "code": null,
        "year": 1987,
        "litreacy": 97,
        "gdp_percapita": null
    },
    {
        "country": "Rwanda",
        "code": "RW",
        "year": 2021,
        "litreacy": 75.9,
        "gdp_percapita": 2238.9573
    },
    {
        "country": "Rwanda",
        "code": "RW",
        "year": 2018,
        "litreacy": 73.21559,
        "gdp_percapita": 2050.441
    },
    {
        "country": "Rwanda",
        "code": "RW",
        "year": 2015,
        "litreacy": 71.2435,
        "gdp_percapita": 1844.7169
    },
    {
        "country": "Rwanda",
        "code": "RW",
        "year": 2014,
        "litreacy": 70.80413,
        "gdp_percapita": 1735.5454
    },
    {
        "country": "Rwanda",
        "code": "RW",
        "year": 2012,
        "litreacy": 68.33103,
        "gdp_percapita": 1637.1008
    },
    {
        "country": "Rwanda",
        "code": "RW",
        "year": 2010,
        "litreacy": 65.85227,
        "gdp_percapita": 1467.7363
    },
    {
        "country": "Rwanda",
        "code": "RW",
        "year": 2000,
        "litreacy": 64.8886,
        "gdp_percapita": 848.75433
    },
    {
        "country": "Rwanda",
        "code": "RW",
        "year": 1991,
        "litreacy": 57.85349,
        "gdp_percapita": 889.07886
    },
    {
        "country": "Rwanda",
        "code": null,
        "year": 1978,
        "litreacy": 38.24343,
        "gdp_percapita": null
    },
    {
        "country": "Russia",
        "code": null,
        "year": 2021,
        "litreacy": 99.92777,
        "gdp_percapita": 27960.102
    },
    {
        "country": "Russia",
        "code": null,
        "year": 2015,
        "litreacy": 99.71957,
        "gdp_percapita": 25488.096
    },
    {
        "country": "Russia",
        "code": null,
        "year": 2010,
        "litreacy": 99.68427,
        "gdp_percapita": 23961.22
    },
    {
        "country": "Russia",
        "code": null,
        "year": 2002,
        "litreacy": 99.44097,
        "gdp_percapita": 16175.098
    },
    {
        "country": "Russia",
        "code": null,
        "year": 1989,
        "litreacy": 97.98605,
        "gdp_percapita": null
    },
    {
        "country": "Russia",
        "code": null,
        "year": 1870,
        "litreacy": 15,
        "gdp_percapita": null
    },
    {
        "country": "Russia",
        "code": null,
        "year": 1820,
        "litreacy": 8,
        "gdp_percapita": null
    },
    {
        "country": "Romania",
        "code": "RO",
        "year": 2021,
        "litreacy": 98.9,
        "gdp_percapita": 30776.93
    },
    {
        "country": "Romania",
        "code": "RO",
        "year": 2015,
        "litreacy": 98.75703,
        "gdp_percapita": 23937.46
    },
    {
        "country": "Romania",
        "code": "RO",
        "year": 2011,
        "litreacy": 98.60429,
        "gdp_percapita": 21446.771
    },
    {
        "country": "Romania",
        "code": "RO",
        "year": 2002,
        "litreacy": 97.29759,
        "gdp_percapita": 13989.154
    },
    {
        "country": "Romania",
        "code": "RO",
        "year": 1992,
        "litreacy": 96.70998,
        "gdp_percapita": 10818.865
    },
    {
        "country": "Qatar",
        "code": "QA",
        "year": 2015,
        "litreacy": 97.75709,
        "gdp_percapita": 101971.99
    },
    {
        "country": "Qatar",
        "code": "QA",
        "year": 2014,
        "litreacy": 97.74669,
        "gdp_percapita": 106141.33
    },
    {
        "country": "Qatar",
        "code": "QA",
        "year": 2013,
        "litreacy": 97.47785,
        "gdp_percapita": 109625.63
    },
    {
        "country": "Qatar",
        "code": "QA",
        "year": 2012,
        "litreacy": 96.67859,
        "gdp_percapita": 110931.51
    },
    {
        "country": "Qatar",
        "code": "QA",
        "year": 2011,
        "litreacy": 96.40687,
        "gdp_percapita": 111879.75
    },
    {
        "country": "Qatar",
        "code": "QA",
        "year": 2010,
        "litreacy": 96.28374,
        "gdp_percapita": 103902.516
    },
    {
        "country": "Qatar",
        "code": "QA",
        "year": 2009,
        "litreacy": 94.72429,
        "gdp_percapita": 92450.25
    },
    {
        "country": "Qatar",
        "code": "QA",
        "year": 2008,
        "litreacy": 93.98973,
        "gdp_percapita": 92067.81
    },
    {
        "country": "Qatar",
        "code": "QA",
        "year": 2007,
        "litreacy": 93.08255,
        "gdp_percapita": 91736.75
    },
    {
        "country": "Qatar",
        "code": "QA",
        "year": 2004,
        "litreacy": 88.96239,
        "gdp_percapita": 90782.72
    },
    {
        "country": "Qatar",
        "code": null,
        "year": 1997,
        "litreacy": 83.26216,
        "gdp_percapita": null
    },
    {
        "country": "Qatar",
        "code": null,
        "year": 1986,
        "litreacy": 75.63504,
        "gdp_percapita": null
    },
    {
        "country": "Puerto Rico",
        "code": "PR",
        "year": 2021,
        "litreacy": 92.4,
        "gdp_percapita": 32632.883
    },
    {
        "country": "Puerto Rico",
        "code": "PR",
        "year": 2017,
        "litreacy": 92.39,
        "gdp_percapita": 34363.754
    },
    {
        "country": "Puerto Rico",
        "code": "PR",
        "year": 2015,
        "litreacy": 93.32942,
        "gdp_percapita": 34311.04
    },
    {
        "country": "Puerto Rico",
        "code": "PR",
        "year": 2010,
        "litreacy": 91.96523,
        "gdp_percapita": 32960.7
    },
    {
        "country": "Puerto Rico",
        "code": "PR",
        "year": 2004,
        "litreacy": 90.52934,
        "gdp_percapita": 35016.945
    },
    {
        "country": "Puerto Rico",
        "code": "PR",
        "year": 1990,
        "litreacy": 89.6225,
        "gdp_percapita": 21595.984
    },
    {
        "country": "Puerto Rico",
        "code": null,
        "year": 1980,
        "litreacy": 86.74606,
        "gdp_percapita": null
    },
    {
        "country": "Pre-demographic dividend",
        "code": null,
        "year": 2010,
        "litreacy": 58.624794,
        "gdp_percapita": null
    },
    {
        "country": "Pre-demographic dividend",
        "code": null,
        "year": 2000,
        "litreacy": 55.785202,
        "gdp_percapita": null
    },
    {
        "country": "Pre-demographic dividend",
        "code": null,
        "year": 1990,
        "litreacy": 51.186974,
        "gdp_percapita": null
    },
    {
        "country": "Portugal",
        "code": "PT",
        "year": 2021,
        "litreacy": 96.78,
        "gdp_percapita": 33674.527
    },
    {
        "country": "Portugal",
        "code": "PT",
        "year": 2015,
        "litreacy": 95.42811,
        "gdp_percapita": 31118.791
    },
    {
        "country": "Portugal",
        "code": "PT",
        "year": 2011,
        "litreacy": 94.47705,
        "gdp_percapita": 31304.816
    },
    {
        "country": "Portugal",
        "code": "PT",
        "year": 1991,
        "litreacy": 87.94785,
        "gdp_percapita": 24642.6
    },
    {
        "country": "Portugal",
        "code": null,
        "year": 1981,
        "litreacy": 79.43561,
        "gdp_percapita": null
    },
    {
        "country": "Poland",
        "code": "PL",
        "year": 2021,
        "litreacy": 99.8,
        "gdp_percapita": 34915.523
    },
    {
        "country": "Poland",
        "code": "PL",
        "year": 2015,
        "litreacy": 99.78742,
        "gdp_percapita": 27667.69
    },
    {
        "country": "Poland",
        "code": "PL",
        "year": 2014,
        "litreacy": 99.77411,
        "gdp_percapita": 26488.201
    },
    {
        "country": "Poland",
        "code": "PL",
        "year": 2004,
        "litreacy": 99.61794,
        "gdp_percapita": 18198.1
    },
    {
        "country": "Poland",
        "code": "PL",
        "year": 1994,
        "litreacy": 99.40237,
        "gdp_percapita": 11591.999
    },
    {
        "country": "Poland",
        "code": null,
        "year": 1988,
        "litreacy": 99.3,
        "gdp_percapita": null
    },
    {
        "country": "Poland",
        "code": null,
        "year": 1978,
        "litreacy": 98.74274,
        "gdp_percapita": null
    },
    {
        "country": "Poland",
        "code": null,
        "year": 1750,
        "litreacy": 5,
        "gdp_percapita": null
    },
    {
        "country": "Poland",
        "code": null,
        "year": 1650,
        "litreacy": 3,
        "gdp_percapita": null
    },
    {
        "country": "Poland",
        "code": null,
        "year": 1550,
        "litreacy": 0,
        "gdp_percapita": null
    },
    {
        "country": "Poland",
        "code": null,
        "year": 1475,
        "litreacy": 0,
        "gdp_percapita": null
    },
    {
        "country": "Philippines",
        "code": "PH",
        "year": 2019,
        "litreacy": 96.27817,
        "gdp_percapita": 8731.861
    },
    {
        "country": "Philippines",
        "code": "PH",
        "year": 2015,
        "litreacy": 98.18255,
        "gdp_percapita": 7235.0815
    },
    {
        "country": "Philippines",
        "code": "PH",
        "year": 2013,
        "litreacy": 96.398,
        "gdp_percapita": 6610.851
    },
    {
        "country": "Philippines",
        "code": "PH",
        "year": 2008,
        "litreacy": 95.4201,
        "gdp_percapita": 5596.913
    },
    {
        "country": "Philippines",
        "code": "PH",
        "year": 2003,
        "litreacy": 92.59069,
        "gdp_percapita": 4703.6665
    },
    {
        "country": "Philippines",
        "code": "PH",
        "year": 2000,
        "litreacy": 92.60006,
        "gdp_percapita": 4455.6724
    },
    {
        "country": "Philippines",
        "code": "PH",
        "year": 1994,
        "litreacy": 93.91597,
        "gdp_percapita": 4106.6846
    },
    {
        "country": "Philippines",
        "code": "PH",
        "year": 1990,
        "litreacy": 93.5739,
        "gdp_percapita": 4232.4775
    },
    {
        "country": "Philippines",
        "code": null,
        "year": 1980,
        "litreacy": 83.31723,
        "gdp_percapita": null
    },
    {
        "country": "Peru",
        "code": "PE",
        "year": 2020,
        "litreacy": 94.49793,
        "gdp_percapita": 11176.919
    },
    {
        "country": "Peru",
        "code": "PE",
        "year": 2018,
        "litreacy": 94.40827,
        "gdp_percapita": 12696.236
    },
    {
        "country": "Peru",
        "code": "PE",
        "year": 2017,
        "litreacy": 94.14961,
        "gdp_percapita": 12442.746
    },
    {
        "country": "Peru",
        "code": "PE",
        "year": 2016,
        "litreacy": 94.17367,
        "gdp_percapita": 12321.318
    },
    {
        "country": "Peru",
        "code": "PE",
        "year": 2015,
        "litreacy": 94.16234,
        "gdp_percapita": 12015.1875
    },
    {
        "country": "Peru",
        "code": "PE",
        "year": 2014,
        "litreacy": 93.70795,
        "gdp_percapita": 11773.944
    },
    {
        "country": "Peru",
        "code": "PE",
        "year": 2012,
        "litreacy": 93.84173,
        "gdp_percapita": 11084.874
    },
    {
        "country": "Peru",
        "code": "PE",
        "year": 2007,
        "litreacy": 89.59081,
        "gdp_percapita": 8548.6045
    },
    {
        "country": "Peru",
        "code": "PE",
        "year": 2006,
        "litreacy": 88.69934,
        "gdp_percapita": 7938.435
    },
    {
        "country": "Peru",
        "code": "PE",
        "year": 2005,
        "litreacy": 87.90867,
        "gdp_percapita": 7443.931
    },
    {
        "country": "Peru",
        "code": "PE",
        "year": 2004,
        "litreacy": 87.66985,
        "gdp_percapita": 7067.3555
    },
    {
        "country": "Peru",
        "code": "PE",
        "year": 1993,
        "litreacy": 87.15063,
        "gdp_percapita": 5271.982
    },
    {
        "country": "Peru",
        "code": null,
        "year": 1981,
        "litreacy": 81.91846,
        "gdp_percapita": null
    },
    {
        "country": "Peru",
        "code": null,
        "year": 1980,
        "litreacy": 79,
        "gdp_percapita": null
    },
    {
        "country": "Peru",
        "code": null,
        "year": 1979,
        "litreacy": 79,
        "gdp_percapita": null
    },
    {
        "country": "Peru",
        "code": null,
        "year": 1970,
        "litreacy": 72,
        "gdp_percapita": null
    },
    {
        "country": "Peru",
        "code": null,
        "year": 1960,
        "litreacy": 60,
        "gdp_percapita": null
    },
    {
        "country": "Peru",
        "code": null,
        "year": 1950,
        "litreacy": 51,
        "gdp_percapita": null
    },
    {
        "country": "Peru",
        "code": null,
        "year": 1940,
        "litreacy": 42,
        "gdp_percapita": null
    },
    {
        "country": "Peru",
        "code": null,
        "year": 1930,
        "litreacy": 37,
        "gdp_percapita": null
    },
    {
        "country": "Peru",
        "code": null,
        "year": 1920,
        "litreacy": 33,
        "gdp_percapita": null
    },
    {
        "country": "Peru",
        "code": null,
        "year": 1910,
        "litreacy": 29,
        "gdp_percapita": null
    },
    {
        "country": "Peru",
        "code": null,
        "year": 1900,
        "litreacy": 24,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": "PY",
        "year": 2020,
        "litreacy": 94.54455,
        "gdp_percapita": 13317.321
    },
    {
        "country": "Paraguay",
        "code": "PY",
        "year": 2019,
        "litreacy": 93.21353,
        "gdp_percapita": 13609.723
    },
    {
        "country": "Paraguay",
        "code": "PY",
        "year": 2018,
        "litreacy": 94.0208,
        "gdp_percapita": 13848.499
    },
    {
        "country": "Paraguay",
        "code": "PY",
        "year": 2016,
        "litreacy": 94.65024,
        "gdp_percapita": 13163.74
    },
    {
        "country": "Paraguay",
        "code": "PY",
        "year": 2015,
        "litreacy": 95.55484,
        "gdp_percapita": 12806.097
    },
    {
        "country": "Paraguay",
        "code": "PY",
        "year": 2014,
        "litreacy": 95.03481,
        "gdp_percapita": 12616.414
    },
    {
        "country": "Paraguay",
        "code": "PY",
        "year": 2013,
        "litreacy": 95.05904,
        "gdp_percapita": 12150.972
    },
    {
        "country": "Paraguay",
        "code": "PY",
        "year": 2012,
        "litreacy": 94.19747,
        "gdp_percapita": 11376.407
    },
    {
        "country": "Paraguay",
        "code": "PY",
        "year": 2010,
        "litreacy": 93.87092,
        "gdp_percapita": 11281.256
    },
    {
        "country": "Paraguay",
        "code": "PY",
        "year": 2009,
        "litreacy": 93.75424,
        "gdp_percapita": 10272.177
    },
    {
        "country": "Paraguay",
        "code": "PY",
        "year": 2008,
        "litreacy": 93.29208,
        "gdp_percapita": 10403.841
    },
    {
        "country": "Paraguay",
        "code": "PY",
        "year": 2007,
        "litreacy": 94.55822,
        "gdp_percapita": 9865.326
    },
    {
        "country": "Paraguay",
        "code": "PY",
        "year": 1992,
        "litreacy": 90.27182,
        "gdp_percapita": 8808.784
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1982,
        "litreacy": 78.45861,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1981,
        "litreacy": 86,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1980,
        "litreacy": 86,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1979,
        "litreacy": 85,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1978,
        "litreacy": 85,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1977,
        "litreacy": 84,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1976,
        "litreacy": 84,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1975,
        "litreacy": 83,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1974,
        "litreacy": 82,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1973,
        "litreacy": 82,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1972,
        "litreacy": 81,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1971,
        "litreacy": 80,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1970,
        "litreacy": 80,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1960,
        "litreacy": 73,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1950,
        "litreacy": 66,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1940,
        "litreacy": 59,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1930,
        "litreacy": 52,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1920,
        "litreacy": 45,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1910,
        "litreacy": 38,
        "gdp_percapita": null
    },
    {
        "country": "Paraguay",
        "code": null,
        "year": 1900,
        "litreacy": 31,
        "gdp_percapita": null
    },
    {
        "country": "Papua New Guinea",
        "code": "PG",
        "year": 2015,
        "litreacy": 63.43349,
        "gdp_percapita": 3813.1143
    },
    {
        "country": "Papua New Guinea",
        "code": "PG",
        "year": 2014,
        "litreacy": 63.09609,
        "gdp_percapita": 3669.913
    },
    {
        "country": "Papua New Guinea",
        "code": "PG",
        "year": 2010,
        "litreacy": 61.6,
        "gdp_percapita": 3283.715
    },
    {
        "country": "Papua New Guinea",
        "code": "PG",
        "year": 2000,
        "litreacy": 57.34326,
        "gdp_percapita": 3047.9167
    },
    {
        "country": "Panama",
        "code": "PA",
        "year": 2019,
        "litreacy": 95.73608,
        "gdp_percapita": 31543.605
    },
    {
        "country": "Panama",
        "code": "PA",
        "year": 2018,
        "litreacy": 95.41181,
        "gdp_percapita": 31125.625
    },
    {
        "country": "Panama",
        "code": "PA",
        "year": 2015,
        "litreacy": 95.03823,
        "gdp_percapita": 28512.926
    },
    {
        "country": "Panama",
        "code": "PA",
        "year": 2010,
        "litreacy": 94.09412,
        "gdp_percapita": 21455.684
    },
    {
        "country": "Panama",
        "code": "PA",
        "year": 2000,
        "litreacy": 91.89962,
        "gdp_percapita": 14646.033
    },
    {
        "country": "Panama",
        "code": "PA",
        "year": 1990,
        "litreacy": 88.77986,
        "gdp_percapita": 10817.845
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1980,
        "litreacy": 88.07174,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1979,
        "litreacy": 84,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1978,
        "litreacy": 84,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1977,
        "litreacy": 83,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1976,
        "litreacy": 83,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1975,
        "litreacy": 82,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1974,
        "litreacy": 81,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1973,
        "litreacy": 81,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1972,
        "litreacy": 80,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1971,
        "litreacy": 80,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1970,
        "litreacy": 79,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1960,
        "litreacy": 73,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1950,
        "litreacy": 67,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1940,
        "litreacy": 58,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1930,
        "litreacy": 46,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1920,
        "litreacy": 42,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1910,
        "litreacy": 27,
        "gdp_percapita": null
    },
    {
        "country": "Panama",
        "code": null,
        "year": 1900,
        "litreacy": 17,
        "gdp_percapita": null
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2019,
        "litreacy": 97.37826,
        "gdp_percapita": 6245.4487
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2018,
        "litreacy": 97.21861,
        "gdp_percapita": 6318.21
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2017,
        "litreacy": 96.9244,
        "gdp_percapita": 6401.7407
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2016,
        "litreacy": 96.71919,
        "gdp_percapita": 6438.9336
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2015,
        "litreacy": 96.47712,
        "gdp_percapita": 6048.9766
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2014,
        "litreacy": 96.21293,
        "gdp_percapita": 5967.073
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2013,
        "litreacy": 96.04603,
        "gdp_percapita": 6118.2573
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2012,
        "litreacy": 95.67101,
        "gdp_percapita": 5985.683
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2011,
        "litreacy": 95.02582,
        "gdp_percapita": 5782.6895
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2010,
        "litreacy": 94.71748,
        "gdp_percapita": 5411.0664
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2009,
        "litreacy": 94.43018,
        "gdp_percapita": 5250.116
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2008,
        "litreacy": 94.00984,
        "gdp_percapita": 4965.373
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2007,
        "litreacy": 93.7617,
        "gdp_percapita": 4750.9297
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2006,
        "litreacy": 93.45087,
        "gdp_percapita": 4695.9946
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 2004,
        "litreacy": 92.47751,
        "gdp_percapita": 4485.5254
    },
    {
        "country": "Palestine",
        "code": null,
        "year": 1997,
        "litreacy": 86.07696,
        "gdp_percapita": 4294.746
    },
    {
        "country": "Palau",
        "code": "PW",
        "year": 2015,
        "litreacy": 96.59374,
        "gdp_percapita": 18402.53
    },
    {
        "country": "Palau",
        "code": "PW",
        "year": 2013,
        "litreacy": 99.50313,
        "gdp_percapita": 16089.208
    },
    {
        "country": "Palau",
        "code": "PW",
        "year": 2004,
        "litreacy": 96.9898,
        "gdp_percapita": 14739.449
    },
    {
        "country": "Palau",
        "code": null,
        "year": 1994,
        "litreacy": 94.4333,
        "gdp_percapita": null
    },
    {
        "country": "Palau",
        "code": null,
        "year": 1980,
        "litreacy": 91.92142,
        "gdp_percapita": null
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 2019,
        "litreacy": 57.99886,
        "gdp_percapita": 5157.5464
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 2018,
        "litreacy": 57.01057,
        "gdp_percapita": 5113.434
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 2017,
        "litreacy": 59.13205,
        "gdp_percapita": 4891.7197
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 2015,
        "litreacy": 56.44031,
        "gdp_percapita": 4552.6055
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 2014,
        "litreacy": 56.97715,
        "gdp_percapita": 4403.673
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 2013,
        "litreacy": 55.59499,
        "gdp_percapita": 4266.7114
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 2012,
        "litreacy": 56.76434,
        "gdp_percapita": 4150.3257
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 2011,
        "litreacy": 54.73802,
        "gdp_percapita": 4082.4495
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 2010,
        "litreacy": 55.37519,
        "gdp_percapita": 4058.0085
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 2009,
        "litreacy": 54.89264,
        "gdp_percapita": 4084.8254
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 2008,
        "litreacy": 55.52637,
        "gdp_percapita": 4061.8865
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 2007,
        "litreacy": 52.13683,
        "gdp_percapita": 4081.9119
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 2006,
        "litreacy": 54.15121,
        "gdp_percapita": 3978.0193
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 2005,
        "litreacy": 49.87364,
        "gdp_percapita": 3836.0903
    },
    {
        "country": "Pakistan",
        "code": "PK",
        "year": 1998,
        "litreacy": 42.69931,
        "gdp_percapita": 3307.51
    },
    {
        "country": "Pakistan",
        "code": null,
        "year": 1981,
        "litreacy": 25.72519,
        "gdp_percapita": null
    },
    {
        "country": "Pacific island small states",
        "code": null,
        "year": 2000,
        "litreacy": 86.692055,
        "gdp_percapita": null
    },
    {
        "country": "Other small states",
        "code": null,
        "year": 2010,
        "litreacy": 83.64996,
        "gdp_percapita": null
    },
    {
        "country": "Other small states",
        "code": null,
        "year": 2000,
        "litreacy": 78.839775,
        "gdp_percapita": null
    },
    {
        "country": "Other small states",
        "code": null,
        "year": 1990,
        "litreacy": 73.33838,
        "gdp_percapita": null
    },
    {
        "country": "Oman",
        "code": null,
        "year": 2022,
        "litreacy": 97.33906,
        "gdp_percapita": null
    },
    {
        "country": "Oman",
        "code": "OM",
        "year": 2018,
        "litreacy": 95.65153,
        "gdp_percapita": 34212.105
    },
    {
        "country": "Oman",
        "code": "OM",
        "year": 2017,
        "litreacy": 95.576,
        "gdp_percapita": 34218.387
    },
    {
        "country": "Oman",
        "code": "OM",
        "year": 2015,
        "litreacy": 93.03861,
        "gdp_percapita": 35188.023
    },
    {
        "country": "Oman",
        "code": "OM",
        "year": 2014,
        "litreacy": 91.9812,
        "gdp_percapita": 35032.258
    },
    {
        "country": "Oman",
        "code": "OM",
        "year": 2010,
        "litreacy": 86.939,
        "gdp_percapita": 40819.938
    },
    {
        "country": "Oman",
        "code": "OM",
        "year": 2008,
        "litreacy": 86.62114,
        "gdp_percapita": 41114.24
    },
    {
        "country": "Oman",
        "code": "OM",
        "year": 2003,
        "litreacy": 81.36331,
        "gdp_percapita": 36256.348
    },
    {
        "country": "Norway",
        "code": "NO",
        "year": 2011,
        "litreacy": 100,
        "gdp_percapita": 61157.13
    },
    {
        "country": "Northern Mariana Islands",
        "code": null,
        "year": 1980,
        "litreacy": 97,
        "gdp_percapita": null
    },
    {
        "country": "North Macedonia",
        "code": "MK",
        "year": 2015,
        "litreacy": 97.84376,
        "gdp_percapita": 15141.992
    },
    {
        "country": "North Macedonia",
        "code": "MK",
        "year": 2014,
        "litreacy": 97.75175,
        "gdp_percapita": 14599.242
    },
    {
        "country": "North Macedonia",
        "code": "MK",
        "year": 2012,
        "litreacy": 97.6,
        "gdp_percapita": 13730.258
    },
    {
        "country": "North Macedonia",
        "code": "MK",
        "year": 2002,
        "litreacy": 96.12893,
        "gdp_percapita": 10091.774
    },
    {
        "country": "North Macedonia",
        "code": "MK",
        "year": 1994,
        "litreacy": 94.05875,
        "gdp_percapita": 9132.368
    },
    {
        "country": "North Korea",
        "code": null,
        "year": 2018,
        "litreacy": 99.99819,
        "gdp_percapita": null
    },
    {
        "country": "North Korea",
        "code": null,
        "year": 2015,
        "litreacy": 99.99924,
        "gdp_percapita": null
    },
    {
        "country": "North Korea",
        "code": null,
        "year": 2008,
        "litreacy": 99.99819,
        "gdp_percapita": null
    },
    {
        "country": "North America (WB)",
        "code": null,
        "year": 2022,
        "litreacy": 98.74067,
        "gdp_percapita": null
    },
    {
        "country": "North America (WB)",
        "code": null,
        "year": 2021,
        "litreacy": 98.73995,
        "gdp_percapita": 62042.66
    },
    {
        "country": "North America (WB)",
        "code": null,
        "year": 2020,
        "litreacy": 98.74023,
        "gdp_percapita": 58719.156
    },
    {
        "country": "North America (WB)",
        "code": null,
        "year": 2019,
        "litreacy": 98.73326,
        "gdp_percapita": 61114.51
    },
    {
        "country": "North America (WB)",
        "code": null,
        "year": 2018,
        "litreacy": 98.72725,
        "gdp_percapita": 60097.098
    },
    {
        "country": "North America (WB)",
        "code": null,
        "year": 2017,
        "litreacy": 98.7193,
        "gdp_percapita": 58746.957
    },
    {
        "country": "North America (WB)",
        "code": null,
        "year": 2008,
        "litreacy": 98.64645,
        "gdp_percapita": 54497.31
    },
    {
        "country": "North America (WB)",
        "code": null,
        "year": 2007,
        "litreacy": 98.6258,
        "gdp_percapita": 54915.902
    },
    {
        "country": "North America (WB)",
        "code": null,
        "year": 2006,
        "litreacy": 98.61302,
        "gdp_percapita": 54346.215
    },
    {
        "country": "North America (WB)",
        "code": null,
        "year": 2005,
        "litreacy": 98.60252,
        "gdp_percapita": 53395.37
    },
    {
        "country": "North America (WB)",
        "code": null,
        "year": 2004,
        "litreacy": 98.58384,
        "gdp_percapita": 52088.914
    },
    {
        "country": "North America (WB)",
        "code": null,
        "year": 2003,
        "litreacy": 98.57133,
        "gdp_percapita": 50654.58
    },
    {
        "country": "Niue",
        "code": null,
        "year": 2011,
        "litreacy": 95,
        "gdp_percapita": null
    },
    {
        "country": "Nigeria",
        "code": "NG",
        "year": 2018,
        "litreacy": 62.01601,
        "gdp_percapita": 5089.778
    },
    {
        "country": "Nigeria",
        "code": "NG",
        "year": 2015,
        "litreacy": 59.56808,
        "gdp_percapita": 5429.0996
    },
    {
        "country": "Nigeria",
        "code": "NG",
        "year": 2008,
        "litreacy": 51.07766,
        "gdp_percapita": 4396.801
    },
    {
        "country": "Nigeria",
        "code": "NG",
        "year": 2006,
        "litreacy": 70.19835,
        "gdp_percapita": 4079.1357
    },
    {
        "country": "Nigeria",
        "code": "NG",
        "year": 2003,
        "litreacy": 54.77318,
        "gdp_percapita": 3585.9946
    },
    {
        "country": "Nigeria",
        "code": "NG",
        "year": 1991,
        "litreacy": 55.44675,
        "gdp_percapita": 3188.5103
    },
    {
        "country": "Niger",
        "code": null,
        "year": 2022,
        "litreacy": 38.1,
        "gdp_percapita": null
    },
    {
        "country": "Niger",
        "code": "NE",
        "year": 2015,
        "litreacy": 19.1026,
        "gdp_percapita": 1124.41
    },
    {
        "country": "Niger",
        "code": "NE",
        "year": 2012,
        "litreacy": 30.56039,
        "gdp_percapita": 1075.146
    },
    {
        "country": "Niger",
        "code": "NE",
        "year": 2005,
        "litreacy": 28.67242,
        "gdp_percapita": 944.8482
    },
    {
        "country": "Niger",
        "code": "NE",
        "year": 2001,
        "litreacy": 14.37604,
        "gdp_percapita": 942.2681
    },
    {
        "country": "Nicaragua",
        "code": "NI",
        "year": 2015,
        "litreacy": 82.61455,
        "gdp_percapita": 5563.004
    },
    {
        "country": "Nicaragua",
        "code": "NI",
        "year": 2005,
        "litreacy": 78.00298,
        "gdp_percapita": 4308.015
    },
    {
        "country": "Nicaragua",
        "code": "NI",
        "year": 2001,
        "litreacy": 76.67713,
        "gdp_percapita": 3989.1873
    },
    {
        "country": "Nicaragua",
        "code": "NI",
        "year": 2000,
        "litreacy": 66,
        "gdp_percapita": 3927.062
    },
    {
        "country": "Nicaragua",
        "code": "NI",
        "year": 1999,
        "litreacy": 68,
        "gdp_percapita": 3827.1252
    },
    {
        "country": "Nicaragua",
        "code": "NI",
        "year": 1998,
        "litreacy": 68,
        "gdp_percapita": 3629.6926
    },
    {
        "country": "Nicaragua",
        "code": "NI",
        "year": 1997,
        "litreacy": 67,
        "gdp_percapita": 3555.97
    },
    {
        "country": "Nicaragua",
        "code": "NI",
        "year": 1996,
        "litreacy": 67,
        "gdp_percapita": 3479.695
    },
    {
        "country": "Nicaragua",
        "code": "NI",
        "year": 1995,
        "litreacy": 67,
        "gdp_percapita": 3334.7903
    },
    {
        "country": "Nicaragua",
        "code": "NI",
        "year": 1994,
        "litreacy": 66,
        "gdp_percapita": 3214.453
    },
    {
        "country": "Nicaragua",
        "code": "NI",
        "year": 1993,
        "litreacy": 66,
        "gdp_percapita": 3178.364
    },
    {
        "country": "Nicaragua",
        "code": "NI",
        "year": 1992,
        "litreacy": 65,
        "gdp_percapita": 3262.6296
    },
    {
        "country": "Nicaragua",
        "code": "NI",
        "year": 1991,
        "litreacy": 65,
        "gdp_percapita": 3325.0916
    },
    {
        "country": "Nicaragua",
        "code": "NI",
        "year": 1990,
        "litreacy": 65,
        "gdp_percapita": 3409.776
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1989,
        "litreacy": 64,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1988,
        "litreacy": 64,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1987,
        "litreacy": 64,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1986,
        "litreacy": 63,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1985,
        "litreacy": 63,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1984,
        "litreacy": 63,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1983,
        "litreacy": 62,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1982,
        "litreacy": 62,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1981,
        "litreacy": 61,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1980,
        "litreacy": 61,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1979,
        "litreacy": 61,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1978,
        "litreacy": 60,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1977,
        "litreacy": 60,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1976,
        "litreacy": 59,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1975,
        "litreacy": 59,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1974,
        "litreacy": 59,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1973,
        "litreacy": 58,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1972,
        "litreacy": 58,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1971,
        "litreacy": 57,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1970,
        "litreacy": 57,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1960,
        "litreacy": 47,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1950,
        "litreacy": 38,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1940,
        "litreacy": 38,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1930,
        "litreacy": 39,
        "gdp_percapita": null
    },
    {
        "country": "Nicaragua",
        "code": null,
        "year": 1920,
        "litreacy": 39,
        "gdp_percapita": null
    },
    {
        "country": "New Zealand",
        "code": "NZ",
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": 35546.098
    },
    {
        "country": "New Caledonia",
        "code": null,
        "year": 2015,
        "litreacy": 96.93782,
        "gdp_percapita": null
    },
    {
        "country": "New Caledonia",
        "code": null,
        "year": 2014,
        "litreacy": 96.80667,
        "gdp_percapita": null
    },
    {
        "country": "New Caledonia",
        "code": null,
        "year": 2006,
        "litreacy": 97.3,
        "gdp_percapita": null
    },
    {
        "country": "New Caledonia",
        "code": null,
        "year": 1996,
        "litreacy": 96.13792,
        "gdp_percapita": null
    },
    {
        "country": "New Caledonia",
        "code": null,
        "year": 1989,
        "litreacy": 93.08063,
        "gdp_percapita": null
    },
    {
        "country": "New Caledonia",
        "code": null,
        "year": 1976,
        "litreacy": 91.30037,
        "gdp_percapita": null
    },
    {
        "country": "Netherlands",
        "code": "NL",
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": 47806.883
    },
    {
        "country": "Netherlands",
        "code": null,
        "year": 1750,
        "litreacy": 85,
        "gdp_percapita": null
    },
    {
        "country": "Netherlands",
        "code": null,
        "year": 1650,
        "litreacy": 53,
        "gdp_percapita": null
    },
    {
        "country": "Netherlands",
        "code": null,
        "year": 1550,
        "litreacy": 12,
        "gdp_percapita": null
    },
    {
        "country": "Netherlands",
        "code": null,
        "year": 1475,
        "litreacy": 17,
        "gdp_percapita": null
    },
    {
        "country": "Nepal",
        "code": "NP",
        "year": 2021,
        "litreacy": 71.15,
        "gdp_percapita": 3831.9485
    },
    {
        "country": "Nepal",
        "code": "NP",
        "year": 2015,
        "litreacy": 64.66364,
        "gdp_percapita": 3260.035
    },
    {
        "country": "Nepal",
        "code": "NP",
        "year": 2011,
        "litreacy": 59.62725,
        "gdp_percapita": 2763.8289
    },
    {
        "country": "Nepal",
        "code": "NP",
        "year": 2001,
        "litreacy": 48.60897,
        "gdp_percapita": 2084.2
    },
    {
        "country": "Nepal",
        "code": "NP",
        "year": 1991,
        "litreacy": 32.97559,
        "gdp_percapita": 1611.3595
    },
    {
        "country": "Nepal",
        "code": null,
        "year": 1981,
        "litreacy": 20.57367,
        "gdp_percapita": null
    },
    {
        "country": "Namibia",
        "code": null,
        "year": 2021,
        "litreacy": 92.25,
        "gdp_percapita": 9137.797
    },
    {
        "country": "Namibia",
        "code": null,
        "year": 2015,
        "litreacy": 90.8205,
        "gdp_percapita": 10813.227
    },
    {
        "country": "Namibia",
        "code": null,
        "year": 2011,
        "litreacy": 88.27463,
        "gdp_percapita": 9431.044
    },
    {
        "country": "Namibia",
        "code": null,
        "year": 2007,
        "litreacy": 76.48659,
        "gdp_percapita": 8714.104
    },
    {
        "country": "Namibia",
        "code": null,
        "year": 2001,
        "litreacy": 84.94426,
        "gdp_percapita": 6655.7505
    },
    {
        "country": "Namibia",
        "code": null,
        "year": 1991,
        "litreacy": 75.81658,
        "gdp_percapita": 6510.012
    },
    {
        "country": "Myanmar",
        "code": "MM",
        "year": 2019,
        "litreacy": 89.06995,
        "gdp_percapita": 4829.5366
    },
    {
        "country": "Myanmar",
        "code": "MM",
        "year": 2016,
        "litreacy": 75.5512,
        "gdp_percapita": 4109.5576
    },
    {
        "country": "Myanmar",
        "code": "MM",
        "year": 2015,
        "litreacy": 93.09005,
        "gdp_percapita": 3748.2942
    },
    {
        "country": "Myanmar",
        "code": "MM",
        "year": 2014,
        "litreacy": 92.92316,
        "gdp_percapita": 3658.5935
    },
    {
        "country": "Myanmar",
        "code": "MM",
        "year": 2000,
        "litreacy": 89.94176,
        "gdp_percapita": 973.3955
    },
    {
        "country": "Myanmar",
        "code": null,
        "year": 1983,
        "litreacy": 78.57041,
        "gdp_percapita": null
    },
    {
        "country": "Mozambique",
        "code": "MZ",
        "year": 2020,
        "litreacy": 59.77961,
        "gdp_percapita": 1232.9856
    },
    {
        "country": "Mozambique",
        "code": "MZ",
        "year": 2017,
        "litreacy": 60.65543,
        "gdp_percapita": 1287.2349
    },
    {
        "country": "Mozambique",
        "code": "MZ",
        "year": 2015,
        "litreacy": 56.039,
        "gdp_percapita": 1271.9619
    },
    {
        "country": "Mozambique",
        "code": "MZ",
        "year": 2009,
        "litreacy": 50.58381,
        "gdp_percapita": 1011.5613
    },
    {
        "country": "Mozambique",
        "code": "MZ",
        "year": 2003,
        "litreacy": 48.15884,
        "gdp_percapita": 762.2862
    },
    {
        "country": "Mozambique",
        "code": "MZ",
        "year": 1997,
        "litreacy": 38.70788,
        "gdp_percapita": 544.21405
    },
    {
        "country": "Mozambique",
        "code": null,
        "year": 1980,
        "litreacy": 26.99771,
        "gdp_percapita": null
    },
    {
        "country": "Morocco",
        "code": null,
        "year": 2022,
        "litreacy": 77.35,
        "gdp_percapita": null
    },
    {
        "country": "Morocco",
        "code": "MA",
        "year": 2015,
        "litreacy": 71.71055,
        "gdp_percapita": 7687.691
    },
    {
        "country": "Morocco",
        "code": "MA",
        "year": 2014,
        "litreacy": 75.5862,
        "gdp_percapita": 7462.153
    },
    {
        "country": "Morocco",
        "code": "MA",
        "year": 2012,
        "litreacy": 69.42539,
        "gdp_percapita": 6160.9985
    },
    {
        "country": "Morocco",
        "code": "MA",
        "year": 2011,
        "litreacy": 67.08416,
        "gdp_percapita": 6064.432
    },
    {
        "country": "Morocco",
        "code": "MA",
        "year": 2009,
        "litreacy": 56.08367,
        "gdp_percapita": 5703.029
    },
    {
        "country": "Morocco",
        "code": "MA",
        "year": 2008,
        "litreacy": 55.14792,
        "gdp_percapita": 5543.0884
    },
    {
        "country": "Morocco",
        "code": "MA",
        "year": 2004,
        "litreacy": 52.30626,
        "gdp_percapita": 4797.6753
    },
    {
        "country": "Morocco",
        "code": "MA",
        "year": 1994,
        "litreacy": 41.59411,
        "gdp_percapita": 3883.2766
    },
    {
        "country": "Morocco",
        "code": null,
        "year": 1982,
        "litreacy": 30.2578,
        "gdp_percapita": null
    },
    {
        "country": "Montserrat",
        "code": null,
        "year": 1970,
        "litreacy": 97,
        "gdp_percapita": null
    },
    {
        "country": "Montenegro",
        "code": "ME",
        "year": 2021,
        "litreacy": 98.98,
        "gdp_percapita": 20602.5
    },
    {
        "country": "Montenegro",
        "code": "ME",
        "year": 2015,
        "litreacy": 98.71995,
        "gdp_percapita": 18266.879
    },
    {
        "country": "Montenegro",
        "code": "ME",
        "year": 2011,
        "litreacy": 98.44221,
        "gdp_percapita": 17290.512
    },
    {
        "country": "Montenegro",
        "code": "ME",
        "year": 2003,
        "litreacy": 97.77346,
        "gdp_percapita": 12957.905
    },
    {
        "country": "Montenegro",
        "code": null,
        "year": 1991,
        "litreacy": 93.46274,
        "gdp_percapita": null
    },
    {
        "country": "Montenegro",
        "code": null,
        "year": 1981,
        "litreacy": 89.6353,
        "gdp_percapita": null
    },
    {
        "country": "Mongolia",
        "code": "MN",
        "year": 2020,
        "litreacy": 99.18327,
        "gdp_percapita": 11666.779
    },
    {
        "country": "Mongolia",
        "code": "MN",
        "year": 2015,
        "litreacy": 98.36764,
        "gdp_percapita": 11134.802
    },
    {
        "country": "Mongolia",
        "code": "MN",
        "year": 2010,
        "litreacy": 98.257,
        "gdp_percapita": 7518.831
    },
    {
        "country": "Mongolia",
        "code": "MN",
        "year": 2000,
        "litreacy": 97.76885,
        "gdp_percapita": 4424.653
    },
    {
        "country": "Monaco",
        "code": null,
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": null
    },
    {
        "country": "Moldova",
        "code": null,
        "year": 2021,
        "litreacy": 99.6,
        "gdp_percapita": 14009.226
    },
    {
        "country": "Moldova",
        "code": null,
        "year": 2015,
        "litreacy": 99.24439,
        "gdp_percapita": 10355.539
    },
    {
        "country": "Moldova",
        "code": null,
        "year": 2014,
        "litreacy": 99.35989,
        "gdp_percapita": 10311.288
    },
    {
        "country": "Moldova",
        "code": null,
        "year": 2000,
        "litreacy": 96.6538,
        "gdp_percapita": 5072.8413
    },
    {
        "country": "Moldova",
        "code": null,
        "year": 1989,
        "litreacy": 96.37755,
        "gdp_percapita": null
    },
    {
        "country": "Middle income",
        "code": null,
        "year": 2010,
        "litreacy": 84.38868,
        "gdp_percapita": null
    },
    {
        "country": "Middle income",
        "code": null,
        "year": 2000,
        "litreacy": 79.70074,
        "gdp_percapita": null
    },
    {
        "country": "Middle income",
        "code": null,
        "year": 1990,
        "litreacy": 71.37112,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2022,
        "litreacy": 80.35759,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2021,
        "litreacy": 80.01225,
        "gdp_percapita": 15779.084
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2020,
        "litreacy": 79.76233,
        "gdp_percapita": 15318.6045
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2019,
        "litreacy": 79.341,
        "gdp_percapita": 16030.779
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2018,
        "litreacy": 79.00979,
        "gdp_percapita": 16154.122
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2017,
        "litreacy": 81.51193,
        "gdp_percapita": 16126.459
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2016,
        "litreacy": 80.59259,
        "gdp_percapita": 16114.037
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2015,
        "litreacy": 79.55848,
        "gdp_percapita": 15705.3
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2014,
        "litreacy": 81.56906,
        "gdp_percapita": 15553.201
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2013,
        "litreacy": 77.86291,
        "gdp_percapita": 15355.278
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2012,
        "litreacy": 79.85406,
        "gdp_percapita": 15371.938
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2011,
        "litreacy": 77.35669,
        "gdp_percapita": 15003.238
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2010,
        "litreacy": 76.66655,
        "gdp_percapita": 14801.542
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2009,
        "litreacy": 75.86177,
        "gdp_percapita": 14422.763
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2008,
        "litreacy": 75.84242,
        "gdp_percapita": 14661.367
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2007,
        "litreacy": 75.23202,
        "gdp_percapita": 14372.243
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2006,
        "litreacy": 74.54419,
        "gdp_percapita": 13977.674
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2005,
        "litreacy": 74.46502,
        "gdp_percapita": 13549.325
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2004,
        "litreacy": 74.7003,
        "gdp_percapita": 13188.041
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2003,
        "litreacy": 74.09117,
        "gdp_percapita": 12502.796
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2002,
        "litreacy": 71.02652,
        "gdp_percapita": 12081.201
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2001,
        "litreacy": 70.5084,
        "gdp_percapita": 12100.514
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 2000,
        "litreacy": 69.23674,
        "gdp_percapita": 12156.539
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1999,
        "litreacy": 68.35577,
        "gdp_percapita": 11656.763
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1998,
        "litreacy": 67.25558,
        "gdp_percapita": 11668.538
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1997,
        "litreacy": 66.04063,
        "gdp_percapita": 11397.545
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1996,
        "litreacy": 65.12471,
        "gdp_percapita": 11264.657
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1995,
        "litreacy": 63.81457,
        "gdp_percapita": 10960.984
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1994,
        "litreacy": 62.19767,
        "gdp_percapita": 10924.225
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1993,
        "litreacy": 61.39244,
        "gdp_percapita": 10950.867
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1992,
        "litreacy": 60.49936,
        "gdp_percapita": 11024.326
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1991,
        "litreacy": 59.51876,
        "gdp_percapita": 10844.727
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1990,
        "litreacy": 58.23571,
        "gdp_percapita": 10649.236
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1989,
        "litreacy": 55.84551,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1988,
        "litreacy": 54.84007,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1987,
        "litreacy": 53.72572,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1986,
        "litreacy": 52.89378,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1985,
        "litreacy": 51.93806,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1984,
        "litreacy": 50.90994,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1983,
        "litreacy": 50.03418,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1982,
        "litreacy": 49.24596,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1981,
        "litreacy": 48.42226,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1980,
        "litreacy": 47.65529,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1979,
        "litreacy": 46.88817,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1978,
        "litreacy": 46.21684,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1977,
        "litreacy": 45.55852,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1976,
        "litreacy": 45.01565,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1975,
        "litreacy": 44.48717,
        "gdp_percapita": null
    },
    {
        "country": "Middle East and North Africa (WB)",
        "code": null,
        "year": 1974,
        "litreacy": 43.99972,
        "gdp_percapita": null
    },
    {
        "country": "Middle East & North Africa (excluding high income)",
        "code": null,
        "year": 2010,
        "litreacy": 78.43881,
        "gdp_percapita": null
    },
    {
        "country": "Middle East & North Africa (excluding high income)",
        "code": null,
        "year": 2000,
        "litreacy": 68.023575,
        "gdp_percapita": null
    },
    {
        "country": "Middle East & North Africa (excluding high income)",
        "code": null,
        "year": 1990,
        "litreacy": 56.03943,
        "gdp_percapita": null
    },
    {
        "country": "Middle East & North Africa (IDA & IBRD)",
        "code": null,
        "year": 2010,
        "litreacy": 78.23286,
        "gdp_percapita": null
    },
    {
        "country": "Middle East & North Africa (IDA & IBRD)",
        "code": null,
        "year": 2000,
        "litreacy": 67.76973,
        "gdp_percapita": null
    },
    {
        "country": "Middle East & North Africa (IDA & IBRD)",
        "code": null,
        "year": 1990,
        "litreacy": 55.75025,
        "gdp_percapita": null
    },
    {
        "country": "Middle East & North Africa",
        "code": null,
        "year": 2010,
        "litreacy": 80.750015,
        "gdp_percapita": null
    },
    {
        "country": "Middle East & North Africa",
        "code": null,
        "year": 2000,
        "litreacy": 70.40315,
        "gdp_percapita": null
    },
    {
        "country": "Middle East & North Africa",
        "code": null,
        "year": 1990,
        "litreacy": 58.496243,
        "gdp_percapita": null
    },
    {
        "country": "Micronesia",
        "code": null,
        "year": 1980,
        "litreacy": 89,
        "gdp_percapita": null
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2020,
        "litreacy": 95.24785,
        "gdp_percapita": 18327.99
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2018,
        "litreacy": 95.37991,
        "gdp_percapita": 20278.217
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2017,
        "litreacy": 94.97278,
        "gdp_percapita": 20032.408
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2016,
        "litreacy": 94.85962,
        "gdp_percapita": 19830.963
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2015,
        "litreacy": 94.47228,
        "gdp_percapita": 19542.89
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2014,
        "litreacy": 94.55588,
        "gdp_percapita": 19141.92
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2013,
        "litreacy": 93.96285,
        "gdp_percapita": 18844.031
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2012,
        "litreacy": 94.2284,
        "gdp_percapita": 18838.783
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2011,
        "litreacy": 93.51998,
        "gdp_percapita": 18432.37
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2010,
        "litreacy": 93.06894,
        "gdp_percapita": 18036.717
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2009,
        "litreacy": 93.44188,
        "gdp_percapita": 17387.662
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2008,
        "litreacy": 92.9256,
        "gdp_percapita": 18586.47
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2007,
        "litreacy": 92.79517,
        "gdp_percapita": 18610.73
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2006,
        "litreacy": 91.73452,
        "gdp_percapita": 18434.887
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2005,
        "litreacy": 91.63027,
        "gdp_percapita": 17883.535
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2004,
        "litreacy": 90.95374,
        "gdp_percapita": 17731.803
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2002,
        "litreacy": 90.27465,
        "gdp_percapita": 17324.354
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 2000,
        "litreacy": 90.53562,
        "gdp_percapita": 17942.781
    },
    {
        "country": "Mexico",
        "code": "MX",
        "year": 1990,
        "litreacy": 87.55615,
        "gdp_percapita": 15355.628
    },
    {
        "country": "Mexico",
        "code": null,
        "year": 1980,
        "litreacy": 82.98924,
        "gdp_percapita": null
    },
    {
        "country": "Mexico",
        "code": null,
        "year": 1979,
        "litreacy": 82,
        "gdp_percapita": null
    },
    {
        "country": "Mexico",
        "code": null,
        "year": 1970,
        "litreacy": 75,
        "gdp_percapita": null
    },
    {
        "country": "Mexico",
        "code": null,
        "year": 1960,
        "litreacy": 65,
        "gdp_percapita": null
    },
    {
        "country": "Mexico",
        "code": null,
        "year": 1950,
        "litreacy": 60,
        "gdp_percapita": null
    },
    {
        "country": "Mexico",
        "code": null,
        "year": 1940,
        "litreacy": 46,
        "gdp_percapita": null
    },
    {
        "country": "Mexico",
        "code": null,
        "year": 1930,
        "litreacy": 36,
        "gdp_percapita": null
    },
    {
        "country": "Mexico",
        "code": null,
        "year": 1920,
        "litreacy": 35,
        "gdp_percapita": null
    },
    {
        "country": "Mexico",
        "code": null,
        "year": 1910,
        "litreacy": 30,
        "gdp_percapita": null
    },
    {
        "country": "Mexico",
        "code": null,
        "year": 1900,
        "litreacy": 24,
        "gdp_percapita": null
    },
    {
        "country": "Mauritius",
        "code": "MU",
        "year": 2021,
        "litreacy": 92.15,
        "gdp_percapita": 20967.947
    },
    {
        "country": "Mauritius",
        "code": "MU",
        "year": 2016,
        "litreacy": 93.15784,
        "gdp_percapita": 21328.688
    },
    {
        "country": "Mauritius",
        "code": "MU",
        "year": 2015,
        "litreacy": 92.7076,
        "gdp_percapita": 20549.629
    },
    {
        "country": "Mauritius",
        "code": "MU",
        "year": 2014,
        "litreacy": 92.47476,
        "gdp_percapita": 19844.488
    },
    {
        "country": "Mauritius",
        "code": "MU",
        "year": 2013,
        "litreacy": 91.49003,
        "gdp_percapita": 19147.676
    },
    {
        "country": "Mauritius",
        "code": "MU",
        "year": 2012,
        "litreacy": 91.76601,
        "gdp_percapita": 18566.03
    },
    {
        "country": "Mauritius",
        "code": "MU",
        "year": 2011,
        "litreacy": 89.24984,
        "gdp_percapita": 17988.684
    },
    {
        "country": "Mauritius",
        "code": "MU",
        "year": 2000,
        "litreacy": 84.30309,
        "gdp_percapita": 12254.295
    },
    {
        "country": "Mauritius",
        "code": "MU",
        "year": 1990,
        "litreacy": 79.86866,
        "gdp_percapita": 8233.912
    },
    {
        "country": "Mauritania",
        "code": "MR",
        "year": 2021,
        "litreacy": 66.96,
        "gdp_percapita": 5307.522
    },
    {
        "country": "Mauritania",
        "code": "MR",
        "year": 2015,
        "litreacy": 52.12356,
        "gdp_percapita": 5151.9
    },
    {
        "country": "Mauritania",
        "code": "MR",
        "year": 2013,
        "litreacy": 62.06875,
        "gdp_percapita": 4943.233
    },
    {
        "country": "Mauritania",
        "code": "MR",
        "year": 2007,
        "litreacy": 45.50378,
        "gdp_percapita": 5055.988
    },
    {
        "country": "Mauritania",
        "code": "MR",
        "year": 2000,
        "litreacy": 51.20768,
        "gdp_percapita": 4170.9014
    },
    {
        "country": "Marshall Islands",
        "code": "MH",
        "year": 2015,
        "litreacy": 98.26508,
        "gdp_percapita": 4195.8345
    },
    {
        "country": "Marshall Islands",
        "code": "MH",
        "year": 2011,
        "litreacy": 98.26508,
        "gdp_percapita": 3787.6545
    },
    {
        "country": "Malta",
        "code": "MT",
        "year": 2021,
        "litreacy": 94.94,
        "gdp_percapita": 44658.72
    },
    {
        "country": "Malta",
        "code": "MT",
        "year": 2015,
        "litreacy": 94.06661,
        "gdp_percapita": 39903.938
    },
    {
        "country": "Malta",
        "code": "MT",
        "year": 2011,
        "litreacy": 93.30736,
        "gdp_percapita": 32930.297
    },
    {
        "country": "Malta",
        "code": "MT",
        "year": 2005,
        "litreacy": 92.36309,
        "gdp_percapita": 29035.654
    },
    {
        "country": "Malta",
        "code": "MT",
        "year": 1995,
        "litreacy": 87.8687,
        "gdp_percapita": 19766.203
    },
    {
        "country": "Malta",
        "code": null,
        "year": 1985,
        "litreacy": 86.92984,
        "gdp_percapita": null
    },
    {
        "country": "Mali",
        "code": "ML",
        "year": 2020,
        "litreacy": 30.76141,
        "gdp_percapita": 2123.8281
    },
    {
        "country": "Mali",
        "code": "ML",
        "year": 2018,
        "litreacy": 35.47377,
        "gdp_percapita": 2185.5757
    },
    {
        "country": "Mali",
        "code": "ML",
        "year": 2015,
        "litreacy": 33.06889,
        "gdp_percapita": 2060.0986
    },
    {
        "country": "Mali",
        "code": "ML",
        "year": 2011,
        "litreacy": 30.61867,
        "gdp_percapita": 2017.1442
    },
    {
        "country": "Mali",
        "code": "ML",
        "year": 2010,
        "litreacy": 31.09975,
        "gdp_percapita": 2018.6014
    },
    {
        "country": "Mali",
        "code": "ML",
        "year": 2006,
        "litreacy": 26.17655,
        "gdp_percapita": 1922.5261
    },
    {
        "country": "Mali",
        "code": "ML",
        "year": 2003,
        "litreacy": 24,
        "gdp_percapita": 1873.9889
    },
    {
        "country": "Mali",
        "code": "ML",
        "year": 1998,
        "litreacy": 19.04497,
        "gdp_percapita": 1588.1725
    },
    {
        "country": "Mali",
        "code": null,
        "year": 1976,
        "litreacy": 9.43381,
        "gdp_percapita": null
    },
    {
        "country": "Maldives",
        "code": "MV",
        "year": 2021,
        "litreacy": 97.86,
        "gdp_percapita": 18765.217
    },
    {
        "country": "Maldives",
        "code": "MV",
        "year": 2016,
        "litreacy": 97.73495,
        "gdp_percapita": 18406.268
    },
    {
        "country": "Maldives",
        "code": "MV",
        "year": 2015,
        "litreacy": 99.32102,
        "gdp_percapita": 18051.07
    },
    {
        "country": "Maldives",
        "code": "MV",
        "year": 2014,
        "litreacy": 98.61012,
        "gdp_percapita": 18338.322
    },
    {
        "country": "Maldives",
        "code": "MV",
        "year": 2006,
        "litreacy": 98.3979,
        "gdp_percapita": 16162.282
    },
    {
        "country": "Maldives",
        "code": "MV",
        "year": 2000,
        "litreacy": 96.3265,
        "gdp_percapita": 13210.965
    },
    {
        "country": "Maldives",
        "code": "MV",
        "year": 1995,
        "litreacy": 96.3265,
        "gdp_percapita": 10430.789
    },
    {
        "country": "Maldives",
        "code": null,
        "year": 1990,
        "litreacy": 96.01826,
        "gdp_percapita": null
    },
    {
        "country": "Maldives",
        "code": null,
        "year": 1985,
        "litreacy": 92.23005,
        "gdp_percapita": null
    },
    {
        "country": "Maldives",
        "code": null,
        "year": 1977,
        "litreacy": 82.29996,
        "gdp_percapita": null
    },
    {
        "country": "Malaysia",
        "code": "MY",
        "year": 2015,
        "litreacy": 94.63699,
        "gdp_percapita": 24151.26
    },
    {
        "country": "Malaysia",
        "code": "MY",
        "year": 2010,
        "litreacy": 93.11789,
        "gdp_percapita": 20171.88
    },
    {
        "country": "Malaysia",
        "code": "MY",
        "year": 2000,
        "litreacy": 88.68776,
        "gdp_percapita": 16089.861
    },
    {
        "country": "Malaysia",
        "code": "MY",
        "year": 1991,
        "litreacy": 82.91537,
        "gdp_percapita": 11297.592
    },
    {
        "country": "Malaysia",
        "code": null,
        "year": 1980,
        "litreacy": 69.51633,
        "gdp_percapita": null
    },
    {
        "country": "Malawi",
        "code": null,
        "year": 2022,
        "litreacy": 68.08,
        "gdp_percapita": null
    },
    {
        "country": "Malawi",
        "code": "MW",
        "year": 2015,
        "litreacy": 62.14354,
        "gdp_percapita": 1440.8423
    },
    {
        "country": "Malawi",
        "code": "MW",
        "year": 2014,
        "litreacy": 65.14537,
        "gdp_percapita": 1440.8076
    },
    {
        "country": "Malawi",
        "code": "MW",
        "year": 2010,
        "litreacy": 61.30972,
        "gdp_percapita": 1357.8717
    },
    {
        "country": "Malawi",
        "code": "MW",
        "year": 1998,
        "litreacy": 64.13425,
        "gdp_percapita": 1118.7153
    },
    {
        "country": "Malawi",
        "code": null,
        "year": 1987,
        "litreacy": 48.53665,
        "gdp_percapita": null
    },
    {
        "country": "Madagascar",
        "code": null,
        "year": 2022,
        "litreacy": 77.48,
        "gdp_percapita": null
    },
    {
        "country": "Madagascar",
        "code": "MG",
        "year": 2018,
        "litreacy": 76.67968,
        "gdp_percapita": 1557.3225
    },
    {
        "country": "Madagascar",
        "code": "MG",
        "year": 2015,
        "litreacy": 64.6563,
        "gdp_percapita": 1508.3744
    },
    {
        "country": "Madagascar",
        "code": "MG",
        "year": 2012,
        "litreacy": 71.57262,
        "gdp_percapita": 1497.0095
    },
    {
        "country": "Madagascar",
        "code": "MG",
        "year": 2009,
        "litreacy": 64.48091,
        "gdp_percapita": 1546.3707
    },
    {
        "country": "Madagascar",
        "code": "MG",
        "year": 2005,
        "litreacy": 58.93594,
        "gdp_percapita": 1522.0697
    },
    {
        "country": "Madagascar",
        "code": "MG",
        "year": 2000,
        "litreacy": 70.68617,
        "gdp_percapita": 1569.6213
    },
    {
        "country": "Macao",
        "code": "MO",
        "year": 2021,
        "litreacy": 97.11,
        "gdp_percapita": 64796.996
    },
    {
        "country": "Macao",
        "code": "MO",
        "year": 2016,
        "litreacy": 96.53849,
        "gdp_percapita": 113941.67
    },
    {
        "country": "Macao",
        "code": "MO",
        "year": 2015,
        "litreacy": 96.2276,
        "gdp_percapita": 116855.53
    },
    {
        "country": "Macao",
        "code": "MO",
        "year": 2011,
        "litreacy": 95.64004,
        "gdp_percapita": 135365.39
    },
    {
        "country": "Macao",
        "code": "MO",
        "year": 2006,
        "litreacy": 93.49975,
        "gdp_percapita": 84436.75
    },
    {
        "country": "Macao",
        "code": "MO",
        "year": 2001,
        "litreacy": 91.29537,
        "gdp_percapita": 51144.125
    },
    {
        "country": "Macao",
        "code": null,
        "year": 1981,
        "litreacy": 90.37818,
        "gdp_percapita": null
    },
    {
        "country": "Luxembourg",
        "code": "LU",
        "year": 2000,
        "litreacy": 100,
        "gdp_percapita": 99301.52
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2022,
        "litreacy": 77.79563,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2021,
        "litreacy": 77.25923,
        "gdp_percapita": 7241.6
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2020,
        "litreacy": 76.69681,
        "gdp_percapita": 6930.9463
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2019,
        "litreacy": 76.15857,
        "gdp_percapita": 7259.8174
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2018,
        "litreacy": 75.94947,
        "gdp_percapita": 7089.217
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2017,
        "litreacy": 75.37246,
        "gdp_percapita": 6842.9053
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2016,
        "litreacy": 74.70815,
        "gdp_percapita": 6592.078
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2015,
        "litreacy": 74.02703,
        "gdp_percapita": 6309.6113
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2014,
        "litreacy": 73.23756,
        "gdp_percapita": 6094.7383
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2013,
        "litreacy": 72.41251,
        "gdp_percapita": 5857.887
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2012,
        "litreacy": 71.84989,
        "gdp_percapita": 5667.2173
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2011,
        "litreacy": 71.01206,
        "gdp_percapita": 5510.2036
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2010,
        "litreacy": 70.93375,
        "gdp_percapita": 5340.054
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2009,
        "litreacy": 69.18902,
        "gdp_percapita": 5090.807
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2008,
        "litreacy": 68.38011,
        "gdp_percapita": 4955.5615
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2007,
        "litreacy": 67.74212,
        "gdp_percapita": 4835.246
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2006,
        "litreacy": 67.42352,
        "gdp_percapita": 4593.172
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2005,
        "litreacy": 67.13873,
        "gdp_percapita": 4379.3525
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2004,
        "litreacy": 67.48014,
        "gdp_percapita": 4194.615
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2003,
        "litreacy": 66.75361,
        "gdp_percapita": 3998.4084
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2002,
        "litreacy": 65.69058,
        "gdp_percapita": 3824.158
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2001,
        "litreacy": 64.92597,
        "gdp_percapita": 3718.913
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 2000,
        "litreacy": 64.36212,
        "gdp_percapita": 3633.8088
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1999,
        "litreacy": 64.18974,
        "gdp_percapita": 3541.9424
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1998,
        "litreacy": 63.48546,
        "gdp_percapita": 3454.1216
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1997,
        "litreacy": 60.26108,
        "gdp_percapita": 3473.2488
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1996,
        "litreacy": 59.54242,
        "gdp_percapita": 3420.6057
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1995,
        "litreacy": 58.78256,
        "gdp_percapita": 3301.3787
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1994,
        "litreacy": 57.99136,
        "gdp_percapita": 3223.754
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1993,
        "litreacy": 57.25194,
        "gdp_percapita": 3232.1423
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1992,
        "litreacy": 56.43855,
        "gdp_percapita": 3267.715
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1991,
        "litreacy": 55.46039,
        "gdp_percapita": 3255.5522
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1990,
        "litreacy": 54.91134,
        "gdp_percapita": 3264.8643
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1989,
        "litreacy": 54.04309,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1988,
        "litreacy": 53.31907,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1987,
        "litreacy": 52.62234,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1986,
        "litreacy": 51.76948,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1985,
        "litreacy": 51.23839,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1984,
        "litreacy": 50.62377,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1983,
        "litreacy": 50.02004,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1982,
        "litreacy": 49.45058,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1981,
        "litreacy": 48.55208,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1980,
        "litreacy": 48.36388,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1979,
        "litreacy": 47.81219,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1978,
        "litreacy": 47.29462,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1977,
        "litreacy": 46.74835,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1976,
        "litreacy": 46.21935,
        "gdp_percapita": null
    },
    {
        "country": "Lower-middle-income countries",
        "code": null,
        "year": 1975,
        "litreacy": 46.08655,
        "gdp_percapita": null
    },
    {
        "country": "Lower middle income",
        "code": null,
        "year": 2010,
        "litreacy": 73.91008,
        "gdp_percapita": null
    },
    {
        "country": "Lower middle income",
        "code": null,
        "year": 2000,
        "litreacy": 67.3316,
        "gdp_percapita": null
    },
    {
        "country": "Lower middle income",
        "code": null,
        "year": 1990,
        "litreacy": 58.59612,
        "gdp_percapita": null
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2022,
        "litreacy": 61.87062,
        "gdp_percapita": null
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2021,
        "litreacy": 61.66338,
        "gdp_percapita": 1956.767
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2020,
        "litreacy": 61.18985,
        "gdp_percapita": 1970.1681
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2019,
        "litreacy": 61.11123,
        "gdp_percapita": 2011.7366
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2018,
        "litreacy": 60.92019,
        "gdp_percapita": 1983.573
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2017,
        "litreacy": 61.12589,
        "gdp_percapita": 1962.8817
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2016,
        "litreacy": 60.10976,
        "gdp_percapita": 1932.5286
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2015,
        "litreacy": 59.36031,
        "gdp_percapita": 1893.4667
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2014,
        "litreacy": 58.89173,
        "gdp_percapita": 1855.1362
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2013,
        "litreacy": 58.55048,
        "gdp_percapita": 1792.8123
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2012,
        "litreacy": 57.59889,
        "gdp_percapita": 1746.1747
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2011,
        "litreacy": 57.13771,
        "gdp_percapita": 1775.3773
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2010,
        "litreacy": 55.08571,
        "gdp_percapita": 1761.7999
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2009,
        "litreacy": 54.65457,
        "gdp_percapita": 1690.799
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2008,
        "litreacy": 54.1951,
        "gdp_percapita": 1676.5333
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2007,
        "litreacy": 53.35608,
        "gdp_percapita": 1625.898
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2006,
        "litreacy": 52.02352,
        "gdp_percapita": 1564.3977
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2005,
        "litreacy": 53.67301,
        "gdp_percapita": 1510.72
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2004,
        "litreacy": 54.50513,
        "gdp_percapita": 1455.2573
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2003,
        "litreacy": 53.04443,
        "gdp_percapita": 1408.3793
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2002,
        "litreacy": 52.86006,
        "gdp_percapita": 1380.8386
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2001,
        "litreacy": 52.20483,
        "gdp_percapita": 1365.7107
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 2000,
        "litreacy": 51.08766,
        "gdp_percapita": 1327.6184
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 1999,
        "litreacy": 50.95138,
        "gdp_percapita": 1322.4409
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 1998,
        "litreacy": 50.38674,
        "gdp_percapita": 1315.2963
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 1997,
        "litreacy": 49.68811,
        "gdp_percapita": 1315.3169
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 1996,
        "litreacy": 49.01804,
        "gdp_percapita": 1262.0284
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 1995,
        "litreacy": 48.68699,
        "gdp_percapita": 1230.2827
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 1994,
        "litreacy": 48.47019,
        "gdp_percapita": 1208.3854
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 1993,
        "litreacy": 48.05545,
        "gdp_percapita": 1249.2306
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 1992,
        "litreacy": 47.86018,
        "gdp_percapita": 1273.1597
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 1991,
        "litreacy": 47.67013,
        "gdp_percapita": 1332.4777
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 1990,
        "litreacy": 47.39702,
        "gdp_percapita": 1360.9995
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 1989,
        "litreacy": 46.91318,
        "gdp_percapita": null
    },
    {
        "country": "Low-income countries",
        "code": null,
        "year": 1988,
        "litreacy": 46.46776,
        "gdp_percapita": null
    },
    {
        "country": "Low income",
        "code": null,
        "year": 2010,
        "litreacy": 56.57406,
        "gdp_percapita": null
    },
    {
        "country": "Low income",
        "code": null,
        "year": 2000,
        "litreacy": 52.69497,
        "gdp_percapita": null
    },
    {
        "country": "Low income",
        "code": null,
        "year": 1990,
        "litreacy": 46.02458,
        "gdp_percapita": null
    },
    {
        "country": "Lithuania",
        "code": "LT",
        "year": 2021,
        "litreacy": 99.83,
        "gdp_percapita": 39305.613
    },
    {
        "country": "Lithuania",
        "code": "LT",
        "year": 2015,
        "litreacy": 99.82328,
        "gdp_percapita": 30748.197
    },
    {
        "country": "Lithuania",
        "code": "LT",
        "year": 2011,
        "litreacy": 99.8156,
        "gdp_percapita": 25968.584
    },
    {
        "country": "Lithuania",
        "code": "LT",
        "year": 2001,
        "litreacy": 99.64575,
        "gdp_percapita": 14872.379
    },
    {
        "country": "Lithuania",
        "code": null,
        "year": 1989,
        "litreacy": 98.44127,
        "gdp_percapita": null
    },
    {
        "country": "Liechtenstein",
        "code": null,
        "year": 2011,
        "litreacy": 100,
        "gdp_percapita": null
    },
    {
        "country": "Libya",
        "code": "LY",
        "year": 2015,
        "litreacy": 91.38887,
        "gdp_percapita": 19108.943
    },
    {
        "country": "Libya",
        "code": "LY",
        "year": 2014,
        "litreacy": 91.04144,
        "gdp_percapita": 19569.9
    },
    {
        "country": "Libya",
        "code": "LY",
        "year": 2004,
        "litreacy": 85.41682,
        "gdp_percapita": 28244.262
    },
    {
        "country": "Libya",
        "code": null,
        "year": 1994,
        "litreacy": 76.5,
        "gdp_percapita": null
    },
    {
        "country": "Libya",
        "code": null,
        "year": 1984,
        "litreacy": 60.16439,
        "gdp_percapita": null
    },
    {
        "country": "Liberia",
        "code": "LR",
        "year": 2017,
        "litreacy": 48.30136,
        "gdp_percapita": 1533.4113
    },
    {
        "country": "Liberia",
        "code": "LR",
        "year": 2015,
        "litreacy": 47.60014,
        "gdp_percapita": 1581.055
    },
    {
        "country": "Liberia",
        "code": "LR",
        "year": 2007,
        "litreacy": 42.94108,
        "gdp_percapita": 1311.4453
    },
    {
        "country": "Liberia",
        "code": "LR",
        "year": 2004,
        "litreacy": 43.10837,
        "gdp_percapita": 1224.5718
    },
    {
        "country": "Liberia",
        "code": null,
        "year": 1994,
        "litreacy": 42.66605,
        "gdp_percapita": null
    },
    {
        "country": "Liberia",
        "code": null,
        "year": 1984,
        "litreacy": 32.10677,
        "gdp_percapita": null
    },
    {
        "country": "Lesotho",
        "code": null,
        "year": 2022,
        "litreacy": 82.01,
        "gdp_percapita": null
    },
    {
        "country": "Lesotho",
        "code": "LS",
        "year": 2015,
        "litreacy": 79.36093,
        "gdp_percapita": 2625.637
    },
    {
        "country": "Lesotho",
        "code": "LS",
        "year": 2014,
        "litreacy": 76.6352,
        "gdp_percapita": 2574.2964
    },
    {
        "country": "Lesotho",
        "code": "LS",
        "year": 2009,
        "litreacy": 75.8002,
        "gdp_percapita": 2214.3115
    },
    {
        "country": "Lesotho",
        "code": "LS",
        "year": 2000,
        "litreacy": 86.25443,
        "gdp_percapita": 1714.2501
    },
    {
        "country": "Lebanon",
        "code": "LB",
        "year": 2019,
        "litreacy": 95.3,
        "gdp_percapita": 17172.197
    },
    {
        "country": "Lebanon",
        "code": "LB",
        "year": 2015,
        "litreacy": 94.0511,
        "gdp_percapita": 16611.72
    },
    {
        "country": "Lebanon",
        "code": "LB",
        "year": 2009,
        "litreacy": 91.18419,
        "gdp_percapita": 17979.258
    },
    {
        "country": "Lebanon",
        "code": "LB",
        "year": 2007,
        "litreacy": 89.61244,
        "gdp_percapita": 15394.186
    },
    {
        "country": "Least developed countries: UN classification",
        "code": null,
        "year": 2010,
        "litreacy": 60.568233,
        "gdp_percapita": null
    },
    {
        "country": "Least developed countries: UN classification",
        "code": null,
        "year": 2000,
        "litreacy": 53.4134,
        "gdp_percapita": null
    },
    {
        "country": "Least developed countries: UN classification",
        "code": null,
        "year": 1990,
        "litreacy": 45.830433,
        "gdp_percapita": null
    },
    {
        "country": "Latvia",
        "code": "LV",
        "year": 2021,
        "litreacy": 99.89,
        "gdp_percapita": 32081.455
    },
    {
        "country": "Latvia",
        "code": "LV",
        "year": 2015,
        "litreacy": 99.89269,
        "gdp_percapita": 26628.355
    },
    {
        "country": "Latvia",
        "code": "LV",
        "year": 2011,
        "litreacy": 99.8959,
        "gdp_percapita": 22117.406
    },
    {
        "country": "Latvia",
        "code": "LV",
        "year": 2000,
        "litreacy": 99.74657,
        "gdp_percapita": 12989.898
    },
    {
        "country": "Latvia",
        "code": null,
        "year": 1989,
        "litreacy": 99.4523,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2022,
        "litreacy": 94.60012,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2021,
        "litreacy": 94.45465,
        "gdp_percapita": 15774.807
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2020,
        "litreacy": 94.19925,
        "gdp_percapita": 14874.13
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2019,
        "litreacy": 94.17398,
        "gdp_percapita": 16065.147
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2018,
        "litreacy": 93.72667,
        "gdp_percapita": 16081.449
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2017,
        "litreacy": 93.59473,
        "gdp_percapita": 15950.886
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2016,
        "litreacy": 93.52842,
        "gdp_percapita": 15796.88
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2015,
        "litreacy": 93.05001,
        "gdp_percapita": 15944.908
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2014,
        "litreacy": 92.88939,
        "gdp_percapita": 15996.428
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2013,
        "litreacy": 92.44463,
        "gdp_percapita": 15913.826
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2012,
        "litreacy": 92.39838,
        "gdp_percapita": 15627.595
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2011,
        "litreacy": 92.15575,
        "gdp_percapita": 15385.636
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2010,
        "litreacy": 91.58735,
        "gdp_percapita": 14878.307
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2009,
        "litreacy": 91.59747,
        "gdp_percapita": 14121.613
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2008,
        "litreacy": 91.32739,
        "gdp_percapita": 14577.557
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2007,
        "litreacy": 91.07581,
        "gdp_percapita": 14214.385
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2006,
        "litreacy": 90.46458,
        "gdp_percapita": 13662.877
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2005,
        "litreacy": 90.51114,
        "gdp_percapita": 13162.012
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2004,
        "litreacy": 90.02801,
        "gdp_percapita": 12819.464
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2003,
        "litreacy": 90.08651,
        "gdp_percapita": 12309.544
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2002,
        "litreacy": 89.29534,
        "gdp_percapita": 12160.939
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2001,
        "litreacy": 89.14797,
        "gdp_percapita": 12258.018
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 2000,
        "litreacy": 88.956,
        "gdp_percapita": 12381.923
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1999,
        "litreacy": 88.70349,
        "gdp_percapita": 12132.274
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1998,
        "litreacy": 88.39904,
        "gdp_percapita": 12249.627
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1997,
        "litreacy": 88.04447,
        "gdp_percapita": 12110.276
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1996,
        "litreacy": 87.72445,
        "gdp_percapita": 11679.789
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1995,
        "litreacy": 87.40622,
        "gdp_percapita": 11406.419
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1994,
        "litreacy": 86.82307,
        "gdp_percapita": 11523.823
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1993,
        "litreacy": 86.24845,
        "gdp_percapita": 11122.613
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1992,
        "litreacy": 85.6456,
        "gdp_percapita": 10842.74
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1991,
        "litreacy": 85.06566,
        "gdp_percapita": 10730.466
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1990,
        "litreacy": 84.46313,
        "gdp_percapita": 10577.289
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1989,
        "litreacy": 84.14951,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1988,
        "litreacy": 83.70771,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1987,
        "litreacy": 83.21761,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1986,
        "litreacy": 82.92528,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1985,
        "litreacy": 82.5733,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1984,
        "litreacy": 82.2144,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1983,
        "litreacy": 81.84256,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1982,
        "litreacy": 81.44642,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1981,
        "litreacy": 81.06476,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1980,
        "litreacy": 80.63629,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1979,
        "litreacy": 80.32272,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1978,
        "litreacy": 79.92699,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1977,
        "litreacy": 79.48948,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1976,
        "litreacy": 79.08727,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1975,
        "litreacy": 78.73679,
        "gdp_percapita": null
    },
    {
        "country": "Latin America and Caribbean (WB)",
        "code": null,
        "year": 1974,
        "litreacy": 78.71795,
        "gdp_percapita": null
    },
    {
        "country": "Latin America & Caribbean (excluding high income)",
        "code": null,
        "year": 2010,
        "litreacy": 92.44799,
        "gdp_percapita": null
    },
    {
        "country": "Latin America & Caribbean (excluding high income)",
        "code": null,
        "year": 2000,
        "litreacy": 89.45039,
        "gdp_percapita": null
    },
    {
        "country": "Latin America & Caribbean (excluding high income)",
        "code": null,
        "year": 1990,
        "litreacy": 87.10164,
        "gdp_percapita": null
    },
    {
        "country": "Latin America & Caribbean (IDA & IBRD)",
        "code": null,
        "year": 2010,
        "litreacy": 92.4664,
        "gdp_percapita": null
    },
    {
        "country": "Latin America & Caribbean (IDA & IBRD)",
        "code": null,
        "year": 2000,
        "litreacy": 89.47367,
        "gdp_percapita": null
    },
    {
        "country": "Latin America & Caribbean (IDA & IBRD)",
        "code": null,
        "year": 1990,
        "litreacy": 87.06507,
        "gdp_percapita": null
    },
    {
        "country": "Latin America & Caribbean",
        "code": null,
        "year": 2010,
        "litreacy": 92.62431,
        "gdp_percapita": null
    },
    {
        "country": "Latin America & Caribbean",
        "code": null,
        "year": 2000,
        "litreacy": 89.73644,
        "gdp_percapita": null
    },
    {
        "country": "Latin America & Caribbean",
        "code": null,
        "year": 1990,
        "litreacy": 87.46383,
        "gdp_percapita": null
    },
    {
        "country": "Late-demographic dividend",
        "code": null,
        "year": 2010,
        "litreacy": 94.78494,
        "gdp_percapita": null
    },
    {
        "country": "Late-demographic dividend",
        "code": null,
        "year": 2000,
        "litreacy": 91.466995,
        "gdp_percapita": null
    },
    {
        "country": "Late-demographic dividend",
        "code": null,
        "year": 1990,
        "litreacy": 82.47946,
        "gdp_percapita": null
    },
    {
        "country": "Laos",
        "code": null,
        "year": 2022,
        "litreacy": 87.52,
        "gdp_percapita": null
    },
    {
        "country": "Laos",
        "code": null,
        "year": 2015,
        "litreacy": 84.66104,
        "gdp_percapita": 6499.0728
    },
    {
        "country": "Laos",
        "code": null,
        "year": 2011,
        "litreacy": 58.28794,
        "gdp_percapita": 5103.549
    },
    {
        "country": "Laos",
        "code": null,
        "year": 2005,
        "litreacy": 72.70226,
        "gdp_percapita": 3522.2878
    },
    {
        "country": "Laos",
        "code": null,
        "year": 2001,
        "litreacy": 68.73439,
        "gdp_percapita": 2918.3872
    },
    {
        "country": "Laos",
        "code": null,
        "year": 2000,
        "litreacy": 69.58312,
        "gdp_percapita": 2804.8184
    },
    {
        "country": "Laos",
        "code": null,
        "year": 1995,
        "litreacy": 60.25133,
        "gdp_percapita": 2291.8745
    },
    {
        "country": "Kyrgyzstan",
        "code": "KG",
        "year": 2019,
        "litreacy": 99.6,
        "gdp_percapita": 5258.3667
    },
    {
        "country": "Kyrgyzstan",
        "code": "KG",
        "year": 2015,
        "litreacy": 99.50132,
        "gdp_percapita": 4805.141
    },
    {
        "country": "Kyrgyzstan",
        "code": "KG",
        "year": 2009,
        "litreacy": 99.24343,
        "gdp_percapita": 4210.6265
    },
    {
        "country": "Kyrgyzstan",
        "code": "KG",
        "year": 1999,
        "litreacy": 98.70161,
        "gdp_percapita": 2954.954
    },
    {
        "country": "Kuwait",
        "code": "KW",
        "year": 2020,
        "litreacy": 96.45754,
        "gdp_percapita": 43922.63
    },
    {
        "country": "Kuwait",
        "code": "KW",
        "year": 2018,
        "litreacy": 96.05647,
        "gdp_percapita": 48943.008
    },
    {
        "country": "Kuwait",
        "code": "KW",
        "year": 2017,
        "litreacy": 96.03595,
        "gdp_percapita": 50007.3
    },
    {
        "country": "Kuwait",
        "code": "KW",
        "year": 2015,
        "litreacy": 95.68545,
        "gdp_percapita": 53808.125
    },
    {
        "country": "Kuwait",
        "code": "KW",
        "year": 2013,
        "litreacy": 95.58582,
        "gdp_percapita": 57051.742
    },
    {
        "country": "Kuwait",
        "code": "KW",
        "year": 2012,
        "litreacy": 95.51317,
        "gdp_percapita": 60588.156
    },
    {
        "country": "Kuwait",
        "code": "KW",
        "year": 2010,
        "litreacy": 94.46901,
        "gdp_percapita": 59780.03
    },
    {
        "country": "Kuwait",
        "code": "KW",
        "year": 2008,
        "litreacy": 93.8983,
        "gdp_percapita": 73162.9
    },
    {
        "country": "Kuwait",
        "code": "KW",
        "year": 2007,
        "litreacy": 93.66419,
        "gdp_percapita": 75498.23
    },
    {
        "country": "Kuwait",
        "code": "KW",
        "year": 2006,
        "litreacy": 93.28212,
        "gdp_percapita": 75551.11
    },
    {
        "country": "Kuwait",
        "code": "KW",
        "year": 2005,
        "litreacy": 93.27446,
        "gdp_percapita": 74294.34
    },
    {
        "country": "Kuwait",
        "code": "KW",
        "year": 1995,
        "litreacy": 78.3955,
        "gdp_percapita": 61826.117
    },
    {
        "country": "Kuwait",
        "code": null,
        "year": 1985,
        "litreacy": 74.49087,
        "gdp_percapita": null
    },
    {
        "country": "Kuwait",
        "code": null,
        "year": 1980,
        "litreacy": 67.51766,
        "gdp_percapita": null
    },
    {
        "country": "Kuwait",
        "code": null,
        "year": 1975,
        "litreacy": 59.56439,
        "gdp_percapita": null
    },
    {
        "country": "Kosovo",
        "code": null,
        "year": 2007,
        "litreacy": 91.9,
        "gdp_percapita": null
    },
    {
        "country": "Kenya",
        "code": null,
        "year": 2022,
        "litreacy": 82.88,
        "gdp_percapita": null
    },
    {
        "country": "Kenya",
        "code": "KE",
        "year": 2015,
        "litreacy": 78.0234,
        "gdp_percapita": 4163.925
    },
    {
        "country": "Kenya",
        "code": "KE",
        "year": 2014,
        "litreacy": 78.73304,
        "gdp_percapita": 4055.1133
    },
    {
        "country": "Kenya",
        "code": "KE",
        "year": 2007,
        "litreacy": 72.15703,
        "gdp_percapita": 3644.335
    },
    {
        "country": "Kenya",
        "code": "KE",
        "year": 2000,
        "litreacy": 82.22908,
        "gdp_percapita": 3303.3264
    },
    {
        "country": "Kazakhstan",
        "code": "KZ",
        "year": 2020,
        "litreacy": 99.8,
        "gdp_percapita": 25361.508
    },
    {
        "country": "Kazakhstan",
        "code": "KZ",
        "year": 2015,
        "litreacy": 99.78785,
        "gdp_percapita": 24290.418
    },
    {
        "country": "Kazakhstan",
        "code": "KZ",
        "year": 2010,
        "litreacy": 99.78163,
        "gdp_percapita": 20751.258
    },
    {
        "country": "Kazakhstan",
        "code": "KZ",
        "year": 2009,
        "litreacy": 99.73241,
        "gdp_percapita": 19614.734
    },
    {
        "country": "Kazakhstan",
        "code": "KZ",
        "year": 1999,
        "litreacy": 99.51266,
        "gdp_percapita": 9330.564
    },
    {
        "country": "Kazakhstan",
        "code": null,
        "year": 1989,
        "litreacy": 97.52938,
        "gdp_percapita": null
    },
    {
        "country": "Jordan",
        "code": "JO",
        "year": 2021,
        "litreacy": 98.42,
        "gdp_percapita": 9223.147
    },
    {
        "country": "Jordan",
        "code": "JO",
        "year": 2015,
        "litreacy": 98.01435,
        "gdp_percapita": 9912.713
    },
    {
        "country": "Jordan",
        "code": "JO",
        "year": 2012,
        "litreacy": 97.89032,
        "gdp_percapita": 12001.99
    },
    {
        "country": "Jordan",
        "code": "JO",
        "year": 2011,
        "litreacy": 95.90445,
        "gdp_percapita": 11885.238
    },
    {
        "country": "Jordan",
        "code": "JO",
        "year": 2010,
        "litreacy": 92.55104,
        "gdp_percapita": 11866.881
    },
    {
        "country": "Jordan",
        "code": "JO",
        "year": 2007,
        "litreacy": 92.19958,
        "gdp_percapita": 11028.3125
    },
    {
        "country": "Jordan",
        "code": "JO",
        "year": 2005,
        "litreacy": 91.13075,
        "gdp_percapita": 10751.771
    },
    {
        "country": "Jordan",
        "code": "JO",
        "year": 2003,
        "litreacy": 89.89232,
        "gdp_percapita": 9636.589
    },
    {
        "country": "Jordan",
        "code": null,
        "year": 1979,
        "litreacy": 66.79681,
        "gdp_percapita": null
    },
    {
        "country": "Japan",
        "code": "JP",
        "year": 2002,
        "litreacy": 99,
        "gdp_percapita": 36306.332
    },
    {
        "country": "Jamaica",
        "code": "JM",
        "year": 2015,
        "litreacy": 88.4999,
        "gdp_percapita": 9800.507
    },
    {
        "country": "Jamaica",
        "code": "JM",
        "year": 2014,
        "litreacy": 88.13225,
        "gdp_percapita": 9745.554
    },
    {
        "country": "Jamaica",
        "code": "JM",
        "year": 1999,
        "litreacy": 79.92012,
        "gdp_percapita": 9471.599
    },
    {
        "country": "Italy",
        "code": "IT",
        "year": 2019,
        "litreacy": 99.3491,
        "gdp_percapita": 42739.05
    },
    {
        "country": "Italy",
        "code": "IT",
        "year": 2015,
        "litreacy": 99.01579,
        "gdp_percapita": 40247.83
    },
    {
        "country": "Italy",
        "code": "IT",
        "year": 2011,
        "litreacy": 98.84828,
        "gdp_percapita": 42892.305
    },
    {
        "country": "Italy",
        "code": "IT",
        "year": 2001,
        "litreacy": 98.41662,
        "gdp_percapita": 43869.43
    },
    {
        "country": "Italy",
        "code": null,
        "year": 1981,
        "litreacy": 96.46054,
        "gdp_percapita": null
    },
    {
        "country": "Italy",
        "code": null,
        "year": 1870,
        "litreacy": 32,
        "gdp_percapita": null
    },
    {
        "country": "Italy",
        "code": null,
        "year": 1820,
        "litreacy": 22,
        "gdp_percapita": null
    },
    {
        "country": "Italy",
        "code": null,
        "year": 1750,
        "litreacy": 23,
        "gdp_percapita": null
    },
    {
        "country": "Italy",
        "code": null,
        "year": 1650,
        "litreacy": 23,
        "gdp_percapita": null
    },
    {
        "country": "Italy",
        "code": null,
        "year": 1550,
        "litreacy": 18,
        "gdp_percapita": null
    },
    {
        "country": "Italy",
        "code": null,
        "year": 1475,
        "litreacy": 15,
        "gdp_percapita": null
    },
    {
        "country": "Israel",
        "code": "IL",
        "year": 2004,
        "litreacy": 97.1,
        "gdp_percapita": 29724.146
    },
    {
        "country": "Israel",
        "code": null,
        "year": 1983,
        "litreacy": 91.75141,
        "gdp_percapita": null
    },
    {
        "country": "Ireland",
        "code": "IE",
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": 53049.168
    },
    {
        "country": "Ireland",
        "code": null,
        "year": 1750,
        "litreacy": 21,
        "gdp_percapita": null
    },
    {
        "country": "Ireland",
        "code": null,
        "year": 1650,
        "litreacy": 3,
        "gdp_percapita": null
    },
    {
        "country": "Ireland",
        "code": null,
        "year": 1550,
        "litreacy": 0,
        "gdp_percapita": null
    },
    {
        "country": "Ireland",
        "code": null,
        "year": 1475,
        "litreacy": 0,
        "gdp_percapita": null
    },
    {
        "country": "Iraq",
        "code": "IQ",
        "year": 2017,
        "litreacy": 85.6,
        "gdp_percapita": 9976.8545
    },
    {
        "country": "Iraq",
        "code": "IQ",
        "year": 2016,
        "litreacy": 83.3,
        "gdp_percapita": 10404.204
    },
    {
        "country": "Iraq",
        "code": "IQ",
        "year": 2015,
        "litreacy": 79.72176,
        "gdp_percapita": 9371.214
    },
    {
        "country": "Iraq",
        "code": "IQ",
        "year": 2014,
        "litreacy": 82.2,
        "gdp_percapita": 9194.864
    },
    {
        "country": "Iraq",
        "code": "IQ",
        "year": 2012,
        "litreacy": 77.2,
        "gdp_percapita": 9251.982
    },
    {
        "country": "Iraq",
        "code": "IQ",
        "year": 2000,
        "litreacy": 74.0522,
        "gdp_percapita": 8779.793
    },
    {
        "country": "Iran",
        "code": null,
        "year": 2022,
        "litreacy": 88.96,
        "gdp_percapita": null
    },
    {
        "country": "Iran",
        "code": null,
        "year": 2016,
        "litreacy": 85.54425,
        "gdp_percapita": 14968.595
    },
    {
        "country": "Iran",
        "code": null,
        "year": 2015,
        "litreacy": 87.17253,
        "gdp_percapita": 14010.858
    },
    {
        "country": "Iran",
        "code": null,
        "year": 2014,
        "litreacy": 84.70524,
        "gdp_percapita": 14538.521
    },
    {
        "country": "Iran",
        "code": null,
        "year": 2013,
        "litreacy": 84.6268,
        "gdp_percapita": 14113.458
    },
    {
        "country": "Iran",
        "code": null,
        "year": 2012,
        "litreacy": 83.62599,
        "gdp_percapita": 14541.85
    },
    {
        "country": "Iran",
        "code": null,
        "year": 2008,
        "litreacy": 82.9623,
        "gdp_percapita": 14525.76
    },
    {
        "country": "Iran",
        "code": null,
        "year": 2006,
        "litreacy": 82.33132,
        "gdp_percapita": 13780.728
    },
    {
        "country": "Iran",
        "code": null,
        "year": 2005,
        "litreacy": 82.4412,
        "gdp_percapita": 13328.956
    },
    {
        "country": "Iran",
        "code": null,
        "year": 2002,
        "litreacy": 77,
        "gdp_percapita": 11878.862
    },
    {
        "country": "Iran",
        "code": null,
        "year": 1996,
        "litreacy": 73.06025,
        "gdp_percapita": 10503.593
    },
    {
        "country": "Iran",
        "code": null,
        "year": 1991,
        "litreacy": 65.5314,
        "gdp_percapita": 10239.682
    },
    {
        "country": "Iran",
        "code": null,
        "year": 1986,
        "litreacy": 52.31976,
        "gdp_percapita": null
    },
    {
        "country": "Iran",
        "code": null,
        "year": 1976,
        "litreacy": 36.5184,
        "gdp_percapita": null
    },
    {
        "country": "Indonesia",
        "code": "ID",
        "year": 2020,
        "litreacy": 95.99901,
        "gdp_percapita": 11515.74
    },
    {
        "country": "Indonesia",
        "code": "ID",
        "year": 2018,
        "litreacy": 95.65856,
        "gdp_percapita": 11397.432
    },
    {
        "country": "Indonesia",
        "code": "ID",
        "year": 2016,
        "litreacy": 95.37697,
        "gdp_percapita": 10519.295
    },
    {
        "country": "Indonesia",
        "code": "ID",
        "year": 2015,
        "litreacy": 95.21793,
        "gdp_percapita": 10121.841
    },
    {
        "country": "Indonesia",
        "code": "ID",
        "year": 2014,
        "litreacy": 95.11622,
        "gdp_percapita": 9759.025
    },
    {
        "country": "Indonesia",
        "code": "ID",
        "year": 2011,
        "litreacy": 92.81191,
        "gdp_percapita": 8610.529
    },
    {
        "country": "Indonesia",
        "code": "ID",
        "year": 2009,
        "litreacy": 92.5817,
        "gdp_percapita": 7828.809
    },
    {
        "country": "Indonesia",
        "code": "ID",
        "year": 2008,
        "litreacy": 92.1923,
        "gdp_percapita": 7578.205
    },
    {
        "country": "Indonesia",
        "code": "ID",
        "year": 2006,
        "litreacy": 91.98227,
        "gdp_percapita": 6899.851
    },
    {
        "country": "Indonesia",
        "code": "ID",
        "year": 2004,
        "litreacy": 90.38479,
        "gdp_percapita": 6348.2944
    },
    {
        "country": "Indonesia",
        "code": "ID",
        "year": 1990,
        "litreacy": 81.51985,
        "gdp_percapita": 4519.7227
    },
    {
        "country": "Indonesia",
        "code": null,
        "year": 1980,
        "litreacy": 67.31267,
        "gdp_percapita": null
    },
    {
        "country": "India",
        "code": null,
        "year": 2022,
        "litreacy": 76.32278,
        "gdp_percapita": null
    },
    {
        "country": "India",
        "code": "IN",
        "year": 2015,
        "litreacy": 72.2253,
        "gdp_percapita": 5411.8755
    },
    {
        "country": "India",
        "code": "IN",
        "year": 2011,
        "litreacy": 69.30256,
        "gdp_percapita": 4374.2324
    },
    {
        "country": "India",
        "code": "IN",
        "year": 2006,
        "litreacy": 62.75447,
        "gdp_percapita": 3432.8193
    },
    {
        "country": "India",
        "code": "IN",
        "year": 2001,
        "litreacy": 61.01456,
        "gdp_percapita": 2646.8782
    },
    {
        "country": "India",
        "code": "IN",
        "year": 1991,
        "litreacy": 48.22207,
        "gdp_percapita": 1800.0109
    },
    {
        "country": "India",
        "code": null,
        "year": 1981,
        "litreacy": 40.76359,
        "gdp_percapita": null
    },
    {
        "country": "Iceland",
        "code": "IS",
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": 43095.355
    },
    {
        "country": "IDA total",
        "code": null,
        "year": 2010,
        "litreacy": 64.43312,
        "gdp_percapita": null
    },
    {
        "country": "IDA total",
        "code": null,
        "year": 2000,
        "litreacy": 59.467594,
        "gdp_percapita": null
    },
    {
        "country": "IDA total",
        "code": null,
        "year": 1990,
        "litreacy": 54.1447,
        "gdp_percapita": null
    },
    {
        "country": "IDA only",
        "code": null,
        "year": 2010,
        "litreacy": 61.650894,
        "gdp_percapita": null
    },
    {
        "country": "IDA only",
        "code": null,
        "year": 2000,
        "litreacy": 55.4478,
        "gdp_percapita": null
    },
    {
        "country": "IDA only",
        "code": null,
        "year": 1990,
        "litreacy": 48.29747,
        "gdp_percapita": null
    },
    {
        "country": "IDA blend",
        "code": null,
        "year": 2010,
        "litreacy": 69.031975,
        "gdp_percapita": null
    },
    {
        "country": "IDA blend",
        "code": null,
        "year": 1990,
        "litreacy": 63.288082,
        "gdp_percapita": null
    },
    {
        "country": "IDA & IBRD total",
        "code": null,
        "year": 2010,
        "litreacy": 82.39069,
        "gdp_percapita": null
    },
    {
        "country": "IDA & IBRD total",
        "code": null,
        "year": 2000,
        "litreacy": 77.90584,
        "gdp_percapita": null
    },
    {
        "country": "IDA & IBRD total",
        "code": null,
        "year": 1990,
        "litreacy": 69.8612,
        "gdp_percapita": null
    },
    {
        "country": "IBRD only",
        "code": null,
        "year": 2010,
        "litreacy": 87.32906,
        "gdp_percapita": null
    },
    {
        "country": "IBRD only",
        "code": null,
        "year": 2000,
        "litreacy": 82.563576,
        "gdp_percapita": null
    },
    {
        "country": "IBRD only",
        "code": null,
        "year": 1990,
        "litreacy": 73.64205,
        "gdp_percapita": null
    },
    {
        "country": "Hungary",
        "code": "HU",
        "year": 2021,
        "litreacy": 99.1,
        "gdp_percapita": 33593.152
    },
    {
        "country": "Hungary",
        "code": "HU",
        "year": 2015,
        "litreacy": 99.38088,
        "gdp_percapita": 27528.307
    },
    {
        "country": "Hungary",
        "code": "HU",
        "year": 2014,
        "litreacy": 99.05012,
        "gdp_percapita": 26481.166
    },
    {
        "country": "Hungary",
        "code": "HU",
        "year": 2004,
        "litreacy": 99.02922,
        "gdp_percapita": 23362.812
    },
    {
        "country": "Hungary",
        "code": "HU",
        "year": 1994,
        "litreacy": 98.98207,
        "gdp_percapita": 16348.531
    },
    {
        "country": "Hungary",
        "code": null,
        "year": 1990,
        "litreacy": 99.1,
        "gdp_percapita": null
    },
    {
        "country": "Hungary",
        "code": null,
        "year": 1980,
        "litreacy": 98.85829,
        "gdp_percapita": null
    },
    {
        "country": "Hong Kong",
        "code": "HK",
        "year": 2002,
        "litreacy": 93.5,
        "gdp_percapita": 36689.49
    },
    {
        "country": "Honduras",
        "code": "HN",
        "year": 2019,
        "litreacy": 88.50743,
        "gdp_percapita": 5613.6606
    },
    {
        "country": "Honduras",
        "code": "HN",
        "year": 2018,
        "litreacy": 87.20524,
        "gdp_percapita": 5561.2627
    },
    {
        "country": "Honduras",
        "code": "HN",
        "year": 2016,
        "litreacy": 88.98748,
        "gdp_percapita": 5287.253
    },
    {
        "country": "Honduras",
        "code": "HN",
        "year": 2015,
        "litreacy": 87.90683,
        "gdp_percapita": 5180.1865
    },
    {
        "country": "Honduras",
        "code": "HN",
        "year": 2014,
        "litreacy": 87.19753,
        "gdp_percapita": 5079.7036
    },
    {
        "country": "Honduras",
        "code": "HN",
        "year": 2013,
        "litreacy": 85.46442,
        "gdp_percapita": 5020.937
    },
    {
        "country": "Honduras",
        "code": "HN",
        "year": 2012,
        "litreacy": 85.35555,
        "gdp_percapita": 4978.074
    },
    {
        "country": "Honduras",
        "code": "HN",
        "year": 2011,
        "litreacy": 85.1233,
        "gdp_percapita": 4874.8735
    },
    {
        "country": "Honduras",
        "code": "HN",
        "year": 2010,
        "litreacy": 84.75536,
        "gdp_percapita": 4790.1094
    },
    {
        "country": "Honduras",
        "code": "HN",
        "year": 2007,
        "litreacy": 83.58899,
        "gdp_percapita": 4842.423
    },
    {
        "country": "Honduras",
        "code": "HN",
        "year": 2001,
        "litreacy": 80.01103,
        "gdp_percapita": 4058.1116
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1989,
        "litreacy": 68,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1988,
        "litreacy": 67,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1987,
        "litreacy": 66,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1986,
        "litreacy": 66,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1985,
        "litreacy": 65,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1984,
        "litreacy": 64,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1983,
        "litreacy": 64,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1982,
        "litreacy": 63,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1981,
        "litreacy": 62,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1980,
        "litreacy": 61,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1979,
        "litreacy": 61,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1978,
        "litreacy": 60,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1977,
        "litreacy": 59,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1976,
        "litreacy": 58,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1975,
        "litreacy": 58,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1974,
        "litreacy": 57,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1973,
        "litreacy": 56,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1972,
        "litreacy": 55,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1971,
        "litreacy": 54,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1970,
        "litreacy": 53,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1960,
        "litreacy": 44,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1950,
        "litreacy": 40,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1940,
        "litreacy": 35,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1930,
        "litreacy": 33,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1920,
        "litreacy": 32,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1910,
        "litreacy": 30,
        "gdp_percapita": null
    },
    {
        "country": "Honduras",
        "code": null,
        "year": 1900,
        "litreacy": 28,
        "gdp_percapita": null
    },
    {
        "country": "Heavily indebted poor countries (HIPC)",
        "code": null,
        "year": 2010,
        "litreacy": 57.837166,
        "gdp_percapita": null
    },
    {
        "country": "Heavily indebted poor countries (HIPC)",
        "code": null,
        "year": 2000,
        "litreacy": 52.221073,
        "gdp_percapita": null
    },
    {
        "country": "Heavily indebted poor countries (HIPC)",
        "code": null,
        "year": 1990,
        "litreacy": 45.420242,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": "HT",
        "year": 2016,
        "litreacy": 61.69135,
        "gdp_percapita": 3153.1763
    },
    {
        "country": "Haiti",
        "code": "HT",
        "year": 2015,
        "litreacy": 60.68935,
        "gdp_percapita": 3141.0469
    },
    {
        "country": "Haiti",
        "code": "HT",
        "year": 2006,
        "litreacy": 48.68502,
        "gdp_percapita": 2900.4377
    },
    {
        "country": "Haiti",
        "code": "HT",
        "year": 2003,
        "litreacy": 58.7439,
        "gdp_percapita": 2946.3772
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1982,
        "litreacy": 34.73469,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1981,
        "litreacy": 31,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1980,
        "litreacy": 31,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1979,
        "litreacy": 30,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1978,
        "litreacy": 29,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1977,
        "litreacy": 28,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1976,
        "litreacy": 27,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1975,
        "litreacy": 26,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1974,
        "litreacy": 25,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1973,
        "litreacy": 25,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1972,
        "litreacy": 24,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1971,
        "litreacy": 23,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1970,
        "litreacy": 22,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1960,
        "litreacy": 16,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1950,
        "litreacy": 11,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1940,
        "litreacy": 9,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1930,
        "litreacy": 8,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1920,
        "litreacy": 8,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1910,
        "litreacy": 8,
        "gdp_percapita": null
    },
    {
        "country": "Haiti",
        "code": null,
        "year": 1900,
        "litreacy": 8,
        "gdp_percapita": null
    },
    {
        "country": "Guyana",
        "code": null,
        "year": 2022,
        "litreacy": 90.03,
        "gdp_percapita": null
    },
    {
        "country": "Guyana",
        "code": "GY",
        "year": 2015,
        "litreacy": 87.53532,
        "gdp_percapita": 11446.764
    },
    {
        "country": "Guyana",
        "code": "GY",
        "year": 2014,
        "litreacy": 85.63973,
        "gdp_percapita": 11427.873
    },
    {
        "country": "Guyana",
        "code": "GY",
        "year": 2009,
        "litreacy": 84.99401,
        "gdp_percapita": 9399.297
    },
    {
        "country": "Guinea-Bissau",
        "code": null,
        "year": 2022,
        "litreacy": 53.9,
        "gdp_percapita": null
    },
    {
        "country": "Guinea-Bissau",
        "code": "GW",
        "year": 2015,
        "litreacy": 59.77285,
        "gdp_percapita": 1748.0292
    },
    {
        "country": "Guinea-Bissau",
        "code": "GW",
        "year": 2014,
        "litreacy": 45.58116,
        "gdp_percapita": 1690.0912
    },
    {
        "country": "Guinea-Bissau",
        "code": "GW",
        "year": 2000,
        "litreacy": 41.35777,
        "gdp_percapita": 1681.4062
    },
    {
        "country": "Guinea-Bissau",
        "code": null,
        "year": 1979,
        "litreacy": 19.95825,
        "gdp_percapita": null
    },
    {
        "country": "Guinea",
        "code": "GN",
        "year": 2021,
        "litreacy": 45.33,
        "gdp_percapita": 2640.3442
    },
    {
        "country": "Guinea",
        "code": "GN",
        "year": 2018,
        "litreacy": 39.61768,
        "gdp_percapita": 2471.719
    },
    {
        "country": "Guinea",
        "code": "GN",
        "year": 2015,
        "litreacy": 30.47279,
        "gdp_percapita": 2053.1116
    },
    {
        "country": "Guinea",
        "code": "GN",
        "year": 2014,
        "litreacy": 32.00384,
        "gdp_percapita": 2028.5148
    },
    {
        "country": "Guinea",
        "code": "GN",
        "year": 2010,
        "litreacy": 25.30774,
        "gdp_percapita": 1856.4902
    },
    {
        "country": "Guinea",
        "code": "GN",
        "year": 2003,
        "litreacy": 29.70402,
        "gdp_percapita": 1767.791
    },
    {
        "country": "Guinea",
        "code": "GN",
        "year": 1996,
        "litreacy": 20.55375,
        "gdp_percapita": 1576.4238
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 2022,
        "litreacy": 84.27,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": "GT",
        "year": 2018,
        "litreacy": 80.81068,
        "gdp_percapita": 8469.115
    },
    {
        "country": "Guatemala",
        "code": "GT",
        "year": 2015,
        "litreacy": 79.07421,
        "gdp_percapita": 8125.656
    },
    {
        "country": "Guatemala",
        "code": "GT",
        "year": 2014,
        "litreacy": 81.2859,
        "gdp_percapita": 7939.3745
    },
    {
        "country": "Guatemala",
        "code": "GT",
        "year": 2013,
        "litreacy": 77.03867,
        "gdp_percapita": 7734.1177
    },
    {
        "country": "Guatemala",
        "code": "GT",
        "year": 2012,
        "litreacy": 78.26486,
        "gdp_percapita": 7590.7554
    },
    {
        "country": "Guatemala",
        "code": "GT",
        "year": 2002,
        "litreacy": 69.10173,
        "gdp_percapita": 6589.7373
    },
    {
        "country": "Guatemala",
        "code": "GT",
        "year": 1994,
        "litreacy": 64.21164,
        "gdp_percapita": 5891.3276
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1979,
        "litreacy": 52,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1978,
        "litreacy": 52,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1977,
        "litreacy": 51,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1976,
        "litreacy": 50,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1975,
        "litreacy": 49,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1974,
        "litreacy": 48,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1973,
        "litreacy": 48,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1972,
        "litreacy": 47,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1971,
        "litreacy": 46,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1970,
        "litreacy": 45,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1960,
        "litreacy": 35,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1950,
        "litreacy": 29,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1940,
        "litreacy": 24,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1930,
        "litreacy": 19,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1920,
        "litreacy": 15,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1910,
        "litreacy": 13,
        "gdp_percapita": null
    },
    {
        "country": "Guatemala",
        "code": null,
        "year": 1900,
        "litreacy": 12,
        "gdp_percapita": null
    },
    {
        "country": "Guam",
        "code": null,
        "year": 2015,
        "litreacy": 99.78904,
        "gdp_percapita": null
    },
    {
        "country": "Guam",
        "code": null,
        "year": 2000,
        "litreacy": 99.56,
        "gdp_percapita": null
    },
    {
        "country": "Guam",
        "code": null,
        "year": 1990,
        "litreacy": 99.36915,
        "gdp_percapita": null
    },
    {
        "country": "Guam",
        "code": null,
        "year": 1980,
        "litreacy": 96.42065,
        "gdp_percapita": null
    },
    {
        "country": "Grenada",
        "code": "GD",
        "year": 2003,
        "litreacy": 96,
        "gdp_percapita": 12183.874
    },
    {
        "country": "Grenada",
        "code": null,
        "year": 1980,
        "litreacy": 98.4,
        "gdp_percapita": null
    },
    {
        "country": "Grenada",
        "code": null,
        "year": 1970,
        "litreacy": 97.79447,
        "gdp_percapita": null
    },
    {
        "country": "Greenland",
        "code": null,
        "year": 2001,
        "litreacy": 100,
        "gdp_percapita": null
    },
    {
        "country": "Greece",
        "code": "GR",
        "year": 2015,
        "litreacy": 95.29287,
        "gdp_percapita": 28260.387
    },
    {
        "country": "Greece",
        "code": "GR",
        "year": 2014,
        "litreacy": 97.53238,
        "gdp_percapita": 28129.96
    },
    {
        "country": "Greece",
        "code": "GR",
        "year": 2009,
        "litreacy": 93.90511,
        "gdp_percapita": 35691.945
    },
    {
        "country": "Greece",
        "code": "GR",
        "year": 2001,
        "litreacy": 95.99436,
        "gdp_percapita": 30180.227
    },
    {
        "country": "Greece",
        "code": "GR",
        "year": 1991,
        "litreacy": 92.61045,
        "gdp_percapita": 24716.518
    },
    {
        "country": "Greece",
        "code": null,
        "year": 1981,
        "litreacy": 90.51232,
        "gdp_percapita": null
    },
    {
        "country": "Gibraltar",
        "code": null,
        "year": 2011,
        "litreacy": 80,
        "gdp_percapita": null
    },
    {
        "country": "Ghana",
        "code": "GH",
        "year": 2020,
        "litreacy": 80.38,
        "gdp_percapita": 5263.5264
    },
    {
        "country": "Ghana",
        "code": "GH",
        "year": 2015,
        "litreacy": 76.5759,
        "gdp_percapita": 4616.6196
    },
    {
        "country": "Ghana",
        "code": "GH",
        "year": 2010,
        "litreacy": 71.49707,
        "gdp_percapita": 3709.3958
    },
    {
        "country": "Ghana",
        "code": "GH",
        "year": 2000,
        "litreacy": 57.89747,
        "gdp_percapita": 2752.1648
    },
    {
        "country": "Germany",
        "code": "DE",
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": 43089.473
    },
    {
        "country": "Germany",
        "code": null,
        "year": 1750,
        "litreacy": 38,
        "gdp_percapita": null
    },
    {
        "country": "Germany",
        "code": null,
        "year": 1650,
        "litreacy": 31,
        "gdp_percapita": null
    },
    {
        "country": "Germany",
        "code": null,
        "year": 1550,
        "litreacy": 16,
        "gdp_percapita": null
    },
    {
        "country": "Germany",
        "code": null,
        "year": 1475,
        "litreacy": 9,
        "gdp_percapita": null
    },
    {
        "country": "Georgia",
        "code": null,
        "year": 2022,
        "litreacy": 99.57499,
        "gdp_percapita": null
    },
    {
        "country": "Georgia",
        "code": "GE",
        "year": 2017,
        "litreacy": 99.36426,
        "gdp_percapita": 13589.707
    },
    {
        "country": "Georgia",
        "code": "GE",
        "year": 2015,
        "litreacy": 99.75962,
        "gdp_percapita": 12605.14
    },
    {
        "country": "Georgia",
        "code": "GE",
        "year": 2014,
        "litreacy": 99.58619,
        "gdp_percapita": 12254.6455
    },
    {
        "country": "Georgia",
        "code": "GE",
        "year": 2002,
        "litreacy": 99.65235,
        "gdp_percapita": 5572.622
    },
    {
        "country": "Gambia",
        "code": null,
        "year": 2022,
        "litreacy": 58.67,
        "gdp_percapita": null
    },
    {
        "country": "Gambia",
        "code": "GM",
        "year": 2015,
        "litreacy": 50.77797,
        "gdp_percapita": 1905.823
    },
    {
        "country": "Gambia",
        "code": "GM",
        "year": 2014,
        "litreacy": 54.38756,
        "gdp_percapita": 1885.1421
    },
    {
        "country": "Gambia",
        "code": "GM",
        "year": 2013,
        "litreacy": 41.95005,
        "gdp_percapita": 1969.777
    },
    {
        "country": "Gambia",
        "code": "GM",
        "year": 2000,
        "litreacy": 36.81773,
        "gdp_percapita": 2081.2224
    },
    {
        "country": "Gabon",
        "code": null,
        "year": 2022,
        "litreacy": 85.69,
        "gdp_percapita": null
    },
    {
        "country": "Gabon",
        "code": "GA",
        "year": 2015,
        "litreacy": 83.23788,
        "gdp_percapita": 14892.036
    },
    {
        "country": "Gabon",
        "code": "GA",
        "year": 2012,
        "litreacy": 82.2838,
        "gdp_percapita": 14368
    },
    {
        "country": "Gabon",
        "code": "GA",
        "year": 2004,
        "litreacy": 81.84552,
        "gdp_percapita": 15062.641
    },
    {
        "country": "Gabon",
        "code": "GA",
        "year": 1993,
        "litreacy": 72.23367,
        "gdp_percapita": 17318.162
    },
    {
        "country": "French Polynesia",
        "code": null,
        "year": 1977,
        "litreacy": 98,
        "gdp_percapita": null
    },
    {
        "country": "France",
        "code": "FR",
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": 40425.637
    },
    {
        "country": "France",
        "code": null,
        "year": 1870,
        "litreacy": 69,
        "gdp_percapita": null
    },
    {
        "country": "France",
        "code": null,
        "year": 1820,
        "litreacy": 38,
        "gdp_percapita": null
    },
    {
        "country": "France",
        "code": null,
        "year": 1750,
        "litreacy": 29,
        "gdp_percapita": null
    },
    {
        "country": "France",
        "code": null,
        "year": 1650,
        "litreacy": 29,
        "gdp_percapita": null
    },
    {
        "country": "France",
        "code": null,
        "year": 1550,
        "litreacy": 19,
        "gdp_percapita": null
    },
    {
        "country": "France",
        "code": null,
        "year": 1475,
        "litreacy": 6,
        "gdp_percapita": null
    },
    {
        "country": "Fragile and conflict affected situations",
        "code": null,
        "year": 2010,
        "litreacy": 68.33667,
        "gdp_percapita": null
    },
    {
        "country": "Fragile and conflict affected situations",
        "code": null,
        "year": 2000,
        "litreacy": 63.947193,
        "gdp_percapita": null
    },
    {
        "country": "Finland",
        "code": "FI",
        "year": 2000,
        "litreacy": 100,
        "gdp_percapita": 39894.195
    },
    {
        "country": "Fiji",
        "code": "FJ",
        "year": 2003,
        "litreacy": 93.7,
        "gdp_percapita": 9619.746
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2022,
        "litreacy": 98.54106,
        "gdp_percapita": null
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2021,
        "litreacy": 98.52377,
        "gdp_percapita": 35471.203
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2020,
        "litreacy": 98.50483,
        "gdp_percapita": 33500.773
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2019,
        "litreacy": 98.43328,
        "gdp_percapita": 35329.156
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2018,
        "litreacy": 98.39641,
        "gdp_percapita": 34737.93
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2017,
        "litreacy": 98.27937,
        "gdp_percapita": 34019.434
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2016,
        "litreacy": 98.23154,
        "gdp_percapita": 33125.23
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2015,
        "litreacy": 98.13865,
        "gdp_percapita": 32662.637
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2014,
        "litreacy": 98.09614,
        "gdp_percapita": 32244.822
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2013,
        "litreacy": 98.05367,
        "gdp_percapita": 31842.643
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2012,
        "litreacy": 97.98754,
        "gdp_percapita": 31638.795
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2011,
        "litreacy": 97.88421,
        "gdp_percapita": 31542.049
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2010,
        "litreacy": 97.74728,
        "gdp_percapita": 30749.693
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2009,
        "litreacy": 97.41368,
        "gdp_percapita": 29994.229
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2008,
        "litreacy": 97.35377,
        "gdp_percapita": 31609.094
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2007,
        "litreacy": 97.24182,
        "gdp_percapita": 31242.982
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2006,
        "litreacy": 97.14116,
        "gdp_percapita": 30061.762
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2005,
        "litreacy": 97.11324,
        "gdp_percapita": 28859.213
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2004,
        "litreacy": 96.94808,
        "gdp_percapita": 28046.693
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2003,
        "litreacy": 96.86625,
        "gdp_percapita": 27078.195
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2002,
        "litreacy": 96.76737,
        "gdp_percapita": 26500.223
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2001,
        "litreacy": 96.5861,
        "gdp_percapita": 26011.145
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 2000,
        "litreacy": 96.49407,
        "gdp_percapita": 25433.459
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 1999,
        "litreacy": 96.40454,
        "gdp_percapita": 24313.525
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 1998,
        "litreacy": 96.2917,
        "gdp_percapita": 23675.895
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 1997,
        "litreacy": 96.14668,
        "gdp_percapita": 23222.389
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 1996,
        "litreacy": 96.01994,
        "gdp_percapita": 22620.904
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 1995,
        "litreacy": 95.85668,
        "gdp_percapita": 22346.795
    },
    {
        "country": "Europe and Central Asia (WB)",
        "code": null,
        "year": 1994,
        "litreacy": 95.7228,
        "gdp_percapita": 22034.219
    },
    {
        "country": "Europe & Central Asia (excluding high income)",
        "code": null,
        "year": 2010,
        "litreacy": 98.79964,
        "gdp_percapita": null
    },
    {
        "country": "Europe & Central Asia (excluding high income)",
        "code": null,
        "year": 2000,
        "litreacy": 97.21841,
        "gdp_percapita": null
    },
    {
        "country": "Europe & Central Asia (excluding high income)",
        "code": null,
        "year": 1990,
        "litreacy": 95.56776,
        "gdp_percapita": null
    },
    {
        "country": "Europe & Central Asia (IDA & IBRD)",
        "code": null,
        "year": 2010,
        "litreacy": 98.89095,
        "gdp_percapita": null
    },
    {
        "country": "Europe & Central Asia (IDA & IBRD)",
        "code": null,
        "year": 2000,
        "litreacy": 97.452644,
        "gdp_percapita": null
    },
    {
        "country": "Europe & Central Asia (IDA & IBRD)",
        "code": null,
        "year": 1990,
        "litreacy": 95.9422,
        "gdp_percapita": null
    },
    {
        "country": "Europe & Central Asia",
        "code": null,
        "year": 2010,
        "litreacy": 98.99759,
        "gdp_percapita": null
    },
    {
        "country": "Europe & Central Asia",
        "code": null,
        "year": 2000,
        "litreacy": 98.14584,
        "gdp_percapita": null
    },
    {
        "country": "Europe & Central Asia",
        "code": null,
        "year": 1990,
        "litreacy": 97.26079,
        "gdp_percapita": null
    },
    {
        "country": "Ethiopia",
        "code": "ET",
        "year": 2017,
        "litreacy": 51.77118,
        "gdp_percapita": 1987.9688
    },
    {
        "country": "Ethiopia",
        "code": "ET",
        "year": 2015,
        "litreacy": 49.03152,
        "gdp_percapita": 1750.6727
    },
    {
        "country": "Ethiopia",
        "code": "ET",
        "year": 2007,
        "litreacy": 38.99598,
        "gdp_percapita": 991.8834
    },
    {
        "country": "Ethiopia",
        "code": "ET",
        "year": 2005,
        "litreacy": 29.82034,
        "gdp_percapita": 849.84766
    },
    {
        "country": "Ethiopia",
        "code": "ET",
        "year": 2004,
        "litreacy": 35.9,
        "gdp_percapita": 781.9135
    },
    {
        "country": "Ethiopia",
        "code": "ET",
        "year": 1994,
        "litreacy": 27.01135,
        "gdp_percapita": 653.8867
    },
    {
        "country": "Eswatini",
        "code": "SZ",
        "year": 2020,
        "litreacy": 89.28,
        "gdp_percapita": 8290.409
    },
    {
        "country": "Eswatini",
        "code": "SZ",
        "year": 2015,
        "litreacy": 87.47019,
        "gdp_percapita": 8088.7344
    },
    {
        "country": "Eswatini",
        "code": "SZ",
        "year": 2010,
        "litreacy": 83.09829,
        "gdp_percapita": 7221.336
    },
    {
        "country": "Eswatini",
        "code": "SZ",
        "year": 2000,
        "litreacy": 81.6607,
        "gdp_percapita": 5443.4395
    },
    {
        "country": "Eswatini",
        "code": null,
        "year": 1986,
        "litreacy": 67.23938,
        "gdp_percapita": null
    },
    {
        "country": "Eswatini",
        "code": null,
        "year": 1976,
        "litreacy": 55.32504,
        "gdp_percapita": null
    },
    {
        "country": "Estonia",
        "code": "EE",
        "year": 2021,
        "litreacy": 99.87,
        "gdp_percapita": 38717.695
    },
    {
        "country": "Estonia",
        "code": "EE",
        "year": 2015,
        "litreacy": 99.82351,
        "gdp_percapita": 31038.805
    },
    {
        "country": "Estonia",
        "code": "EE",
        "year": 2011,
        "litreacy": 99.88579,
        "gdp_percapita": 27990.137
    },
    {
        "country": "Estonia",
        "code": "EE",
        "year": 2000,
        "litreacy": 99.7672,
        "gdp_percapita": 17765.207
    },
    {
        "country": "Estonia",
        "code": null,
        "year": 1989,
        "litreacy": 99.72644,
        "gdp_percapita": null
    },
    {
        "country": "Eritrea",
        "code": null,
        "year": 2018,
        "litreacy": 76.57052,
        "gdp_percapita": null
    },
    {
        "country": "Eritrea",
        "code": null,
        "year": 2015,
        "litreacy": 73.84525,
        "gdp_percapita": null
    },
    {
        "country": "Eritrea",
        "code": null,
        "year": 2014,
        "litreacy": 72.79049,
        "gdp_percapita": null
    },
    {
        "country": "Eritrea",
        "code": null,
        "year": 2008,
        "litreacy": 64.66297,
        "gdp_percapita": null
    },
    {
        "country": "Eritrea",
        "code": null,
        "year": 2002,
        "litreacy": 52.51395,
        "gdp_percapita": null
    },
    {
        "country": "Equatorial Guinea",
        "code": "GQ",
        "year": 2015,
        "litreacy": 95.19566,
        "gdp_percapita": 24563.5
    },
    {
        "country": "Equatorial Guinea",
        "code": "GQ",
        "year": 2014,
        "litreacy": 94.95674,
        "gdp_percapita": 28106.2
    },
    {
        "country": "Equatorial Guinea",
        "code": "GQ",
        "year": 2010,
        "litreacy": 94.37054,
        "gdp_percapita": 29944.262
    },
    {
        "country": "Equatorial Guinea",
        "code": "GQ",
        "year": 2000,
        "litreacy": 88.3083,
        "gdp_percapita": 9890.817
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 2020,
        "litreacy": 89.98453,
        "gdp_percapita": 8267.251
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 2019,
        "litreacy": 89.13792,
        "gdp_percapita": 9021.426
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 2018,
        "litreacy": 89.0086,
        "gdp_percapita": 8812.201
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 2017,
        "litreacy": 88.48271,
        "gdp_percapita": 8617.922
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 2016,
        "litreacy": 88.14177,
        "gdp_percapita": 8450.251
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 2015,
        "litreacy": 87.96985,
        "gdp_percapita": 8266.723
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 2013,
        "litreacy": 86.76758,
        "gdp_percapita": 7995.633
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 2011,
        "litreacy": 85.49399,
        "gdp_percapita": 7665.948
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 2010,
        "litreacy": 84.49272,
        "gdp_percapita": 7412.978
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 2009,
        "litreacy": 84.10289,
        "gdp_percapita": 7287.176
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 2008,
        "litreacy": 83.9513,
        "gdp_percapita": 7470.7515
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 2007,
        "litreacy": 82.02863,
        "gdp_percapita": 7343.9106
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 2006,
        "litreacy": 83.55946,
        "gdp_percapita": 7221.4995
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 2004,
        "litreacy": 80.77836,
        "gdp_percapita": 6736.9067
    },
    {
        "country": "El Salvador",
        "code": "SV",
        "year": 1992,
        "litreacy": 74.14316,
        "gdp_percapita": 5451.6313
    },
    {
        "country": "El Salvador",
        "code": null,
        "year": 1975,
        "litreacy": 62,
        "gdp_percapita": null
    },
    {
        "country": "El Salvador",
        "code": null,
        "year": 1974,
        "litreacy": 61,
        "gdp_percapita": null
    },
    {
        "country": "El Salvador",
        "code": null,
        "year": 1973,
        "litreacy": 61,
        "gdp_percapita": null
    },
    {
        "country": "El Salvador",
        "code": null,
        "year": 1972,
        "litreacy": 60,
        "gdp_percapita": null
    },
    {
        "country": "El Salvador",
        "code": null,
        "year": 1971,
        "litreacy": 59,
        "gdp_percapita": null
    },
    {
        "country": "El Salvador",
        "code": null,
        "year": 1970,
        "litreacy": 58,
        "gdp_percapita": null
    },
    {
        "country": "El Salvador",
        "code": null,
        "year": 1960,
        "litreacy": 48,
        "gdp_percapita": null
    },
    {
        "country": "El Salvador",
        "code": null,
        "year": 1950,
        "litreacy": 42,
        "gdp_percapita": null
    },
    {
        "country": "El Salvador",
        "code": null,
        "year": 1940,
        "litreacy": 35,
        "gdp_percapita": null
    },
    {
        "country": "El Salvador",
        "code": null,
        "year": 1930,
        "litreacy": 28,
        "gdp_percapita": null
    },
    {
        "country": "El Salvador",
        "code": null,
        "year": 1920,
        "litreacy": 27,
        "gdp_percapita": null
    },
    {
        "country": "El Salvador",
        "code": null,
        "year": 1910,
        "litreacy": 27,
        "gdp_percapita": null
    },
    {
        "country": "El Salvador",
        "code": null,
        "year": 1900,
        "litreacy": 26,
        "gdp_percapita": null
    },
    {
        "country": "Egypt",
        "code": null,
        "year": 2022,
        "litreacy": 74.5,
        "gdp_percapita": null
    },
    {
        "country": "Egypt",
        "code": "EG",
        "year": 2017,
        "litreacy": 71.16825,
        "gdp_percapita": 10435.917
    },
    {
        "country": "Egypt",
        "code": "EG",
        "year": 2015,
        "litreacy": 75.84262,
        "gdp_percapita": 9999.19
    },
    {
        "country": "Egypt",
        "code": "EG",
        "year": 2013,
        "litreacy": 72.4425,
        "gdp_percapita": 9742.144
    },
    {
        "country": "Egypt",
        "code": "EG",
        "year": 2012,
        "litreacy": 73.86559,
        "gdp_percapita": 9757.137
    },
    {
        "country": "Egypt",
        "code": "EG",
        "year": 2010,
        "litreacy": 72.04785,
        "gdp_percapita": 9807.836
    },
    {
        "country": "Egypt",
        "code": "EG",
        "year": 2006,
        "litreacy": 66.36991,
        "gdp_percapita": 8403.554
    },
    {
        "country": "Egypt",
        "code": "EG",
        "year": 2005,
        "litreacy": 67.33187,
        "gdp_percapita": 8019.8726
    },
    {
        "country": "Egypt",
        "code": "EG",
        "year": 1996,
        "litreacy": 55.587,
        "gdp_percapita": 6471.302
    },
    {
        "country": "Egypt",
        "code": null,
        "year": 1986,
        "litreacy": 44.42399,
        "gdp_percapita": null
    },
    {
        "country": "Egypt",
        "code": null,
        "year": 1976,
        "litreacy": 38.19676,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 2022,
        "litreacy": 93.94812,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 2021,
        "litreacy": 94.48359,
        "gdp_percapita": 10668.758
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 2020,
        "litreacy": 93.6261,
        "gdp_percapita": 10356.975
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 2017,
        "litreacy": 92.82979,
        "gdp_percapita": 11679.431
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 2016,
        "litreacy": 94.35023,
        "gdp_percapita": 11587.825
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 2015,
        "litreacy": 94.45566,
        "gdp_percapita": 11908.216
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 2014,
        "litreacy": 94.22264,
        "gdp_percapita": 12073.811
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 2013,
        "litreacy": 93.29463,
        "gdp_percapita": 11806.924
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 2012,
        "litreacy": 92.06473,
        "gdp_percapita": 11424.152
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 2011,
        "litreacy": 91.5869,
        "gdp_percapita": 10988.722
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 2010,
        "litreacy": 91.85404,
        "gdp_percapita": 10355.822
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 2009,
        "litreacy": 92.24976,
        "gdp_percapita": 10170.651
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 2008,
        "litreacy": 92.39005,
        "gdp_percapita": 10284.954
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 2007,
        "litreacy": 92.09679,
        "gdp_percapita": 9836.419
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 2001,
        "litreacy": 90.98403,
        "gdp_percapita": 8395.833
    },
    {
        "country": "Ecuador",
        "code": "EC",
        "year": 1990,
        "litreacy": 88.29876,
        "gdp_percapita": 8120.001
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1982,
        "litreacy": 83.55269,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1981,
        "litreacy": 82,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1980,
        "litreacy": 82,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1979,
        "litreacy": 81,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1978,
        "litreacy": 80,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1977,
        "litreacy": 80,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1976,
        "litreacy": 79,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1975,
        "litreacy": 78,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1974,
        "litreacy": 77,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1973,
        "litreacy": 77,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1972,
        "litreacy": 76,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1971,
        "litreacy": 75,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1970,
        "litreacy": 74,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1960,
        "litreacy": 65,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1950,
        "litreacy": 56,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1940,
        "litreacy": 51,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1930,
        "litreacy": 46,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1920,
        "litreacy": 42,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1910,
        "litreacy": 38,
        "gdp_percapita": null
    },
    {
        "country": "Ecuador",
        "code": null,
        "year": 1900,
        "litreacy": 33,
        "gdp_percapita": null
    },
    {
        "country": "East Timor",
        "code": null,
        "year": 2020,
        "litreacy": 69.9,
        "gdp_percapita": 4856.518
    },
    {
        "country": "East Timor",
        "code": null,
        "year": 2015,
        "litreacy": 64.06614,
        "gdp_percapita": 3228.675
    },
    {
        "country": "East Timor",
        "code": null,
        "year": 2010,
        "litreacy": 58.30898,
        "gdp_percapita": 2908.328
    },
    {
        "country": "East Timor",
        "code": null,
        "year": 2007,
        "litreacy": 50.6,
        "gdp_percapita": 2315.2097
    },
    {
        "country": "East Timor",
        "code": null,
        "year": 2001,
        "litreacy": 37.6,
        "gdp_percapita": 2649.0718
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2021,
        "litreacy": 96.03774,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2020,
        "litreacy": 96.00155,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2019,
        "litreacy": 95.70822,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2018,
        "litreacy": 95.30794,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2017,
        "litreacy": 95.20588,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2016,
        "litreacy": 95.03397,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2015,
        "litreacy": 94.8695,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2014,
        "litreacy": 94.65799,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2013,
        "litreacy": 94.12432,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2012,
        "litreacy": 94.02285,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2011,
        "litreacy": 93.83104,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2010,
        "litreacy": 94.12464,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2009,
        "litreacy": 94.02799,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2008,
        "litreacy": 93.72558,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2007,
        "litreacy": 93.44074,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2006,
        "litreacy": 92.41628,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2005,
        "litreacy": 92.01266,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2004,
        "litreacy": 91.69667,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2003,
        "litreacy": 91.35197,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2002,
        "litreacy": 90.98892,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2001,
        "litreacy": 90.64381,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 2000,
        "litreacy": 90.24882,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1999,
        "litreacy": 89.96095,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1998,
        "litreacy": 89.64008,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1997,
        "litreacy": 89.27749,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1996,
        "litreacy": 84.29004,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1995,
        "litreacy": 83.79772,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1994,
        "litreacy": 83.2462,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1993,
        "litreacy": 82.68984,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1992,
        "litreacy": 82.22357,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1991,
        "litreacy": 81.70511,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1990,
        "litreacy": 80.46115,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1989,
        "litreacy": 80.60751,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1988,
        "litreacy": 79.95977,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1987,
        "litreacy": 76.17425,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1986,
        "litreacy": 75.00072,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1985,
        "litreacy": 74.16798,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1984,
        "litreacy": 73.23173,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1983,
        "litreacy": 72.24865,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1982,
        "litreacy": 70.96971,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1981,
        "litreacy": 70.37613,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1980,
        "litreacy": 68.76246,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1979,
        "litreacy": 68.18393,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1978,
        "litreacy": 66.96806,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1977,
        "litreacy": 65.87666,
        "gdp_percapita": null
    },
    {
        "country": "East Asia and the Pacific (WB)",
        "code": null,
        "year": 1976,
        "litreacy": 65.691,
        "gdp_percapita": null
    },
    {
        "country": "East Asia & Pacific (excluding high income)",
        "code": null,
        "year": 2010,
        "litreacy": 94.75167,
        "gdp_percapita": null
    },
    {
        "country": "East Asia & Pacific (excluding high income)",
        "code": null,
        "year": 2000,
        "litreacy": 90.77303,
        "gdp_percapita": null
    },
    {
        "country": "East Asia & Pacific (excluding high income)",
        "code": null,
        "year": 1990,
        "litreacy": 79.7442,
        "gdp_percapita": null
    },
    {
        "country": "East Asia & Pacific (IDA & IBRD)",
        "code": null,
        "year": 2010,
        "litreacy": 94.68925,
        "gdp_percapita": null
    },
    {
        "country": "East Asia & Pacific (IDA & IBRD)",
        "code": null,
        "year": 2000,
        "litreacy": 90.649956,
        "gdp_percapita": null
    },
    {
        "country": "East Asia & Pacific (IDA & IBRD)",
        "code": null,
        "year": 1990,
        "litreacy": 79.458626,
        "gdp_percapita": null
    },
    {
        "country": "East Asia & Pacific",
        "code": null,
        "year": 2010,
        "litreacy": 95.10822,
        "gdp_percapita": null
    },
    {
        "country": "East Asia & Pacific",
        "code": null,
        "year": 2000,
        "litreacy": 91.61869,
        "gdp_percapita": null
    },
    {
        "country": "East Asia & Pacific",
        "code": null,
        "year": 1990,
        "litreacy": 82.054344,
        "gdp_percapita": null
    },
    {
        "country": "Early-demographic dividend",
        "code": null,
        "year": 2010,
        "litreacy": 76.50836,
        "gdp_percapita": null
    },
    {
        "country": "Early-demographic dividend",
        "code": null,
        "year": 2000,
        "litreacy": 69.11661,
        "gdp_percapita": null
    },
    {
        "country": "Early-demographic dividend",
        "code": null,
        "year": 1990,
        "litreacy": 59.518055,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 2022,
        "litreacy": 95.5,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": "DO",
        "year": 2016,
        "litreacy": 93.77846,
        "gdp_percapita": 15967.202
    },
    {
        "country": "Dominican Republic",
        "code": "DO",
        "year": 2015,
        "litreacy": 91.99121,
        "gdp_percapita": 15145.47
    },
    {
        "country": "Dominican Republic",
        "code": "DO",
        "year": 2014,
        "litreacy": 91.76376,
        "gdp_percapita": 14334.733
    },
    {
        "country": "Dominican Republic",
        "code": "DO",
        "year": 2013,
        "litreacy": 90.85815,
        "gdp_percapita": 13555.512
    },
    {
        "country": "Dominican Republic",
        "code": "DO",
        "year": 2012,
        "litreacy": 90.15518,
        "gdp_percapita": 13087.949
    },
    {
        "country": "Dominican Republic",
        "code": "DO",
        "year": 2011,
        "litreacy": 90.10638,
        "gdp_percapita": 12905.289
    },
    {
        "country": "Dominican Republic",
        "code": "DO",
        "year": 2010,
        "litreacy": 89.53873,
        "gdp_percapita": 12677.018
    },
    {
        "country": "Dominican Republic",
        "code": "DO",
        "year": 2007,
        "litreacy": 88.24446,
        "gdp_percapita": 11677.254
    },
    {
        "country": "Dominican Republic",
        "code": "DO",
        "year": 2002,
        "litreacy": 86.99647,
        "gdp_percapita": 9613.332
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1981,
        "litreacy": 73.06457,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1980,
        "litreacy": 74,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1979,
        "litreacy": 73,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1978,
        "litreacy": 73,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1977,
        "litreacy": 72,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1976,
        "litreacy": 71,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1975,
        "litreacy": 70,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1974,
        "litreacy": 70,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1973,
        "litreacy": 69,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1972,
        "litreacy": 68,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1971,
        "litreacy": 68,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1970,
        "litreacy": 67,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1960,
        "litreacy": 64,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1950,
        "litreacy": 43,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1940,
        "litreacy": 30,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1930,
        "litreacy": 26,
        "gdp_percapita": null
    },
    {
        "country": "Dominican Republic",
        "code": null,
        "year": 1920,
        "litreacy": 29,
        "gdp_percapita": null
    },
    {
        "country": "Dominica",
        "code": "DM",
        "year": 2003,
        "litreacy": 94,
        "gdp_percapita": 10070.004
    },
    {
        "country": "Djibouti",
        "code": null,
        "year": 2003,
        "litreacy": 67.9,
        "gdp_percapita": null
    },
    {
        "country": "Denmark",
        "code": "DK",
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": 49262.645
    },
    {
        "country": "Democratic Republic of Congo",
        "code": null,
        "year": 2022,
        "litreacy": 80.54,
        "gdp_percapita": null
    },
    {
        "country": "Democratic Republic of Congo",
        "code": null,
        "year": 2016,
        "litreacy": 77.04268,
        "gdp_percapita": 1021.3272
    },
    {
        "country": "Democratic Republic of Congo",
        "code": null,
        "year": 2015,
        "litreacy": 77.22167,
        "gdp_percapita": 1032.5719
    },
    {
        "country": "Democratic Republic of Congo",
        "code": null,
        "year": 2012,
        "litreacy": 75.01719,
        "gdp_percapita": 900.979
    },
    {
        "country": "Democratic Republic of Congo",
        "code": null,
        "year": 2007,
        "litreacy": 61.20555,
        "gdp_percapita": 792.19086
    },
    {
        "country": "Democratic Republic of Congo",
        "code": null,
        "year": 2001,
        "litreacy": 67.17299,
        "gdp_percapita": 691.70917
    },
    {
        "country": "Czechia",
        "code": "CZ",
        "year": 2011,
        "litreacy": 99,
        "gdp_percapita": 34002.19
    },
    {
        "country": "Cyprus",
        "code": "CY",
        "year": 2021,
        "litreacy": 99.36,
        "gdp_percapita": 41701.703
    },
    {
        "country": "Cyprus",
        "code": "CY",
        "year": 2015,
        "litreacy": 99.05978,
        "gdp_percapita": 34573.973
    },
    {
        "country": "Cyprus",
        "code": "CY",
        "year": 2011,
        "litreacy": 98.67843,
        "gdp_percapita": 37593.93
    },
    {
        "country": "Cyprus",
        "code": "CY",
        "year": 2001,
        "litreacy": 96.80363,
        "gdp_percapita": 33884.945
    },
    {
        "country": "Cyprus",
        "code": "CY",
        "year": 1992,
        "litreacy": 94.36247,
        "gdp_percapita": 26391.29
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 2021,
        "litreacy": 99.67311,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 2015,
        "litreacy": 99.71072,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 2012,
        "litreacy": 99.67311,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 2002,
        "litreacy": 99.79907,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1981,
        "litreacy": 97.84665,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1980,
        "litreacy": 93,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1979,
        "litreacy": 92,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1978,
        "litreacy": 92,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1977,
        "litreacy": 92,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1976,
        "litreacy": 91,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1975,
        "litreacy": 91,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1974,
        "litreacy": 91,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1973,
        "litreacy": 90,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1972,
        "litreacy": 90,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1971,
        "litreacy": 90,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1970,
        "litreacy": 89,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1960,
        "litreacy": 79,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1950,
        "litreacy": 78,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1940,
        "litreacy": 76,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1930,
        "litreacy": 71,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1920,
        "litreacy": 64,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1910,
        "litreacy": 57,
        "gdp_percapita": null
    },
    {
        "country": "Cuba",
        "code": null,
        "year": 1900,
        "litreacy": 46,
        "gdp_percapita": null
    },
    {
        "country": "Croatia",
        "code": "HR",
        "year": 2021,
        "litreacy": 99.45,
        "gdp_percapita": 31635.824
    },
    {
        "country": "Croatia",
        "code": "HR",
        "year": 2015,
        "litreacy": 99.27259,
        "gdp_percapita": 24931.486
    },
    {
        "country": "Croatia",
        "code": "HR",
        "year": 2011,
        "litreacy": 99.12536,
        "gdp_percapita": 24654.197
    },
    {
        "country": "Croatia",
        "code": "HR",
        "year": 2001,
        "litreacy": 98.14668,
        "gdp_percapita": 19675.709
    },
    {
        "country": "Croatia",
        "code": null,
        "year": 1991,
        "litreacy": 96.70155,
        "gdp_percapita": null
    },
    {
        "country": "Cote d'Ivoire",
        "code": null,
        "year": 2019,
        "litreacy": 89.89342,
        "gdp_percapita": 5126.6343
    },
    {
        "country": "Cote d'Ivoire",
        "code": null,
        "year": 2015,
        "litreacy": 43.26532,
        "gdp_percapita": 4347.778
    },
    {
        "country": "Cote d'Ivoire",
        "code": null,
        "year": 2014,
        "litreacy": 43.90842,
        "gdp_percapita": 4162.0244
    },
    {
        "country": "Cote d'Ivoire",
        "code": null,
        "year": 2012,
        "litreacy": 40.98163,
        "gdp_percapita": 3589.4216
    },
    {
        "country": "Cote d'Ivoire",
        "code": null,
        "year": 2000,
        "litreacy": 48.74076,
        "gdp_percapita": 4052.982
    },
    {
        "country": "Cote d'Ivoire",
        "code": null,
        "year": 1998,
        "litreacy": 36.35024,
        "gdp_percapita": 4255.1753
    },
    {
        "country": "Cote d'Ivoire",
        "code": null,
        "year": 1988,
        "litreacy": 34.13928,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": "CR",
        "year": 2021,
        "litreacy": 98.04,
        "gdp_percapita": 21199.281
    },
    {
        "country": "Costa Rica",
        "code": "CR",
        "year": 2015,
        "litreacy": 97.64725,
        "gdp_percapita": 18956.191
    },
    {
        "country": "Costa Rica",
        "code": "CR",
        "year": 2011,
        "litreacy": 97.40658,
        "gdp_percapita": 17186.45
    },
    {
        "country": "Costa Rica",
        "code": "CR",
        "year": 2000,
        "litreacy": 94.86819,
        "gdp_percapita": 12570.696
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1984,
        "litreacy": 92.62904,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1983,
        "litreacy": 92,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1982,
        "litreacy": 92,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1981,
        "litreacy": 92,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1980,
        "litreacy": 92,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1979,
        "litreacy": 91,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1978,
        "litreacy": 91,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1977,
        "litreacy": 91,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1976,
        "litreacy": 90,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1975,
        "litreacy": 90,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1974,
        "litreacy": 90,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1973,
        "litreacy": 89,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1972,
        "litreacy": 89,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1971,
        "litreacy": 89,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1970,
        "litreacy": 88,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1960,
        "litreacy": 83,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1950,
        "litreacy": 79,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1940,
        "litreacy": 73,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1930,
        "litreacy": 67,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1920,
        "litreacy": 57,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1910,
        "litreacy": 46,
        "gdp_percapita": null
    },
    {
        "country": "Costa Rica",
        "code": null,
        "year": 1900,
        "litreacy": 36,
        "gdp_percapita": null
    },
    {
        "country": "Cook Islands",
        "code": null,
        "year": 2011,
        "litreacy": 95,
        "gdp_percapita": null
    },
    {
        "country": "Congo",
        "code": "CG",
        "year": 2021,
        "litreacy": 80.61,
        "gdp_percapita": 3234.393
    },
    {
        "country": "Congo",
        "code": "CG",
        "year": 2015,
        "litreacy": 79.31117,
        "gdp_percapita": 5009.432
    },
    {
        "country": "Congo",
        "code": "CG",
        "year": 2011,
        "litreacy": 79.31117,
        "gdp_percapita": 4925.377
    },
    {
        "country": "Congo",
        "code": "CG",
        "year": 2005,
        "litreacy": 76.11479,
        "gdp_percapita": 4571.793
    },
    {
        "country": "Congo",
        "code": null,
        "year": 1984,
        "litreacy": 59.61912,
        "gdp_percapita": null
    },
    {
        "country": "Comoros",
        "code": null,
        "year": 2022,
        "litreacy": 61.71,
        "gdp_percapita": null
    },
    {
        "country": "Comoros",
        "code": "KM",
        "year": 2015,
        "litreacy": 78.13739,
        "gdp_percapita": 3150.8777
    },
    {
        "country": "Comoros",
        "code": "KM",
        "year": 2014,
        "litreacy": 77.57327,
        "gdp_percapita": 3183.157
    },
    {
        "country": "Comoros",
        "code": "KM",
        "year": 2012,
        "litreacy": 49.19614,
        "gdp_percapita": 3115.238
    },
    {
        "country": "Comoros",
        "code": "KM",
        "year": 2000,
        "litreacy": 68.48923,
        "gdp_percapita": 2863.1519
    },
    {
        "country": "Comoros",
        "code": null,
        "year": 1980,
        "litreacy": 47.91923,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 2020,
        "litreacy": 95.63633,
        "gdp_percapita": 13387.701
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 2019,
        "litreacy": 95.24927,
        "gdp_percapita": 14616.135
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 2018,
        "litreacy": 95.09251,
        "gdp_percapita": 14426.435
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 2016,
        "litreacy": 94.65385,
        "gdp_percapita": 14358.168
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 2015,
        "litreacy": 94.24505,
        "gdp_percapita": 14215.688
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 2014,
        "litreacy": 94.18625,
        "gdp_percapita": 13938.231
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 2011,
        "litreacy": 93.58053,
        "gdp_percapita": 12578.016
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 2010,
        "litreacy": 93.37233,
        "gdp_percapita": 11890.203
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 2009,
        "litreacy": 93.24469,
        "gdp_percapita": 11507.717
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 2008,
        "litreacy": 93.37818,
        "gdp_percapita": 11507.525
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 2007,
        "litreacy": 92.65179,
        "gdp_percapita": 11272.578
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 2006,
        "litreacy": 92.29968,
        "gdp_percapita": 10692.728
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 2005,
        "litreacy": 92.84866,
        "gdp_percapita": 10150.708
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 2004,
        "litreacy": 92.80378,
        "gdp_percapita": 9816.277
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 1996,
        "litreacy": 91.20716,
        "gdp_percapita": 9538.272
    },
    {
        "country": "Colombia",
        "code": "CO",
        "year": 1993,
        "litreacy": 91.06309,
        "gdp_percapita": 8885.187
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1981,
        "litreacy": 85,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1980,
        "litreacy": 84,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1979,
        "litreacy": 84,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1978,
        "litreacy": 83,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1977,
        "litreacy": 82,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1976,
        "litreacy": 82,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1975,
        "litreacy": 81,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1974,
        "litreacy": 81,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1973,
        "litreacy": 80,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1972,
        "litreacy": 79,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1971,
        "litreacy": 79,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1970,
        "litreacy": 78,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1960,
        "litreacy": 70,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1950,
        "litreacy": 62,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1940,
        "litreacy": 57,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1930,
        "litreacy": 52,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1920,
        "litreacy": 44,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1910,
        "litreacy": 39,
        "gdp_percapita": null
    },
    {
        "country": "Colombia",
        "code": null,
        "year": 1900,
        "litreacy": 34,
        "gdp_percapita": null
    },
    {
        "country": "China",
        "code": "CN",
        "year": 2020,
        "litreacy": 97.15,
        "gdp_percapita": 16296.779
    },
    {
        "country": "China",
        "code": "CN",
        "year": 2015,
        "litreacy": 96.35745,
        "gdp_percapita": 12612.352
    },
    {
        "country": "China",
        "code": "CN",
        "year": 2010,
        "litreacy": 95.12448,
        "gdp_percapita": 8884.588
    },
    {
        "country": "China",
        "code": "CN",
        "year": 2000,
        "litreacy": 90.92021,
        "gdp_percapita": 3451.6792
    },
    {
        "country": "China",
        "code": "CN",
        "year": 1990,
        "litreacy": 77.78506,
        "gdp_percapita": 1423.8964
    },
    {
        "country": "China",
        "code": null,
        "year": 1982,
        "litreacy": 65.50509,
        "gdp_percapita": null
    },
    {
        "country": "Chile",
        "code": null,
        "year": 2022,
        "litreacy": 97.16,
        "gdp_percapita": null
    },
    {
        "country": "Chile",
        "code": "CL",
        "year": 2017,
        "litreacy": 96.40228,
        "gdp_percapita": 24546.912
    },
    {
        "country": "Chile",
        "code": "CL",
        "year": 2015,
        "litreacy": 96.87413,
        "gdp_percapita": 24464.746
    },
    {
        "country": "Chile",
        "code": "CL",
        "year": 2013,
        "litreacy": 96.26706,
        "gdp_percapita": 24011.592
    },
    {
        "country": "Chile",
        "code": "CL",
        "year": 2011,
        "litreacy": 96.70301,
        "gdp_percapita": 22323.723
    },
    {
        "country": "Chile",
        "code": "CL",
        "year": 2009,
        "litreacy": 98.55368,
        "gdp_percapita": 20255.1
    },
    {
        "country": "Chile",
        "code": "CL",
        "year": 2008,
        "litreacy": 98.64901,
        "gdp_percapita": 20695.562
    },
    {
        "country": "Chile",
        "code": "CL",
        "year": 2002,
        "litreacy": 95.71662,
        "gdp_percapita": 16053.654
    },
    {
        "country": "Chile",
        "code": "CL",
        "year": 1992,
        "litreacy": 94.29114,
        "gdp_percapita": 11256.21
    },
    {
        "country": "Chile",
        "code": null,
        "year": 1982,
        "litreacy": 91.1284,
        "gdp_percapita": null
    },
    {
        "country": "Chile",
        "code": null,
        "year": 1980,
        "litreacy": 92,
        "gdp_percapita": null
    },
    {
        "country": "Chile",
        "code": null,
        "year": 1979,
        "litreacy": 91,
        "gdp_percapita": null
    },
    {
        "country": "Chile",
        "code": null,
        "year": 1970,
        "litreacy": 88,
        "gdp_percapita": null
    },
    {
        "country": "Chile",
        "code": null,
        "year": 1960,
        "litreacy": 84,
        "gdp_percapita": null
    },
    {
        "country": "Chile",
        "code": null,
        "year": 1950,
        "litreacy": 79,
        "gdp_percapita": null
    },
    {
        "country": "Chile",
        "code": null,
        "year": 1940,
        "litreacy": 73,
        "gdp_percapita": null
    },
    {
        "country": "Chile",
        "code": null,
        "year": 1930,
        "litreacy": 75,
        "gdp_percapita": null
    },
    {
        "country": "Chile",
        "code": null,
        "year": 1920,
        "litreacy": 63,
        "gdp_percapita": null
    },
    {
        "country": "Chile",
        "code": null,
        "year": 1910,
        "litreacy": 53,
        "gdp_percapita": null
    },
    {
        "country": "Chile",
        "code": null,
        "year": 1900,
        "litreacy": 43,
        "gdp_percapita": null
    },
    {
        "country": "Chad",
        "code": null,
        "year": 2022,
        "litreacy": 27.28,
        "gdp_percapita": null
    },
    {
        "country": "Chad",
        "code": "TD",
        "year": 2016,
        "litreacy": 22.31155,
        "gdp_percapita": 1683.4781
    },
    {
        "country": "Chad",
        "code": "TD",
        "year": 2015,
        "litreacy": 26.00299,
        "gdp_percapita": 1853.2594
    },
    {
        "country": "Chad",
        "code": "TD",
        "year": 2014,
        "litreacy": 39.04967,
        "gdp_percapita": 1861.6929
    },
    {
        "country": "Chad",
        "code": "TD",
        "year": 2004,
        "litreacy": 28.38143,
        "gdp_percapita": 1448.41
    },
    {
        "country": "Chad",
        "code": "TD",
        "year": 2000,
        "litreacy": 25.65421,
        "gdp_percapita": 907.8335
    },
    {
        "country": "Chad",
        "code": "TD",
        "year": 1993,
        "litreacy": 10.89465,
        "gdp_percapita": 917.1849
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 2022,
        "litreacy": 99.42752,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 2021,
        "litreacy": 99.42526,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 2020,
        "litreacy": 99.41718,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 2019,
        "litreacy": 99.40212,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 2018,
        "litreacy": 99.38724,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 2017,
        "litreacy": 99.37043,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 2016,
        "litreacy": 99.3535,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 2015,
        "litreacy": 99.33277,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 2014,
        "litreacy": 99.31573,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 2013,
        "litreacy": 99.29847,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 1995,
        "litreacy": 98.61207,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 1994,
        "litreacy": 98.56429,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 1993,
        "litreacy": 98.51395,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 1992,
        "litreacy": 98.4627,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 1991,
        "litreacy": 98.40635,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 1990,
        "litreacy": 98.34538,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 1989,
        "litreacy": 98.27741,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 1988,
        "litreacy": 98.21289,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 1987,
        "litreacy": 98.12998,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 1986,
        "litreacy": 98.09401,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 1985,
        "litreacy": 98.06434,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 1984,
        "litreacy": 98.03503,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 1983,
        "litreacy": 97.999,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics (WB)",
        "code": null,
        "year": 1982,
        "litreacy": 97.97562,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics",
        "code": null,
        "year": 2010,
        "litreacy": 99.36096,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics",
        "code": null,
        "year": 2000,
        "litreacy": 98.96019,
        "gdp_percapita": null
    },
    {
        "country": "Central Europe and the Baltics",
        "code": null,
        "year": 1990,
        "litreacy": 98.59496,
        "gdp_percapita": null
    },
    {
        "country": "Central African Republic",
        "code": "CF",
        "year": 2020,
        "litreacy": 37.49,
        "gdp_percapita": 847.765
    },
    {
        "country": "Central African Republic",
        "code": "CF",
        "year": 2018,
        "litreacy": 37.39582,
        "gdp_percapita": 854.64746
    },
    {
        "country": "Central African Republic",
        "code": "CF",
        "year": 2015,
        "litreacy": 36.75261,
        "gdp_percapita": 795.03705
    },
    {
        "country": "Central African Republic",
        "code": "CF",
        "year": 2010,
        "litreacy": 36.75261,
        "gdp_percapita": 1130.8958
    },
    {
        "country": "Central African Republic",
        "code": "CF",
        "year": 2000,
        "litreacy": 50.64517,
        "gdp_percapita": 1007.24786
    },
    {
        "country": "Central African Republic",
        "code": null,
        "year": 1988,
        "litreacy": 33.62442,
        "gdp_percapita": null
    },
    {
        "country": "Central African Republic",
        "code": null,
        "year": 1975,
        "litreacy": 18.23617,
        "gdp_percapita": null
    },
    {
        "country": "Cayman Islands",
        "code": "KY",
        "year": 2017,
        "litreacy": 98.86782,
        "gdp_percapita": 69534.77
    },
    {
        "country": "Cayman Islands",
        "code": "KY",
        "year": 2007,
        "litreacy": 98.86782,
        "gdp_percapita": 84870.016
    },
    {
        "country": "Caribbean small states",
        "code": null,
        "year": 2010,
        "litreacy": 91.76071,
        "gdp_percapita": null
    },
    {
        "country": "Caribbean small states",
        "code": null,
        "year": 2000,
        "litreacy": 88.1378,
        "gdp_percapita": null
    },
    {
        "country": "Cape Verde",
        "code": null,
        "year": 2022,
        "litreacy": 91,
        "gdp_percapita": null
    },
    {
        "country": "Cape Verde",
        "code": null,
        "year": 2015,
        "litreacy": 86.79029,
        "gdp_percapita": 5955.607
    },
    {
        "country": "Cape Verde",
        "code": null,
        "year": 2012,
        "litreacy": 85.32779,
        "gdp_percapita": 6013.055
    },
    {
        "country": "Cape Verde",
        "code": null,
        "year": 2004,
        "litreacy": 80.01972,
        "gdp_percapita": 4419.0527
    },
    {
        "country": "Cape Verde",
        "code": null,
        "year": 2000,
        "litreacy": 76.11044,
        "gdp_percapita": 3798.68
    },
    {
        "country": "Cape Verde",
        "code": null,
        "year": 1990,
        "litreacy": 62.79686,
        "gdp_percapita": 1620.9843
    },
    {
        "country": "Canada",
        "code": "CA",
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": 42793.08
    },
    {
        "country": "Cameroon",
        "code": "CM",
        "year": 2020,
        "litreacy": 78.23,
        "gdp_percapita": 3665.5105
    },
    {
        "country": "Cameroon",
        "code": "CM",
        "year": 2018,
        "litreacy": 77.07104,
        "gdp_percapita": 3732.5012
    },
    {
        "country": "Cameroon",
        "code": "CM",
        "year": 2015,
        "litreacy": 74.98558,
        "gdp_percapita": 3614.7556
    },
    {
        "country": "Cameroon",
        "code": "CM",
        "year": 2010,
        "litreacy": 71.29051,
        "gdp_percapita": 3298.6245
    },
    {
        "country": "Cameroon",
        "code": "CM",
        "year": 2007,
        "litreacy": 70.67994,
        "gdp_percapita": 3309.2822
    },
    {
        "country": "Cameroon",
        "code": "CM",
        "year": 2000,
        "litreacy": 68.40916,
        "gdp_percapita": 2937.992
    },
    {
        "country": "Cameroon",
        "code": null,
        "year": 1976,
        "litreacy": 41.21621,
        "gdp_percapita": null
    },
    {
        "country": "Cambodia",
        "code": null,
        "year": 2022,
        "litreacy": 83.78,
        "gdp_percapita": null
    },
    {
        "country": "Cambodia",
        "code": "KH",
        "year": 2015,
        "litreacy": 80.52649,
        "gdp_percapita": 3565.245
    },
    {
        "country": "Cambodia",
        "code": "KH",
        "year": 2014,
        "litreacy": 78.05509,
        "gdp_percapita": 3378.3645
    },
    {
        "country": "Cambodia",
        "code": "KH",
        "year": 2009,
        "litreacy": 76.13796,
        "gdp_percapita": 2592.1555
    },
    {
        "country": "Cambodia",
        "code": "KH",
        "year": 2008,
        "litreacy": 76.87129,
        "gdp_percapita": 2629.259
    },
    {
        "country": "Cambodia",
        "code": "KH",
        "year": 2004,
        "litreacy": 73.60995,
        "gdp_percapita": 1909.4185
    },
    {
        "country": "Cambodia",
        "code": "KH",
        "year": 1998,
        "litreacy": 67.33503,
        "gdp_percapita": 1244.981
    },
    {
        "country": "Burundi",
        "code": null,
        "year": 2022,
        "litreacy": 75.54,
        "gdp_percapita": null
    },
    {
        "country": "Burundi",
        "code": "BI",
        "year": 2017,
        "litreacy": 68.37533,
        "gdp_percapita": 750.7876
    },
    {
        "country": "Burundi",
        "code": "BI",
        "year": 2015,
        "litreacy": 85.49609,
        "gdp_percapita": 781.5793
    },
    {
        "country": "Burundi",
        "code": "BI",
        "year": 2014,
        "litreacy": 61.51349,
        "gdp_percapita": 831.29486
    },
    {
        "country": "Burundi",
        "code": "BI",
        "year": 2008,
        "litreacy": 48.08406,
        "gdp_percapita": 812.59216
    },
    {
        "country": "Burundi",
        "code": "BI",
        "year": 2000,
        "litreacy": 59.30362,
        "gdp_percapita": 837.3484
    },
    {
        "country": "Burundi",
        "code": "BI",
        "year": 1990,
        "litreacy": 37.38472,
        "gdp_percapita": 1175.155
    },
    {
        "country": "Burundi",
        "code": null,
        "year": 1979,
        "litreacy": 22.50855,
        "gdp_percapita": null
    },
    {
        "country": "Burkina Faso",
        "code": null,
        "year": 2022,
        "litreacy": 34.49,
        "gdp_percapita": null
    },
    {
        "country": "Burkina Faso",
        "code": "BF",
        "year": 2019,
        "litreacy": 29.66328,
        "gdp_percapita": 2110.0623
    },
    {
        "country": "Burkina Faso",
        "code": "BF",
        "year": 2018,
        "litreacy": 39.34585,
        "gdp_percapita": 2051.2185
    },
    {
        "country": "Burkina Faso",
        "code": "BF",
        "year": 2015,
        "litreacy": 37.7467,
        "gdp_percapita": 1862.8547
    },
    {
        "country": "Burkina Faso",
        "code": "BF",
        "year": 2014,
        "litreacy": 34.5994,
        "gdp_percapita": 1846.6451
    },
    {
        "country": "Burkina Faso",
        "code": "BF",
        "year": 2007,
        "litreacy": 28.29366,
        "gdp_percapita": 1536.3859
    },
    {
        "country": "Burkina Faso",
        "code": "BF",
        "year": 2006,
        "litreacy": 22.47258,
        "gdp_percapita": 1521.1544
    },
    {
        "country": "Burkina Faso",
        "code": "BF",
        "year": 2005,
        "litreacy": 23.5222,
        "gdp_percapita": 1477.0398
    },
    {
        "country": "Burkina Faso",
        "code": "BF",
        "year": 2003,
        "litreacy": 21.82292,
        "gdp_percapita": 1385.4551
    },
    {
        "country": "Burkina Faso",
        "code": "BF",
        "year": 1996,
        "litreacy": 12.84817,
        "gdp_percapita": 1135.2567
    },
    {
        "country": "Burkina Faso",
        "code": "BF",
        "year": 1991,
        "litreacy": 13.56923,
        "gdp_percapita": 1044.174
    },
    {
        "country": "Burkina Faso",
        "code": null,
        "year": 1975,
        "litreacy": 8.83023,
        "gdp_percapita": null
    },
    {
        "country": "Bulgaria",
        "code": "BG",
        "year": 2021,
        "litreacy": 98.42,
        "gdp_percapita": 24398.13
    },
    {
        "country": "Bulgaria",
        "code": "BG",
        "year": 2015,
        "litreacy": 98.38858,
        "gdp_percapita": 19991.818
    },
    {
        "country": "Bulgaria",
        "code": "BG",
        "year": 2011,
        "litreacy": 98.35245,
        "gdp_percapita": 18664.834
    },
    {
        "country": "Bulgaria",
        "code": "BG",
        "year": 2001,
        "litreacy": 98.20356,
        "gdp_percapita": 11127.175
    },
    {
        "country": "Brunei",
        "code": null,
        "year": 2021,
        "litreacy": 97.59,
        "gdp_percapita": 60127.023
    },
    {
        "country": "Brunei",
        "code": null,
        "year": 2018,
        "litreacy": 97.21411,
        "gdp_percapita": 59650.23
    },
    {
        "country": "Brunei",
        "code": null,
        "year": 2015,
        "litreacy": 96.65653,
        "gdp_percapita": 62170.086
    },
    {
        "country": "Brunei",
        "code": null,
        "year": 2011,
        "litreacy": 96.08556,
        "gdp_percapita": 68037.52
    },
    {
        "country": "Brunei",
        "code": null,
        "year": 2001,
        "litreacy": 92.67113,
        "gdp_percapita": 69338.92
    },
    {
        "country": "Brunei",
        "code": null,
        "year": 1991,
        "litreacy": 87.80418,
        "gdp_percapita": 70439.055
    },
    {
        "country": "Brunei",
        "code": null,
        "year": 1981,
        "litreacy": 77.7355,
        "gdp_percapita": null
    },
    {
        "country": "British Virgin Islands",
        "code": null,
        "year": 1991,
        "litreacy": 97.8,
        "gdp_percapita": null
    },
    {
        "country": "Brazil",
        "code": null,
        "year": 2022,
        "litreacy": 94.69,
        "gdp_percapita": null
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2018,
        "litreacy": 93.2275,
        "gdp_percapita": 14619.591
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2017,
        "litreacy": 93.07582,
        "gdp_percapita": 14477.861
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2016,
        "litreacy": 92.80844,
        "gdp_percapita": 14402.494
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2015,
        "litreacy": 92.0479,
        "gdp_percapita": 15011.577
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2014,
        "litreacy": 91.72943,
        "gdp_percapita": 15695.644
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2013,
        "litreacy": 91.48424,
        "gdp_percapita": 15751.484
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2012,
        "litreacy": 91.33785,
        "gdp_percapita": 15425.353
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2011,
        "litreacy": 91.41124,
        "gdp_percapita": 15271.47
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2010,
        "litreacy": 90.37918,
        "gdp_percapita": 14824.741
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2009,
        "litreacy": 90.29821,
        "gdp_percapita": 13916.963
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2008,
        "litreacy": 90.03662,
        "gdp_percapita": 14067.946
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2007,
        "litreacy": 90.00937,
        "gdp_percapita": 13518.848
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2006,
        "litreacy": 89.61523,
        "gdp_percapita": 12877.444
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2004,
        "litreacy": 88.61624,
        "gdp_percapita": 12268.664
    },
    {
        "country": "Brazil",
        "code": "BR",
        "year": 2000,
        "litreacy": 86.36788,
        "gdp_percapita": 11529.486
    },
    {
        "country": "Brazil",
        "code": null,
        "year": 1980,
        "litreacy": 74.58673,
        "gdp_percapita": null
    },
    {
        "country": "Brazil",
        "code": null,
        "year": 1979,
        "litreacy": 75,
        "gdp_percapita": null
    },
    {
        "country": "Brazil",
        "code": null,
        "year": 1970,
        "litreacy": 68,
        "gdp_percapita": null
    },
    {
        "country": "Brazil",
        "code": null,
        "year": 1960,
        "litreacy": 60,
        "gdp_percapita": null
    },
    {
        "country": "Brazil",
        "code": null,
        "year": 1950,
        "litreacy": 49,
        "gdp_percapita": null
    },
    {
        "country": "Brazil",
        "code": null,
        "year": 1940,
        "litreacy": 44,
        "gdp_percapita": null
    },
    {
        "country": "Brazil",
        "code": null,
        "year": 1930,
        "litreacy": 39,
        "gdp_percapita": null
    },
    {
        "country": "Brazil",
        "code": null,
        "year": 1920,
        "litreacy": 35,
        "gdp_percapita": null
    },
    {
        "country": "Brazil",
        "code": null,
        "year": 1910,
        "litreacy": 35,
        "gdp_percapita": null
    },
    {
        "country": "Brazil",
        "code": null,
        "year": 1900,
        "litreacy": 35,
        "gdp_percapita": null
    },
    {
        "country": "Botswana",
        "code": "BW",
        "year": 2015,
        "litreacy": 88.22441,
        "gdp_percapita": 13682.704
    },
    {
        "country": "Botswana",
        "code": "BW",
        "year": 2014,
        "litreacy": 87.70751,
        "gdp_percapita": 14665.272
    },
    {
        "country": "Botswana",
        "code": "BW",
        "year": 2013,
        "litreacy": 86.82318,
        "gdp_percapita": 14144.519
    },
    {
        "country": "Botswana",
        "code": "BW",
        "year": 2003,
        "litreacy": 81.18871,
        "gdp_percapita": 12054.874
    },
    {
        "country": "Botswana",
        "code": "BW",
        "year": 1991,
        "litreacy": 68.58091,
        "gdp_percapita": 9569.46
    },
    {
        "country": "Bosnia and Herzegovina",
        "code": null,
        "year": 2022,
        "litreacy": 98.3,
        "gdp_percapita": null
    },
    {
        "country": "Bosnia and Herzegovina",
        "code": "BA",
        "year": 2015,
        "litreacy": 98.48576,
        "gdp_percapita": 12292.545
    },
    {
        "country": "Bosnia and Herzegovina",
        "code": "BA",
        "year": 2014,
        "litreacy": 98.37765,
        "gdp_percapita": 11768.1045
    },
    {
        "country": "Bosnia and Herzegovina",
        "code": "BA",
        "year": 2013,
        "litreacy": 96.99177,
        "gdp_percapita": 11484.3545
    },
    {
        "country": "Bosnia and Herzegovina",
        "code": "BA",
        "year": 2011,
        "litreacy": 98.14204,
        "gdp_percapita": 10934.089
    },
    {
        "country": "Bosnia and Herzegovina",
        "code": "BA",
        "year": 2000,
        "litreacy": 96.6631,
        "gdp_percapita": 6826.658
    },
    {
        "country": "Bosnia and Herzegovina",
        "code": null,
        "year": 1991,
        "litreacy": 89.06359,
        "gdp_percapita": null
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 2020,
        "litreacy": 93.85256,
        "gdp_percapita": 7679.933
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 2015,
        "litreacy": 92.45508,
        "gdp_percapita": 7825.7666
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 2012,
        "litreacy": 94.46057,
        "gdp_percapita": 6952.7383
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 2011,
        "litreacy": 92.22615,
        "gdp_percapita": 6724.301
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 2009,
        "litreacy": 91.16783,
        "gdp_percapita": 6349.008
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 2008,
        "litreacy": 90.69811,
        "gdp_percapita": 6248.934
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 2007,
        "litreacy": 90.74347,
        "gdp_percapita": 5989.69
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 2001,
        "litreacy": 86.72367,
        "gdp_percapita": 5300.3145
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1992,
        "litreacy": 79.99177,
        "gdp_percapita": 4556.9937
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1976,
        "litreacy": 63.20815,
        "gdp_percapita": null
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1975,
        "litreacy": 63,
        "gdp_percapita": null
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1974,
        "litreacy": 62,
        "gdp_percapita": null
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1973,
        "litreacy": 61,
        "gdp_percapita": null
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1972,
        "litreacy": 60,
        "gdp_percapita": null
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1971,
        "litreacy": 59,
        "gdp_percapita": null
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1970,
        "litreacy": 58,
        "gdp_percapita": null
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1960,
        "litreacy": 44,
        "gdp_percapita": null
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1950,
        "litreacy": 32,
        "gdp_percapita": null
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1940,
        "litreacy": 28,
        "gdp_percapita": null
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1930,
        "litreacy": 25,
        "gdp_percapita": null
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1920,
        "litreacy": 22,
        "gdp_percapita": null
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1910,
        "litreacy": 20,
        "gdp_percapita": null
    },
    {
        "country": "Bolivia",
        "code": null,
        "year": 1900,
        "litreacy": 18,
        "gdp_percapita": null
    },
    {
        "country": "Bhutan",
        "code": null,
        "year": 2022,
        "litreacy": 72.1,
        "gdp_percapita": null
    },
    {
        "country": "Bhutan",
        "code": "BT",
        "year": 2017,
        "litreacy": 66.56115,
        "gdp_percapita": 10986.888
    },
    {
        "country": "Bhutan",
        "code": "BT",
        "year": 2015,
        "litreacy": 63.90682,
        "gdp_percapita": 9877.247
    },
    {
        "country": "Bhutan",
        "code": "BT",
        "year": 2012,
        "litreacy": 55.31756,
        "gdp_percapita": 8837.576
    },
    {
        "country": "Bhutan",
        "code": "BT",
        "year": 2005,
        "litreacy": 52.81469,
        "gdp_percapita": 5336.7764
    },
    {
        "country": "Bermuda",
        "code": "BM",
        "year": 2005,
        "litreacy": 98,
        "gdp_percapita": 91114.08
    },
    {
        "country": "Benin",
        "code": null,
        "year": 2022,
        "litreacy": 47.1,
        "gdp_percapita": null
    },
    {
        "country": "Benin",
        "code": "BJ",
        "year": 2015,
        "litreacy": 38.44714,
        "gdp_percapita": 2849.8206
    },
    {
        "country": "Benin",
        "code": "BJ",
        "year": 2012,
        "litreacy": 32.94882,
        "gdp_percapita": 2681.3516
    },
    {
        "country": "Benin",
        "code": "BJ",
        "year": 2006,
        "litreacy": 28.70211,
        "gdp_percapita": 2549.1943
    },
    {
        "country": "Benin",
        "code": "BJ",
        "year": 2002,
        "litreacy": 34.65785,
        "gdp_percapita": 2523.6099
    },
    {
        "country": "Benin",
        "code": "BJ",
        "year": 1992,
        "litreacy": 27.24517,
        "gdp_percapita": 2129.2012
    },
    {
        "country": "Benin",
        "code": null,
        "year": 1979,
        "litreacy": 16.48273,
        "gdp_percapita": null
    },
    {
        "country": "Belize",
        "code": "BZ",
        "year": 2015,
        "litreacy": 82.77682,
        "gdp_percapita": 9387.914
    },
    {
        "country": "Belize",
        "code": "BZ",
        "year": 2001,
        "litreacy": 80.9,
        "gdp_percapita": 8857.37
    },
    {
        "country": "Belize",
        "code": "BZ",
        "year": 1991,
        "litreacy": 70.29842,
        "gdp_percapita": 6981.0063
    },
    {
        "country": "Belgium",
        "code": "BE",
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": 44160.91
    },
    {
        "country": "Belgium",
        "code": null,
        "year": 1750,
        "litreacy": 13,
        "gdp_percapita": null
    },
    {
        "country": "Belgium",
        "code": null,
        "year": 1650,
        "litreacy": 25,
        "gdp_percapita": null
    },
    {
        "country": "Belgium",
        "code": null,
        "year": 1550,
        "litreacy": 17,
        "gdp_percapita": null
    },
    {
        "country": "Belgium",
        "code": null,
        "year": 1475,
        "litreacy": 10,
        "gdp_percapita": null
    },
    {
        "country": "Belarus",
        "code": "BY",
        "year": 2019,
        "litreacy": 99.874,
        "gdp_percapita": 19279.209
    },
    {
        "country": "Belarus",
        "code": "BY",
        "year": 2015,
        "litreacy": 99.72204,
        "gdp_percapita": 18362.746
    },
    {
        "country": "Belarus",
        "code": "BY",
        "year": 2009,
        "litreacy": 99.61706,
        "gdp_percapita": 16014.115
    },
    {
        "country": "Belarus",
        "code": "BY",
        "year": 1999,
        "litreacy": 99.59073,
        "gdp_percapita": 7575.9185
    },
    {
        "country": "Belarus",
        "code": null,
        "year": 1989,
        "litreacy": 97.88337,
        "gdp_percapita": null
    },
    {
        "country": "Barbados",
        "code": "BB",
        "year": 2002,
        "litreacy": 99.7,
        "gdp_percapita": 15167.127
    },
    {
        "country": "Barbados",
        "code": null,
        "year": 1980,
        "litreacy": 99.5,
        "gdp_percapita": null
    },
    {
        "country": "Barbados",
        "code": null,
        "year": 1970,
        "litreacy": 99.26808,
        "gdp_percapita": null
    },
    {
        "country": "Bangladesh",
        "code": "BD",
        "year": 2020,
        "litreacy": 74.9089,
        "gdp_percapita": 5591.374
    },
    {
        "country": "Bangladesh",
        "code": "BD",
        "year": 2019,
        "litreacy": 74.68446,
        "gdp_percapita": 5467.208
    },
    {
        "country": "Bangladesh",
        "code": "BD",
        "year": 2018,
        "litreacy": 73.9122,
        "gdp_percapita": 5124.4985
    },
    {
        "country": "Bangladesh",
        "code": "BD",
        "year": 2017,
        "litreacy": 72.89297,
        "gdp_percapita": 4830.776
    },
    {
        "country": "Bangladesh",
        "code": "BD",
        "year": 2016,
        "litreacy": 72.75872,
        "gdp_percapita": 4589.0938
    },
    {
        "country": "Bangladesh",
        "code": "BD",
        "year": 2015,
        "litreacy": 65.13733,
        "gdp_percapita": 4337.3857
    },
    {
        "country": "Bangladesh",
        "code": "BD",
        "year": 2014,
        "litreacy": 61.0933,
        "gdp_percapita": 4119.425
    },
    {
        "country": "Bangladesh",
        "code": "BD",
        "year": 2013,
        "litreacy": 61.01554,
        "gdp_percapita": 3932.7083
    },
    {
        "country": "Bangladesh",
        "code": "BD",
        "year": 2012,
        "litreacy": 57.86075,
        "gdp_percapita": 3756.932
    },
    {
        "country": "Bangladesh",
        "code": "BD",
        "year": 2011,
        "litreacy": 58.76918,
        "gdp_percapita": 3571.0586
    },
    {
        "country": "Bangladesh",
        "code": "BD",
        "year": 2007,
        "litreacy": 46.6636,
        "gdp_percapita": 2973.2812
    },
    {
        "country": "Bangladesh",
        "code": "BD",
        "year": 2001,
        "litreacy": 47.4855,
        "gdp_percapita": 2337.3645
    },
    {
        "country": "Bangladesh",
        "code": "BD",
        "year": 1991,
        "litreacy": 35.3193,
        "gdp_percapita": 1756.3326
    },
    {
        "country": "Bangladesh",
        "code": null,
        "year": 1981,
        "litreacy": 29.22723,
        "gdp_percapita": null
    },
    {
        "country": "Bahrain",
        "code": "BH",
        "year": 2015,
        "litreacy": 95.71726,
        "gdp_percapita": 48453.727
    },
    {
        "country": "Bahrain",
        "code": "BH",
        "year": 2011,
        "litreacy": 92.3,
        "gdp_percapita": 46564.71
    },
    {
        "country": "Bahrain",
        "code": "BH",
        "year": 2010,
        "litreacy": 94.55679,
        "gdp_percapita": 45600.066
    },
    {
        "country": "Bahrain",
        "code": "BH",
        "year": 2001,
        "litreacy": 86.54874,
        "gdp_percapita": 46084.926
    },
    {
        "country": "Bahrain",
        "code": "BH",
        "year": 1991,
        "litreacy": 84.01383,
        "gdp_percapita": 39769.312
    },
    {
        "country": "Bahrain",
        "code": null,
        "year": 1981,
        "litreacy": 69.75351,
        "gdp_percapita": null
    },
    {
        "country": "Bahamas",
        "code": "BS",
        "year": 2003,
        "litreacy": 95.6,
        "gdp_percapita": 37103.4
    },
    {
        "country": "Azerbaijan",
        "code": "AZ",
        "year": 2019,
        "litreacy": 99.79598,
        "gdp_percapita": 14442.041
    },
    {
        "country": "Azerbaijan",
        "code": "AZ",
        "year": 2017,
        "litreacy": 99.79123,
        "gdp_percapita": 14121.407
    },
    {
        "country": "Azerbaijan",
        "code": "AZ",
        "year": 2016,
        "litreacy": 99.79006,
        "gdp_percapita": 14232.192
    },
    {
        "country": "Azerbaijan",
        "code": "AZ",
        "year": 2015,
        "litreacy": 99.78806,
        "gdp_percapita": 14852.611
    },
    {
        "country": "Azerbaijan",
        "code": "AZ",
        "year": 2014,
        "litreacy": 99.78899,
        "gdp_percapita": 14867.943
    },
    {
        "country": "Azerbaijan",
        "code": "AZ",
        "year": 2013,
        "litreacy": 99.78936,
        "gdp_percapita": 14651.694
    },
    {
        "country": "Azerbaijan",
        "code": "AZ",
        "year": 2012,
        "litreacy": 99.77577,
        "gdp_percapita": 14027.469
    },
    {
        "country": "Azerbaijan",
        "code": "AZ",
        "year": 2011,
        "litreacy": 99.77863,
        "gdp_percapita": 13913.837
    },
    {
        "country": "Azerbaijan",
        "code": "AZ",
        "year": 2010,
        "litreacy": 99.77114,
        "gdp_percapita": 14082.238
    },
    {
        "country": "Azerbaijan",
        "code": "AZ",
        "year": 2009,
        "litreacy": 99.75984,
        "gdp_percapita": 13565.855
    },
    {
        "country": "Azerbaijan",
        "code": "AZ",
        "year": 2007,
        "litreacy": 99.59319,
        "gdp_percapita": 11684.191
    },
    {
        "country": "Azerbaijan",
        "code": "AZ",
        "year": 1999,
        "litreacy": 98.7918,
        "gdp_percapita": 3628.7168
    },
    {
        "country": "Austria",
        "code": "AT",
        "year": 2011,
        "litreacy": 98,
        "gdp_percapita": 53179.15
    },
    {
        "country": "Australia",
        "code": "AU",
        "year": 2003,
        "litreacy": 99,
        "gdp_percapita": 40642.562
    },
    {
        "country": "Aruba",
        "code": "AW",
        "year": 2020,
        "litreacy": 97.99,
        "gdp_percapita": 33155.242
    },
    {
        "country": "Aruba",
        "code": "AW",
        "year": 2015,
        "litreacy": 97.5242,
        "gdp_percapita": 36490.523
    },
    {
        "country": "Aruba",
        "code": "AW",
        "year": 2010,
        "litreacy": 96.82264,
        "gdp_percapita": 33639.395
    },
    {
        "country": "Aruba",
        "code": "AW",
        "year": 2000,
        "litreacy": 97.29125,
        "gdp_percapita": 37241.03
    },
    {
        "country": "Armenia",
        "code": "AM",
        "year": 2020,
        "litreacy": 99.78861,
        "gdp_percapita": 13357.697
    },
    {
        "country": "Armenia",
        "code": "AM",
        "year": 2017,
        "litreacy": 99.73607,
        "gdp_percapita": 12509.64
    },
    {
        "country": "Armenia",
        "code": "AM",
        "year": 2016,
        "litreacy": 99.74441,
        "gdp_percapita": 11580.384
    },
    {
        "country": "Armenia",
        "code": "AM",
        "year": 2015,
        "litreacy": 99.76842,
        "gdp_percapita": 11506.039
    },
    {
        "country": "Armenia",
        "code": "AM",
        "year": 2011,
        "litreacy": 99.74441,
        "gdp_percapita": 9551.158
    },
    {
        "country": "Armenia",
        "code": "AM",
        "year": 2001,
        "litreacy": 99.40016,
        "gdp_percapita": 4346.9077
    },
    {
        "country": "Armenia",
        "code": null,
        "year": 1989,
        "litreacy": 98.75196,
        "gdp_percapita": null
    },
    {
        "country": "Argentina",
        "code": "AR",
        "year": 2015,
        "litreacy": 98.08997,
        "gdp_percapita": 23933.887
    },
    {
        "country": "Argentina",
        "code": "AR",
        "year": 2014,
        "litreacy": 98.03402,
        "gdp_percapita": 23550.1
    },
    {
        "country": "Argentina",
        "code": "AR",
        "year": 2001,
        "litreacy": 97.19331,
        "gdp_percapita": 17514.504
    },
    {
        "country": "Argentina",
        "code": "AR",
        "year": 1991,
        "litreacy": 96.04072,
        "gdp_percapita": 15209.487
    },
    {
        "country": "Argentina",
        "code": null,
        "year": 1980,
        "litreacy": 93.91286,
        "gdp_percapita": null
    },
    {
        "country": "Argentina",
        "code": null,
        "year": 1979,
        "litreacy": 94.2,
        "gdp_percapita": null
    },
    {
        "country": "Argentina",
        "code": null,
        "year": 1970,
        "litreacy": 93,
        "gdp_percapita": null
    },
    {
        "country": "Argentina",
        "code": null,
        "year": 1960,
        "litreacy": 91.4,
        "gdp_percapita": null
    },
    {
        "country": "Argentina",
        "code": null,
        "year": 1950,
        "litreacy": 87.6,
        "gdp_percapita": null
    },
    {
        "country": "Argentina",
        "code": null,
        "year": 1940,
        "litreacy": 81.7,
        "gdp_percapita": null
    },
    {
        "country": "Argentina",
        "code": null,
        "year": 1930,
        "litreacy": 74.9,
        "gdp_percapita": null
    },
    {
        "country": "Argentina",
        "code": null,
        "year": 1920,
        "litreacy": 68.2,
        "gdp_percapita": null
    },
    {
        "country": "Argentina",
        "code": null,
        "year": 1910,
        "litreacy": 60.4,
        "gdp_percapita": null
    },
    {
        "country": "Argentina",
        "code": null,
        "year": 1900,
        "litreacy": 51.3,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2022,
        "litreacy": 75.17153,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2021,
        "litreacy": 75.23118,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2020,
        "litreacy": 75.02288,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2019,
        "litreacy": 74.60366,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2018,
        "litreacy": 74.28613,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2017,
        "litreacy": 77.1703,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2016,
        "litreacy": 76.38673,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2015,
        "litreacy": 74.98121,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2014,
        "litreacy": 77.57787,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2013,
        "litreacy": 73.27648,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2012,
        "litreacy": 75.70189,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2011,
        "litreacy": 72.2775,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2010,
        "litreacy": 70.51842,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2009,
        "litreacy": 69.58039,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2008,
        "litreacy": 70.67663,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2007,
        "litreacy": 69.87659,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2006,
        "litreacy": 69.12741,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2005,
        "litreacy": 70.23333,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2004,
        "litreacy": 70.57378,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2003,
        "litreacy": 69.98903,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2002,
        "litreacy": 67.3602,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2001,
        "litreacy": 66.24235,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 2000,
        "litreacy": 64.8063,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1999,
        "litreacy": 64.11116,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1998,
        "litreacy": 63.03689,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1997,
        "litreacy": 61.82833,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1996,
        "litreacy": 60.88104,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1995,
        "litreacy": 59.59429,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1994,
        "litreacy": 58.44878,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1993,
        "litreacy": 57.68294,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1992,
        "litreacy": 56.86386,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1991,
        "litreacy": 55.81391,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1990,
        "litreacy": 54.79577,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1989,
        "litreacy": 53.85493,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1988,
        "litreacy": 52.97973,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1987,
        "litreacy": 51.98211,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1986,
        "litreacy": 51.30673,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1985,
        "litreacy": 50.50422,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1984,
        "litreacy": 49.61644,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1983,
        "litreacy": 48.89918,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1982,
        "litreacy": 48.67683,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1981,
        "litreacy": 48.11101,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1980,
        "litreacy": 47.53087,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1979,
        "litreacy": 46.94826,
        "gdp_percapita": null
    },
    {
        "country": "Arab World (WB)",
        "code": null,
        "year": 1978,
        "litreacy": 46.47531,
        "gdp_percapita": null
    },
    {
        "country": "Arab World",
        "code": null,
        "year": 2010,
        "litreacy": 77.364586,
        "gdp_percapita": null
    },
    {
        "country": "Arab World",
        "code": null,
        "year": 2000,
        "litreacy": 66.006065,
        "gdp_percapita": null
    },
    {
        "country": "Arab World",
        "code": null,
        "year": 1990,
        "litreacy": 54.59347,
        "gdp_percapita": null
    },
    {
        "country": "Antigua and Barbuda",
        "code": "AG",
        "year": 2014,
        "litreacy": 98.95,
        "gdp_percapita": 18779.48
    },
    {
        "country": "Antigua and Barbuda",
        "code": "AG",
        "year": 2001,
        "litreacy": 98.95,
        "gdp_percapita": 17433.018
    },
    {
        "country": "Anguilla",
        "code": null,
        "year": 1984,
        "litreacy": 95,
        "gdp_percapita": null
    },
    {
        "country": "Angola",
        "code": null,
        "year": 2022,
        "litreacy": 72.4,
        "gdp_percapita": null
    },
    {
        "country": "Angola",
        "code": "AO",
        "year": 2015,
        "litreacy": 71.16416,
        "gdp_percapita": 7967.104
    },
    {
        "country": "Angola",
        "code": "AO",
        "year": 2014,
        "litreacy": 66.03011,
        "gdp_percapita": 8183.678
    },
    {
        "country": "Angola",
        "code": "AO",
        "year": 2001,
        "litreacy": 67.40542,
        "gdp_percapita": 4747.8276
    },
    {
        "country": "Andorra",
        "code": null,
        "year": 2011,
        "litreacy": 100,
        "gdp_percapita": null
    },
    {
        "country": "American Samoa",
        "code": null,
        "year": 1980,
        "litreacy": 97.34416,
        "gdp_percapita": null
    },
    {
        "country": "Algeria",
        "code": "DZ",
        "year": 2018,
        "litreacy": 81.40784,
        "gdp_percapita": 11725.878
    },
    {
        "country": "Algeria",
        "code": "DZ",
        "year": 2015,
        "litreacy": 79.6084,
        "gdp_percapita": 11751.634
    },
    {
        "country": "Algeria",
        "code": "DZ",
        "year": 2008,
        "litreacy": 75.13605,
        "gdp_percapita": 10847.177
    },
    {
        "country": "Algeria",
        "code": "DZ",
        "year": 2006,
        "litreacy": 72.64868,
        "gdp_percapita": 10592.247
    },
    {
        "country": "Algeria",
        "code": "DZ",
        "year": 2002,
        "litreacy": 69.8735,
        "gdp_percapita": 9299.683
    },
    {
        "country": "Algeria",
        "code": null,
        "year": 1987,
        "litreacy": 49.63088,
        "gdp_percapita": null
    },
    {
        "country": "Albania",
        "code": null,
        "year": 2022,
        "litreacy": 98.5,
        "gdp_percapita": null
    },
    {
        "country": "Albania",
        "code": "AL",
        "year": 2015,
        "litreacy": 97.5539,
        "gdp_percapita": 11880.598
    },
    {
        "country": "Albania",
        "code": "AL",
        "year": 2012,
        "litreacy": 97.24697,
        "gdp_percapita": 11229.992
    },
    {
        "country": "Albania",
        "code": "AL",
        "year": 2011,
        "litreacy": 96.8453,
        "gdp_percapita": 11054.788
    },
    {
        "country": "Albania",
        "code": "AL",
        "year": 2008,
        "litreacy": 95.93864,
        "gdp_percapita": 9913.951
    },
    {
        "country": "Albania",
        "code": "AL",
        "year": 2001,
        "litreacy": 98.71298,
        "gdp_percapita": 6442.612
    },
    {
        "country": "Afghanistan",
        "code": "AF",
        "year": 2021,
        "litreacy": 37.26604,
        "gdp_percapita": 1516.3057
    },
    {
        "country": "Afghanistan",
        "code": "AF",
        "year": 2015,
        "litreacy": 38.16804,
        "gdp_percapita": 2108.714
    },
    {
        "country": "Afghanistan",
        "code": "AF",
        "year": 2011,
        "litreacy": 31.44885,
        "gdp_percapita": 1961.0963
    },
    {
        "country": "Afghanistan",
        "code": null,
        "year": 1979,
        "litreacy": 18.15768,
        "gdp_percapita": null
    }
];