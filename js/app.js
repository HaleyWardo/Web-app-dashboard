///////////////////////
///// VARIABLES ///////
///////////////////////

const alert = document.querySelector(".alert");

const alertUl = document.createElement('ul');
const alertMessageLi = document.createElement('li');
const alertCloseLi = document.createElement('li');

const sendButton = document.querySelector(".btn--message-send");
const overlay = document.querySelector("#overlay");
const modalMessage = document.querySelector(".modal-message");

const closeModal = document.querySelector(".closeModal");

// const members = [
//     {
//         name:
//     }
// ]


///////////////////////
/////// CHARTS ////////
///////////////////////

//LINE CHART
// var trafficChart = document.getElementById("lineChart");
// var lineChart = new Chart(trafficChart, {
//     type: 'line',
//     data: [{
//         x: 0.8,
//         y: 0
//     }, 
//     {
//         x: 15,
//         y: 10
//     }]
//     // backgroundColor: [
//     //     '#65619E',
//     //     '#65619E',
//     //     '#65619E',
//     //     '#65619E',
//     //     '#65619E',
    
//     // datasets: [
//     //     {fill: 'origin'},   // 0: fill to 'origin'
//     //     {fill: '-1'},       // 1: fill to dataset 0
//     //     {fill: 1},          // 2: fill to dataset 1
//     //     {fill: false},      // 3: no fill
//     //     {fill: '-2'}        // 4: fill to dataset 2
//     // ]

//     // options: 
// });

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
    }
    // options: options
});


///////////////////////
/// EVENT LISTENERS ///
///////////////////////

//Add alert message to document
document.addEventListener("DOMContentLoaded", () => {
    alert.appendChild(alertUl);

    alertUl.appendChild(alertMessageLi);
    alertMessageLi.innerText = "Alert Your email has not been verified. Please verify your email.";
   
    alertUl.appendChild(alertCloseLi);
    alertCloseLi.innerText= "X";

    overlay.style = "display:none";
});

//When user clicks "X" alert message closes
alertCloseLi.addEventListener("click", () => {
    alert.remove();
});

//When user clicks send button a modal pops up
sendButton.addEventListener("click", () => {
    const userSearch = document.querySelector(".user-search");
    const userMessage = document.querySelector(".user-message");

    //When search user and message field are empty
    if (userSearch.value.length == 0 || userMessage.value.length == 0) {
        modalMessage.innerHTML = "Missing required field";
        overlay.style = "display: block";
    }
    else {
        modalMessage.innerHTML = "Message sent";
        overlay.style = "display: block";
    }
});

//When user clicks "X" modal closes
closeModal.addEventListener("click", () => {
    overlay.style = "display: none";
});


