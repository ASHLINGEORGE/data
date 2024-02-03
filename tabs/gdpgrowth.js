let mapData, country, flag;
let allValues = {};
let baseUrl;
let mac = false;
let chart;
let selectedCountry;
const missingFlags = {
    "Cabo Verde": "CV",
    "Lao P.D.R.": "LA",
    "S\u00E3o Tom\u00E9 and Pr\u00EDncipe": "ST",
    "T\u00FCrkiye, Republic of": "TR",
    "Micronesia, Fed. States of": "FM",
    "West Bank and Gaza": "PS",
    "C\u00F4te d'Ivoire": "CI",
    "Kyrgyz Republic": "KG"
};
document.addEventListener("DOMContentLoaded", function () {
    // Detect platform for URL configuration
    if (navigator.platform.toLowerCase().startsWith('mac')) {
        baseUrl = "https://api.allorigins.win/get?url=";
        mac = true;
    } else {
        baseUrl = "https://corsproxy.io/?";
    }

    // Fetch data from API endpoints
    const countryFetch = fetchData('https://www.imf.org/external/datamapper/api/v1/countries');
    const mapFetch = fetchData('https://www.imf.org/external/datamapper/api/v1/NGDP_RPCH');
    const flagFetch = fetchData('https://gist.githubusercontent.com/DmytroLisitsyn/1c31186e5b66f1d6c52da6b5c70b12ad/raw/2bc71083a77106afec2ec37cf49d05ee54be1a22/country_dial_info.json');

    // Handle all API fetches using Promise.all
    Promise.all([mapFetch, countryFetch, flagFetch])
        .then(dataArray => handleApiData(dataArray))
        .catch(error => handleError(error));

    function fetchData(url) {
        return fetch(baseUrl + encodeURIComponent(url))
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            });
    }

    function handleApiData(dataArray) {
        [mapData, country, flag] = mac ? dataArray.map(data => JSON.parse(data.contents)) : dataArray;

        if (!mapData?.values?.NGDP_RPCH || !country?.countries) {
            throw new Error(`Data error`);
        }

        mapData = mapData.values.NGDP_RPCH;
        country = country.countries;
        loadPage(selectedYear);
    }

    function handleError(error) {
        console.error('Error fetching data:', error);
    }
});
function loadPage(year) {
    updateMap(year);
    document.getElementById('yearSlider').value = year;

    Object.keys(mapData).forEach(x => {
        if (country[x]) {
            Object.keys(mapData[x]).forEach(y => {            
                allValues[y] = (parseFloat(allValues[y]) || 0) + parseFloat(mapData[x][y]);
            });
        }
    });

    if (!selectedCountry) {
        createLineChart(allValues, year);
    } else {
        Object.keys(country).forEach(x => {
            if (country[x].label === selectedCountry) {
                createLineChart(allValues, year, selectedCountry, mapData[x]);
                return;
            }
        });
    }
}

