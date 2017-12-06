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

const membersActivity = [
    "posted YourApp's SEO Tips",
    "commented on Facebook's Changes for 2016",
    "liked the post Facebook's Changes for 2016",
    "commented on YourApp's SEO Tips",
];

const memberTime = [
    "1 day ago",
    "5 hours ago",
    "5 hours ago",
    "4 hours ago",
]

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

            //NEW MEMBERS
            const membersEl = document.querySelector(".new-members");
            const membersDiv = document.createElement('div');
            membersEl.appendChild(membersDiv);
            membersDiv.className = "members";

            const memberImgContainer = document.createElement('div');
            membersDiv.appendChild(memberImgContainer);

            const memberImg = document.createElement('img');
            memberImg.src = memberPicture;
            memberImgContainer.appendChild(memberImg);
            memberImg.className = "members--img";

            const memberInfoContainer = document.createElement('div');
            membersDiv.appendChild(memberInfoContainer);
            memberInfoContainer.className = "members__info";

            const memberNameP = document.createElement('p');
            memberInfoContainer.appendChild(memberNameP);
            memberNameP.innerHTML = memberName;
            memberNameP.className = "members__name";

            const memberEmailP = document.createElement('p');
            memberInfoContainer.appendChild(memberEmailP);
            memberEmailP.innerHTML = email;
            memberEmailP.className = "members__email";

            const memberRegContainer = document.createElement('div');
            membersDiv.appendChild(memberRegContainer);
            memberRegContainer.className = "members__reg";

            const memberReg = document.createElement('p');
            memberRegContainer.appendChild(memberReg);
            memberReg.innerHTML = new Date(registered).toLocaleDateString("en-US");
             

            //RECENT ACTIVITY
            const memberActContainer = document.querySelector(".recent-activity");
            const memberContainer = document.createElement('div');
            memberActContainer.appendChild(memberContainer);
            memberContainer.className = "members";

            const memberActImgContainer = document.createElement('div');
            memberContainer.appendChild(memberActImgContainer);

            const memberActImg = document.createElement('img');
            memberActImg.src = memberPicture;
            memberActImgContainer.appendChild(memberActImg);
            memberActImg.className = "members--img";

            const memberActInfoContainer = document.createElement('div');
            memberContainer.appendChild(memberActInfoContainer);
            memberActInfoContainer.className = "members__info";

            const memberActNameP = document.createElement('p');
            memberActInfoContainer.appendChild(memberActNameP);
            memberActNameP.innerHTML = `${memberName} ${membersActivity.pop()}`;
            memberActNameP.className = "members__name";

            const memberActTimeP = document.createElement('p');
            memberActInfoContainer.appendChild(memberActTimeP);
            memberActTimeP.className = "members__time";  
            memberActTimeP.innerHTML = memberTime.pop();   
            
            const chevron = document.createElement('div') 
                memberContainer.appendChild(chevron);
                chevron.className = "chevron";
            
        }     
    },
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
        scales: {
            yAxes: [{
                ticks: {
                    max: 3000,
                    min: 0,
                    stepSize: 500,
                },
                gridLines: {
                    offsetGridLines: true,
                }
            }],
        }
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
            display: true,
            position: 'right',
            labels: {
                boxWidth: 15,
                padding: 20,
            }
        },
    }
});




