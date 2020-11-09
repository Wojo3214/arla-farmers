"use strict";
// ========== GLOBAL VARIABLES ========== //
const _dataRef = _db.collection("carbonFootprint");
let _sustainabilityData;

// 1: data from firebase
// listen for changes on _dataRef
_dataRef.orderBy("year").onSnapshot(snapshotData => {
    _sustainabilityData = []; // reset _sustainabilityData
    snapshotData.forEach(doc => { // loop through snapshotData - like for of loop
        let data = doc.data(); // save the data in a variable
        data.id = doc.id; // add the id to the data variable
        _sustainabilityData.push(data); // push the data object to the global array _sustainabilityData
    });
    console.log(_sustainabilityData);
    // call appendCows with _sustainabilityData as function argument
    appendCarbonFootprint(_sustainabilityData); //call appendCarbonFootprint with _sustainabilityData as function argument
    //call appendMilkProduction with _sustainabilityData as function argument
});



// 2: preparing the data
function prepareCarbonFootprintData(sustainabilityData) {
    // prepare data
    let carbonAll = [];

    let years = [];


    sustainabilityData.forEach(data => {
        // in this case we only want the data from 'north'
        carbonAll.push(data.carbonAll);

        years.push(data.year);

    });

    return {
        carbonAll,

        years
    }
}

//3: appending the chart
function appendCarbonFootprint(sustainabilityData) {
    let data = prepareCarbonFootprintData(sustainabilityData);
    console.log(data);

    // generate chart
    let chartContainer = document.getElementById("carbonFootprint");
    let chart = new Chart(chartContainer, {
        type: 'line',
        data: {
            datasets: [{
                data: data.carbonAll,
                label: 'Your Carbon Footprint',
                fill: false,
                borderColor: "#2A8556",
                backgroundColor: "#2A8556",
                pointBackgroundColor: "#2A8556",
                pointBorderColor: "#2A8556",
                pointHoverBackgroundColor: "#2A8556",
                pointHoverBorderColor: "#2A8556",


            }

            ],
            labels: data.years,

        },
        options: {
            legend: {
                align: 'center',
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 40,
                    fontColor: "black",
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}





