const Button_H = document.getElementById("home");
const Button_R = document.getElementById("renew_s");
const Button_L = document.getElementById("load");
const Button_B = document.getElementById("batt");

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function H_butt_clicked() {
  buttonValue = "H";
  var url = "/getButtonPressed/" + (buttonValue).replace(" ", "%20");
  console.log(httpGet(url));
}

function R_butt_clicked() {
  buttonValue = "R";
  var url = "/getButtonPressed/" + (buttonValue).replace(" ", "%20");
  console.log(httpGet(url));
}

function L_butt_clicked() {
  buttonValue = "L";
  var url = "/getButtonPressed/" + (buttonValue).replace(" ", "%20");
  console.log(httpGet(url));
}

function B_butt_clicked() {
  buttonValue = "B";
  var url = "/getButtonPressed/" + (buttonValue).replace(" ", "%20");
  console.log(httpGet(url));
}



//-------------------- DATA ----------------------- //
document.addEventListener("DOMContentLoaded", () => {
    new ApexCharts(document.querySelector("#reportsChart"), {
      series: [{
        name: 'Loads',
        data: [31, 40, 28, 51, 42, 82, 56],
      }, {
        name: 'Total Supplies',
        data: [11, 32, 45, 32, 34, 52, 41]
      }, {
        name: 'Renewable Energy',
        data: [15, 11, 32, 18, 9, 24, 11]
      }, {
        name: 'Battery',
        data: [0, 10, 20, 30, 40, 50, 60]
      }],
      chart: {
        height: 400,
        type: 'area',
        toolbar: {
          show: true
        },
      },
      markers: {
        size: 4
      },
      colors: ['#ff771d','#4154f1' ,'#2eca6a' , '#fcba03'],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.2,
          opacityTo: 0.3,
          stops: [0, 90, 100]
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      }
    }).render();
  });