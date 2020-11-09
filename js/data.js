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


  function appendNumberOfCowsElement(cowsAmount){
    let htmlTemplate = "";
    console.log(element.cows);
    for (let element of elements) {
        console.log(element.cows);
        
        htmlTemplate +=`
          <h4>${element.cows}</h4>
        `
    }
  document.querySelector(".price_number").innerHTML = htmlTemplate;
  }