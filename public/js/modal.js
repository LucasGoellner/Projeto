
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
});

//Modal logic
const container = document.querySelector('.container');
const modalTriggers = document.querySelectorAll('.modal-trigger, .modal-close');
modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', toggleModal);
});

function toggleModal(event) {
    container.classList.toggle('blur');

    const clickedElement = event.target;
    const targetModal = clickedElement.getAttribute('data-target');
    const target = document.querySelector('.' + targetModal);
    target.classList.toggle('visible');
};

function manualToggleModal(modal) {
    container.classList.toggle('blur');
    document.querySelector(modal).classList.toggle('visible');
};

//Site Nav

