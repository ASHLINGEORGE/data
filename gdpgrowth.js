var mapData,country;
var countryFetch = fetch('https://corsproxy.io/?' + encodeURIComponent('https://www.imf.org/external/datamapper/api/v1/countries'))
.then(response=>{
  // Check if the request was successful (status code 200)
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }  
  // Parse the response as JSON
  return response.json();
});

var mapFetch = fetch('https://corsproxy.io/?' + encodeURIComponent('https://www.imf.org/external/datamapper/api/v1/NGDP_RPCH'))
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
    mapData = dataArray[0];
    country = dataArray[1];

    // Handle the Map data
    if(mapData == null || mapData.values ==null || mapData.values.NGDP_RPCH == null)
    {
        throw new Error(`Data errer`);
    }
    mapData = mapData.values.NGDP_RPCH;

    // Handle the Country data
    if(country == null || country.countries ==null)
    {
        throw new Error(`Data errer`);
    }
    country =country.countries;

    updateMap("1980");
    createLineChart();
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
}

function createLineChart() {
    var allValues={};
    Object.keys(mapData).forEach(
        function(x){
            Object.keys(mapData[x]).forEach(
                function(y){
                    allValues[y] = parseFloat(allValues[y] == undefined?0: allValues[y]) + parseFloat(mapData[x][y]);
                }
            )
        }
    );
    
    myChart = new Chart("myChart", {
        type: "line",
        data: {
            labels: Object.keys(allValues),
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: Object.values(allValues)
            }]
        },
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{ ticks: { min: Math.min(Object.values(allValues)), max: Math.max(Object.values(allValues)) } }],                
                xAxes: [{ ticks: { stepSize: 1 } }],
            }
        }
    });
}