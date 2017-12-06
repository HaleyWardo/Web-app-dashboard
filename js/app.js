///////////////////////
///// VARIABLES ///////
///////////////////////

const alert = document.querySelector(".alert");

const notificationCircle = document.querySelector(".nav--circle");
const notification = document.querySelector(".img--notification");
const notificationOverlay = document.querySelector(".overlay__notification");

const verificationDiv = document.querySelector(".verification");
const verificationClose = document.querySelector(".verification__close");

const messageDiv = document.querySelector(".message");
const messageClose = document.querySelector(".message__close");

const sendButton = document.querySelector(".btn--message-send");
const overlay = document.querySelector("#overlay");
const modalMessage = document.querySelector(".modal-message");

const closeModal = document.querySelector(".closeModal");

///////////////////////
////// MEMBERS ////////
///////////////////////

let members = [];

$.ajax({
    url: 'https://randomuser.me/api/?results=4&inc=name,picture,email,registered',
    dataType: 'json',
    error: function() {
        console.error("Request to fetch users failed");
    },
    success: function(response) {
        members = response.results;

        const formatName = function(name) {
            return name[0].toUpperCase() + name.slice(1);
        };

// render members
        for (let i = 0; i < members.length; i++) {
            const memberPicture = members[i].picture.thumbnail;
            const memberFirstName = formatName(members[i].name.first);
            const memberLastName = formatName(members[i].name.last);
            const memberName = `${memberFirstName} ${memberLastName}`;

            const { email, registered, picture, name } = members[i];

            const membersEl = document.querySelector(".new-members");
            const membersDiv = document.createElement('div');
            membersEl.appendChild(membersDiv);

            const memberImgContainer = document.createElement('div');
            membersDiv.appendChild(memberImgContainer);

            const memberImg = document.createElement('img');
            memberImg.src = memberPicture;
            memberImgContainer.appendChild(memberImg);

            const memberInfoContainer = document.createElement('div');
            membersDiv.appendChild(memberInfoContainer);

            const memberNameP = document.createElement('p');
            memberInfoContainer.appendChild(memberNameP);
            memberNameP.innerHTML = memberName;

            const memberEmailP = document.createElement('p');
            memberInfoContainer.appendChild(memberEmailP);
            memberEmailP.innerHTML = email;

            const memberRegContainer = document.createElement('div');
            membersDiv.appendChild(memberRegContainer);

            const memberReg = document.createElement('p');
            memberRegContainer.appendChild(memberReg);
            memberReg.innerHTML = new Date(registered).toLocaleDateString("en-US");
        }  
    },
});
    
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


/////////////////////////////
//ALERT MODAL EVENT LISTENER/
/////////////////////////////

//Add alert message to document
document.addEventListener("DOMContentLoaded", () => {
    const alertUl = document.createElement('ul');
    const alertMessageLi = document.createElement('li');
    const alertSpan = document.createElement('span');

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

const alertCloseLi = document.createElement('li');

//When user clicks "X" alert message closes
alertCloseLi.addEventListener("click", () => {
    alert.remove();
});


/////////////////////////////
//NOTIFICATION EVENT LISTENER
/////////////////////////////

//When user clicks bell icon, notification modal pops up
notification.addEventListener("click", () => {
    notificationOverlay.style = "display:inline-block";
});


//When user clicks "X" modal closes
verificationClose.addEventListener("click", () => {
    verificationDiv.remove();
    removeOverlay();
});

messageClose.addEventListener("click", () => {
    messageDiv.remove();
    removeOverlay();
});

//removes overlay if notificationOverlay is empty
function removeOverlay() { 
    if (notificationOverlay.innerText == "") {
        notificationOverlay.remove();
        notificationCircle.remove();
    }
}

/////////////////////////////
//USER MODAL EVENT LISTENER//
/////////////////////////////

//When user clicks send button a modal pops up
sendButton.addEventListener("click", () => {
    const userSearch = document.querySelector(".user__search");
    const userMessage = document.querySelector(".user__message");

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