function updateMap(selectedYear) {
    console.log("selectedYearUpdateMAP", selectedYear);    
    var customColorScale = [
        [0, 'rgb(255, 128, 128)'], // Light pastel red for values at 0 (bottom 25%)
        [0.25, 'rgb(255, 128, 128)'], // Light pastel red for values around 0.25 (bottom 25%)
        [0.5, 'rgb(230, 230, 250)'], // Pastel  for values at 0.5 (middle 50%)
        [0.75, 'rgb(173, 216, 230)'], // Pastel blue for values around 0.75 (middle 50%)
        [1, 'rgb(144, 238, 144)'] // Light pastel green for values at 1 (top 25%)
    ];

    var mapValue = Object.keys(mapData).map(
        function (x) {
            if (country[x]) {
                return {
                    key: country[x].label,
                    value: mapData[x][selectedYear]
                }
            }
        }).filter(function (x) {
            return !(x == undefined || isNaN(x.value));
        });

    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: mapValue.map(d => d.key),
        z: mapValue.map(d => d.value),
        text: mapValue.map(d => d.key),
        colorscale: customColorScale,
        colorbar: {
            y: 0.1, x: 1.2, yanchor: "bottom", len: .8, title: { text: "GDP Growth Scale", side: "right" },
            xanchor: "right"
        }
    }];

    var layout = {
        mapbox: { style: "dark", center: { lon: -110, lat: 50 }, zoom: 1.5 },
        width: 900, height: 400, margin: { t: 0, b: 0 }
    };
    //document.getElementById('header').innerHTML = 'Real GDP Growth in ' + selectedYear;
    // Update the map
    Plotly.newPlot('gdpgrowth', data, layout);

    // Add an event listener for plotly_click event
    document.getElementById('gdpgrowth').on('plotly_click', function (eventData) {
        if (eventData.points.length > 0) {
            // Extract the clicked country name
            selectedCountry = eventData.points[0].location;
            Object.keys(country).forEach(
                function (x) {
                    if (country[x].label == selectedCountry) {
                        createLineChart(allValues, selectedYear, selectedCountry, mapData[x])
                        return;
                    }
                }
            )
        }
    });
    updateCountriesTable(mapValue.sort((a, b) => b.value - a.value).slice(0, 5), "top");
    updateCountriesTable(mapValue.sort((a, b) => a.value - b.value).slice(0, 5), "bottom");
}

function createLineChart(allValues, year, country, countryValues) {

    const ctx = document.getElementById('myChart').getContext('2d');

    var values = {
        type: 'bar',
        data: {
            labels: Object.keys(allValues).slice(0, year - 1980 + 1),
            datasets: [{
                fill: false,
                type: 'bar', // Set the chart type for this dataset to line
                label: 'All',
                backgroundColor: 'rgb(242, 143, 62)',
                data: Object.values(allValues).slice(0, year - 1980 + 1),
                yAxisID: 'y-axis-1',
            }],
        },
        options: {
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: 'white' // Set the label color to white
                    }
                }
            },
            scales: {
                y: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                    grid: {
                        drawOnChartArea: false,
                    },                    
                    ticks: {
                        beginAtZero: true,
                        color: 'white'
                    }
                }, {
                    type: 'linear', // Set the type of the right y-axis
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    ticks: {
                        beginAtZero: true,
                        color: 'white'
                    }
                }],
                x: {
                    ticks: {
                        stepSize: 1,
                        color: 'white'
                    }
                },
            },
            interaction: {
                mode: 'index',
                intersect: false,
            },
            onClick: function (event, elements) {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const value = Object.keys(allValues)[index];
                    loadPage(value);
                }
            },
        },
    };

    if (countryValues != null) {
        values.data.datasets.unshift({
            type: 'line',
            label: country,
            backgroundColor: 'red',
            borderColor: 'white',
            borderWidth: 2,
            borderRadius: 50,
            data: Object.values(countryValues),
            yAxisID: 'y-axis-2',
        });      
    }
    if (chart) {
        chart.destroy();
    }
    chart = new Chart(ctx, values);
}

function updateCountriesTable(countryData, sort) {
    // Update HTML Table
    let tableBody = document.getElementById(sort + 'CountriesTableBody');
    tableBody.innerHTML = '';
    flag.forEach(function (x) {
        countryData.forEach(function (y) {
            if (y.key.includes(x.name) || x.name.includes(y.key)) {
                y["code"] = x.code;
            }
        });
    });
    countryData.forEach(country => {
        let row = tableBody.insertRow();
        let nameCell = row.insertCell(0);
        let growthCell = row.insertCell(1);
        var img = document.createElement("img");
        country.code = country.code ?? missingFlags[country.key];
        img.src = "https://flagsapi.com/" + country.code + "/flat/64.png";
        img.alt = country.key;
        img.style.width = "25px"; // Set the width as needed
        nameCell.appendChild(img);
        var spanElement = document.createElement("span");
        spanElement.textContent = country.key;
        nameCell.appendChild(spanElement);
        growthCell.innerHTML = country.value.toFixed(2) + '%'; // Format the growth rate
    });
}