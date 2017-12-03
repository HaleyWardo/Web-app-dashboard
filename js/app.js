///////////////////////
///// VARIABLES ///////
///////////////////////

const alert = document.querySelector(".alert");

const alertUl = document.createElement('ul');
const alertMessageLi = document.createElement('li');
const alertCloseLi = document.createElement('li');
const alertSpan = document.createElement('span');

const sendButton = document.querySelector(".btn--message-send");
const overlay = document.querySelector("#overlay");
const modalMessage = document.querySelector(".modal-message");

const closeModal = document.querySelector(".closeModal");


///////////////////////
/////// CHARTS ////////
///////////////////////

// LINE CHART
var trafficChart = document.getElementById("lineChart");
var lineChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{ 
            data: [250,1250,1000,1500,2000,1500,1750,1250,2250,1750,2250],
            borderColor: "#65619E",
            borderWidth: 1,
            backgroundColor: "rgba(101, 97, 158, 0.15)",
            pointBackgroundColor: "white",
            pointBorderWidth: 2,
            fill: 'origin',
            radius: 6,
            tension: 0,
            }
        ]
    },
    options: {
        legend: {
            display: false
        },
    }
  });

// BAR CHART
var dailyTrafficChart = document.getElementById("barChart")
var context = dailyTrafficChart.getContext("2d");
var barChart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: 'DAILY TRAFFIC',
            data: [75, 100, 175, 125, 225, 215, 100],
            backgroundColor: [
                '#65619E',
                '#65619E',
                '#65619E',
                '#65619E',
                '#65619E',
                '#65619E',
                '#65619E',
            ],
            borderColor: [
                '#65619E',
                '#65619E',
                '#65619E',
                '#65619E',
                '#65619E',
                '#65619E',
                '#65619E',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

//DONUT CHART
var mobileUserChart = document.getElementById("donutChart");
var donutChart = new Chart(mobileUserChart, {
    type: 'doughnut',
    data: {
        labels: [
            'Phone',
            'Tablet',
            'Desktop',
        ],
        datasets: [{
            data: [15, 15, 75],
            backgroundColor: [
                '#6099AF',
                '#78C9A6',
                '#65619E',
            ],
            borderColor: [
                '#6099AF',
                '#78C9A6',
                '#65619E',
            ]
        }],     
    },
    options: {
        legend: {
            display: false
        },
    }
});


///////////////////////
/// EVENT LISTENERS ///
///////////////////////

//Add alert message to document
document.addEventListener("DOMContentLoaded", () => {
    alert.appendChild(alertUl);

    alertUl.appendChild(alertSpan);
    alertSpan.innerHTML = "Alert";
    alertSpan.className = "alert-span";

    alertUl.appendChild(alertMessageLi);
    alertMessageLi.innerText = "Nullam quis risus eget urna mollis ornare cel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.";
   
    alertUl.appendChild(alertCloseLi);
    alertCloseLi.innerText = "x";
    alertCloseLi.className = "alert-close";

    overlay.style = "display:none";
});

//When user clicks "X" alert message closes
alertCloseLi.addEventListener("click", () => {
    alert.remove();
});

//When user clicks send button a modal pops up
sendButton.addEventListener("click", () => {
    const userSearch = document.querySelector(".user--search");
    const userMessage = document.querySelector(".user--message");

    event.preventDefault();
    
    //When search user and message field are empty
    if (userSearch.value.length == 0 || userMessage.value.length == 0) {
        modalMessage.innerHTML = "Missing required field";
        overlay.style = "display: block";
    }
    else {
        modalMessage.innerHTML = "Message sent";
        overlay.style = "display: block";
        userSearch.value = "";
        userMessage.value = "";
    }
});

//When user clicks "X" modal closes
closeModal.addEventListener("click", () => {
    overlay.style = "display: none";
});

