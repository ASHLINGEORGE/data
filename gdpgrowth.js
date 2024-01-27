var mapData, country;
var allValues = {};
var countryFetch = fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.imf.org/external/datamapper/api/v1/countries'))
.then(response=>{
  // Check if the request was successful (status code 200)
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }  
  // Parse the response as JSON
  return response.json();
});

var mapFetch = fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.imf.org/external/datamapper/api/v1/NGDP_RPCH'))
.then(response=>{
  // Check if the request was successful (status code 200)
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }  
  // Parse the response as JSON
  return response.json();
});

Promise.all([mapFetch, countryFetch])
    .then(dataArray => {
        // Both API calls have completed successfully
        mapData = JSON.parse(dataArray[0].contents);
        country = JSON.parse(dataArray[1].contents);

        // Handle the Map data
        if (mapData == null || mapData.values == null || mapData.values.NGDP_RPCH == null) {
            throw new Error(`Data errer`);
        }
        mapData = mapData.values.NGDP_RPCH;

        // Handle the Country data
        if (country == null || country.countries == null) {
            throw new Error(`Data errer`);
        }
        country = country.countries;

        updateMap("1980");
        document.getElementById('yearSlider').value = "1980";
        Object.keys(mapData).forEach(
            function (x) {
                if (country[x]) {
                    Object.keys(mapData[x]).forEach(
                        function (y) {
                            allValues[y] = parseFloat(allValues[y] == undefined ? 0 : allValues[y]) + parseFloat(mapData[x][y]);
                        }
                    )
                }
            }
        );
        createLineChart(allValues, "1980");
    })
    .catch(error => {
        // Handle errors from either API call
        console.error('Error fetching data:', error);
    });



function updateMap(selectedYear) {
    console.log("selectedYearUpdateMAP", selectedYear);
    //updateLineChart(selectedYear);  
    var customColorScale = [
        [0, 'rgb(255, 128, 128)'], // Light pastel red for values at 0 (bottom 25%)
        [0.25, 'rgb(255, 128, 128)'], // Light pastel red for values around 0.25 (bottom 25%)
        [0.5, 'rgb(230, 230, 250)'], // Pastel  for values at 0.5 (middle 50%)
        [0.75, 'rgb(173, 216, 230)'], // Pastel blue for values around 0.75 (middle 50%)
        [1, 'rgb(144, 238, 144)'] // Light pastel green for values at 1 (top 25%)
    ];

    var mapValue = Object.keys(mapData).map(
                function(x){
                    if (country[x]) {
                        return{
                            key: country[x].label,
                            value: mapData[x][selectedYear]
                            }
                    }
                }).filter(function(x) {
                    return !(x == undefined || isNaN(x.value));
                });


    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: mapValue.map(d => d.key),
        z: mapValue.map(d => d.value),
        text: mapValue.map(d => d.key),
        colorscale: customColorScale,
        colorbar:{
            title: 'GDP Growth'
        }
    }];


    var layout = {
        title: 'Real GDP Growth in ' + selectedYear,
        geo: {
            projection: {
                type: 'mercator'
            }
        }
    };


    // Update the map
    Plotly.newPlot('gdpgrowth', data, layout);    

    // Add an event listener for plotly_click event
    document.getElementById('gdpgrowth').on('plotly_click', function (eventData) {
        if (eventData.points.length > 0) {
            // Extract the clicked country name
            const clickedCountry = eventData.points[0].location;
            Object.keys(country).forEach(
                function (x) {
                    if (country[x].label == clickedCountry) {                        
                        createLineChart(allValues, selectedYear, clickedCountry, mapData[x])
                        return;
                    }
                }
            )
        }
    });
}
var chart;
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
                backgroundColor: 'rgba(0,0,255,1.0)',
                borderColor: 'rgba(0,0,255,0.1)',
                data: Object.values(allValues).slice(0, year - 1980 + 1),
                yAxisID: 'y-axis-1',
            }],
        },
        options: {
            plugins: {
                legend: { position: 'top', },
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
                }],
                x: { ticks: { stepSize: 1 } },
            },
            interaction: {
                mode: 'index',
                intersect: false,
            },
            onClick: function (event, elements) {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const value = allValues[Object.keys(allValues)[index]];
                    console.log('Clicked on data point:', value);
                }
            },
        },
    }; 

    if (countryValues != null) {
        values.data.datasets.push({
            type: 'line',
            label: country,
            backgroundColor: 'rgba(255, 0, 0, 0.7)',
            borderColor: 'rgba(250, 176, 7, 0.73)',
            data: Object.values(countryValues),
            yAxisID: 'y-axis-2',
        });
        values.options.scales.y.push({
            type: 'linear', // Set the type of the right y-axis
            display: true,
            position: 'right',
            id: 'y-axis-2'
        });
    }
    if (chart) {
        chart.destroy();
    }
    chart = new Chart(ctx, values);
}

function updateLineChart(sliderValue) {
    chart.data.labels = Object.keys(allValues).slice(0, sliderValue - 1980 + 1);
    chart.data.datasets[0].data = Object.values(allValues).slice(0, sliderValue - 1980 + 1);
    chart.update();
}
