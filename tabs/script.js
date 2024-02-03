let lineChart;
let bubbleChart;
let selectedYear = "2021";
let tabData;
let currentProps;
let tabProps = {
    "Poverty": {
        "data": povertyData.filter(x => parseInt(x.year) >= 1980 && parseInt(x.year) < 2022),
        "x": "GDP Per Capita",
        "y": "poverty_rate",
        "r": "poverty_line",
        "radius": 10
    },
    "Literacy": {
        "data": literacyData.filter(x => parseInt(x.year) >= 1980 && parseInt(x.year) < 2022),
        "x": "gdp_percapita",
        "y": "litreacy",
        "r": "litreacy",
        "radius": 0.3
    },
    "Unemployment": {
        "data": unemploymentdata.filter(x => parseInt(x.year) >= 1980 && parseInt(x.year) < 2022),
        "x": "gdp_percapita",
        "y": "unemployment_rate",
        "r": "unemployment_rate",
        "radius": 3
    },
    "HDI": {
        "data": hdidata.filter(x => parseInt(x.year) >= 1980 && parseInt(x.year) < 2022),
        "x": "gdp_percapita",
        "y": "Human Development Index",
        "r": "Human Development Index",
        "radius": 15
    }
};
class BubbleChart {
    name;
    bubbleData;
    chart;
    lineChartPopup;
    constructor(name) {
        this.name = name;
        this.bubbleData = [];
        lineChartPopup = document.getElementById(this.name.toLowerCase()).querySelector('#lineChartPopup');
    }
    create(label, data) {
        this.bubbleData = data;
        this.chart = new Chart(document.getElementById(this.name.toLowerCase()).querySelector('#bubbleChart').getContext('2d'), {
            type: 'bubble',
            data: {
                datasets: [{
                    label: label,
                    data: this.bubbleData,
                    backgroundColor: 'rgb(252, 110, 0)', // Purple color with transparency
                    borderColor: 'white', // Border color for the bubbles
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        beginAtZero: true,
                        max: 140000,
                        title: {
                            display: true,
                            text: 'GDP Per Capita', // Title for the x-axis
                            color: 'white', // Change the text color to white
                            font: {
                                size: 14, // Change the font size of x-axis labels
                                weight: 'bold' // Make the title bold
                            }
                        },
                        ticks: {
                            stepSize: 1000,
                            beginAtZero: true,
                            color: 'white', // Change the color of x-axis labels
                            font: {
                                size: 14 // Change the font size of x-axis labels
                            }
                        },
                        grid: {
                            display: true, // Display grid lines for the x-axis
                            color: 'hsla(285, 40%, 43%, 0.2)' // Set the color of the grid lines
                        }
                    },
                    y: {
                        position: 'left',
                        title: {
                            display: true,
                            text: this.name + ' Rate', // Title for the y-axis
                            color: 'white', // Change the text color to white
                            font: {
                                size: 14, // Change the font size of y-axis labels
                                weight: 'bold' // Make the title bold
                            }
                        },
                        ticks: {
                            beginAtZero: true,
                            color: 'white', // Change the color of y-axis labels
                            font: {
                                size: 14 // Change the font size of y-axis labels
                            }
                        },
                        grid: {
                            display: true, // Display grid lines for the y-axis
                            color: 'hsla(105, 40%, 43%, 0.2)' // Set the color of the grid lines
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'right', // Move the legend to the top 
                        labels: {
                            color: 'white', // Customize the legend label color
                            font: {
                                size: 14, // Customize the legend label font size
                            },
                        },
                    },
                },
                onHover: this.hover,
                onLeave: function (event, elements) {
                    lineChartPopup.style.display = 'none';
                }
            }
        });
    }
    hover(event, elements) {
        // Handle mouseover event
        if (elements.length > 0) {
            const index = elements[0].index;
            const selectedCountryData = currentProps.data.filter(item => item.country === bubbleChart.bubbleData[index].country);
            const labels = selectedCountryData.map(item => item.year);
            const label = `GDP of ${selectedCountryData[0]?.country || 'Selected Country'}`;
            const countryData = selectedCountryData.map(item => item[currentProps.x]);
            lineChart.update(labels, label, countryData);


            // Adjust the position of the popup. You might need to tweak the offsets
            lineChartPopup.style.left = `${event.native.clientX}px`; // Adjusted for the width of the popup
            lineChartPopup.style.top = `${event.native.clientY - lineChartPopup.offsetHeight - 150}px`; // Adjusted for the height of the popup
            lineChartPopup.style.display = 'block';
        } else {
            lineChartPopup.style.display = 'none';
        }
    }
    update(label, data) {
        this.bubbleData = data;
        this.chart.data.datasets[0].data = this.bubbleData;
        this.chart.data.datasets[0].label = label;
        this.chart.update();
    }
    destroy() {
        this.chart.destroy();
    }
}

class LineChart {
    name;
    lineData;
    chart;
    constructor(name) {
        this.name = name;
    }
    create(label, data) {
        this.lineData = data;
        this.chart = new Chart(document.getElementById(this.name.toLowerCase()).querySelector('#lineChart').getContext('2d'), {
            type: 'line',
            data: {
                datasets: [{
                    label: label,
                    data: data,
                    borderColor: 'rgb(242, 143, 62)',
                    backgroundColor: 'rgb(242, 143, 62)',
                    borderWidth: 2,
                    fill: false
                }]
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
                    x: {
                        position: 'bottom', // Show x-axis at the bottom
                        title: {
                            display: true,
                            text: 'Years',
                            color: 'white'
                        },
                        ticks: {
                            beginAtZero: true,
                            color: 'white'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'GDP',
                            color: 'white'
                        },
                        ticks: {
                            beginAtZero: true,
                            color: 'white'
                        }
                    }
                }
            }
        });
    }
    update(labels, label, data) {
        this.chart.data.datasets[0].data = data;
        this.chart.data.datasets[0].label = label;
        this.chart.data.labels = labels;
        this.chart.update();
    }
    destroy() {
        this.chart.destroy();
    }
}


