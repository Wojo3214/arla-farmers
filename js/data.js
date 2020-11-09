"use strict";

// ========== GLOBAL VARIABLES ========== //


const _dataRef = _db.collection("carbonFootprint");
let _carbonFootprint;
let _carbonFootprintProgress;

_dataRef.orderBy("year").onSnapshot(snapshotData => {
    _carbonFootprint = [];

    snapshotData.forEach(doc => {
        let data = doc.data();
        data.id = doc.id;
        _carbonFootprint.push(data);
    });


    console.log(_carbonFootprint);

    appendCarbonFootprint(_carbonFootprint);
    appendPieLabels(_carbonFootprint);
    appendBarCarbon(_carbonFootprint);
    appendDividedCarbon(_carbonFootprint);
});

// 2: preparing the data
function prepareCarbonFootprintData(carbonFootprint) {
    // prepare data
    let carbonFootprintAll = [];
    let FarmersMax = [];
    let FarmersMin = [];
    let years = [];
    carbonFootprint.forEach(data => {
        carbonFootprintAll.push(data.carbonAll);
        FarmersMin.push(data.allFarmersCarbonMin);
        FarmersMax.push(data.allFarmersCarbonMax);
        years.push(data.year);
    });

    return {
        carbonFootprintAll,
        years,
        FarmersMax,
        FarmersMin
    }
}

//3: appending the chart
function appendCarbonFootprint(carbonFootprint) {
    let data = prepareCarbonFootprintData(carbonFootprint);
    console.log(data);

    // generate chart
    Chart.defaults.global.legend.labels.usePointStyle = true;
    let chartContainer = document.querySelector('#carbonFootprint');
    let chart = new Chart(chartContainer, {
        type: 'line',
        data: {
            datasets: [{
                data: data.carbonFootprintAll,
                label: 'Your Carbon Footprint',
                fill: false,
                borderColor: "#2A8556",
                backgroundColor: "#2A8556",
                pointBackgroundColor: "#2A8556",
                pointBorderColor: "#2A8556",
                pointHoverBackgroundColor: "#2A8556",
                pointHoverBorderColor: "#2A8556",
            },
            {
                data: data.FarmersMin,
                label: '',
                fill: true,
                borderColor: "transparent",
                backgroundColor: "white",
                pointBackgroundColor: "#F3CB54",
                pointBorderColor: "#F3CB54",
                pointHoverBackgroundColor: "#F3CB54",
                pointHoverBorderColor: "#F3CB54",
            },
            {
                data: data.FarmersMax,
                label: 'Arla Farmers Carbon Footprint',
                fill: true,
                borderColor: "#F9E6AE",
                backgroundColor: "#F9E6AE",
                pointBackgroundColor: "#F3CB54",
                pointBorderColor: "#F3CB54",
                pointHoverBackgroundColor: "#F3CB54",
                pointHoverBorderColor: "#F3CB54",
            }

            ],
            labels: data.years

        },
        options: {

            legend: {
                onClick: (e) => e.stopPropagation()
            },

            scales: {
                xAxes: [{
                    gridLines: {
                        display: true
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true
                    }
                }]
            }
        }

    });
}


function appendNumberOfCowsElement(cowsAmount) {
    let htmlTemplate = "";
    console.log(element.cows);
    for (let element of elements) {
        console.log(element.cows);

        htmlTemplate += `
          <h4>${element.cows}</h4>
        `
    }
    document.querySelector(".price_number").innerHTML = htmlTemplate;
}

/* pie chart */

function prepareDividedCarbon(carbonFootprint) {
    let diesel = [];
    let years = [];
    let electricity = [];
    let feed = [];
    let digestion = [];
    carbonFootprint.forEach(data => {
        if (data.year === '2019') {
            diesel.push(data.dieselAll);
            electricity.push(data.electricityHeatingAll);
            feed.push(data.importedFeedAll);
            digestion.push(data.digestionCowsAll);
            years.push(data.year);
        }
    });
    return {
        diesel,
        electricity,
        feed,
        digestion,
        years
    }
}

function appendDividedCarbon(carbonFootprint) {
    let data = prepareDividedCarbon(carbonFootprint);
    console.log(data);
    // generate chart
    let chartContainer = document.querySelector('#carbon_divided');
    let chart = new Chart(chartContainer, {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [data.diesel, data.electricity, data.digestion, data.feed],
                    fill: true,
                    label: [data.diesel, data.electricity, data.digestion, data.feed],
                    borderColor: ["#F3CB54", "#8AB26E", "#C6E1EC", "#2F6F84"],
                    backgroundColor: ["#F3CB54", "#8AB26E", "#C6E1EC", "#2F6F84"],
                    pointBorderColor: ["#F3CB54", "#8AB26E", "#C6E1EC", "#2F6F84"],
                    pointHoverBackgroundColor: "#F3CB54",
                    pointHoverBorderColor: "#F3CB54",
                }
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                labels: {
                    render: "100",
                    fontColor: "black",
                    fontFamily: "ArlaStrong",
                    fontSize: 20
                }
            }
        }

    });
}

/* pie chart labels */


