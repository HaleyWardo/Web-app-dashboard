const alert = document.querySelector(".alert");

const alertUl = document.createElement('ul');
const alertMessageLi = document.createElement('li');
const alertCloseLi = document.createElement('li');

const sendButton = document.querySelector(".btn--message-send");
const overlay = document.querySelector("#overlay");

const closeModal = document.querySelector(".closeModal");

//Add alert message to document
document.addEventListener("DOMContentLoaded", () => {
    alert.appendChild(alertUl);

    alertUl.appendChild(alertMessageLi);
    alertMessageLi.innerText = "Alert Your email has not been verified. Please verify your email.";
   
    alertUl.appendChild(alertCloseLi);
    alertCloseLi.innerText= "X";

    overlay.style = "display:none";
});

//When user clicks "X" alert message disappears
alertCloseLi.addEventListener("click", () => {
    alert.remove();
});


//When user clicks sent button a modal pops up
sendButton.addEventListener("click", () => {
    overlay.style = "display: block";
});

closeModal.addEventListener("click", () => {
    overlay.style = "display: none";
});