function load(year, tab) {
    currentProps = tabProps[tab];

    lineChart = new LineChart(tab);
    lineChart.create({}, {});

    const filteredData = currentProps.data.filter(item => item.year === parseInt(year));
    // Sort the data array by GDP Per Capita in descending order
    filteredData.sort((a, b) => b[currentProps.x] - a[currentProps.x]);

    // Slice the top 5 items
    const top5Data = filteredData.slice(0, 10);
    const bubbleData = top5Data.map(item => ({
        x: item[currentProps.x],
        y: item[currentProps.y],
        r: item[currentProps.r] * currentProps.radius,
        country: item.country,
        year: item.year
    }));
    if (bubbleChart) {
        bubbleChart.update("Countries", bubbleData);
    }
    else {
        bubbleChart = new BubbleChart(tab);
        bubbleChart.create("Countries", bubbleData);        
    }
}

function loadContent(year) {
    selectedYear = year;
    loadTabContent(year, undefined);
}

function loadTabContent(year, tab) {    
    if (tab == undefined) {
        tab = document.querySelector('input[type="radio"]:checked').parentElement;
    }
    const tabText = tab.childNodes[3].innerText;
    tab.querySelector('input').checked = true
    if (tabText == "GDP") {
        if (mapData) {
            loadPage(year);
        }
        return;
    }
    if (lineChart) {
        lineChart.destroy();
        lineChart = undefined;
    }
    if (bubbleChart) {
        bubbleChart.destroy();
        bubbleChart = undefined;
    }
    load(year, tabText);
}

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tabs .eg-tab");
    tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            e.preventDefault();
            loadTabContent(selectedYear, tab);
        });
    });    
});

loadTabContent(selectedYear, undefined);