function appendPieLabels(carbonFootprint) {
    let data = prepareDividedCarbon(carbonFootprint);
    let htmlTemplate = "";
    htmlTemplate += `
      <article>
              <h3 class="legend_header"><span class="diesel_circle"></span>Diesel</h3>
              <p class="legend_number">${data.diesel} kg</p>
              <h3 class="legend_header"><span class="electricity_circle"></span>Electricity</h2>
              <p class="legend_number">${data.electricity} kg</p>
              <h3 class="legend_header"><span class="digestion_circle"></span>Digestion</h3>
              <p class="legend_number">${data.digestion} kg</p>
              <h3 class="legend_header"><span class="feed_circle"></span>Feed</h3>
              <p class="legend_number">${data.feed} kg</p>
      </article>
      `;

    document.querySelector('#pie_legend').innerHTML = htmlTemplate;
}


/* divided bar chart */

function prepareBarCarbon(carbonFootprint) {
    let diesel = [];
    let years = [];
    let electricity = [];
    let feed = [];
    let digestion = [];
    carbonFootprint.forEach(data => {
        diesel.push(data.dieselAll);
        electricity.push(data.electricityHeatingAll);
        feed.push(data.importedFeedAll);
        digestion.push(data.digestionCowsAll);
        years.push(data.year);

    });
    return {
        diesel,
        electricity,
        feed,
        digestion,
        years
    }
}

function appendBarCarbon(carbonFootprint) {
    let data = prepareBarCarbon(carbonFootprint);
    console.log(data);

    let chartContainer = document.querySelector('#carbon_bar');
    let chart = new Chart(chartContainer, {
        type: 'bar',
        data: {
            datasets: [
                {
                    data: data.diesel,
                    label: 'Diesel',
                    fill: false,
                    borderColor: "#F3CB54",
                    backgroundColor: "#F3CB54",
                    pointBackgroundColor: "#F3CB54",
                    pointBorderColor: "#F3CB54",
                    pointHoverBackgroundColor: "#F3CB54",
                    pointHoverBorderColor: "#F3CB54",
                },
                {
                    label: 'Electricity and heating',
                    data: data.electricity,
                    fill: false,
                    borderColor: "#8AB26E",
                    backgroundColor: "#8AB26E",
                    pointBackgroundColor: "#8AB26E",
                    pointBorderColor: "#8AB26E",
                    pointHoverBackgroundColor: "#8AB26E",
                    pointHoverBorderColor: "#8AB26E",
                    type: 'bar'
                },
                {
                    label: 'Digestion of cows',
                    data: data.digestion,
                    fill: false,
                    borderColor: "#C6E1EC",
                    backgroundColor: "#C6E1EC",
                    pointBackgroundColor: "#C6E1EC",
                    pointBorderColor: "#C6E1EC",
                    pointHoverBackgroundColor: "#C6E1EC",
                    pointHoverBorderColor: "#C6E1EC",
                    type: 'bar'
                },
                {
                    label: 'Imported feed',
                    data: data.feed,
                    fill: false,
                    borderColor: "#2F6F84",
                    backgroundColor: "#2F6F84",
                    pointBackgroundColor: "#2F6F84",
                    pointBorderColor: "#2F6F84",
                    pointHoverBackgroundColor: "#2F6F84",
                    pointHoverBorderColor: "#2F6F84",
                    type: 'bar',
                    offset: true,

                }
            ],
            labels: data.years,

        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                labels: {
                    fontSize: 0
                }
            },
            scales: {
                xAxes: [{
                    barThickness: 30
                }],
            }

        }
    });
}


/* push new data from the form to the Firebase */

function pushNewData() {

    let carbonAllInput = document.querySelector('#question_input');
    let dieselAllInput = document.querySelector('question_input2');
    let digestionAllInput = document.querySelector('#question_input3');
    let electricityAllInput = document.querySelector('question_input4');
    let feedAllInput = document.querySelector('question_input5');
    let currentYear = new Date().getFullYear();

    let newData = {
        carbonAll: carbonAllInput.value,
        dieselAll: dieselAllInput.value,
        digestionCowsAll: digestionAllInput.value,
        electricityHEatingAll: electricityAllInput.value,
        importedFeedAll: feedAllInput.value,
        year: currentYear,
        allFarmersCarbonMax: carbonAllInput.value,
        allFarmersCarbonMin: dieselAllInput.value,
        carbonAutumn: digestionAllInput.value,
        carbonSpring: electricityAllInput.value,
        carbonSummer: feedAllInput.value,
        carbonWinter: electricityAllInput.value,
        cows: carbonAllInput.value,
        dieselAutumn: feedAllInput.value,
        dieselSpring: digestionAllInput.value,
        dieselSummer: electricityAllInput.value,
        dieselWinter: dieselAllInput.value,
        digestionCowsAutumn: feedAllInput.value,
        digestionCowsSpring: digestionAllInput.value,
        digestionCowsSummer: carbonAllInput.value,
        digestionCowsWinter: dieselAllInput.value,
        electricityHeatingAutumn: carbonAllInput.value,
        electricityHeatingSpring: feedAllInput.value,
        electricityHeatingSummer: dieselAllInput.value,
        electricityHeatingWinter: electricityAllInput.value,
        importedFeedAutumn: carbonAllInput.value,
        importedFeedSpring: feedAllInput.value,
        importedFeedSummer: dieselAllInput.value,
        importedFeedWinter: digestionAllInput.value
    };

    _dataRef.add(newData);
}

